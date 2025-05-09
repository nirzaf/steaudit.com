import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import ServicesShowcase from './components/ServicesShowcase';
import About from './components/About';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import MissionVision from './components/MissionVision';
import Performance from './components/Performance';
import PrimeGlobal from './components/PrimeGlobal';
import SEO from './components/SEO';
import { Toaster } from 'react-hot-toast';

function HomePage() {
  return (
    <div className="bg-site-bg">
      <SEO page="home" />
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

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-site-bg">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;