import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg-base)]/90 backdrop-blur-md border-b border-[var(--bg-border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Samuel Effiong — Home">
            <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-[var(--bg-border)] group-hover:ring-[var(--brand-cyan)] transition-all duration-200">
              <img src="/logo.png" alt="SE" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-gradient transition-all duration-200">
              SamEffie
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-px"
                      style={{ background: 'var(--brand-cyan)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/samuel-effiong-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-ghost text-xs py-2 px-4"
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
              style={{
                background: 'var(--bg-card)',
                borderLeft: '1px solid var(--bg-border)',
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--bg-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)]">Navigation</span>
                <button
                  className="p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                          isActive
                            ? 'text-[var(--text-primary)] bg-[var(--bg-border)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {isActive && (
                          <span className="w-1 h-4 rounded-full" style={{ background: 'var(--brand-cyan)' }} />
                        )}
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-[var(--bg-border)]">
                <a
                  href="/samuel-effiong-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full justify-center text-sm"
                >
                  View Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
