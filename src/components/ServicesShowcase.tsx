'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Clock, Users, BarChart2, PieChart } from 'lucide-react';
import Lottie from 'lottie-react';

// Import service icons animations
import financialStatementAnimation from '../assets/animations/financial-statement.json';
import consultingAnimation from '../assets/animations/consulting.json';
import auditAnimation from '../assets/animations/audit.json';
import accountingAnimation from '../assets/animations/accounting.json';
import budgetingAnimation from '../assets/animations/budgeting.json';
import payrollAnimation from '../assets/animations/payroll.json';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define service data
const services = [
  {
    id: 'external-audit',
    title: 'External Audit',
    description: 'Comprehensive audit services ensuring compliance and accuracy.',
    icon: FileText,
    animation: auditAnimation,
    color: '#3B82F6',
    gradient: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/30'
  },
  {
    id: 'accounting-software',
    title: 'Real Time Accounting',
    description: 'Modern cloud-based solutions for real-time financial tracking.',
    icon: Clock,
    animation: accountingAnimation,
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-purple-600',
    shadow: 'shadow-purple-500/30'
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Expert guidance for business growth and optimization.',
    icon: Users,
    animation: consultingAnimation,
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-cyan-600',
    shadow: 'shadow-cyan-500/30'
  },
  {
    id: 'financial-statements',
    title: 'Financial Statements',
    description: 'Detailed financial reporting and analysis.',
    icon: BarChart2,
    animation: financialStatementAnimation,
    color: '#10B981',
    gradient: 'from-green-500 to-green-600',
    shadow: 'shadow-green-500/30'
  },
  {
    id: 'budgeting',
    title: 'Budgeting',
    description: 'Strategic budget planning and management.',
    icon: PieChart,
    animation: budgetingAnimation,
    color: '#F59E0B',
    gradient: 'from-orange-500 to-orange-600',
    shadow: 'shadow-orange-500/30'
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    description: 'Comprehensive payroll management solutions.',
    icon: Users,
    animation: payrollAnimation,
    color: '#EF4444',
    gradient: 'from-red-500 to-red-600',
    shadow: 'shadow-red-500/30'
  }
];

export default function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [activeService, setActiveService] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Set up the orbital animation effect
  useEffect(() => {
    if (!containerRef.current || !mounted) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    });

    // Create orbital rotation animation
    tl.to('.orbital-path', {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1
    });

    // Animate each service item when in view
    if (isInView) {
      controls.start('visible');
    }

    // Auto-rotate through services
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [isInView, controls, mounted]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring' as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Exceptional Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive range of professional services
          </p>
        </motion.div>

        {/* Interactive Services Showcase */}
        <div ref={containerRef} className="relative h-[600px] mb-12">
          {/* Central Orbital Path */}
          <div className="orbital-path absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-dashed border-white/10 rotate-0">
            {mounted && services.map((service, index) => {
              // Calculate position on the circle
              const angle = (index * (360 / services.length) * Math.PI) / 180;
              const x = Math.round(250 * Math.cos(angle) * 100) / 100;
              const y = Math.round(250 * Math.sin(angle) * 100) / 100;

              return (
                <motion.div
                  key={service.id}
                  className={`service-item absolute w-20 h-20 -ml-10 -mt-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${activeService === index ? 'scale-125 z-20' : 'scale-100 z-10'}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    background: `linear-gradient(135deg, ${service.color}80, ${service.color}40)`,
                    boxShadow: activeService === index ? `0 0 30px ${service.color}` : 'none'
                  }}
                  onClick={() => setActiveService(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1
                  }}
                >
                  {service.icon && <service.icon className="w-8 h-8 text-white" />}
                </motion.div>
              );
            })}
          </div>

          {/* Central Service Display */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              boxShadow: `0 0 60px ${services[activeService].color}50`
            }}
            transition={{ duration: 0.5 }}
          >
            {/* STE Services Text Overlay with Advanced Animation */}
            <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden">
              {/* Glowing background circle */}
              <motion.div 
                className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                  borderWidth: ['0px', '2px', '0px'],
                  borderColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0)'],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
              
              {/* Rotating outer ring */}
              <motion.div 
                className="absolute w-56 h-56 border-2 border-dashed border-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main text container */}
              <motion.div
                className="relative z-10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  boxShadow: [
                    '0 0 0 rgba(59, 130, 246, 0)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 0 rgba(59, 130, 246, 0)'
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
              >
                {/* STE text with letter animation */}
                <div className="flex justify-center items-center space-x-1">
                  {['S', 'T', 'E'].map((letter, i) => (
                    <motion.span 
                      key={i}
                      className="text-3xl font-bold"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        textShadow: [
                          '0 0 5px rgba(255,255,255,0.5)', 
                          '0 0 20px rgba(59, 130, 246, 0.8)', 
                          '0 0 5px rgba(255,255,255,0.5)'
                        ]
                      }}
                      transition={{ 
                        delay: i * 0.2,
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1
                      }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                        {letter}
                      </span>
                    </motion.span>
                  ))}
                </div>
                
                {/* SERVICES text with shimmer effect */}
                <motion.div 
                  className="relative mt-1 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="text-lg font-medium tracking-widest text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                      SERVICES
                    </span>
                  </h4>
                  
                  {/* Shimmer effect */}
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      repeatDelay: 1,
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Animation Layer */}
            <div className="w-full h-full flex items-center justify-center p-4 relative z-0">
              <Lottie 
                animationData={services[activeService].animation} 
                loop={true}
                style={{ width: '100%', height: '100%', opacity: 0.9 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Service Details */}
        <motion.div
          key={services[activeService].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-lg bg-white/10 ${services[activeService].shadow}`}
        >
          <h3 className={`text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${services[activeService].gradient}`}>
            {services[activeService].title}
          </h3>
          <p className="text-gray-300 text-lg">
            {services[activeService].description}
          </p>
        </motion.div>

        {/* Service Selection Pills */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              variants={itemVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeService === index 
                  ? `bg-gradient-to-r ${service.gradient} text-white`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              onClick={() => setActiveService(index)}
            >
              {service.title}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
