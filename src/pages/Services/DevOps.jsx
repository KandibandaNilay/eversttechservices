import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, Terminal, Container, RefreshCw, 
  ShieldCheck, Activity, ArrowRight, ChevronRight, 
  CheckCircle2, Box, Cpu, Workflow, Zap, Code
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

// --- MAIN DEVOPS COMPONENT ---
export default function DevOps() {
  const capabilities = [
    {
      icon: <RefreshCw className="w-6 h-6" />, title: 'CI/CD Pipeline Automation', accent: 'amber',
      desc: 'Architecting robust continuous integration and deployment pipelines using GitHub Actions, GitLab CI, or Jenkins for rapid, zero-downtime releases.'
    },
    {
      icon: <Terminal className="w-6 h-6" />, title: 'Infrastructure as Code (IaC)', accent: 'teal',
      desc: 'Provisioning and managing immutable cloud infrastructure dynamically using Terraform, Ansible, and AWS CloudFormation.'
    },
    {
      icon: <Container className="w-6 h-6" />, title: 'Container Orchestration', accent: 'orange',
      desc: 'Modernizing monolithic applications into highly scalable microservices orchestrated via Docker and Kubernetes (EKS/AKS/GKE).'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />, title: 'DevSecOps & Shift-Left', accent: 'amber',
      desc: 'Integrating automated vulnerability scanning, SAST/DAST, and compliance checks directly into your development pipelines.'
    },
    {
      icon: <Activity className="w-6 h-6" />, title: 'Site Reliability Engineering', accent: 'teal',
      desc: 'Ensuring 99.99% uptime through SLI/SLO tracking, automated incident response, and proactive chaos engineering.'
    },
    {
      icon: <Box className="w-6 h-6" />, title: 'Observability & Telemetry', accent: 'orange',
      desc: 'Deploying unified logging and tracing stacks (Prometheus, Grafana, ELK) for complete visibility into distributed system health.'
    }
  ];

  const processSteps = [
    { title: 'Pipeline Audit', desc: 'Analyzing existing workflows to identify deployment bottlenecks and security gaps.', icon: <Workflow /> },
    { title: 'IaC Blueprinting', desc: 'Designing immutable infrastructure templates and automated provisioning scripts.', icon: <Code /> },
    { title: 'CI/CD Implementation', desc: 'Building secure, automated testing and deployment pipelines across all environments.', icon: <Zap /> },
    { title: 'Continuous SRE', desc: 'Providing 24/7 telemetry monitoring, automated scaling, and incident resolution.', icon: <Activity /> }
  ];

  const techPartners = ['Kubernetes', 'Docker', 'Terraform', 'GitLab CI', 'GitHub Actions', 'Jenkins', 'Prometheus'];

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
                <span className="text-amber-400">DevOps & Automation</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Accelerate Delivery. <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Automate Everything.</span>
              </h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                We engineer elite DevOps cultures and implement robust CI/CD pipelines, enabling your engineering teams to ship secure, high-quality code at enterprise velocity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Assess Your Pipeline <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Graphic - CI/CD Pipeline Terminal */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-teal-500/20 rounded-full blur-[100px] opacity-60" />
              <div className="relative bg-[#0D1117]/90 border border-slate-700/50 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-sm">
                
                {/* Pipeline Header */}
                <div className="flex items-center justify-between border-b border-slate-800 bg-[#10151C] px-4 py-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <GitBranch className="w-4 h-4 text-amber-400" />
                    <span>deploy-production-v2.4.1</span>
                  </div>
                  <span className="text-xs text-slate-500">Duration: 2m 14s</span>
                </div>
                
                {/* Pipeline Steps */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400"><CheckCircle2 className="w-3 h-3" /></div>
                    <span className="text-slate-300 w-24">Build</span>
                    <span className="text-slate-500 text-xs">Docker image compilation successful</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400"><CheckCircle2 className="w-3 h-3" /></div>
                    <span className="text-slate-300 w-24">Test</span>
                    <span className="text-slate-500 text-xs">1,204 unit tests passed / 0 failed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400"><CheckCircle2 className="w-3 h-3" /></div>
                    <span className="text-slate-300 w-24">Security</span>
                    <span className="text-slate-500 text-xs">SAST scan clean. No CVEs detected.</span>
                  </div>
                  
                  {/* Active Deployment Step */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-start gap-3 pt-2">
                    <div className="w-5 h-5 rounded-full border-2 border-amber-500 border-t-transparent animate-spin shrink-0" />
                    <div className="flex-1">
                      <span className="text-amber-400 block mb-1">Deploy to Kubernetes Cluster (us-east-1)</span>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2.5, ease: 'linear' }}
                          className="h-full bg-amber-500"
                        />
                      </div>
                      <span className="text-slate-500 text-xs block mt-1">Rolling update: 3/4 pods active...</span>
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
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Mastering the modern delivery toolchain</p>
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
              title="End-to-End Delivery Engineering" 
              subtitle="From code commit to cloud execution, we eliminate manual bottlenecks and enforce rigorous quality gates." 
              badge="DevOps Capabilities" 
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
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">10x Faster</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Deployment Frequency</div>
                      </div>
                    </div>
                    {/* Value Card 2 */}
                    <div className="flex items-center gap-5 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">Zero</div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Manual Configuration Drift</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionTitle 
                  title="Ship Code. Not Bugs." 
                  subtitle="Transform your engineering culture. We build systems where deployments are boring, predictable, and highly secure daily occurrences." 
                  badge={<><Cpu className="w-3.5 h-3.5" /> Engineering Excellence</>} 
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Eradicate manual errors through Infrastructure as Code (IaC).', 
                    'Minimize Mean Time To Recovery (MTTR) with automated rollbacks.', 
                    'Reduce cloud operational costs by dynamically scaling environments.', 
                    'Enforce security and compliance checks before code reaches production.'
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
              title="Automation Transformation Framework" 
              subtitle="Our systematic approach to evolving your teams from manual deployments to elite SRE standards." 
              badge="Execution Strategy" 
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Terminal className="w-12 h-12 text-amber-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Modernize Your Delivery?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Connect with our DevOps architects to review your current infrastructure and blueprint your automated future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4" href="/contact">
              Schedule Infrastructure Audit <ArrowRight className="ml-2 w-5 h-5" />
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