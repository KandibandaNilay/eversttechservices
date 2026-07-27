import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight,
  Zap,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

// --- INLINED MOCK DATA ---
const serviceLinks = [
  { id: 1, slug: 'custom-software', title: 'Custom Software Engineering' },
  { id: 2, slug: 'cloud-architecture', title: 'Cloud Architecture & Migration' },
  { id: 3, slug: 'cybersecurity', title: 'Cybersecurity & Compliance' },
  { id: 4, slug: 'devops', title: 'DevOps & CI/CD Automation' },
  { id: 5, slug: 'ai-ml', title: 'AI & Machine Learning' },
  { id: 6, slug: 'legacy-modernization', title: 'Legacy Modernization' }
];

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/technologies', label: 'Technologies' },
  { path: '/industries', label: 'Industries' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/blog', label: 'Blog' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
  { path: '/faq', label: 'FAQ' },
];

const socialLinks = [
  { icon: <FaFacebook size={16} />, href: "#" },
  { icon: <FaTwitter size={16} />, href: "#" },
  { icon: <FaLinkedin size={16} />, href: "#" },
  { icon: <FaYoutube size={16} />, href: "#" },
  { icon: <FaInstagram size={16} />, href: "#" },
];

// --- MAIN FOOTER COMPONENT ---
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants for staggered rendering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-[#0A0E14] border-t border-slate-800/80 text-slate-300 overflow-hidden z-10 selection:bg-amber-500/30 selection:text-amber-50 font-sans">
      
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          
          {/* 1. Company Info (Wider Column) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:pr-8">
            <a href="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(245,166,35,0.15)] group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Everst<span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Tech</span>
                </span>
                <span className="block text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mt-0.5">
                  Services
                </span>
              </div>
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed mb-8 font-light">
              Architecting the digital future. We deliver enterprise-grade software development, highly resilient cloud infrastructures, and secure digital transformations for scaling market leaders.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} href={social.href} 
                  className="w-10 h-10 rounded-xl bg-[#0D1117] border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group font-light">
                    <ArrowRight size={12} className="text-slate-700 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Core Capabilities */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Core Capabilities
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <a href={`/services/${service.slug}`} className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group font-light">
                    <ArrowRight size={12} className="text-slate-700 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    {service.title}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href="/services" className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2 group">
                  Explore All Capabilities 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 4. Contact & Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              Get in Touch
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <div className="mt-0.5 p-1.5 rounded-lg bg-[#0D1117] border border-slate-800 text-teal-400 shrink-0">
                  <MapPin size={14} />
                </div>
                <span className="leading-relaxed font-light">Plot No. 34, Road No. 5, New Venkataramana Colony, Vanasthalipuram, Hyderabad – 500070</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <div className="p-1.5 rounded-lg bg-[#0D1117] border border-slate-800 text-amber-400 shrink-0">
                  <Phone size={14} />
                </div>
                <a href="tel:+919948886996" className="hover:text-amber-400 transition-colors font-light">+91-9948886996</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <div className="p-1.5 rounded-lg bg-[#0D1117] border border-slate-800 text-orange-400 shrink-0">
                  <Mail size={14} />
                </div>
                <a href="mailto:info@eversttechservices.com" className="hover:text-orange-400 transition-colors font-light">info@eversttechservices.com</a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="text-white font-medium text-sm mb-3">Enterprise Insights Newsletter</h5>
              <div className="flex group rounded-xl overflow-hidden shadow-lg shadow-black/20 border border-slate-800 focus-within:border-amber-500/50 transition-colors">
                <input 
                  type="email" 
                  placeholder="Work email address" 
                  className="flex-1 px-4 py-3 bg-[#0D1117] text-white placeholder:text-slate-600 text-sm focus:outline-none"
                />
                <button className="px-5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-400 hover:to-orange-400 transition-colors flex items-center justify-center">
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800/80 bg-[#06090D] relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500">
            <span>© {currentYear} Everst Tech Services. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Architecture</a>
              <a href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}