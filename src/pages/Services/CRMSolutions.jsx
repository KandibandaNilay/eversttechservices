import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, PieChart, Workflow, Database, 
  Headset, Settings, ArrowRight, ChevronRight, 
  CheckCircle2, LineChart, Target, Zap, 
  MessageSquare, Layers
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

// --- MAIN CRM SOLUTIONS COMPONENT ---
export default function CRMSolution() {
  const capabilities = [
    {
      icon: <Layers className="w-6 h-6" />, title: 'Enterprise CRM Implementation', accent: 'amber',
      desc: 'End-to-end deployment of market-leading platforms like Salesforce, Microsoft Dynamics 365, and HubSpot tailored to your exact workflows.'
    },
    {
      icon: <Settings className="w-6 h-6" />, title: 'Custom CRM Engineering', accent: 'teal',
      desc: 'Building bespoke, scalable CRM architectures from scratch for enterprises with highly specialized operational requirements.'
    },
    {
      icon: <Workflow className="w-6 h-6" />, title: 'Workflow & Sales Automation', accent: 'orange',
      desc: 'Eliminating manual data entry by engineering automated lead routing, pipeline progression, and follow-up sequences.'
    },
    {
      icon: <Database className="w-6 h-6" />, title: 'Seamless Data Migration', accent: 'amber',
      desc: 'Extracting, cleansing, and safely transferring millions of historical records from legacy systems to your new CRM with zero data loss.'
    },
    {
      icon: <PieChart className="w-6 h-6" />, title: 'Customer 360 Analytics', accent: 'teal',
      desc: 'Deploying advanced BI dashboards and AI predictive analytics to forecast revenue and understand customer lifecycle behavior.'
    },
    {
      icon: <Headset className="w-6 h-6" />, title: 'Omnichannel Support Integration', accent: 'orange',
      desc: 'Connecting your CRM with helpdesks, VoIP telephony, and enterprise ERPs to unify sales, marketing, and customer support.'
    }
  ];

  const processSteps = [
    { title: 'Business Discovery', desc: 'Mapping your sales funnels, support protocols, and data architecture requirements.', icon: <Target /> },
    { title: 'Platform Strategy', desc: 'Selecting or designing the optimal CRM framework and defining integration touchpoints.', icon: <Workflow /> },
    { title: 'Data & Deployment', desc: 'Executing rigorous data cleansing, schema mapping, and system configuration.', icon: <Database /> },
    { title: 'Adoption & Scaling', desc: 'Providing comprehensive user training and continuous system optimization.', icon: <LineChart /> }
  ];

  const techPartners = ['Salesforce', 'Microsoft Dynamics 365', 'HubSpot', 'Zoho Enterprise', 'Zendesk', 'Tableau'];

  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-50 font-sans">
      
      {/* --- HERO / PAGE BANNER --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,166,35,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
                <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
                <ChevronRight size={14} />
                <a href="/services" className="hover:text-amber-400 transition-colors">Services</a>
                <ChevronRight size={14} />
                <span className="text-amber-400">CRM Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Architecting <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Customer Success</span> At Scale
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We design, implement, and customize enterprise CRM systems that eliminate data silos, automate complex sales pipelines, and deliver a unified 360-degree view of your customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Discuss Your CRM Strategy <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Graphic - Interactive CRM UI Representation */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full blur-[100px] opacity-60" />
              <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <Users className="text-amber-400 w-5 h-5" />
                    <span className="font-semibold text-slate-200">Sales Pipeline Overview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">+24% Rev</span>
                  </div>
                </div>
                
                {/* Mock CRM Board */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Column 1 */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-slate-500 uppercase">Qualified Leads</div>
                    <div className="bg-[#10151C] border border-slate-800 p-3 rounded-lg opacity-80">
                      <div className="text-sm text-white font-medium mb-1">Acme Corp Enterprise</div>
                      <div className="text-xs text-slate-500">$120,000 ARR</div>
                    </div>
                    <div className="bg-[#10151C] border border-slate-800 p-3 rounded-lg opacity-80">
                      <div className="text-sm text-white font-medium mb-1">Stark Industries</div>
                      <div className="text-xs text-slate-500">$450,000 ARR</div>
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-slate-500 uppercase">Negotiation</div>
                    <div className="bg-[#10151C] border border-amber-500/30 p-3 rounded-lg relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                      <div className="text-sm text-white font-medium mb-1">Wayne Enterprises</div>
                      <div className="text-xs text-amber-400 font-semibold">$850,000 ARR</div>
                    </div>
                  </div>
                  {/* Column 3 */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-slate-500 uppercase">Closed Won</div>
                    <div className="bg-[#10151C] border border-emerald-500/30 p-3 rounded-lg relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                      <div className="text-sm text-white font-medium mb-1">Global Tech Inc</div>
                      <div className="text-xs text-emerald-400 font-semibold">$2.1M TCV</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK BANNER --- */}
      <div className="border-b border-slate-800/80 bg-[#06090D] py-8 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Expertise Across Leading CRM Platforms</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {techPartners.map((partner, idx) => (
              <span key={idx} className="text-lg md:text-xl font-bold text-slate-300 tracking-tight">
                {partner}
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
              title="Comprehensive CRM Capabilities" 
              subtitle="From rigid monoliths to agile, data-driven ecosystems. We construct CRM architectures that empower your sales and support divisions." 
              badge="Solutions Portfolio" 
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
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionTitle 
                  title="Breaking Down Data Silos." 
                  subtitle="A properly architected CRM is not just a digital address book; it is the central nervous system of your enterprise revenue engine." 
                  badge={<><LineChart className="w-3.5 h-3.5" /> Business Impact</>} 
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Increase sales productivity by automating administrative tasks.', 
                    'Improve lead conversion rates with intelligent routing protocols.', 
                    'Enhance customer retention via unified support histories.', 
                    'Generate accurate revenue forecasts using predictive data models.'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 font-light">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div className="lg:col-span-6 relative">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col gap-6">
                    {/* Stat Block 1 */}
                    <div className="flex items-center gap-5 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">+45%</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Increase in Sales Velocity</div>
                      </div>
                    </div>
                    {/* Stat Block 2 */}
                    <div className="flex items-center gap-5 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">-30%</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Reduction in Support Resolution Time</div>
                      </div>
                    </div>
                  </div>
                </div>
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
              title="Deployment Methodology" 
              subtitle="We utilize an agile, iterative approach to CRM implementation, ensuring high user adoption and zero operational disruption." 
              badge="Execution Framework" 
            />
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[2.25rem] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0E14] border-2 border-slate-800 group-hover:border-orange-500/50 flex items-center justify-center text-slate-400 group-hover:text-orange-400 transition-colors mb-6 shadow-lg relative">
                    {step.icon}
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-orange-500 text-slate-900 text-xs font-bold flex items-center justify-center shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Users className="w-12 h-12 text-amber-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Centralize Your Operations?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Speak with our CRM architects to evaluate your current processes and map a customized digital transformation strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
              Schedule a Technical Discovery <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="bg-[#0A0E14] text-lg px-8 py-4" href="/services">
              View All Services
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}