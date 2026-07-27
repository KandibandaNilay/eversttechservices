import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, Target, MousePointerClick, TrendingUp, 
  Search, Mail, ArrowRight, ChevronRight, CheckCircle2, 
  BarChart, Filter, Users, Globe, Zap
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

// --- MAIN DIGITAL MARKETING COMPONENT ---
export default function DigitalMarketing() {
  const capabilities = [
    {
      icon: <Target className="w-6 h-6" />, title: 'Account-Based Marketing (ABM)', accent: 'amber',
      desc: 'Precision-targeted B2B campaigns designed to engage high-value enterprise decision-makers and accelerate complex sales cycles.'
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />, title: 'Performance Marketing', accent: 'teal',
      desc: 'Data-driven PPC and paid social campaigns optimized for maximum Return on Ad Spend (ROAS) and lowest Customer Acquisition Cost.'
    },
    {
      icon: <Search className="w-6 h-6" />, title: 'Technical SEO & Organic Growth', accent: 'orange',
      desc: 'Deep architectural site optimization, authoritative link building, and intent-based keyword strategies to dominate search engine results.'
    },
    {
      icon: <Filter className="w-6 h-6" />, title: 'Conversion Rate Optimization', accent: 'amber',
      desc: 'A/B testing, heatmap analysis, and UI/UX refinements that remove funnel friction and turn passive traffic into qualified leads.'
    },
    {
      icon: <Mail className="w-6 h-6" />, title: 'Marketing Automation', accent: 'teal',
      desc: 'Architecting complex email nurture sequences and CRM triggers to automatically engage, qualify, and warm up your prospect database.'
    },
    {
      icon: <Globe className="w-6 h-6" />, title: 'Digital Brand Architecture', accent: 'orange',
      desc: 'Crafting authoritative digital narratives, thought leadership content, and cohesive omnichannel brand positioning for modern enterprises.'
    }
  ];

  const processSteps = [
    { title: 'Data Audit & Strategy', desc: 'Analyzing historical analytics, competitor gaps, and defining your exact target persona.', icon: <Search /> },
    { title: 'Funnel Engineering', desc: 'Constructing high-converting landing pages, lead magnets, and CRM tracking pipelines.', icon: <Filter /> },
    { title: 'Omnichannel Execution', desc: 'Launching synchronized campaigns across Search, LinkedIn, Meta, and Email networks.', icon: <Megaphone /> },
    { title: 'Scaling & Attribution', desc: 'Using advanced BI tools to measure exact revenue attribution and scale winning channels.', icon: <TrendingUp /> }
  ];

  const techPartners = ['Google Premier Partner', 'Meta Business', 'HubSpot', 'SEMrush', 'LinkedIn Ads', 'Salesforce Pardot'];

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
                <span className="text-amber-400">Digital Marketing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Drive Enterprise Growth With <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Data-Backed Marketing</span>
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We replace vanity metrics with verifiable revenue. Leverage advanced performance marketing, technical SEO, and marketing automation to scale your customer acquisition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Request Growth Audit <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Graphic - Campaign Analytics UI */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full blur-[100px] opacity-60" />
              <div className="relative bg-[#0D1117]/90 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <BarChart className="text-amber-400 w-5 h-5" />
                    <span className="font-semibold text-slate-200">Campaign Performance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-1 rounded bg-slate-800 text-slate-400">Q3 FY26</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Marketing Funnel Visualization */}
                  <div className="bg-[#10151C] border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-slate-500 uppercase font-mono">Impressions</span>
                      <span className="text-lg font-bold text-white">1.2M</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-slate-500 uppercase font-mono">Site Visits</span>
                      <span className="text-lg font-bold text-white">45,200</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-slate-500 uppercase font-mono">Qualified Leads</span>
                      <span className="text-lg font-bold text-amber-400">842</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#10151C] border border-slate-800 p-4 rounded-xl relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                      <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-mono">Return on Ad Spend</div>
                      <div className="text-2xl font-bold text-white">340%</div>
                    </div>
                    <div className="bg-[#10151C] border border-slate-800 p-4 rounded-xl relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
                      <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-mono">CAC Reduction</div>
                      <div className="text-2xl font-bold text-white">-28.5%</div>
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
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Certified Partners & Platforms</p>
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
              title="Full-Funnel Growth Engineering" 
              subtitle="We fuse technical architecture with marketing psychology to build scalable lead generation and brand awareness engines." 
              badge="Marketing Capabilities" 
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
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-5 p-5 rounded-xl bg-[#0A0E14] border border-slate-800">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">Predictable</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Revenue Pipeline Growth</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 p-5 rounded-xl bg-[#0A0E14] border border-slate-800">
                      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">High-Intent</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Enterprise Lead Quality</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionTitle 
                  title="Stop Spending. Start Investing." 
                  subtitle="We move marketing out of the cost-center column. By connecting marketing platforms directly to your CRM, we prove exactly how every dollar spent impacts your bottom line." 
                  badge={<><BarChart className="w-3.5 h-3.5" /> Revenue Operations</>} 
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Eradicate wasted ad spend by targeting exact B2B decision-makers.', 
                    'Map the entire customer journey from first click to closed-won deal.', 
                    'Automate repetitive outreach to allow sales to focus on closing.', 
                    'Secure long-term organic traffic moats with technical SEO architecture.'
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
              title="The Growth Methodology" 
              subtitle="Our proven, iterative framework designed to discover your optimal acquisition channels and scale them aggressively." 
              badge="Execution Strategy" 
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
          <Zap className="w-12 h-12 text-amber-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Acquisition?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Connect with our growth architects to audit your current digital footprint and uncover hidden revenue opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
              Request Growth Strategy <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="bg-[#0A0E14] text-lg px-8 py-4" href="/services">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}