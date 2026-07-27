import React from 'react';
import { Link } from 'react-router-dom';

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#06090D] border-t border-slate-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tighter">
                EVERST<span className="text-amber-500">TECH</span>
              </span>
            </Link>
            <p className="text-slate-400 font-light leading-relaxed max-w-xs">
              Architecting enterprise-grade software solutions for market leaders. We turn complex business challenges into scalable digital ecosystems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={12} /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>+91-9948886996</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>info@eversttechservices.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>

          {/* Socials / CTA */}
          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, idx) => (
  <a
    key={idx}
    href="#"
    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
  >
    <Icon size={18} />
  </a>
))}
            </div>
            <Link to="/contact" className="inline-flex items-center text-amber-500 font-bold hover:gap-2 transition-all">
              Start a Project <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2026 EverstTech Services. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;