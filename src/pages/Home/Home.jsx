import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Users, Code, Cloud, Shield, 
  Zap, Rocket, Award, Star, Search, ClipboardList, 
  TestTube, Wrench, Terminal, ArrowUpRight, Plus, Minus
} from 'lucide-react';

// --- INLINED DATA TO MAKE COMPONENT STANDALONE ---
const servicesData = [
  { id: 1, title: 'Custom Software Engineering', shortDesc: 'End-to-end full-stack development tailored to your exact business workflow.' },
  { id: 2, title: 'Cloud Architecture & Migration', shortDesc: 'Scalable AWS, Azure, and GCP infrastructure deployment and modernization.' },
  { id: 3, title: 'Cybersecurity & Compliance', shortDesc: 'Enterprise-grade threat protection, SOC2 compliance, and vulnerability auditing.' },
  { id: 4, title: 'DevOps & CI/CD Automation', shortDesc: 'Streamlined deployment pipelines ensuring 99.99% uptime and zero-downtime releases.' },
  { id: 5, title: 'AI & Machine Learning Integration', shortDesc: 'Predictive analytics and custom LLM deployment for data-driven decision making.' },
  { id: 6, title: 'Legacy System Modernization', shortDesc: 'Refactoring and upgrading outdated monolithic systems into agile microservices.' }
];

const industryData = [
  { id: 1, name: 'FinTech & Banking' }, { id: 2, name: 'Healthcare & Life Sciences' },
  { id: 3, name: 'E-Commerce & Retail' }, { id: 4, name: 'Logistics & Supply Chain' },
  { id: 5, name: 'Manufacturing' }, { id: 6, name: 'Telecommunications' },
  { id: 7, name: 'EdTech' }, { id: 8, name: 'Energy & Utilities' }
];

const faqData = [
  { question: 'What is your typical project timeline?', answer: 'Timelines vary based on complexity, but a standard MVP takes 8-12 weeks from discovery to deployment.' },
  { question: 'Do you offer ongoing support after launch?', answer: 'Yes, we provide 24/7 proactive monitoring, SLA-backed support, and continuous optimization.' },
  { question: 'How do you handle data security?', answer: 'We implement zero-trust architectures, end-to-end encryption, and adhere strictly to ISO 27001 and SOC2 standards.' }
];

// --- INLINED REUSABLE UI COMPONENTS ---
const SectionTitle = ({ title, subtitle, badge }) => (
  <div className="max-w-3xl">
    {badge && (
      <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
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

// --- MAIN HOME COMPONENT ---
export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const statsData = [
    { value: '500+', label: 'Projects Delivered', icon: <Rocket className="w-6 h-6 text-amber-400" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6 text-orange-400" /> },
    { value: '50+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-teal-400" /> },
    { value: '12+', label: 'Years Experience', icon: <Award className="w-6 h-6 text-amber-300" /> },
  ];

  const processSteps = [
    { title: 'Discovery', desc: 'Understanding your vision and core requirements', icon: <Search className="w-5 h-5" /> },
    { title: 'Planning', desc: 'Strategic roadmap and architecture blueprinting', icon: <ClipboardList className="w-5 h-5" /> },
    { title: 'Development', desc: 'Agile engineering and continuous integration', icon: <Code className="w-5 h-5" /> },
    { title: 'Testing', desc: 'Rigorous QA automation and security audits', icon: <TestTube className="w-5 h-5" /> },
    { title: 'Deployment', desc: 'Zero-downtime release and cloud orchestration', icon: <Rocket className="w-5 h-5" /> },
    { title: 'Support', desc: '24/7 proactive monitoring and optimization', icon: <Wrench className="w-5 h-5" /> },
  ];

  const whyUs = [
    { icon: <Users className="w-6 h-6" />, title: 'Elite Engineering', desc: 'Senior developers and architects average 8+ years of dedicated technology experience.', accent: 'amber' },
    { icon: <Code className="w-6 h-6" />, title: 'Clean Architecture', desc: 'Maintainable, fully documented, and ultra-scalable codebase built to enterprise standards.', accent: 'teal' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Native First', desc: 'Resilient serverless and containerized deployments optimizing total operational cost.', accent: 'orange' },
    { icon: <Shield className="w-6 h-6" />, title: 'Zero Trust Security', desc: 'Strict end-to-end encryption, automated vulnerability testing, and compliance readiness.', accent: 'amber' },
  ];

  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-50 font-sans">
      
{/* Hero Content */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="lg:col-span-7"
>
  {/* Badge */}
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] mt-24 mb-6 backdrop-blur-md">
    <Zap className="w-4 h-4" />
    <span>Trusted Technology Partner</span>
  </div>

  {/* Heading */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white text-center mx-auto max-w-4xl">
    Empowering Businesses Through
    <span className="block bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent mt-2">
      Innovative Digital Solutions
    </span>
  </h1>

  {/* Description */}
<p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light text-center mx-auto">
    EverstTech Services delivers enterprise-grade software development,
    cloud solutions, AI-driven automation, cybersecurity, and IT consulting
    services that help organisations innovate, scale efficiently, and stay
    ahead in a rapidly evolving digital world.
  </p>

{/* CTA Buttons */}
<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
  <Button variant="primary">
    Explore Our Services
    <ArrowRight size={18} className="ml-2" />
  </Button>

  <Button variant="outline">
    Schedule a Consultation
  </Button>
</div>
  {/* Statistics */}
  <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800/70 pt-8">

    <div>
      <h3 className="text-3xl font-bold text-amber-400">100+</h3>
      <p className="text-slate-400 text-sm mt-2">
        Projects Delivered
      </p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-amber-400">50+</h3>
      <p className="text-slate-400 text-sm mt-2">
        Happy Clients
      </p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-amber-400">10+</h3>
      <p className="text-slate-400 text-sm mt-2">
        Technology Expertise
      </p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-amber-400">24×7</h3>
      <p className="text-slate-400 text-sm mt-2">
        Technical Support
      </p>
    </div>

  </div>

  {/* Features */}
  <div className="mt-10 flex flex-wrap gap-4">

    <div className="flex items-center gap-2 bg-[#111827] border border-slate-700 rounded-full px-4 py-2">
      <CheckCircle2 size={18} className="text-amber-400" />
      <span className="text-slate-300 text-sm">
        Custom Software Development
      </span>
    </div>

    <div className="flex items-center gap-2 bg-[#111827] border border-slate-700 rounded-full px-4 py-2">
      <CheckCircle2 size={18} className="text-amber-400" />
      <span className="text-slate-300 text-sm">
        Cloud & DevOps Solutions
      </span>
    </div>

    <div className="flex items-center gap-2 bg-[#111827] border border-slate-700 rounded-full px-4 py-2">
      <CheckCircle2 size={18} className="text-amber-400" />
      <span className="text-slate-300 text-sm">
        AI & Automation
      </span>
    </div>

    <div className="flex items-center gap-2 bg-[#111827] border border-slate-700 rounded-full px-4 py-2">
      <CheckCircle2 size={18} className="text-amber-400" />
      <span className="text-slate-300 text-sm">
        Cybersecurity Services
      </span>
    </div>

  </div>
</motion.div>

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

      {/* --- SERVICES --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionTitle title="Engineered For Modern Business" subtitle="Comprehensive technology capabilities tailored to propel your market leadership." badge="Solutions Capabilities" />
          
          <div className="mt-16 divide-y divide-slate-800/80 border-y border-slate-800/80">
            {servicesData.map((service, index) => (
              <motion.a 
                key={service.id} href="#"
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-12 items-center gap-6 py-8 px-4 hover:bg-amber-500/[0.02] transition-colors"
              >
                <span className="md:col-span-1 font-mono text-sm text-amber-500/50 group-hover:text-amber-400 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="md:col-span-1 flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Code className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="md:col-span-4 text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="md:col-span-5 text-slate-400 text-sm leading-relaxed font-light">
                  {service.shortDesc}
                </p>
                <span className="md:col-span-1 flex md:justify-end">
                  <ArrowUpRight className="w-6 h-6 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6">
          <SectionTitle title="Why Leading Enterprises Partner With Us" subtitle="We blend technical expertise, architectural precision, and agile execution." badge="The Everst Advantage" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item, index) => (
              <motion.div 
                key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="flex items-start gap-5 p-8 rounded-2xl bg-[#0D1117] border border-slate-800 hover:border-slate-700/80 hover:shadow-xl hover:shadow-amber-500/5 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:-translate-y-1 ${accentMap[item.accent]}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DELIVERY FRAMEWORK --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <SectionTitle title="Our Delivery Framework" subtitle="A transparent, metric-driven lifecycle engineered for predictable project execution." badge="Methodology" />
          </div>
          
          <div className="relative mt-20">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-4">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#0A0E14] border-2 border-slate-700 group-hover:border-amber-500/50 flex items-center justify-center text-slate-400 group-hover:text-amber-400 transition-colors mb-5 shadow-lg">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-amber-500/60 uppercase tracking-widest mb-2">Phase 0{index + 1}</span>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed max-w-[200px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <SectionTitle title="Frequently Asked Questions" subtitle="Clear answers to help you understand our operational model." badge="Knowledge Base" />
          </div>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div key={idx} className="border border-slate-800 bg-[#0D1117] rounded-xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-black">{faq.question}</span>
                  {activeFaq === idx ? <Minus className="text-amber-400 shrink-0" /> : <Plus className="text-slate-500 shrink-0" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="p-6 pt-0 text-slate-400 font-light leading-relaxed border-t border-slate-800/50 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-teal-500/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Accelerate Your Technology Roadmap?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">Speak with our principal solution architects today to formulate your execution plan and scale your enterprise.</p>
          <Button variant="primary" className="text-lg px-8 py-4">
            Schedule Technical Discovery <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      
    </div>
  );
}