import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './Project_card';
import SectionHeading from './SectionHeading';

const HomeProjects = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="featured-work" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A handful of things I've built recently."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            to="/portfolio"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors duration-150 group"
          >
            View all projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-150" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProjects;
