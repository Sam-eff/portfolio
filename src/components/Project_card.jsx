import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const techs = Array.isArray(project.technologies)
    ? project.technologies.filter(Boolean)
    : project.technologies?.split(',').map((t) => t.trim()).filter(Boolean) || [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group card flex flex-col overflow-hidden hover:border-[rgba(0,229,255,0.2)] transition-all duration-300"
    >
      {/* Image or Placeholder area */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.color || 'from-[#007BFF] to-[#00E5FF]'} overflow-hidden`}
      >
        {project.img || project.image ? (
          <img
            src={project.img || project.image}
            alt={project.title}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-transform duration-500 group-hover:scale-105">
            {/* Abstract geometric decoration fallback */}
            <div className="w-32 h-32 rounded-full border-2 border-white" />
            <div className="absolute w-20 h-20 rounded-full border border-white" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />

        {/* Category badge */}
        {project.category && (
          <span
            className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider"
            style={{
              background: 'rgba(6,13,26,0.7)',
              color: 'var(--brand-cyan)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(0,229,255,0.2)',
            }}
          >
            {project.category}
          </span>
        )}

        {/* Featured badge */}
        {project.featured && (
          <span
            className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider"
            style={{
              background: 'rgba(0,123,255,0.3)',
              color: '#fff',
              border: '1px solid rgba(0,123,255,0.4)',
              backdropFilter: 'blur(4px)',
            }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-gradient transition-all duration-200">
          {project.title}
        </h3>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {techs.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-medium"
              style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--bg-border)',
                color: 'var(--text-muted)',
              }}
            >
              {tech}
            </span>
          ))}
          {techs.length > 5 && (
            <span
              className="px-2 py-0.5 rounded text-[10px] font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              +{techs.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        {(project.github_url || project.live_url) && (
          <div
            className="flex items-center gap-3 pt-3"
            style={{ borderTop: '1px solid var(--bg-border)' }}
          >
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
              >
                <Github size={13} />
                Code
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex items-center gap-1.5 text-xs text-[var(--brand-cyan)] hover:opacity-80 transition-opacity duration-150 ml-auto"
              >
                Live Demo
                <ExternalLink size={11} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
