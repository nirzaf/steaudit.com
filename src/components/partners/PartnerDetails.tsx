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
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg transform -skew-y-2"></div>
        
        {/* Name and title */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {name}
          </h2>
          <div className="flex items-center space-x-3">
            <div className="h-0.5 w-12 bg-blue-600"></div>
            <p className="text-xl text-blue-600 font-semibold">{title}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4 relative">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600/0 via-blue-600/20 to-blue-600/0 rounded-full"></div>
        {description.map((paragraph, i) => (
          <p key={i} className="text-gray-600 leading-relaxed pl-6">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
