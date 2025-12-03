interface PartnerDetailsProps {
  name: string;
  title: string;
  description: string[];
}

export default function PartnerDetails({ name, title, description }: PartnerDetailsProps) {
  return (
    <div className="w-full space-y-8">
      <div className="relative">
        {/* Decorative background for name */}
        <div className="absolute -inset-4 bg-gradient-to-r from-brand-secondary/10 via-white to-brand-accent/10 rounded-lg transform -skew-y-2"></div>

        {/* Name and title */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
            {name}
          </h2>
          <div className="flex items-center space-x-3">
            <div className="h-0.5 w-12 bg-brand-secondary"></div>
            <p className="text-xl text-brand-secondary font-semibold">{title}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-6 relative">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-secondary/0 via-brand-secondary/25 to-brand-secondary/0 rounded-full"></div>
        {description.map((paragraph, i) => (
          <p key={i} className={`leading-loose pl-6 ${i === 0 ? 'text-lg text-brand-primary font-medium' : 'text-gray-600'}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
