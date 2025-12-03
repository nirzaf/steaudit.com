import About from '@/components/About';
import Hero from '@/components/Hero';
import MissionVision from '@/components/MissionVision';
import Performance from '@/components/Performance';
import PrimeGlobal from '@/components/PrimeGlobal';
import Services from '@/components/Services';
import ServicesShowcase from '@/components/ServicesShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <WhyChooseUs />
      <PrimeGlobal />
      <Performance />
      <ServicesShowcase />
      <Services />
      <MissionVision />
      <About />
    </div>
  );
}
