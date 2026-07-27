import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, Layout, Layers, Eye, 
  MousePointerClick, Crosshair, ArrowRight, ChevronRight, 
  CheckCircle2, Monitor, Component, Smartphone,
  Figma, Workflow, SplitSquareHorizontal
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

// --- MAIN UI/UX DESIGN COMPONENT ---
export default function UIUXDesign() {
  const capabilities = [
    {
      icon: <Component className="w-6 h-6" />, title: 'Enterprise Design Systems', accent: 'amber',
      desc: 'Architecting scalable, modular component libraries that ensure visual consistency and accelerate frontend engineering velocity across all your digital products.'
    },
    {
      icon: <Crosshair className="w-6 h-6" />, title: 'User Research & Journey Mapping', accent: 'teal',
      desc: 'Executing rigorous qualitative and quantitative research to map complex B2B user journeys, eliminating friction and cognitive overload.'
    },
    {
      icon: <Layout className="w-6 h-6" />, title: 'High-Fidelity Prototyping', accent: 'orange',
      desc: 'Building interactive, pixel-perfect prototypes to validate business logic and user flow before committing to expensive development cycles.'
    },
    {
      icon: <Eye className="w-6 h-6" />, title: 'WCAG Accessibility & Compliance', accent: 'amber',
      desc: 'Designing inclusive interfaces that strictly adhere to global accessibility standards (WCAG 2.1 AA/AAA), mitigating legal risks and expanding user reach.'
    },
    {
      icon: <SplitSquareHorizontal className="w-6 h-6" />, title: 'Information Architecture (IA)', accent: 'teal',
      desc: 'Structuring complex enterprise data and deep navigation hierarchies so users can locate critical information intuitively and instantaneously.'
    },
    {
      icon: <Monitor className="w-6 h-6" />, title: 'Omnichannel Interface Design', accent: 'orange',
      desc: 'Crafting responsive interfaces that deliver flawless, native-feeling experiences across web dashboards, mobile applications, and industrial IoT displays.'
    }
  ];

  const processSteps = [
    { title: 'Discovery & Empathy', desc: 'Stakeholder interviews, user persona development, and competitive heuristic analysis.', icon: <Search /> },
    { title: 'Wireframing & IA', desc: 'Drafting low-fidelity blueprints and organizing data structures to define the skeletal framework.', icon: <Layout /> },
    { title: 'Visual UI & Prototyping', desc: 'Applying brand identity, micro-interactions, and building high-fidelity clickable models.', icon: <PenTool /> },
    { title: 'Validation & Handoff', desc: 'Conducting usability testing and delivering meticulously documented assets to engineering.', icon: <Code /> }
  ];

  const techPartners = ['Figma', 'Framer', 'Sketch', 'Adobe XD', 'Zeplin', 'InVision', 'Storybook'];

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
                <span className="text-amber-400">UI/UX Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Design Beyond Aesthetics. <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Engineer Experiences.</span>
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We approach design as an engineering discipline. We build data-driven interfaces that reduce cognitive load, increase user adoption, and translate complex business logic into intuitive workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Discuss Your Vision <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Graphic - Design Canvas / Figma-style UI */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-teal-500/20 rounded-full blur-[100px] opacity-60" />
              <div className="relative bg-[#0D1117]/90 border border-slate-700/50 rounded-2xl p-4 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-sm h-[320px] flex flex-col">
                
                {/* Toolbar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-4 text-slate-400">
                    <PenTool className="w-4 h-4 text-amber-400" />
                    <MousePointerClick className="w-4 h-4 hover:text-white transition-colors" />
                    <Layout className="w-4 h-4 hover:text-white transition-colors" />
                    <span className="text-slate-600">|</span>
                    <span className="text-xs font-semibold text-slate-300 tracking-wider">Dashboard_Component_v2.fig</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs border border-teal-500/30">JS</div>
                    <Button variant="primary" className="!py-1 !px-3 !text-xs !rounded">Share</Button>
                  </div>
                </div>

                {/* Workspace Split */}
                <div className="flex-1 grid grid-cols-12 gap-4">
                  {/* Left Sidebar (Layers) */}
                  <div className="col-span-3 border-r border-slate-800 pr-2 space-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold mb-3">Layers</div>
                    <div className="flex items-center gap-2 text-slate-300"><Layers className="w-3 h-3 text-amber-400" /> Hero_Card</div>
                    <div className="flex items-center gap-2 pl-4"><Layout className="w-3 h-3" /> Auto Layout</div>
                    <div className="flex items-center gap-2 pl-8"><span className="text-teal-400">T</span> Headline</div>
                    <div className="flex items-center gap-2 pl-8"><Component className="w-3 h-3 text-purple-400" /> Primary_Button</div>
                  </div>

                  {/* Canvas Area */}
                  <div className="col-span-6 bg-[#0A0E14] rounded-lg border border-slate-800 relative flex items-center justify-center">
                    {/* Grid Pattern overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:10px_10px]" />
                    
                    {/* Active Component being designed */}
                    <motion.div 
                      initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                      className="relative bg-[#10151C] border border-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,0.3)] p-4 rounded w-48"
                    >
                      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-blue-500" />
                      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-blue-500" />
                      
                      <div className="w-16 h-2 bg-slate-700 rounded-full mb-3" />
                      <div className="w-full h-2 bg-slate-800 rounded-full mb-2" />
                      <div className="w-3/4 h-2 bg-slate-800 rounded-full mb-4" />
                      <div className="w-full h-6 bg-amber-500 rounded flex items-center justify-center">
                        <div className="w-12 h-1 bg-amber-900/50 rounded-full" />
                      </div>
                      
                      {/* Distance Guides */}
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[8px] text-red-400">24px</div>
                      <div className="absolute top-1/2 left-0 w-4 border-t border-dashed border-red-500" />
                    </motion.div>
                  </div>

                  {/* Right Sidebar (Properties) */}
                  <div className="col-span-3 pl-2 space-y-4 text-xs text-slate-500">
                    <div className="font-semibold text-slate-300">Design</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#0A0E14] border border-slate-800 p-1.5 rounded flex justify-between"><span>W</span> <span className="text-white">320</span></div>
                      <div className="bg-[#0A0E14] border border-slate-800 p-1.5 rounded flex justify-between"><span>H</span> <span className="text-white">Auto</span></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1"><span>Fill</span></div>
                      <div className="bg-[#0A0E14] border border-slate-800 p-1.5 rounded flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#10151C] border border-slate-600" />
                        <span className="text-white">10151C</span>
                        <span className="ml-auto">100%</span>
                      </div>
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
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Prototyping & Engineering Hand-off Tools</p>
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
              title="Full-Spectrum UX Capabilities" 
              subtitle="From deep psychological research to pixel-perfect component architecture, we build interfaces that businesses rely on." 
              badge="Design Portfolio" 
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
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-5 p-5 rounded-xl bg-[#0A0E14] border border-slate-800 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                        <Component className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">Accelerated</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Frontend Engineering Velocity</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 p-5 rounded-xl bg-[#0A0E14] border border-slate-800 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
                      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                        <MousePointerClick className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">Maximized</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">End-User Adoption Rates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionTitle 
                  title="Good Design Is Good Business." 
                  subtitle="Poor UX costs enterprises millions in training, support tickets, and development rework. We treat design as a strategic asset that directly reduces operational friction." 
                  badge={<><Eye className="w-3.5 h-3.5" /> The UX Advantage</>} 
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Minimize engineering rework by validating logic with high-fidelity prototypes first.', 
                    'Reduce employee training time with intuitive, self-evident internal dashboards.', 
                    'Increase consumer conversion rates by systematically eliminating funnel friction.', 
                    'Maintain absolute brand consistency across web, mobile, and print ecosystems.'
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
              title="The UX Engineering Process" 
              subtitle="A meticulous methodology ensuring every design decision is backed by data and ready for seamless technical execution." 
              badge="Design Methodology" 
            />
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[2.25rem] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0E14] border-2 border-slate-800 group-hover:border-amber-500/50 flex items-center justify-center text-slate-400 group-hover:text-amber-400 transition-colors mb-6 shadow-lg relative">
                    {step.icon}
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-amber-500 text-slate-900 text-xs font-bold flex items-center justify-center shadow-lg">
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
          <PenTool className="w-12 h-12 text-amber-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Redefine Your User Experience?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Connect with our UX architects to discuss comprehensive design systems, interface modernization, or user research.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
              Schedule Design Review <ArrowRight className="ml-2 w-5 h-5" />
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