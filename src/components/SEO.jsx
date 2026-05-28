import { useEffect } from 'react';

const trimTrailingSlash = (value) => value.replace(/\/+$/, '');

const setMeta = (attribute, key, content) => {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const setCanonical = (href) => {
  if (!href) return;

  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const SEO = ({ 
  title = 'Samuel Effiong - Full Stack Developer & UI/UX Designer',
  description = 'Portfolio of Samuel Effiong, a Full Stack Developer and UI/UX Designer specializing in React, Django, and modern web technologies.',
  keywords = 'Samuel Effiong, Full Stack Developer, UI/UX Designer, React Developer, Django Developer, Web Development, Portfolio',
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website'
}) => {
  const siteUrl = trimTrailingSlash(import.meta.env.VITE_SITE_URL || 'https://samueleffiong.com');
  const canonicalUrl = url || siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  useEffect(() => {
    document.title = title;

    setMeta('name', 'title', title);
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', 'Samuel Effiong');
    setMeta('name', 'robots', 'index, follow');
    setMeta('name', 'language', 'English');

    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', fullImageUrl);
    setMeta('property', 'og:site_name', 'Samuel Effiong Portfolio');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', canonicalUrl);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullImageUrl);
    setMeta('name', 'twitter:creator', '@samueleff');

    setCanonical(canonicalUrl);
  }, [canonicalUrl, description, fullImageUrl, keywords, title, type]);

  return null;
};

export default SEO;
