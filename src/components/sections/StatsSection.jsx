import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Stats = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} delay={index * 0.1} />
      ))}
    </div>
  );
};

const StatItem = ({ value, label, icon, suffix = '', prefix = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      const target = parseInt(value.replace(/,/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          current = target;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100/50 hover:shadow-xl hover:shadow-royalBlue/5 transition-all duration-300 hover:-translate-y-1"
    >
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <div className="text-3xl md:text-4xl font-extrabold text-royalBlue">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-500 mt-1 font-medium">{label}</div>
    </motion.div>
  );
};

export default Stats;