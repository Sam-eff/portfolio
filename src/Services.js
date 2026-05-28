const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, '');
const apiRoot = apiBaseUrl ? `${apiBaseUrl}/api` : '/api';

const request = async (endpoint, options = {}) => {
  const response = await fetch(`${apiRoot}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  if (response.status === 204) return null;

  return response.json();
};

export const blogAPI = {
  getAllPosts: () => request('/blog/'),
  getFeaturedPosts: () => request('/blog/featured/'),
  getPostBySlug: (slug) => request(`/blog/${slug}/`),
};

export const contactAPI = {
  submitMessage: (data) => request('/contact/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

export const projectAPI = {
  getAllProjects: () => request('/projects/'),
  getFeaturedProjects: () => request('/projects/featured/'),
};

export const subscribeAPI = {
  subscribe: (data) => request('/subscribe/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

export default request;
