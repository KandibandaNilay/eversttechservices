import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Workflow, Database, Layers, 
  Target, Headset, ArrowRight, CheckCircle2, 
  Briefcase, ShieldCheck, FileText, Server
} from 'lucide-react';

// --- UI COMPONENTS ---
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

export default function SAPConsulting() {
  const capabilities = [
    { icon: <Server />, title: 'S/4HANA Transformation', accent: 'amber', desc: 'End-to-end migration strategies and implementation of S/4HANA for global enterprise scalability.' },
    { icon: <Settings />, title: 'Custom ABAP & Fiori', accent: 'teal', desc: 'Engineering bespoke SAP extensions and modern Fiori interfaces to meet specific business logic requirements.' },
    { icon: <Workflow />, title: 'API-Led SAP Integration', accent: 'orange', desc: 'Seamlessly connecting SAP with custom microservices, pricing engines, and tax compliance modules.' },
    { icon: <Database />, title: 'Financial Process Automation', accent: 'amber', desc: 'Automating complex GST/VAT compliance, financial reporting, and core ERP accounting modules.' },
    { icon: <Target />, title: 'Process Re-engineering', accent: 'teal', desc: 'Optimizing existing SAP modules to drive agility into your core business processes.' },
    { icon: <Headset />, title: 'Managed Support Services', accent: 'orange', desc: '24/7 technical assistance and continuous system performance optimization post-go-live.' }
  ];

  const processSteps = [
    { title: 'Discovery', desc: 'Analyzing legacy ERP architecture and gap requirements.', icon: <Target /> },
    { title: 'Solution Design', desc: 'Architecting SAP modules and integration touchpoints.', icon: <Workflow /> },
    { title: 'Implementation', desc: 'Executing configuration, ABAP development, and system testing.', icon: <Database /> },
    { title: 'Optimization', desc: 'User training, go-live, and performance tuning.', icon: <CheckCircle2 /> }
  ];

  const techPartners = ['SAP S/4HANA', 'SAP Fiori', 'ABAP', 'SAP BTP', 'SuccessFactors', 'SAP Cloud Platform'];
  
  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-slate-800/80">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Enterprise <span className="text-amber-500">SAP Excellence</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 font-light">Transform your core business operations with expert SAP implementation, optimization, and custom integration strategies.</p>
            <Button href="/contact">Book an SAP Audit <ArrowRight className="ml-2" size={18} /></Button>
          </motion.div>
          <div className="bg-[#0D1117] p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
             <Briefcase className="w-16 h-16 text-amber-500 mb-6" />
             <h3 className="text-2xl font-bold text-white mb-4">Core ERP Integration</h3>
             <p className="text-slate-400">Specializing in bridging SAP environments with modern cloud-native architectures and custom tax/pricing engines.</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle title="Core Capabilities" subtitle="Custom SAP engineering tailored for enterprise needs." badge="Solutions" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-amber-500/30 transition-all group">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${accentMap[item.accent]}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <div className="py-12 border-y border-slate-800 bg-[#06090D]">
        <div className="container mx-auto px-6 text-center text-slate-500 font-mono text-xs uppercase tracking-widest">
          Expertise in: {techPartners.join(' • ')}
        </div>
      </div>

      {/* Methodology */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle title="Implementation Methodology" subtitle="Our proven framework for successful SAP delivery." badge="Process" />
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0D1117] border border-slate-800 flex items-center justify-center text-amber-500 mb-6">{step.icon}</div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}