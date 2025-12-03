'use client';

import PartnerImage from './PartnerImage';
import PartnerDetails from './PartnerDetails';

interface PartnerCardProps {
  partner: {
    name: string;
    title: string;
    image: string;
    description: string[];
  };
  index: number;
}

export default function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <div 
      className={`flex flex-col ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-16 items-center`}
    >
      <div className="w-full md:w-1/3">
        <PartnerImage image={partner.image} name={partner.name} />
      </div>

      <div className="w-full md:w-2/3">
        <PartnerDetails 
          name={partner.name}
          title={partner.title}
          description={partner.description}
        />
      </div>
    </div>
  );
}
