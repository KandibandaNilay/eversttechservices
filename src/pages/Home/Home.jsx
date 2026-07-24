import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Code, 
  Cloud, 
  Shield, 
  Zap, 
  Rocket, 
  Award, 
  Star, 
  Search, 
  ClipboardList, 
  TestTube, 
  Wrench, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';

import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import CTA from '../../components/common/CTA';
import Stats from '../../components/common/Stats';
import Testimonials from '../../components/common/Testimonials';
import FAQ from '../../components/common/FAQ';

import { servicesData } from '../../data/servicesData';
import { faqData } from '../../data/faqData';
import { industryData } from '../../data/industryData';

/* Angled schematic divider used between sections instead of a plain hairline. 
   Encodes the "blueprint" motif consistently through the page. */
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

const Home = () => {
  const statsData = [
    { value: '500+', label: 'Projects Delivered', icon: <Rocket className="w-6 h-6 text-amber-400" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6 text-orange-400" /> },
    { value: '50+', label: 'Expert Team Members', icon: <Users className="w-6 h-6 text-teal-400" /> },
    { value: '12+', label: 'Years of Excellence', icon: <Award className="w-6 h-6 text-amber-300" /> },
  ];

  const testimonialsData = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechCorp',
      content: 'Everst Tech delivered an exceptional software solution that transformed our business operations. Their team is professional, skilled, and truly cares about client success.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'CTO, HealthPlus',
      content: 'The mobile app developed by Everst Tech has been a game-changer for our healthcare services. The quality and performance exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Founder, ShopEasy',
      content: 'Working with Everst Tech was a seamless experience. They understood our requirements and delivered a platform that has significantly grown our business.',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      role: 'VP Engineering, FinSecure',
      content: 'The team at Everst Tech provided exceptional DevOps support and cloud solutions. Their expertise helped us scale our infrastructure efficiently.',
      rating: 4
    }
  ];

  const processSteps = [
    { title: 'Discovery', desc: 'Understanding your vision, business goals, and core requirements', icon: <Search className="w-6 h-6" /> },
    { title: 'Planning', desc: 'Strategic roadmap design and system architecture blueprinting', icon: <ClipboardList className="w-6 h-6" /> },
    { title: 'Development', desc: 'Agile engineering with continuous integration and clean code', icon: <Code className="w-6 h-6" /> },
    { title: 'Testing', desc: 'Rigorous QA automation, security audits, and load testing', icon: <TestTube className="w-6 h-6" /> },
    { title: 'Deployment', desc: 'Zero-downtime release pipeline and cloud orchestration', icon: <Rocket className="w-6 h-6" /> },
    { title: 'Support', desc: '24/7 proactive monitoring, optimization, and SLAs', icon: <Wrench className="w-6 h-6" /> },
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
    <div className="bg-[#0A0E14] text-slate-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-50">

      {/* ============ HERO ============ */}
      <section className="relative min-h-[94vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_0%,rgba(245,166,35,0.14),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(45,212,191,0.10),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

        {/* schematic corner ticks */}
        <div className="absolute top-8 left-8 w-10 h-10 border-l-2 border-t-2 border-amber-500/30 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-10 h-10 border-r-2 border-b-2 border-amber-500/30 hidden lg:block" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md font-mono">
                <Zap className="w-3.5 h-3.5 animate-pulse" />
                <span>Next-Gen Enterprise IT Solutions</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Architecting <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">Digital Future</span> For Scaling Enterprises
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
                We design, build, and scale high-performance custom software, cloud platforms, and cybersecurity frameworks tailored to market leaders.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/services" variant="primary" size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 border-0 shadow-lg shadow-amber-500/20 text-slate-950 font-semibold">
                  Explore Solutions
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:border-slate-600">
                  Book Architecture Call
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-amber-400" />
                  <span>Trusted by 500+ global brands</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-amber-400" />
                  <span>99.9% Delivery Precision</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Live terminal-style readout — the page's signature element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-teal-400 rounded-2xl blur-xl opacity-25" />

                <div className="relative rounded-2xl bg-[#0D1117] border border-slate-800 shadow-2xl overflow-hidden">
                  {/* terminal titlebar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#10151C]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                      <Terminal className="w-3 h-3" /> deploy@everst:~
                    </span>
                  </div>

                  <div className="p-5 font-mono text-[13px] leading-relaxed">
                    <p className="text-slate-500">$ everst status --system core</p>
                    <p className="mt-2 text-slate-300">
                      <span className="text-teal-400">✓</span> cloud-infra&nbsp;&nbsp;
                      <span className="text-slate-500">AWS / Azure Hybrid</span>
                    </p>
                    <p className="text-slate-300">
                      <span className="text-teal-400">✓</span> security&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-slate-500">ISO 27001 · SOC2</span>
                    </p>
                    <p className="text-slate-300">
                      <span className="text-teal-400">✓</span> pipeline&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-slate-500">CI/CD automated</span>
                    </p>
                    <p className="mt-3 text-slate-300">
                      <span className="text-amber-400">→</span> uptime&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-white font-semibold">99.98%</span>
                    </p>

                    <div className="mt-4 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '99.8%' }}
                        transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-teal-400"
                      />
                    </div>
                    <p className="mt-2 text-[11px] text-slate-600">performance score · 99.8 / 100</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-[#10151C]/60 border-y border-slate-800/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <Stats stats={statsData} />
        </div>
      </section>

      {/* ============ SERVICES — numbered ledger layout ============ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Engineered For Modern Business"
            subtitle="Comprehensive technology capabilities tailored to propel your market leadership."
            badge="Solutions Capabilities"
            dark={true}
          />

          <div className="mt-14 divide-y divide-slate-800/80 border-y border-slate-800/80">
            {servicesData.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-12 items-center gap-4 py-7 px-2 md:px-4 hover:bg-amber-500/[0.03] transition-colors"
                >
                  <span className="md:col-span-1 font-mono text-sm text-amber-500/60 group-hover:text-amber-400 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="md:col-span-2 flex items-center">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Code className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="md:col-span-4 text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="md:col-span-4 text-slate-400 text-sm leading-relaxed font-light">
                    {service.shortDesc}
                  </p>
                  <span className="md:col-span-1 flex md:justify-end">
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="primary" size="lg" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
              View Complete Service Portfolio
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4"><SectionDivider /></div>

      {/* ============ WHY CHOOSE US — alternating rows ============ */}
      <section className="py-20 md:py-28 bg-[#10151C]/40">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Leading Enterprises Partner With Us"
            subtitle="We blend technical expertise, architectural precision, and agile execution."
            badge="The Everst Advantage"
            dark={true}
          />

          <div className="mt-14 space-y-4">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`flex flex-col sm:flex-row ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''} items-start sm:items-center gap-5 p-6 rounded-2xl bg-[#10151C]/80 border border-slate-800 hover:border-slate-700 transition`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border shrink-0 ${accentMap[item.accent]}`}>
                  {item.icon}
                </div>
                <div className={index % 2 === 1 ? 'sm:text-right' : ''}>
                  <h3 className="font-bold text-lg text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light max-w-2xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Vertical Depth Across Domains"
            subtitle="Domain-focused tech solutions customized to solve specialized industry challenges."
            badge="Industries We Scale"
            dark={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {industryData.slice(0, 8).map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="p-5 rounded-xl bg-[#10151C]/60 border border-slate-800 hover:border-amber-500/40 text-center transition group">
                  <h4 className="font-semibold text-slate-200 text-sm group-hover:text-amber-400 transition">
                    {industry.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4"><SectionDivider /></div>

      {/* ============ PROCESS — connected timeline ============ */}
      <section className="py-20 md:py-28 bg-[#10151C]/40">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Delivery Framework"
            subtitle="A transparent, metric-driven lifecycle engineered for predictable project execution."
            badge="Methodology"
            dark={true}
          />

          <div className="relative mt-14">
            {/* connecting line for desktop */}
            <div className="hidden lg:block absolute top-6 left-[8.33%] right-[8.33%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative flex flex-col items-start lg:items-center lg:text-center"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0A0E14] border-2 border-amber-500/40 flex items-center justify-center text-amber-400 mb-4">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-amber-400/70 uppercase tracking-widest">
                    Phase 0{index + 1}
                  </span>
                  <h3 className="font-bold text-white text-base mt-1">{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials testimonials={testimonialsData} dark={true} />

      {/* FAQ */}
      <FAQ items={faqData.slice(0, 5)} dark={true} />

      {/* CTA */}
      <CTA 
        title="Ready to Accelerate Your Technology Roadmap?"
        subtitle="Speak with our principal solution architects today to formulate your execution plan."
        buttonText="Schedule Technical Discovery"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Home;