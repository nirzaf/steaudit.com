import ServicesList from './ServicesList';
import { Service } from '../../types/service';

type DisplayService = Omit<Service, 'icon'>;

interface ServicesContainerProps {
  services: DisplayService[];
}

const ServicesContainer = ({ services }: ServicesContainerProps) => {
  return (
    <div className="bg-gradient-to-b from-brand-neutral/70 via-white to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesList services={services} />
      </div>
    </div>
  );
};

export default ServicesContainer;
