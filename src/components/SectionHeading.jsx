const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex flex-col gap-4 mb-16 ${alignClass}`}>
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
        {title}
      </h2>
      <div className="accent-line" style={{ alignSelf: align === 'left' ? 'flex-start' : 'center' }} />
      {description && (
        <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
