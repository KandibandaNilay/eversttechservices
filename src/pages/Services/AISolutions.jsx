import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, PieChart, Workflow, Database, 
  Headset, Settings, ArrowRight, ChevronRight, 
  CheckCircle2, LineChart, Target, Zap, 
  MessageSquare, Layers, BarChart3, TrendingUp
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

export default function PowerBIAnalytics() {
  const capabilities = [
    { icon: <Database />, title: 'ETL & Data Modeling', accent: 'amber', desc: 'Consolidating siloed operational data into clean, warehouse-ready schemas optimized for complex enterprise reporting.' },
    { icon: <BarChart3 />, title: 'Executive KPI Dashboards', accent: 'teal', desc: 'Bespoke, C-suite dashboards tracking revenue intelligence, profit margins, and predictive growth rates.' },
    { icon: <Zap />, title: 'Real-Time Data Pipelines', accent: 'orange', desc: 'Engineering automated refresh protocols for actionable, second-by-second business intelligence.' },
    { icon: <TrendingUp />, title: 'Predictive Growth Analysis', accent: 'amber', desc: 'Deploying AI-driven forecasting models to anticipate market trends and future enterprise performance.' },
    { icon: <Workflow />, title: 'Operational KPI Tracking', accent: 'teal', desc: 'Monitoring deployment precision, system uptime, and team member productivity stats.' },
    { icon: <MessageSquare />, title: 'Support Resolution Insights', accent: 'orange', desc: 'Quantifying client satisfaction scores and support resolution efficiency through historical data.' }
  ];

  const processSteps = [
    { title: 'Data Audit', desc: 'Mapping enterprise KPIs and identifying source data integration points.', icon: <Target /> },
    { title: 'Data Modeling', desc: 'Designing robust star schemas and DAX architectures for performance.', icon: <Workflow /> },
    { title: 'Visualization', desc: 'Crafting pixel-perfect, responsive dashboard interfaces.', icon: <PieChart /> },
    { title: 'Deployment', desc: 'Automating reporting pipelines and managing user access control.', icon: <Database /> }
  ];

  const techPartners = ['Power BI', 'Azure Synapse', 'SQL Server', 'DAX', 'Power Query', 'Snowflake'];
  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-slate-800/80">
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Data-Driven <span className="text-amber-500">Enterprise Intelligence</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 font-light">Transform raw backend data into actionable executive insights. We build the dashboards that guide your business strategy.</p>
            <Button href="/contact">Get Started with Power BI <ArrowRight className="ml-2" size={18} /></Button>
          </motion.div>
          <div className="bg-[#0D1117] p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="flex gap-4 mb-8">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-amber-500"></div>
              <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-slate-900/50 rounded-lg flex items-center justify-center text-slate-700">Dashboard Preview Loading...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle title="Core Capabilities" subtitle="Advanced analytics solutions for complex business environments." badge="Solutions" />
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

      {/* Execution Framework */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Methodology" subtitle="How we deliver clarity" badge="Process" />
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