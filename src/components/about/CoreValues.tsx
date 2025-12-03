const values = [
  { name: 'Integrity', iconType: 'shield', description: 'We exhibit fairness, honesty, and ethical behavior in our service to all our clients.' },
  { name: 'Objectivity', iconType: 'compass', description: 'We perform duties in an unbiased manner based on informed analysis and clear understanding.' },
  { name: 'Quality', iconType: 'star', description: 'We provide accurate reports and timely, relevant recommendations.' },
  { name: 'Community', iconType: 'users', description: 'We collaborate with colleagues and clients to improve stakeholder effectiveness and efficiency.' },
  { name: 'Visionary', iconType: 'eye', description: 'We develop creative and innovative approaches to key issues facing our clients.' },
  { name: 'Trust & Confidentiality', iconType: 'lock', description: 'We maintain the highest standards of confidentiality and build lasting relationships on integrity.' }
];

const renderValueIcon = (type: string) => {
  switch (type) {
    case 'shield':
      return (
        <svg className="w-10 h-10 text-brand-secondary draw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'compass':
      return (
        <svg className="w-10 h-10 text-brand-secondary draw-icon spin-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16 8 14 14 8 16 10 10 16 8" />
        </svg>
      );
    case 'star':
      return (
        <svg className="w-10 h-10 text-brand-secondary draw-icon group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a.53.53 0 0 0 .399.289l5.161.75a.53.53 0 0 1 .293.905l-3.736 3.638a.53.53 0 0 0-.153.465l.882 5.139a.53.53 0 0 1-.771.56l-4.618-2.428a.53.53 0 0 0-.492 0l-4.618 2.428a.53.53 0 0 1-.771-.56l.882-5.139a.53.53 0 0 0-.153-.465L1.673 8.917a.53.53 0 0 1 .293-.905l5.161-.75a.53.53 0 0 0 .399-.289l2.31-4.679Z" />
        </svg>
      );
    case 'users':
      return (
        <svg className="w-10 h-10 text-brand-secondary draw-icon group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'eye':
      return (
        <svg className="w-10 h-10 text-brand-secondary draw-icon blink-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'lock':
      return (
        <svg className="w-10 h-10 text-brand-secondary draw-icon group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    default:
      return null;
  }
};

export default function CoreValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-brand-primary">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.name}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-brand-secondary/40"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/15 transition-colors duration-300">
                  {renderValueIcon(value.iconType)}
                </div>
                <h3 className="text-2xl font-bold text-brand-primary">{value.name}</h3>
                <p className="text-brand-primary/70 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
