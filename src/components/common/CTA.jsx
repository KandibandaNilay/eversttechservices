import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const CTA = ({ title, subtitle, buttonText = 'Get Started', buttonLink = '/contact', variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gradient-to-br from-darkBlue via-royalBlue to-cyan',
    light: 'bg-gradient-to-br from-royalBlue/5 to-cyan/5 border border-royalBlue/10',
  };

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <motion.div 
        className={`container mx-auto px-4 rounded-3xl ${variants[variant]} p-8 md:p-12 lg:p-16 relative overflow-hidden`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {variant === 'default' && (
          <>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent rounded-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-white/5 to-transparent" />
            <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
          </>
        )}
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold ${variant === 'default' ? 'text-white' : 'text-darkBlue'} leading-tight`}>
              {title}
            </h3>
            {subtitle && (
              <p className={`mt-3 text-base md:text-lg ${variant === 'default' ? 'text-white/80' : 'text-gray-600'} max-w-xl`}>
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex-shrink-0">
            {variant === 'default' ? (
              <Button to={buttonLink} variant="secondary" size="lg" className="shadow-xl">
                {buttonText}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            ) : (
              <Button to={buttonLink} variant="primary" size="lg">
                {buttonText}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;