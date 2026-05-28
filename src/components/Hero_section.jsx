import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownToLine, ArrowRight } from 'lucide-react';
import { siGithub, siWhatsapp} from 'simple-icons';

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Digital Craftsman',
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1600);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 35 : 90);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <span>
      {text}
      <span className="animate-blink ml-0.5 text-[var(--brand-cyan)]">|</span>
    </span>
  );
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle static glow — one place only */}
      <div className="hero-glow" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Availability badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              borderColor: 'rgba(0,229,255,0.25)',
              background: 'rgba(0,229,255,0.06)',
              color: 'var(--brand-cyan)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)] animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...fadeUp(0.1)}>
          <p className="text-[var(--text-secondary)] text-lg mb-3 font-medium">Hey, I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6">
            <span className="text-gradient">Samuel Effiong</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl md:text-2xl font-light text-[var(--text-secondary)] h-9 mb-8"
        >
          <Typewriter />
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          I build web applications that work well and feel good to use — handling everything from the database and API layer to the interface people interact with.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
        >
          <Link to="/portfolio" className="btn-primary">
            View My Work
            <ArrowRight size={15} />
          </Link>
          <a href="/samuel-effiong-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <ArrowDownToLine size={15} />
            View CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.5)} className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/sam-eff"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200 hover:scale-110 transform"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
              <path d={siGithub.path} />
            </svg>
          </a>
          <a
            href="https://wa.me/2349049712857"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200 hover:scale-110 transform"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
              <path d={siWhatsapp.path} />
            </svg>
          </a>
          <a
            href="mailto:sameffie01@gmail.com"
            aria-label="Email"
            className="text-xs text-[var(--text-muted)] hover:text-[var(--brand-cyan)] transition-colors duration-200 font-mono"
          >
            sameffie01@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, var(--brand-cyan), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
