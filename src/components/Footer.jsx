import { Link } from 'react-router-dom';
import { siGithub, siX } from 'simple-icons';
import { Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--bg-border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-7 h-7 rounded-md overflow-hidden ring-1 ring-[var(--bg-border)] group-hover:ring-[var(--brand-cyan)] transition-all duration-200">
                <img src="/logo.png" alt="SE" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-semibold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                SamEffie
              </span>
            </Link>
            <p className="text-xs text-[var(--text-muted)] max-w-xs">
              Building thoughtful digital products from Lagos, Nigeria.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sam-eff"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
                <path d={siGithub.path} />
              </svg>
            </a>
            <a
              href="https://x.com/samueleff"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                <path d={siX.path} />
              </svg>
            </a>
            <a
              href="mailto:sameffie01@gmail.com"
              aria-label="Email"
              className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-8 pt-6 text-xs text-[var(--text-muted)]"
          style={{ borderTop: '1px solid var(--bg-border)' }}
        >
          <p>© {year} Samuel Effiong. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-[var(--text-primary)] transition-colors duration-150"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
