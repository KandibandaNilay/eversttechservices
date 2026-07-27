import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

// Reusable UI Components
const SectionTitle = ({ title, subtitle, badge }) => (
  <div className="max-w-3xl">
    {badge && (
      <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">{title}</h2>
    <p className="text-slate-400 text-lg leading-relaxed font-light">{subtitle}</p>
  </div>
);

const Button = ({ children, variant = 'primary', className = '', href = '#' }) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200";
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg",
    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800"
  };
  return <a href={href} className={`${base} ${variants[variant]} ${className}`}>{children}</a>;
};

export default function ServiceTemplate({ title, description, heroContent, capabilities, processSteps, techPartners }) {
  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-slate-800">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div>
            <h1 className="text-5xl font-extrabold text-white mb-6">{title}</h1>
            <p className="text-lg text-slate-400 mb-8">{description}</p>
            <Button href="/contact">Discuss Your Project</Button>
          </motion.div>
          <div className="hidden lg:block">{heroContent}</div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle title="Core Capabilities" badge="Solutions" />
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {capabilities.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#0D1117] border border-slate-800 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${accentMap[item.accent]}`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <div className="py-12 border-y border-slate-800 bg-[#06090D] text-center text-slate-500 font-mono text-xs uppercase">
        Expertise in: {techPartners.join(' • ')}
      </div>
    </div>
  );
}