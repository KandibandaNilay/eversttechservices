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

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-royalBlue to-cyan rounded-xl flex items-center justify-center shadow-lg shadow-royalBlue/20">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-darkBlue">Everst<span className="text-royalBlue">Tech</span></span>
                <span className="block text-[10px] font-medium text-gray-500 tracking-widest -mt-0.5">SERVICES</span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Empowering businesses with innovative technology solutions. We deliver excellence in software development, cloud services, and digital transformation.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm hover:bg-royalBlue hover:text-white transition flex items-center justify-center text-gray-600 hover:text-white border border-gray-200">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm hover:bg-royalBlue hover:text-white transition flex items-center justify-center text-gray-600 hover:text-white border border-gray-200">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm hover:bg-royalBlue hover:text-white transition flex items-center justify-center text-gray-600 hover:text-white border border-gray-200">
                <FaLinkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm hover:bg-royalBlue hover:text-white transition flex items-center justify-center text-gray-600 hover:text-white border border-gray-200">
                <FaYoutube size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm hover:bg-royalBlue hover:text-white transition flex items-center justify-center text-gray-600 hover:text-white border border-gray-200">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-darkBlue font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-600 hover:text-royalBlue transition flex items-center gap-2 group"
                  >
                    <FaArrowRight size={12} className="text-royalBlue/50 group-hover:text-royalBlue transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-darkBlue font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-sm text-gray-600 hover:text-royalBlue transition flex items-center gap-2 group"
                  >
                    <FaArrowRight size={12} className="text-royalBlue/50 group-hover:text-royalBlue transition" />
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm text-royalBlue hover:text-darkBlue transition flex items-center gap-2">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-darkBlue font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <FaMapMarkerAlt size={16} className="text-royalBlue mt-0.5 flex-shrink-0" />
                <span>Plot No. 34, Road No. 5, New Venkataramana Colony, Vanasthalipuram, Hyderabad – 500070</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <FaPhone size={16} className="text-royalBlue flex-shrink-0" />
                <a href="tel:+919948886996" className="hover:text-royalBlue transition">+91-9948886996</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <FaEnvelope size={16} className="text-royalBlue flex-shrink-0" />
                <a href="mailto:info@eversttechservices.com" className="hover:text-royalBlue transition">info@eversttechservices.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <FaClock size={16} className="text-royalBlue flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
            <div>
              <h5 className="text-darkBlue font-semibold text-sm mb-2">Subscribe to Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3.5 py-2.5 rounded-l-xl bg-white border border-gray-300 text-gray-700 placeholder:text-gray-400 text-sm focus:outline-none focus:border-royalBlue focus:ring-2 focus:ring-royalBlue/20"
                />
                <button className="px-4 bg-gradient-to-r from-royalBlue to-cyan text-white rounded-r-xl hover:opacity-90 transition">
                  <FaPaperPlane size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <span>© {currentYear} Everst Tech Services. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <Link to="/privacy" className="hover:text-royalBlue transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-royalBlue transition">Terms & Conditions</Link>
              <Link to="/cookies" className="hover:text-royalBlue transition">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;