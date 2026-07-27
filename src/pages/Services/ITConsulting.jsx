import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Compass, Code2, LineChart, 
  Search, Briefcase, ArrowRight, ChevronRight, 
  CheckCircle2, Network, Cpu, Workflow, 
  GitMerge, Target, ShieldCheck
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

// --- MAIN IT CONSULTING COMPONENT ---
export default function ITConsulting() {
  const capabilities = [
    {
      icon: <Network className="w-6 h-6" />, title: 'Enterprise Architecture', accent: 'amber',
      desc: 'Designing highly scalable, resilient system architectures that align directly with your long-term business objectives and operational requirements.'
    },
    {
      icon: <Code2 className="w-6 h-6" />, title: 'Tech Stack Modernization', accent: 'teal',
      desc: 'Evaluating legacy monolithic systems and charting clear, de-risked pathways to modern microservices and cloud-native frameworks.'
    },
    {
      icon: <LineChart className="w-6 h-6" />, title: 'IT Cost Optimization (FinOps)', accent: 'orange',
      desc: 'Conducting deep-dive audits of your cloud spend, software licenses, and infrastructure to eliminate waste and maximize your technology ROI.'
    },
    {
      icon: <Search className="w-6 h-6" />, title: 'Technical Due Diligence', accent: 'amber',
      desc: 'Providing rigorous codebase audits, security evaluations, and architecture assessments for M&A transactions and venture capital investments.'
    },
    {
      icon: <GitMerge className="w-6 h-6" />, title: 'Digital Transformation', accent: 'teal',
      desc: 'Mapping and digitizing complex offline workflows, integrating disparate systems, and automating enterprise-wide backend processes.'
    },
    {
      icon: <Briefcase className="w-6 h-6" />, title: 'Fractional CTO Advisory', accent: 'orange',
      desc: 'Injecting seasoned executive technology leadership into your organization to guide engineering teams, vendor selection, and IT strategy.'
    }
  ];

  const processSteps = [
    { title: 'Discovery & Audit', desc: 'Comprehensive analysis of your current systems, tech debt, and business friction points.', icon: <Search /> },
    { title: 'Strategic Blueprint', desc: 'Developing a step-by-step architectural roadmap with precise resource and cost estimations.', icon: <Compass /> },
    { title: 'Vendor & Stack Selection', desc: 'Unbiased evaluation of software, cloud providers, and implementation frameworks.', icon: <Cpu /> },
    { title: 'Execution Oversight', desc: 'Acting as your technical proxy to ensure engineering teams deliver exactly to specification.', icon: <ShieldCheck /> }
  ];

  const strategicDomains = ['Enterprise Architecture', 'Cloud Strategy', 'FinOps & ROI', 'System Integration', 'Tech Due Diligence', 'Data Governance'];

  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-50 font-sans">
      
      {/* --- HERO / PAGE BANNER --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(45,212,191,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
                <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
                <ChevronRight size={14} />
                <a href="/services" className="hover:text-amber-400 transition-colors">Services</a>
                <ChevronRight size={14} />
                <span className="text-amber-400">IT Consulting</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Architect Your <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Digital Transformation</span>
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We bridge the gap between business strategy and technology execution. Partner with our principal architects to modernize your tech stack, optimize IT spend, and confidently scale your operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Schedule Strategy Session <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Graphic - Strategic Blueprint UI */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-teal-500/20 rounded-full blur-[100px] opacity-60" />
              <div className="relative bg-[#0D1117]/90 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Compass className="text-amber-400 w-5 h-5" />
                    <span className="font-semibold text-slate-200">Architecture Roadmap FY26</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-slate-800/50 text-slate-400 text-xs font-mono border border-slate-700">PHASE 2 ACTIVE</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Timeline Items */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center mt-1">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      </div>
                      <div className="w-0.5 h-10 bg-emerald-500/30 my-1" />
                    </div>
                    <div className="bg-[#10151C] border border-emerald-500/30 p-3 rounded-lg flex-1">
                      <div className="text-sm font-bold text-white mb-1">Legacy System Audit</div>
                      <div className="text-xs text-slate-400 font-mono">Completed: Technical debt mapped</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center mt-1">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping absolute" />
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full relative" />
                      </div>
                      <div className="w-0.5 h-10 bg-slate-800 my-1" />
                    </div>
                    <div className="bg-[#10151C] border border-amber-500/50 p-3 rounded-lg flex-1 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                      <div className="text-sm font-bold text-white mb-1">Microservices Extraction</div>
                      <div className="text-xs text-amber-400 font-mono">In Progress: Core API decoupling</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center mt-1">
                      <div className="w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700" />
                    </div>
                    <div className="bg-[#10151C] border border-slate-800 p-3 rounded-lg flex-1 opacity-50">
                      <div className="text-sm font-bold text-slate-400 mb-1">Cloud Infrastructure Migration</div>
                      <div className="text-xs text-slate-500 font-mono">Pending: Q4 Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC DOMAINS BANNER --- */}
      <div className="border-b border-slate-800/80 bg-[#06090D] py-8 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Strategic Advisory Domains</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 opacity-60 transition-all duration-500">
            {strategicDomains.map((domain, idx) => (
              <span key={idx} className="text-lg md:text-xl font-bold text-slate-300 tracking-tight hover:text-amber-400 transition-colors cursor-default">
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center mb-16">
            <SectionTitle 
              title="Advisory & Architecture Services" 
              subtitle="We do not just recommend solutions; we architect the blueprints and oversee the execution to guarantee your success." 
              badge="Consulting Portfolio" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <motion.div 
                key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-slate-700 transition-colors h-full flex flex-col"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-colors mb-6 ${accentMap[item.accent]}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm flex-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* --- BUSINESS VALUE ROI HIGHLIGHT --- */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col gap-6">
                    {/* Value Card 1 */}
                    <div className="flex items-center gap-5 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Target className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">Strategic</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Business-IT Alignment</div>
                      </div>
                    </div>
                    {/* Value Card 2 */}
                    <div className="flex items-center gap-5 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                        <LineChart className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">~30%</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Reduction in IT Waste & Tech Debt</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionTitle 
                  title="Clarity Amidst Complexity." 
                  subtitle="Enterprise technology ecosystems are complex and expensive. We provide unbiased, expert clarity to ensure every technological investment directly serves your bottom line." 
                  badge={<><Lightbulb className="w-3.5 h-3.5" /> The Consulting Advantage</>} 
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Identify and eliminate redundant software licenses and bloated cloud infrastructure.', 
                    'Ensure scalable architecture before committing to expensive development phases.', 
                    'Gain expert technical evaluation of M&A targets to uncover hidden technical debt.', 
                    'Accelerate time-to-market with proven, modern engineering frameworks.'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 font-light">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- IMPLEMENTATION FRAMEWORK --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center mb-20">
            <SectionTitle 
              title="Our Advisory Framework" 
              subtitle="A systematic, unbiased approach to auditing your environment and executing transformative change." 
              badge="Consulting Methodology" 
            />
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[2.25rem] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0E14] border-2 border-slate-800 group-hover:border-teal-500/50 flex items-center justify-center text-slate-400 group-hover:text-teal-400 transition-colors mb-6 shadow-lg relative">
                    {step.icon}
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-teal-500 text-slate-900 text-xs font-bold flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden border-t border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-teal-500/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Compass className="w-12 h-12 text-amber-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Strategic Technical Direction?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Speak directly with our principal architects to discuss your technological challenges, M&A evaluations, or system modernization plans.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
              Book Advisory Session <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="bg-[#0A0E14] text-lg px-8 py-4" href="/services">
              View Implementation Services
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}