import React from 'react';
import ServicesList from './ServicesList';
import { Service } from '../../types/service';

interface ServicesContainerProps {
  services: Service[];
}

const ServicesContainer: React.FC<ServicesContainerProps> = ({ services }) => {
  return (
    <div className="bg-gradient-to-b from-brand-primary/5 to-[#00204A]/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesList services={services} />
      </div>
    </div>
  );
};

export default ServicesContainer;

