import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { siX, siWhatsapp } from 'simple-icons';
import SEO from '../SEO';
import SectionHeading from '../SectionHeading';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sameffie01@gmail.com', href: 'mailto:sameffie01@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 904 971 2857', href: 'tel:+2349049712857' },
  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: null },
];

const socialLinks = [
  { label: 'WhatsApp', icon: siWhatsapp, href: 'https://wa.me/2349049712857', color: '#25D366' },
  { label: 'X', icon: siX, href: 'https://x.com/samueleff', color: '#fff' },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    if (!isEmailConfigured) {
      setStatusMessage('The contact form is not configured yet. Please email me directly.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setStatusMessage('');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatusMessage('Something went wrong. Please try again or email me directly.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <SEO
        title="Contact — Samuel Effiong"
        description="Get in touch with Samuel Effiong — available for freelance projects and full-time roles."
      />

      <div className="section-padding">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div {...fadeInUp()}>
            <SectionHeading
              eyebrow="Contact"
              title="Let's work together"
              description="Have a project or just want to say hello? My inbox is always open."
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* ── Form ── */}
            <motion.div {...fadeInUp(0.1)}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-10 flex flex-col items-center justify-center text-center gap-4 h-full min-h-[360px]"
                >
                  <CheckCircle size={44} className="text-green-400" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Message sent!</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Thanks for reaching out — I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card p-8 flex flex-col gap-5"
                >
                  <h3 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    <Send size={16} className="text-[var(--brand-cyan)]" />
                    Send a message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-medium text-[var(--text-secondary)]">
                        Name <span className="text-[var(--brand-cyan)]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-medium text-[var(--text-secondary)]">
                        Email <span className="text-[var(--brand-cyan)]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-medium text-[var(--text-secondary)]">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="form-input"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-medium text-[var(--text-secondary)]">
                      Message <span className="text-[var(--brand-cyan)]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Error state */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-xs text-red-400"
                      role="alert"
                      aria-live="polite"
                    >
                      <AlertCircle size={13} />
                      {statusMessage}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* ── Info column ── */}
            <motion.div {...fadeInUp(0.2)} className="flex flex-col gap-5">

              {/* Contact info cards */}
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="card p-5 flex items-start gap-4 hover:border-[rgba(0,229,255,0.2)] transition-colors duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: 'rgba(0,123,255,0.1)',
                      border: '1px solid rgba(0,123,255,0.2)',
                    }}
                  >
                    <info.icon size={16} style={{ color: 'var(--brand-cyan)' }} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--brand-cyan)] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[var(--text-primary)]">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Availability card */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
                className="card p-5"
              >
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Availability</h4>
                <div className="flex flex-col gap-2.5 text-xs">
                  {[
                    { label: 'Status', value: 'Available', highlight: true },
                    { label: 'Response time', value: 'Within 24 hours' },
                    { label: 'Time zone', value: 'WAT (UTC+1)' },
                    { label: 'Open to', value: 'Freelance & Full-time' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <span className="text-[var(--text-muted)]">{row.label}</span>
                      <span className={`font-medium flex items-center gap-1.5 ${row.highlight ? 'text-green-400' : 'text-[var(--text-secondary)]'}`}>
                        {row.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        )}
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social quick connect */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 }}
                className="card p-5"
              >
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Quick connect</h4>
                <p className="text-xs text-[var(--text-muted)] mb-4">Prefer a faster reply? Reach out directly.</p>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150"
                      style={{
                        background: 'var(--bg-base)',
                        border: '1px solid var(--bg-border)',
                        color: 'var(--text-secondary)',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--bg-border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                        <path d={s.icon.path} />
                      </svg>
                      {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
