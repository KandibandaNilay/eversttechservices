import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Briefcase } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export default function Services() {
  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen py-20 font-sans">
      
      {/* --- HERO --- */}
      <section className="container mx-auto px-6 mb-16 pt-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Our <span className="text-amber-500">Capabilities</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Explore our complete range of 18+ enterprise technology solutions.
        </p>
      </section>

      {/* --- SERVICES GRID (Optimized for many items) --- */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }} // Faster stagger for many items
              className="h-full"
            >
              {/* Card wrapper */}
              <div className="p-6 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-amber-500/50 transition-all h-full flex flex-col hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                  {service.shortDesc}
                </p>
                
                {/* USE <Link> HERE - This fixes your navigation error */}
                <Link 
                  to={`/services/${service.slug}`} 
                  className="inline-flex items-center text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                >
                  View Details <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* --- BOTTOM CTA --- */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-12 rounded-3xl border border-amber-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
          <Link to="/contact" className="inline-block bg-amber-500 text-slate-950 px-8 py-3 rounded-lg font-bold">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}