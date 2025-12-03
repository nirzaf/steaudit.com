'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '../../types/service';

interface ServicesListProps {
  services: Service[];
}

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          {...service}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServicesList;
