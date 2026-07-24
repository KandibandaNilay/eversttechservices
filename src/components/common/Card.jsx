import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glass = false,
  padding = 'p-6',
  ...props 
}) => {
  const baseStyles = `rounded-2xl ${padding} transition-all duration-300`;
  
  const hoverStyles = hover 
    ? 'hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-darkBlue/5' 
    : '';
  
  const glassStyles = glass 
    ? 'bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl' 
    : 'bg-white shadow-lg shadow-darkBlue/5 border border-gray-100/50';

  return (
    <motion.div 
      className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;