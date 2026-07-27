import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Heart, Users, Award, Clock, 
  CheckCircle2, ArrowRight, Building, Rocket, 
  Star, Trophy, ChevronRight, Zap, Globe
} from 'lucide-react';

// --- INLINED REUSABLE UI COMPONENTS (Matches Home Page) ---
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
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out";
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20",
    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:border-slate-600"
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
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

// --- MAIN ABOUT COMPONENT ---
export default function About() {
  const statsData = [
    { value: '500+', label: 'Projects Delivered', icon: <Rocket className="w-6 h-6 text-amber-400" /> },
    { value: '50+', label: 'Team Members', icon: <Users className="w-6 h-6 text-teal-400" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6 text-orange-400" /> },
    { value: '12+', label: 'Years in Business', icon: <Trophy className="w-6 h-6 text-amber-300" /> },
  ];

  const coreValues = [
    { icon: <Heart className="w-6 h-6" />, title: 'Integrity', desc: 'Operating with absolute honesty and transparency in all our enterprise dealings.', accent: 'amber' },
    { icon: <Users className="w-6 h-6" />, title: 'Client First', desc: 'Your operational success dictates ours. We engineer solutions that drive real impact.', accent: 'teal' },
    { icon: <Award className="w-6 h-6" />, title: 'Excellence', desc: 'Maintaining uncompromising standards in architecture, code quality, and delivery.', accent: 'orange' },
    { icon: <Clock className="w-6 h-6" />, title: 'Innovation', desc: 'Continuously adopting and mastering next-generation technologies.', accent: 'amber' },
  ];

  const timeline = [
    { year: '2012', title: 'Company Founded', desc: 'Everst Tech Services established with a vision to engineer high-quality IT infrastructure.' },
    { year: '2015', title: 'Cloud Expansion', desc: 'Scaled our service portfolio to include native cloud architecture and migrations.' },
    { year: '2018', title: 'Global Operations', desc: 'Expanded delivery centers to serve enterprise clients across international markets.' },
    { year: '2021', title: 'AI & Data Integration', desc: 'Launched dedicated practices for Machine Learning and predictive data analytics.' },
    { year: '2024', title: 'Enterprise Milestone', desc: 'Successfully transformed systems for over 100+ global market leaders.' },
  ];

  const whyChooseUs = [
    '12+ years of enterprise industry experience',
    '50+ elite technology architects & engineers',
    '500+ successful zero-downtime deployments',
    '98% client retention and satisfaction rate',
    'Cutting-edge predictive AI & Cloud expertise',
    'End-to-end agile solution delivery',
    'ISO 27001 & SOC2 compliance readiness',
    'Transparent, metric-driven execution'
  ];

  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-50 font-sans">
      
      {/* --- HERO / PAGE BANNER --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,166,35,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
              <span className="hover:text-amber-400 cursor-pointer transition-colors">Home</span>
              <ChevronRight size={14} />
              <span className="text-amber-500">About</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              About <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Everst Tech</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              We are a collective of elite technologists committed to engineering excellence, architecting scalable solutions, and driving digital transformation for global enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- WHO WE ARE --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionTitle 
                title="Building The Future Of Technology" 
                subtitle="Everst Tech Services is a premier IT architecture firm dedicated to helping market leaders leverage technology for exponential growth." 
                badge={<><Globe className="w-3.5 h-3.5" /> Corporate Overview</>} 
              />
              <p className="mt-6 text-slate-400 leading-relaxed font-light">
                With over a decade of dedicated operational experience, our team of 50+ senior architects and engineers combines deep technical mastery with a profound understanding of modern business workflows. We don't just write code; we build resilient, secure, and highly scalable enterprise ecosystems.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="primary" href="/eversttechservices/services">
                  Explore Capabilities <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button variant="outline" href="/eversttechservices/contact">Get in Touch</Button>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative aspect-[4/3] rounded-2xl bg-[#0D1117]/90 backdrop-blur-xl border border-slate-700/50 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.05),transparent)] pointer-events-none" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-[0_0_30px_rgba(245,166,35,0.15)]">
                    <Zap className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Innovation at Core</h3>
                  <p className="text-slate-400 font-light">Driving digital transformation for 12+ years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="py-12 bg-[#10151C]/80 border-y border-slate-800/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
            {statsData.map((stat, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center ${idx === 0 ? '' : 'pl-8'}`}>
                <div className="mb-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="h-full p-10 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-slate-700/80 transition-all group">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  To empower enterprises with architecturally sound, innovative technology solutions that drive efficiency, scale seamlessly, and establish an unshakeable competitive advantage in the modern digital economy.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="h-full p-10 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-slate-700/80 transition-all group">
                <div className="w-14 h-14 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  To be the global gold standard in technology architecture, recognized universally for our engineering precision, uncompromising quality, and the profound, measurable success of our enterprise partners.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center">
            <SectionTitle title="Our Core Principles" subtitle="The operational tenets that guide our engineering and partnerships." badge="Corporate Values" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {coreValues.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="p-8 rounded-2xl bg-[#0D1117] border border-slate-800 text-center h-full group hover:border-slate-700/80 transition-colors">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border mb-6 transition-transform group-hover:-translate-y-2 ${accentMap[value.accent]}`}>
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3">{value.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* --- TIMELINE --- */}
      <section className="py-24 bg-[#10151C]/40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center mb-20">
            <SectionTitle title="Engineering Our Legacy" subtitle="A timeline of our architectural milestones and growth." badge="Company History" />
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line for Desktop, Left Line for Mobile */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent md:-translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Mobile Dot */}
                <div className="absolute left-6 w-3 h-3 rounded-full bg-amber-400 border-2 border-[#0A0E14] -translate-x-1.5 mt-6 md:hidden z-10 shadow-[0_0_10px_rgba(245,166,35,0.5)]" />
                
                {/* Desktop Dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#0A0E14] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(245,166,35,0.6)]" />

                <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="p-6 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-amber-500/30 transition-colors group relative">
                    {/* Connecting line to box (Desktop) */}
                    <div className={`hidden md:block absolute top-1/2 w-16 h-px bg-slate-800 group-hover:bg-amber-500/30 transition-colors -translate-y-1/2 ${index % 2 === 0 ? '-right-16' : '-left-16'}`} />
                    
                    <div className="inline-block px-3 py-1 rounded bg-slate-800/50 text-amber-400 font-mono text-sm font-semibold mb-3">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionTitle title="The Everst Advantage" subtitle="Why Fortune 500s and scaling startups trust our engineering framework." badge="Differentiators" />
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div 
                    key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#0D1117] border border-slate-800/80 hover:border-teal-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden border-t border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-teal-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Building className="w-12 h-12 text-amber-500 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Architect Something Great</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Partner with our architecture team to construct digital infrastructure that outpaces your competition.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4" href="/eversttechservices/contact">
            Start A Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

    </div>
  );
}