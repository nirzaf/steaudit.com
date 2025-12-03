import { Award, Star } from 'lucide-react';

interface PartnerImageProps {
  image: string;
  name: string;
}

export default function PartnerImage({ image, name }: PartnerImageProps) {
  return (
    <div className="relative group">
      {/* Decorative corner elements */}
      <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-brand-secondary rounded-tl-lg"></div>
      <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-brand-secondary rounded-tr-lg"></div>
      <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-brand-secondary rounded-bl-lg"></div>
      <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-brand-secondary rounded-br-lg"></div>
      
      {/* Image container */}
      <div className="relative rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
        <img
          src={image}
          alt={name}
          className="w-full object-cover aspect-[3/4] rounded-lg shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Award className="w-12 h-12 text-brand-secondary" />
      </div>
      <div className="absolute -bottom-6 -left-6 transform -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Star className="w-12 h-12 text-brand-secondary" />
      </div>
    </div>
  );
}
