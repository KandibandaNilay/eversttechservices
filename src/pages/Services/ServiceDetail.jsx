import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowRight, ChevronRight, CheckCircle2, 
  Zap, Layers, Code, Workflow, Cpu
} from 'lucide-react';
import { getServiceBySlug, getRelatedServices } from '../../data/servicesData';

// --- DARK THEME UI HELPERS (matching WebDevelopment) ---
const SectionTitle = ({ title, subtitle, badge, icon }) => (
  <div className="max-w-3xl">
    {badge && (
      <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
        {icon && <span className="w-3.5 h-3.5">{icon}</span>}
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">{title}</h2>
    <p className="text-slate-400 text-lg leading-relaxed font-light">{subtitle}</p>
  </div>
);

const Button = ({ children, variant = 'primary', className = '', href = '#' }) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20",
    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:border-slate-600"
  };
  return (
    <Link to={href} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </Link>
  );
};

// --- MAIN COMPONENT ---
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const relatedServices = getRelatedServices(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0E14] text-slate-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link to="/services" className="text-amber-400 hover:text-amber-300">Back to Services</Link>
        </div>
      </div>
    );
  }

  const accentColors = {
    amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    teal: 'from-teal-500/20 to-cyan-500/20 border-teal-500/30',
    orange: 'from-orange-500/20 to-amber-500/20 border-orange-500/30',
  };
  const accent = service.accent || 'amber';
  const accentClass = accentColors[accent] || accentColors.amber;

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-50">
      
      {/* --- HERO (Dark Theme) --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,166,35,0.08),transparent)]`} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
              <Link to="/" className="hover:text-amber-400">Home</Link>
              <ChevronRight size={14} />
              <Link to="/services" className="hover:text-amber-400">Services</Link>
              <ChevronRight size={14} />
              <span className="text-amber-500">{service.title}</span>
            </div>
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
              {service.shortDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button variant="primary" href="/contact">
                Get Started <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" href="/services">
                All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- OVERVIEW + TECH BANNER --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTitle title="Overview" subtitle={service.description} badge="What we do" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {service.technologies.slice(0, 4).map((tech, i) => (
                <div key={i} className="bg-[#0D1117] border border-slate-800 p-6 rounded-2xl text-center hover:border-amber-500/30 transition-all">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm font-bold text-white">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS & FEATURES --- */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Key Benefits</h3>
              <div className="space-y-4">
                {service.benefits.map((b, i) => (
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
                {service.features.map((f, i) => (
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

      {/* --- PROCESS --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Methodology" subtitle="How we deliver excellence" badge="Process" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {service.process.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-teal-500/30 transition-all">
                <div className="w-10 h-10 mb-4 bg-slate-900 rounded-lg flex items-center justify-center text-teal-400 font-bold">0{i + 1}</div>
                <h4 className="font-bold text-white mb-2">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RELATED SERVICES --- */}
      {relatedServices.length > 0 && (
        <section className="py-24 bg-[#10151C]/40 border-t border-slate-800">
          <div className="container mx-auto px-6">
            <SectionTitle title="Related Capabilities" subtitle="Explore other areas of our expertise" badge="Related" />
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {relatedServices.map((related) => (
                <Link key={related.id} to={`/services/${related.slug}`} className="p-6 rounded-2xl bg-[#0A0E14] border border-slate-800 hover:border-amber-500/50 transition-all block">
                  <div className="text-3xl mb-3">{related.icon}</div>
                  <h3 className="font-bold text-white mb-2">{related.title}</h3>
                  <p className="text-sm text-slate-400">{related.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- CTA --- */}
      <section className="py-24 relative overflow-hidden border-t border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Cpu className="w-12 h-12 text-amber-500 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Let's discuss how our {service.title} services can help your business grow.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}