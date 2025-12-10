'use client';

import ServiceCard from './ServiceCard';
import { Service } from '../../types/service';
import { useLocale } from '../LocaleProvider';

interface ServicesListProps {
  services: Array<Omit<Service, 'icon'>>;
}

const ServicesList = ({ services }: ServicesListProps) => {
  const { locale } = useLocale();

  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          title={locale === 'ar' ? service.titleAr || service.title : service.title}
          description={locale === 'ar' ? service.descriptionAr || service.description : service.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServicesList;
