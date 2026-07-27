import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, LayoutTemplate, Layers, Cpu, 
  Zap, ArrowRight, ChevronRight, CheckCircle2, 
  Code, AppWindow, Database, Workflow, Monitor,
  Activity, Server
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

// --- MAIN WEB DEVELOPMENT COMPONENT ---
export default function WebDevelopment() {
  const capabilities = [
    {
      icon: <AppWindow className="w-6 h-6" />, title: 'Enterprise Web Applications', accent: 'amber',
      desc: 'Architecting complex Single Page Applications (SPAs) that deliver desktop-software-grade performance directly within the browser.'
    },
    {
      icon: <Layers className="w-6 h-6" />, title: 'Headless Commerce & CMS', accent: 'teal',
      desc: 'Decoupling the frontend UI from backend business logic to achieve lightning-fast load times, seamless omnichannel scaling, and uncompromised security.'
    },
    {
      icon: <Monitor className="w-6 h-6" />, title: 'B2B Portals & Dashboards', accent: 'orange',
      desc: 'Engineering secure, role-based enterprise portals for data visualization, vendor management, and internal operational workflows.'
    },
    {
      icon: <Globe className="w-6 h-6" />, title: 'Progressive Web Apps (PWA)', accent: 'amber',
      desc: 'Bridging the gap between web and mobile by delivering offline-capable, installable web applications that bypass app store friction.'
    },
    {
      icon: <Code className="w-6 h-6" />, title: 'Frontend Architecture', accent: 'teal',
      desc: 'Designing scalable component libraries and micro-frontends utilizing React, Next.js, and TypeScript for massive enterprise ecosystems.'
    },
    {
      icon: <Zap className="w-6 h-6" />, title: 'Web Performance Optimization', accent: 'orange',
      desc: 'Refactoring legacy codebases, optimizing asset delivery, and implementing Server-Side Rendering (SSR) to achieve perfect Core Web Vitals.'
    }
  ];

  const processSteps = [
    { title: 'UX & Component Blueprint', desc: 'Mapping user journeys and defining a highly modular, reusable design system.', icon: <LayoutTemplate /> },
    { title: 'Frontend Engineering', desc: 'Developing responsive, accessible interfaces utilizing React, Vue, or Angular frameworks.', icon: <Code /> },
    { title: 'Backend API Integration', desc: 'Wiring the UI to robust microservices, REST APIs, or GraphQL endpoints.', icon: <Database /> },
    { title: 'Performance Testing', desc: 'Executing rigorous load testing, cross-browser validation, and Lighthouse auditing.', icon: <Activity /> }
  ];

  const techPartners = ['React', 'Next.js', 'TypeScript', 'Vue.js', 'GraphQL', 'Tailwind CSS', 'Vercel'];

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
                <a href="/" className="hover:text-teal-400 transition-colors">Home</a>
                <ChevronRight size={14} />
                <a href="/services" className="hover:text-teal-400 transition-colors">Services</a>
                <ChevronRight size={14} />
                <span className="text-teal-400">Web Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Engineer The <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">Modern Web</span>
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We design and architect high-performance, accessible, and scalable web applications. Deliver lightning-fast digital experiences that engage users and dominate enterprise markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Start Your Web Project <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Graphic - Browser Developer Tools UI */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-amber-500/20 rounded-full blur-[100px] opacity-60" />
              <div className="relative bg-[#0D1117]/90 border border-slate-700/50 rounded-2xl p-4 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-sm">
                
                {/* Browser URL Bar */}
                <div className="flex items-center gap-3 bg-[#0A0E14] border border-slate-800 rounded-lg px-3 py-2 mb-4 text-slate-400">
                  <Globe className="w-4 h-4 text-teal-400" />
                  <span className="flex-1">https://enterprise.eversttech.com/app</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs">Secure</span>
                  </div>
                </div>

                {/* Dev Tools Split View */}
                <div className="grid grid-cols-12 gap-4 border-t border-slate-800 pt-4">
                  {/* Left Column: Network Waterfall */}
                  <div className="col-span-7 space-y-3 border-r border-slate-800 pr-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>Name</span>
                      <span>Time</span>
                    </div>
                    
                    <div className="relative flex items-center justify-between group">
                      <span className="text-slate-300 text-xs">document (SSR)</span>
                      <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '15%' }} transition={{ duration: 0.5 }} className="h-full bg-blue-400" />
                      </div>
                      <span className="text-teal-400 text-xs">42ms</span>
                    </div>

                    <div className="relative flex items-center justify-between group">
                      <span className="text-slate-300 text-xs">main-bundle.js</span>
                      <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 0.8, delay: 0.2 }} className="h-full bg-amber-400" />
                      </div>
                      <span className="text-teal-400 text-xs">105ms</span>
                    </div>

                    <div className="relative flex items-center justify-between group">
                      <span className="text-slate-300 text-xs">graphql?query=User...</span>
                      <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 0.6, delay: 0.4 }} className="h-full bg-emerald-400" />
                      </div>
                      <span className="text-teal-400 text-xs">28ms</span>
                    </div>
                    
                    <div className="pt-2 border-t border-slate-800 mt-4 flex items-center justify-between text-[10px] text-slate-500">
                      <span>3 requests</span>
                      <span>175ms Total Load</span>
                    </div>
                  </div>

                  {/* Right Column: Console/React Tree */}
                  <div className="col-span-5 space-y-2 text-xs">
                    <div className="text-slate-500 mb-2">DOM Tree</div>
                    <div className="text-slate-400">{'<App>'}</div>
                    <div className="text-slate-400 pl-3">{'<ThemeProvider>'}</div>
                    <div className="text-slate-300 pl-6 border-l border-slate-800">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                        <span className="text-teal-400">{'<DashboardLayout>'}</span>
                      </motion.div>
                    </div>
                    <div className="text-slate-300 pl-9 border-l border-slate-800">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                        <span className="text-amber-400">{'<DynamicPricingGrid />'}</span>
                      </motion.div>
                    </div>
                    <div className="text-slate-400 pl-3">{'</ThemeProvider>'}</div>
                    <div className="text-slate-400">{'</App>'}</div>
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
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Mastering the modern web stack</p>
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
              title="Full-Stack Web Engineering" 
              subtitle="From headless commerce to data-heavy B2B portals, we build web applications that perform under pressure." 
              badge="Web Capabilities" 
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{item.title}</h3>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-5 p-5 rounded-xl bg-[#0A0E14] border border-slate-800 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">Sub-Second</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Time To Interactive</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 p-5 rounded-xl bg-[#0A0E14] border border-slate-800 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
                      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Server className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">Seamless</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Backend Logic Integration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionTitle 
                  title="Architecture That Scales." 
                  subtitle="Monolithic, slow-loading websites bleed revenue. We engineer decoupled, component-driven web applications that provide immediate feedback and scale infinitely." 
                  badge={<><Cpu className="w-3.5 h-3.5" /> Engineering Edge</>} 
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Dramatically improve conversion rates with optimized Core Web Vitals.', 
                    'Decouple frontend UI from backend business logic for supreme security.', 
                    'Ensure flawless experiences across all devices with responsive architecture.', 
                    'Easily integrate with complex CRM, ERP, and payment gateway APIs.'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 font-light">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
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
              title="Web Engineering Lifecycle" 
              subtitle="Our proven, iterative framework ensures your web application is stable, secure, and highly performant from launch." 
              badge="Execution Strategy" 
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-amber-500/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <LayoutTemplate className="w-12 h-12 text-teal-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Modernize Your Web Presence?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Connect with our frontend architects to discuss headless frameworks, performance bottlenecks, and custom web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
              Schedule Architecture Call <ArrowRight className="ml-2 w-5 h-5" />
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