import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../SEO';
import SectionHeading from '../SectionHeading';
import ProjectCard from '../Project_card';
import { projects, categories } from '../../data/projects';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Portfolio — Samuel Effiong"
        description="Projects built by Samuel Effiong — Full Stack web applications, design systems, and more."
      />

      <div className="section-padding">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Portfolio"
              title="Things I've built"
              description="A selection of projects across full-stack development, design, and web apps."
            />
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
            role="group"
            aria-label="Filter by category"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-${cat.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: 'var(--brand-blue)',
                          color: '#fff',
                          boxShadow: '0 0 16px rgba(0,123,255,0.35)',
                        }
                      : {
                          background: 'var(--bg-card)',
                          border: '1px solid var(--bg-border)',
                          color: 'var(--text-secondary)',
                        }
                  }
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.length === 0 ? (
                <div className="col-span-full text-center py-20 text-[var(--text-muted)] text-sm">
                  No projects in this category yet.
                </div>
              ) : (
                filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Portfolio;