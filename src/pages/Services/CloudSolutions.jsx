import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Server, Shield, Zap, Database, Network, 
  ArrowRight, ChevronRight, CheckCircle2, Activity,
  Cpu, Lock, RefreshCcw, Box, Building
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

// --- MAIN CLOUD SERVICES COMPONENT ---
export default function CloudServices() {
  const capabilities = [
    {
      icon: <Server className="w-6 h-6" />, title: 'Enterprise Cloud Migration', accent: 'amber',
      desc: 'Seamless lift-and-shift or comprehensive refactoring of legacy monoliths to modern cloud environments with zero operational downtime.'
    },
    {
      icon: <Box className="w-6 h-6" />, title: 'Cloud-Native Development', accent: 'teal',
      desc: 'Architecting resilient microservices and serverless applications utilizing Docker, Kubernetes, and AWS Lambda for infinite scale.'
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />, title: 'DevOps & CI/CD Pipelines', accent: 'orange',
      desc: 'Automating infrastructure deployment through Infrastructure-as-Code (IaC) via Terraform, ensuring rapid and reliable delivery cycles.'
    },
    {
      icon: <Shield className="w-6 h-6" />, title: 'Cloud Security & Compliance', accent: 'amber',
      desc: 'Implementing Zero-Trust architectures, identity access management (IAM), and continuous threat monitoring tailored for SOC2/HIPAA compliance.'
    },
    {
      icon: <Activity className="w-6 h-6" />, title: 'FinOps & Cost Optimization', accent: 'teal',
      desc: 'Auditing existing cloud infrastructure to eliminate resource waste, right-size computing instances, and maximize cloud ROI.'
    },
    {
      icon: <Database className="w-6 h-6" />, title: 'Data Lake & Analytics', accent: 'orange',
      desc: 'Centralizing enterprise data streams into scalable cloud warehouses (Snowflake, Redshift) for real-time AI and BI processing.'
    }
  ];

  const processSteps = [
    { title: 'Discovery & Audit', desc: 'Deep-dive analysis of your current infrastructure, dependencies, and business objectives.', icon: <Network /> },
    { title: 'Architecture Design', desc: 'Blueprinting a secure, compliant, and cost-optimized multi-cloud or hybrid strategy.', icon: <Cpu /> },
    { title: 'Execution & Migration', desc: 'Phased deployment and workload transition utilizing automated CI/CD pipelines.', icon: <Zap /> },
    { title: 'Optimization & Managed Ops', desc: '24/7 telemetry monitoring, security patching, and continuous FinOps tuning.', icon: <Activity /> }
  ];

  const cloudPartners = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Snowflake'];

  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20',
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-50 font-sans">
      
      {/* --- HERO / PAGE BANNER --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(45,212,191,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
                <a href="/" className="hover:text-teal-400 transition-colors">Home</a>
                <ChevronRight size={14} />
                <a href="/services" className="hover:text-teal-400 transition-colors">Services</a>
                <ChevronRight size={14} />
                <span className="text-teal-400">Cloud Architecture</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Unleash Enterprise Agility With <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">Cloud Infrastructure</span>
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We design, deploy, and manage highly resilient multi-cloud and hybrid environments. Scale infinitely, reduce operational overhead, and secure your digital assets with Everst Tech.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Schedule Architecture Review <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Graphic */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-amber-500/20 rounded-full blur-[100px] opacity-60" />
              <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Cloud className="text-teal-400 w-6 h-6" />
                    <span className="font-mono text-sm font-semibold text-slate-300">us-east-1 (Production)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Healthy
                  </div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                    <span className="text-slate-400">API Gateway</span>
                    <span className="text-amber-400">99.99% Uptime</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                    <span className="text-slate-400">Kubernetes Clusters</span>
                    <span className="text-teal-400">Auto-Scaling Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                    <span className="text-slate-400">Database Instances</span>
                    <span className="text-orange-400">Encrypted at Rest</span>
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
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Architecting upon industry-leading platforms</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {cloudPartners.map((partner, idx) => (
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
              title="Cloud Services Portfolio" 
              subtitle="From initial migration to advanced cloud-native application engineering, we provide end-to-end cloud capabilities." 
              badge="Our Expertise" 
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

      {/* --- SECURITY & COMPLIANCE HIGHLIGHT --- */}
      <section className="py-24 bg-[#10151C]/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionTitle 
                  title="Security Baked In, Not Bolted On." 
                  subtitle="Enterprise cloud infrastructure requires uncompromising security. We engineer environments based on Zero-Trust principles from day one." 
                  badge={<><Lock className="w-3.5 h-3.5" /> Security First</>} 
                />
                <ul className="mt-8 space-y-4">
                  {['SOC2 & HIPAA Compliance Readiness', 'End-to-End Encryption (Transit & Rest)', 'Automated Vulnerability Scanning', 'Identity & Access Management (IAM)'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300 font-light">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-[#0D1117] border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex items-center gap-4 mb-6">
                    <Shield className="w-10 h-10 text-amber-500" />
                    <div>
                      <h4 className="text-white font-bold text-lg">Active Threat Monitoring</h4>
                      <p className="text-xs text-slate-400 font-mono">System Integrity: Nominal</p>
                    </div>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="w-full bg-[#0A0E14] rounded p-3 flex justify-between border border-slate-800">
                      <span className="text-slate-500">Intrusion Detection System</span>
                      <span className="text-teal-400">ACTIVE</span>
                    </div>
                    <div className="w-full bg-[#0A0E14] rounded p-3 flex justify-between border border-slate-800">
                      <span className="text-slate-500">WAF Rule Evaluation</span>
                      <span className="text-teal-400">PASS</span>
                    </div>
                    <div className="w-full bg-[#0A0E14] rounded p-3 flex justify-between border border-slate-800">
                      <span className="text-slate-500">DDoS Mitigation Layer</span>
                      <span className="text-teal-400">STANDBY</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CLOUD ADOPTION FRAMEWORK --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center flex flex-col items-center mb-20">
            <SectionTitle 
              title="Cloud Adoption Framework" 
              subtitle="A de-risked, phased methodology ensuring predictable migrations and optimal architecture." 
              badge="Our Methodology" 
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
          <Building className="w-12 h-12 text-teal-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Connect with our cloud architects to audit your existing environment and blueprint your transition to the cloud.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
              Book Architecture Consultation <ArrowRight className="ml-2 w-5 h-5" />
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