import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2, Zap } from 'lucide-react';

const ServiceLayout = ({ 
  title, 
  subtitle, 
  icon, 
  description, 
  benefits, 
  features, 
  technologies, 
  process, 
  slug,
  accent = 'amber'
}) => {
  const accentColors = {
    amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    teal: 'from-teal-500/20 to-cyan-500/20 border-teal-500/30',
    orange: 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
  };
  const accentClass = accentColors[accent] || accentColors.amber;

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-50">
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,166,35,0.08),transparent)]`} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
            <Link to="/" className="hover:text-amber-400">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-amber-400">Services</Link>
            <ChevronRight size={14} />
            <span className="text-amber-500">{title}</span>
          </div>
          <div className="text-6xl mb-6">{icon}</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Overview</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">{description}</p>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 rounded-lg font-bold text-slate-950 hover:opacity-90">
                  Get Started <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {technologies.slice(0, 4).map((tech, i) => (
                <div key={i} className="bg-[#0D1117] border border-slate-800 p-6 rounded-2xl text-center hover:border-amber-500/30 transition-all">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm font-bold text-white">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#0D1117] p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0" />
                    <span className="text-slate-300 font-light">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Core Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#0D1117] border border-slate-800 flex items-center gap-3">
                    <Zap className="text-orange-400 w-5 h-5 shrink-0" />
                    <span className="font-semibold text-white text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 text-center">Our Methodology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {process.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-teal-500/30 transition-all">
                <div className="w-10 h-10 mb-4 bg-slate-900 rounded-lg flex items-center justify-center text-teal-400 font-bold">0{i + 1}</div>
                <h4 className="font-bold text-white mb-2">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Let's discuss how our {title} services can help your business grow.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 rounded-lg font-bold text-slate-950 hover:opacity-90">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;