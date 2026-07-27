import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, ShoppingCart, Layout, Database, 
  GitMerge, Monitor, ArrowRight, ChevronRight, 
  CheckCircle2, Code2, Zap, Workflow,
  Cpu, Box, Code
} from 'lucide-react';

// --- INLINED REUSABLE UI COMPONENTS ---
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
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20",
    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:border-slate-600"
  };
  return (
    <a href={href} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </a>
  );
};

const SectionDivider = () => (
  <div className="relative h-px w-full">
    <svg viewBox="0 0 1200 2" preserveAspectRatio="none" className="w-full h-px">
      <line x1="0" y1="1" x2="1200" y2="1" stroke="url(#divider-grad)" strokeWidth="1" />
      <defs>
        <linearGradient id="divider-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0" />
          <stop offset="20%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#F5A623" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#1E293B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// --- MAIN SOFTWARE DEVELOPMENT COMPONENT ---
export default function SoftwareDevelopment() {
  const capabilities = [
    {
      icon: <Server className="w-6 h-6" />, title: 'Enterprise Backend Engineering', accent: 'amber',
      desc: 'Architecting highly scalable, fault-tolerant microservices using robust frameworks like Java and Spring Boot to power your core operations.'
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />, title: 'Complex Commerce & Pricing', accent: 'teal',
      desc: 'Building sophisticated e-commerce infrastructures, including dynamic cart calculations, custom pricing engines, and approval workflows.'
    },
    {
      icon: <Layout className="w-6 h-6" />, title: 'Frontend Architecture', accent: 'orange',
      desc: 'Delivering lightning-fast, responsive user interfaces using modern libraries like React and Next.js, optimized for seamless user experiences.'
    },
    {
      icon: <Database className="w-6 h-6" />, title: 'Financial & Tax Integration', accent: 'amber',
      desc: 'Engineering precise, localized compliance systems handling complex multi-region tax structures, including automated GST/VAT reconciliation.'
    },
    {
      icon: <GitMerge className="w-6 h-6" />, title: 'API & Systems Integration', accent: 'teal',
      desc: 'Connecting disparate legacy software, third-party catalogue services, and modern SaaS platforms into one unified, cohesive ecosystem.'
    },
    {
      icon: <Monitor className="w-6 h-6" />, title: 'Legacy Modernization', accent: 'orange',
      desc: 'Refactoring outdated monolithic applications into agile, cloud-native microservices with zero operational downtime.'
    }
  ];

  const processSteps = [
    { title: 'Requirements & Architecture', desc: 'Defining precise business logic, database schemas, and API contracts.', icon: <Workflow /> },
    { title: 'Agile Engineering', desc: 'Executing transparent, sprint-based development utilizing clean architecture and TDD.', icon: <Code2 /> },
    { title: 'Rigorous QA & Security', desc: 'Automated unit testing, load balancing analysis, and strict vulnerability audits.', icon: <CheckCircle2 /> },
    { title: 'CI/CD Deployment', desc: 'Orchestrating containerized, zero-downtime releases utilizing automated pipelines.', icon: <Zap /> }
  ];

  const techPartners = ['Java', 'Spring Boot', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'];

  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-50 font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,166,35,0.08),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
                <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
                <ChevronRight size={14} />
                <a href="/services" className="hover:text-amber-400 transition-colors">Services</a>
                <ChevronRight size={14} />
                <span className="text-amber-400">Software Engineering</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Architecting <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Enterprise Software</span> At Scale
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We engineer highly scalable, custom software solutions. From complex backend business logic to seamless microservice architectures, we build the systems that power modern market leaders.
              </p>
              <Button href="/contact">Discuss Your Project <ArrowRight size={18} className="ml-2" /></Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center mb-16">
            <SectionTitle title="Full-Cycle Software Capabilities" subtitle="We construct robust architectures that empower your operations." badge="Engineering Portfolio" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-slate-700 transition-colors h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-colors mb-6 ${accentMap[item.accent]}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Banner */}
      <div className="border-y border-slate-800 bg-[#06090D] py-8 text-center text-slate-500 font-mono text-xs uppercase tracking-widest">
        Technologies: {techPartners.join(' • ')}
      </div>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center mb-20">
            <SectionTitle title="Software Development Lifecycle" subtitle="Transparent methodology for predictable delivery." badge="Process" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0A0E14] border-2 border-slate-800 flex items-center justify-center text-slate-400 mb-6">{step.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400 font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}