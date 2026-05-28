import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'Bootstrap 5'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'Django', 'Django REST', 'FastAPI', 'Node.js', 'SQLite', 'PostgreSQL'],
  },
  {
    title: 'DevOps',
    skills: ['Git & GitHub', 'Docker', 'Microsoft Azure',  'Render', 'Railway', 'Cloudflare', 'Vercel', 'Netlify', 'Firebase'],
  },
  {
    title: 'Design & Tools',
    skills: ['Figma', 'Canva', 'Prototyping', 'Vite', 'Responsive Design'],
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp()}>
          <SectionHeading
            eyebrow="Expertise"
            title="Skills & Technologies"
            description="Tools I’ve used to build and ship real products, from UI to production API."
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              {...fadeInUp(catIdx * 0.1)}
              className="card p-6 hover:border-[rgba(0,229,255,0.2)] transition-colors duration-300"
            >
              {/* Category label */}
              <p className="eyebrow mb-5">{category.title}</p>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + skillIdx * 0.04 }}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 cursor-default"
                    style={{
                      background: 'var(--bg-base)',
                      border: '1px solid var(--bg-border)',
                      color: 'var(--text-secondary)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)';
                      e.currentTarget.style.color = 'var(--brand-cyan)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--bg-border)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          {...fadeInUp(0.4)}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-12 overflow-hidden rounded-xl"
          style={{ border: '1px solid var(--bg-border)' }}
        >
          {[
            { value: '3+', label: 'Years of Experience' },
            { value: '10+', label: 'Projects Shipped' },
            { value: '5+', label: 'Technologies' },
            { value: '100%', label: 'Remote-Ready' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: 'var(--bg-base)' }}
            >
              <span className="text-3xl font-bold text-gradient mb-1">{stat.value}</span>
              <span className="text-xs text-[var(--text-muted)]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
