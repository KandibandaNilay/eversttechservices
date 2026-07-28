import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, TrendingUp, HeartPulse, Target, Umbrella, 
  Users, Rocket, Lightbulb, Star, Trophy,
  MapPin, Clock, Briefcase, ArrowRight, ChevronRight,
  CheckCircle2, FileText, Send
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

const Button = ({ children, variant = 'primary', className = '', href = '#', type = 'button' }) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20",
    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:border-slate-600",
    sm: "px-4 py-2 text-sm"
  };
  
  const styling = `${base} ${variants[variant] || variants.primary} ${className}`;
  
  if (type === 'submit') {
    return <button type="submit" className={styling}>{children}</button>;
  }
  
  return (
    <a href={href} className={styling}>
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

// --- MOCK DATA INLINED ---
const jobsData = [
  { id: '1', title: 'Senior Cloud Architect', department: 'Engineering', location: 'Remote', type: 'Full-time', experience: '3+ Years' },
  { id: '2', title: 'DevSecOps Engineer', department: 'Security', location: 'Hybrid', type: 'Full-time', experience: '1-3  Years' },
  { id: '3', title: 'Full Stack React Node Developer', department: 'Engineering', location: 'Remote', type: 'Full-time', experience: '1-3 Years' },
  { id: '4', title: 'AI / LLM Solutions Lead', department: 'Data Science', location: 'On-site', type: 'Full-time', experience: '1-3 Years' }
];

// --- MAIN CAREERS COMPONENT ---
export default function Careers() {
  const benefits = [
    { icon: <Laptop className="w-6 h-6" />, title: 'Remote & Hybrid Work', desc: 'Flexible global work arrangements engineered to suit your lifestyle and focus.', accent: 'teal' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Career Acceleration', desc: 'Continuous learning stipends, certifications, and clear professional pathways.', accent: 'amber' },
    { icon: <HeartPulse className="w-6 h-6" />, title: 'Premium Health', desc: 'Comprehensive global health insurance coverage for you and your dependents.', accent: 'orange' },
    { icon: <Target className="w-6 h-6" />, title: 'Performance Bonuses', desc: 'Highly competitive equity packages and merit-based quarterly rewards.', accent: 'teal' },
    { icon: <Umbrella className="w-6 h-6" />, title: 'Unlimited PTO', desc: 'Generous paid time off policies because burnout doesn\'t write good code.', accent: 'amber' },
    { icon: <Users className="w-6 h-6" />, title: 'Elite Culture', desc: 'Collaborative, ego-free environment surrounded by top-tier technical talent.', accent: 'orange' },
  ];

  const hiringProcess = [
    { step: 'Application Review', desc: 'Initial screening of your profile and technical background.' },
    { step: 'Culture Fit Call', desc: 'A brief discussion to align on expectations and core values.' },
    { step: 'Technical Architecture', desc: 'Deep-dive assessment into your problem-solving capabilities.' },
    { step: 'Team Panel', desc: 'Meet the core engineers and leadership you will work alongside.' },
    { step: 'Formal Offer', desc: 'Welcome to the Everst Tech enterprise delivery team.' },
  ];

  const cultureIcons = [
    { icon: <Rocket className="w-7 h-7" />, label: 'Innovation', accent: 'amber' },
    { icon: <Lightbulb className="w-7 h-7" />, label: 'Autonomy', accent: 'teal' },
    { icon: <Star className="w-7 h-7" />, label: 'Excellence', accent: 'orange' },
    { icon: <Trophy className="w-7 h-7" />, label: 'Impact', accent: 'amber' },
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(45,212,191,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
              <span className="hover:text-amber-400 cursor-pointer transition-colors">Home</span>
              <ChevronRight size={14} />
              <span className="text-amber-500">Careers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Build The <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">Digital Future</span> With Us
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Join an elite engineering collective dedicated to architecting innovative, high-performance technology solutions for market-leading enterprises globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- LIFE AT EVERST TECH --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionTitle 
                title="Work With Purpose. Scale With Passion." 
                subtitle="At Everst Tech, we engineer environments where top-tier technical talent can thrive without bureaucratic friction." 
                badge={<><Target className="w-3.5 h-3.5" /> Life at Everst</>} 
              />
              <p className="mt-6 text-slate-400 leading-relaxed font-light">
                We foster a strict engineering culture centered around clean architecture, continuous learning, and mutual respect. We do not micro-manage; we hire the best and give them the autonomy to solve complex enterprise problems.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm font-mono text-slate-400">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Remote-First</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Meritocratic</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Engineering-Led</div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {cultureIcons.map((item, index) => (
                <div key={index} className="bg-[#0D1117] rounded-2xl p-8 border border-slate-800/80 hover:border-slate-700 hover:bg-[#10151C] transition-colors text-center group flex flex-col items-center justify-center min-h-[160px]">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110 mb-4 ${accentMap[item.accent]}`}>
                    {item.icon}
                  </div>
                  <div className="font-semibold text-white tracking-wide">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS --- */}
      <section className="py-24 bg-[#10151C]/40 border-y border-slate-800/80">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center mb-16">
            <SectionTitle title="Enterprise-Grade Benefits" subtitle="We invest heavily in the people who build our products." badge="Total Rewards" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <div className="h-full p-8 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-slate-700 transition-colors group">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border mb-5 transition-transform group-hover:-translate-y-1 ${accentMap[benefit.accent]}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CURRENT OPENINGS --- */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(245,166,35,0.03),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle title="Open Positions" subtitle="Join our squads to tackle the next generation of infrastructure challenges." badge="Job Board" />
          
          <div className="space-y-4 mt-12 max-w-5xl">
            {jobsData.map((job, index) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <div className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-amber-500/30 hover:bg-amber-500/[0.02] transition-all">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-slate-500" /> {job.department}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-500" /> {job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-500" /> {job.type}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-amber-400/80 font-medium">{job.experience}</span>
                    </div>
                  </div>
                  <Button href={`/contact`} variant="outline" className="shrink-0 group-hover:border-amber-500/50 group-hover:text-amber-400">
                    Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* --- HIRING PROCESS --- */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center mb-16">
            <SectionTitle title="The Interview Framework" subtitle="A transparent, technical, and highly respectful candidate evaluation journey." badge="Methodology" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {hiringProcess.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative z-10 flex flex-col h-full">
                <div className="flex-1 p-6 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-slate-700 transition-colors text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#0A0E14] border border-slate-700 rounded-full flex items-center justify-center text-amber-400 font-mono font-bold text-lg mb-5 shadow-lg">
                    0{index + 1}
                  </div>
                  <h4 className="font-bold text-white mb-2">{step.step}</h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden border-t border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-teal-500/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don't See Your Role?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            We are constantly seeking elite architects and engineers. Submit your profile, and we'll route it to the appropriate team lead.
          </p>
          <Button variant="outline" className="text-lg px-8 py-4 bg-[#0A0E14]" href="/contact">
            Reach Out Directly
          </Button>
        </div>
      </section>
      
    </div>
  );
}