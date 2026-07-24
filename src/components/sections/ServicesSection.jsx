import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  badge,
  className = ''
}) => {
  return (
    <motion.div 
      className={`${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-royalBlue/10 text-royalBlue text-xs font-semibold uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-darkBlue leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;