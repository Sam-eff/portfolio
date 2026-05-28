import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Download, Code2, Palette, Zap, Users, GraduationCap, Award } from 'lucide-react';
import SEO from '../SEO';
import SectionHeading from '../SectionHeading';

const education = [
  { title: 'Diploma in Web Design', institution: 'HiiT ICT Institute', period: '2022' },
  { title: 'Certificate in Python Programming', institution: 'HiiT ICT Institute', period: '2022' },
];

const certifications = [
  'Diploma in Web Design',
  'Certificate in Python Programming',
  'Certificate in Django Framework',
  'Certified UI/UX Designer',
];

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Dev',
    desc: 'React frontends to Django backends — I own the full product.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Figma-first design process with a focus on usability and aesthetics.',
  },
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Fast load times, clean code, optimized assets — no shortcuts.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Comfortable working in cross-functional teams or solo.',
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="About — Samuel Effiong"
        description="Learn more about Samuel Effiong, a Full Stack Developer and UI/UX Designer based in Lagos, Nigeria."
        url="https://samueleffiong.com/about"
      />

      <div className="section-padding">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div {...fadeInUp()}>
            <SectionHeading
              eyebrow="About Me"
              title="The person behind the code"
              description="I’m Samuel, a Full Stack Developer and UI/UX Designer based in Lagos."
            />
          </motion.div>

          {/* Bio + Highlights */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">

            {/* Left: Bio text */}
            <motion.div {...fadeInUp(0.1)} className="flex flex-col gap-6">
              <div className="space-y-4 text-[var(--text-secondary)] text-base leading-relaxed">
                <p>
                  I got into tech through web design, but what started as designing interfaces quickly turned into wanting to understand how everything worked underneath. That curiosity pushed me deeper into development, and over time I found myself enjoying both sides of the process building solid backend systems with Django and creating clean, intuitive frontend experiences with React.
                </p>
                <p>
                  I care a lot about usability. I think the best software feels effortless to use. When an interface is done right, people focus on what they’re trying to achieve not on figuring out the product itself. That mindset shapes how I approach both design and development.
                </p>
                <p>
                  Most of my time now goes into building web apps, refining UI details, and improving the structure behind the scenes so products feel fast, reliable, and easy to use.
                </p>
                <p>
                  Outside of coding, I enjoy exploring design systems, experimenting with side projects, keeping up with the direction of the modern web, and occasionally working on hardware troubleshooting and repair.
                </p>
              </div>

              <a
                href="/samuel-effiong-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
              >
                <Download size={15} />
                View Resume
              </a>

              {/* Education */}
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-5">
                  <GraduationCap size={16} className="text-[var(--brand-cyan)]" />
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                    Education
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {education.map((item, i) => (
                    <motion.div
                      key={i}
                      {...fadeInUp(0.2 + i * 0.1)}
                      className="flex items-start justify-between gap-4 p-4 card"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.institution}</p>
                      </div>
                      <span
                        className="text-[10px] font-medium px-2 py-1 rounded whitespace-nowrap"
                        style={{
                          background: 'var(--bg-base)',
                          border: '1px solid var(--bg-border)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {item.period}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Award size={16} className="text-[var(--brand-cyan)]" />
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                    Certifications
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {certifications.map((item, i) => (
                    <motion.div
                      key={i}
                      {...fadeInUp(0.3 + i * 0.08)}
                      className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: 'var(--brand-cyan)' }}
                      />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Highlight cards */}
            <motion.div {...fadeInUp(0.15)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="card p-5 flex flex-col gap-3 hover:border-[rgba(0,229,255,0.2)] transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'rgba(0,123,255,0.1)',
                      border: '1px solid rgba(0,123,255,0.2)',
                    }}
                  >
                    <item.icon size={17} style={{ color: 'var(--brand-cyan)' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            {...fadeInUp(0.4)}
            className="card p-10 text-center flex flex-col items-center gap-5"
            style={{ borderColor: 'rgba(0,229,255,0.1)' }}
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Let's build something great together
            </h3>
            <p className="text-[var(--text-secondary)] text-sm max-w-md">
              I'm always open to new projects and opportunities. Reach out, and let's talk.
            </p>
            <button onClick={() => navigate('/contact')} className="btn-primary">
              Get in touch
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;