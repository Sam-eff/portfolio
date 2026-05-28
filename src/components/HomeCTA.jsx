import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--bg-border)' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="accent-line" />
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-snug">
            Have a project in mind?<br />
            <span className="text-gradient">Let's build it together.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-md">
            I'm open to freelance work and full-time roles. If you have something
            interesting to work on, I'd love to hear about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary">
              <Mail size={15} />
              Get in touch
            </Link>
            <Link to="/about" className="btn-ghost">
              More about me
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
