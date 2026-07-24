import React from 'react';
import { motion } from 'framer-motion';

const PageBanner = ({ title, subtitle, breadcrumbs = [], className = '', gradient = true }) => {
  return (
    <section className={`relative overflow-hidden py-20 md:py-28 bg-white ${className}`}>
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-cyan-50/30 to-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-100/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-royalBlue/5 to-transparent" />
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-cyan-100/20 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-royalBlue-100/20 blur-3xl" />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {breadcrumbs.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <a href="/" className="hover:text-royalBlue transition">Home</a>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span className="text-gray-300">/</span>
                  {crumb.url ? (
                    <a href={crumb.url} className="hover:text-royalBlue transition">{crumb.label}</a>
                  ) : (
                    <span className="text-darkBlue font-medium">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkBlue mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;