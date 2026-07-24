import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
  FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram,
  FaPaperPlane, FaArrowRight
} from 'react-icons/fa';
import { servicesData } from '../../data/servicesData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const serviceLinks = servicesData.slice(0, 6);

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
    <footer className="relative bg-slate-950 border-t border-slate-800/60 text-slate-300 overflow-hidden z-10">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          
          {/* 1. Company Info */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">
                  Everst<span className="text-cyan-400">Tech</span>
                </span>
                <span className="block text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mt-0.5">
                  Services
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
              Architecting the digital future. We deliver enterprise-grade software development, cloud scale capabilities, and digital transformation.
            </p>
            
            {/* Social Icons - Glassmorphic Style */}
            <div className="flex items-center gap-3">
              {[FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight size={10} className="text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Core Capabilities
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight size={10} className="text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/services" className="text-sm font-medium text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group">
                  View All Services 
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* 4. Contact & Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Get in Touch
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <div className="mt-0.5 p-1.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <FaMapMarkerAlt size={12} />
                </div>
                <span className="leading-relaxed">Plot No. 34, Road No. 5, New Venkataramana Colony, Vanasthalipuram, Hyderabad – 500070</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <FaPhone size={12} />
                </div>
                <a href="tel:+919948886996" className="hover:text-cyan-400 transition-colors">+91-9948886996</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <FaEnvelope size={12} />
                </div>
                <a href="mailto:info@eversttechservices.com" className="hover:text-cyan-400 transition-colors">info@eversttechservices.com</a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="text-white font-medium text-sm mb-3">Subscribe to Insights</h5>
              <div className="flex group">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="flex-1 px-4 py-2.5 rounded-l-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <button className="px-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-r-xl hover:opacity-90 transition-opacity flex items-center justify-center">
                  <FaPaperPlane size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/50 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
            <span>© {currentYear} Everst Tech Services. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;