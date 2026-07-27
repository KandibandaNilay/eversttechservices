import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Terminal, Eye, FileKey, 
  Server, AlertTriangle, ArrowRight, ChevronRight, 
  CheckCircle2, Fingerprint, Activity, Network, Target
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

// --- MAIN CYBERSECURITY COMPONENT ---
export default function CyberSecurity() {
  const capabilities = [
    {
      icon: <Eye className="w-6 h-6" />, title: 'Threat Hunting & MDR', accent: 'amber',
      desc: 'Continuous 24/7 monitoring and Managed Detection and Response (MDR) to identify and neutralize advanced persistent threats before they execute.'
    },
    {
      icon: <Target className="w-6 h-6" />, title: 'Penetration Testing', accent: 'teal',
      desc: 'Rigorous, ethical hacking of your networks, web applications, and APIs to uncover vulnerabilities before malicious actors exploit them.'
    },
    {
      icon: <Lock className="w-6 h-6" />, title: 'Zero-Trust Architecture', accent: 'orange',
      desc: 'Designing strict Identity and Access Management (IAM) protocols ensuring verify-always authorization across your entire enterprise.'
    },
    {
      icon: <FileKey className="w-6 h-6" />, title: 'Compliance & Governance', accent: 'amber',
      desc: 'Preparing and mapping your infrastructure for rigorous regulatory audits including SOC2 Type II, ISO 27001, HIPAA, and GDPR.'
    },
    {
      icon: <Network className="w-6 h-6" />, title: 'Cloud Security (CSPM)', accent: 'teal',
      desc: 'Securing AWS, Azure, and GCP environments through Cloud Security Posture Management, enforcing strict misconfiguration guardrails.'
    },
    {
      icon: <Activity className="w-6 h-6" />, title: 'Incident Response', accent: 'orange',
      desc: 'Rapid-deployment forensic teams ready to isolate compromised systems, eradicate threats, and restore operational continuity immediately.'
    }
  ];

  const processSteps = [
    { title: 'Vulnerability Audit', desc: 'Comprehensive scanning of your codebase, network topology, and cloud environments.', icon: <Eye /> },
    { title: 'Threat Modeling', desc: 'Identifying attack vectors and designing a customized, layered defensive architecture.', icon: <Network /> },
    { title: 'Hardening', desc: 'Deploying end-to-end encryption, strict IAM policies, and next-gen firewalls (NGFW).', icon: <Lock /> },
    { title: 'Active SOC', desc: 'Transitioning to 24/7 continuous telemetry monitoring and automated threat mitigation.', icon: <Activity /> }
  ];

  const techPartners = ['CrowdStrike', 'Palo Alto Networks', 'Splunk', 'OWASP', 'Auth0', 'AWS Security Hub'];

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
                <span className="text-amber-400">Cybersecurity</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Fortify Your <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Digital Perimeter</span>
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We engineer Zero-Trust architectures and provide continuous, proactive threat hunting to protect your enterprise data, maintain regulatory compliance, and ensure uninterrupted operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Request Security Audit <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Graphic - Terminal / Security Scan UI */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-teal-500/20 rounded-full blur-[100px] opacity-60" />
              <div className="relative bg-[#0D1117]/90 border border-slate-700/50 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden font-mono">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#10151C]">
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="ml-3 flex items-center gap-2 text-xs text-slate-500">
                    <Terminal className="w-3.5 h-3.5" /> sec-ops-scanner
                  </span>
                </div>
                
                {/* Terminal Body */}
                <div className="p-6 text-sm leading-relaxed space-y-3">
                  <p className="text-slate-400"><span className="text-amber-400">$</span> everst-sec run --audit --deep-scan</p>
                  
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="space-y-1">
                    <p className="text-slate-300">Initializing Zero-Trust verification protocols...</p>
                    <p className="text-slate-300">Scanning network topology mapping...</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="pt-2 space-y-1">
                    <p className="text-emerald-400">[PASS] End-to-end encryption verified.</p>
                    <p className="text-emerald-400">[PASS] IAM policies strict enforcement confirmed.</p>
                    <p className="text-amber-400 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> [WARN] Outdated TLS certificate on secondary node.
                    </p>
                    <p className="text-slate-400 mt-2">→ Initiating automated patch sequence...</p>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="pt-2">
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs">
                      <Shield className="w-3.5 h-3.5" /> Enterprise Perimeter Secured
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK BANNER --- */}
      <div className="border-b border-slate-800/80 bg-[#06090D] py-8 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Securing environments with industry standards</p>
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
              title="Comprehensive Security Operations" 
              subtitle="From proactive vulnerability management to active threat neutralization, we provide full-spectrum cyber defense." 
              badge="Defense Capabilities" 
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

      {/* --- PROACTIVE DEFENSE HIGHLIGHT --- */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-3">
                        <Fingerprint className="text-teal-400 w-6 h-6" />
                        <span className="font-semibold text-white">Identity Access Log</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500">Last 15 Mins</span>
                    </div>
                    
                    <div className="space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Admin_Root login from 192.168.1.45</span>
                        <span className="text-emerald-400">AUTHORIZED</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">API key rotated (Service_Worker_2)</span>
                        <span className="text-emerald-400">SUCCESS</span>
                      </div>
                      <div className="flex items-center justify-between p-2 -mx-2 bg-red-500/10 border border-red-500/20 rounded">
                        <span className="text-red-400">Anomalous Geo-location login attempt</span>
                        <span className="text-red-400 font-bold">BLOCKED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionTitle 
                  title="Assume Breach. Defend Proactively." 
                  subtitle="Legacy perimeter defenses are obsolete. We implement Zero-Trust principles, meaning no user or system is trusted by default, regardless of their location." 
                  badge={<><Shield className="w-3.5 h-3.5" /> Zero-Trust Paradigm</>} 
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Micro-segmentation of networks to prevent lateral movement.', 
                    'Mandatory Multi-Factor Authentication (MFA) enforcement.', 
                    'Continuous evaluation of device health and user behavior.', 
                    'Automated isolation of compromised endpoints.'
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

      {/* --- METHODOLOGY FRAMEWORK --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center mb-20">
            <SectionTitle 
              title="Security Hardening Framework" 
              subtitle="A systematic, intelligence-driven methodology to elevate your organizational security posture." 
              badge="Deployment Process" 
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
          <Shield className="w-12 h-12 text-amber-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don't Wait For A Breach.</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Speak with our elite security architects today to identify vulnerabilities and secure your enterprise infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
              Schedule Security Audit <ArrowRight className="ml-2 w-5 h-5" />
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