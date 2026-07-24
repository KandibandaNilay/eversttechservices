import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes,
  FaChevronDown, FaChevronRight, FaArrowRight
} from 'react-icons/fa';
import { servicesData } from '../../data/servicesData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services', hasDropdown: true },
    { path: '/technologies', label: 'Technologies' },
    { path: '/industries', label: 'Industries' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-darkBlue text-white text-sm py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <FaPhone size={14} className="text-cyan" />
              <a href="tel:+919948886996" className="hover:text-cyan transition">+91-9948886996</a>
            </span>
            <span className="flex items-center gap-1.5">
              <FaEnvelope size={14} className="text-cyan" />
              <a href="mailto:info@eversttechservices.com" className="hover:text-cyan transition">info@eversttechservices.com</a>
            </span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt size={14} className="text-cyan" />
              <span>Hyderabad, India</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-cyan transition"><FaFacebook size={15} /></a>
            <a href="#" className="hover:text-cyan transition"><FaTwitter size={15} /></a>
            <a href="#" className="hover:text-cyan transition"><FaLinkedin size={15} /></a>
            <a href="#" className="hover:text-cyan transition"><FaYoutube size={15} /></a>
            <a href="#" className="hover:text-cyan transition"><FaInstagram size={15} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-11 h-11 bg-gradient-to-br from-royalBlue to-cyan rounded-xl flex items-center justify-center shadow-lg shadow-royalBlue/20 group-hover:shadow-royalBlue/40 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-darkBlue tracking-tight">Everst<span className="text-royalBlue">Tech</span></span>
                <span className="block text-[10px] font-medium text-gray-500 tracking-widest -mt-0.5">SERVICES</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  {link.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button 
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                          location.pathname.startsWith('/services') 
                            ? 'text-royalBlue bg-royalBlue/5' 
                            : 'text-gray-700 hover:text-royalBlue hover:bg-royalBlue/5'
                        }`}
                      >
                        Services
                        <FaChevronDown size={16} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full pt-2 w-[680px]"
                          >
                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-darkBlue/10 border border-gray-100/50 p-4 grid grid-cols-2 gap-1.5">
                              {servicesData.map((service) => (
                                <Link
                                  key={service.id}
                                  to={`/services/${service.slug}`}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-royalBlue/5 transition-all duration-200 group/item"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-br from-royalBlue/10 to-cyan/10 rounded-lg flex items-center justify-center text-royalBlue group-hover/item:scale-110 transition-transform">
                                    <span className="text-lg">{service.icon}</span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-darkBlue group-hover/item:text-royalBlue transition">{service.title}</div>
                                    <div className="text-xs text-gray-500 line-clamp-1">{service.shortDesc}</div>
                                  </div>
                                </Link>
                              ))}
                              <Link 
                                to="/services" 
                                className="col-span-2 mt-1 text-center text-sm font-medium text-royalBlue hover:text-cyan transition bg-royalBlue/5 hover:bg-royalBlue/10 rounded-xl py-2.5"
                              >
                                View All Services →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive 
                            ? 'text-royalBlue bg-royalBlue/5' 
                            : 'text-gray-700 hover:text-royalBlue hover:bg-royalBlue/5'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-royalBlue to-cyan text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-royalBlue/25 hover:shadow-royalBlue/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-royalBlue/5 flex items-center justify-center text-darkBlue hover:bg-royalBlue/10 transition"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100/50 bg-white/98 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      {link.hasDropdown ? (
                        <div>
                          <button 
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 hover:bg-royalBlue/5 transition text-base font-medium"
                          >
                            Services
                            <FaChevronRight size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-90' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-4 pl-4 border-l-2 border-royalBlue/20 space-y-1 mt-1"
                              >
                                {servicesData.map((service) => (
                                  <Link
                                    key={service.id}
                                    to={`/services/${service.slug}`}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-royalBlue/5 transition text-sm text-gray-600"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span>{service.icon}</span>
                                    <span>{service.title}</span>
                                  </Link>
                                ))}
                                <Link 
                                  to="/services" 
                                  className="block px-4 py-2.5 text-royalBlue font-medium text-sm"
                                  onClick={() => setIsOpen(false)}
                                >
                                  View All Services →
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <NavLink 
                          to={link.path}
                          className={({ isActive }) => 
                            `block px-4 py-3.5 rounded-xl text-base font-medium transition ${
                              isActive 
                                ? 'text-royalBlue bg-royalBlue/5' 
                                : 'text-gray-700 hover:bg-royalBlue/5'
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link 
                    to="/contact" 
                    className="block w-full bg-gradient-to-r from-royalBlue to-cyan text-white text-center px-6 py-3.5 rounded-xl font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                  <div className="flex items-center justify-center gap-4 mt-4 text-gray-500">
                    <a href="#" className="hover:text-royalBlue transition"><FaFacebook size={20} /></a>
                    <a href="#" className="hover:text-royalBlue transition"><FaTwitter size={20} /></a>
                    <a href="#" className="hover:text-royalBlue transition"><FaLinkedin size={20} /></a>
                    <a href="#" className="hover:text-royalBlue transition"><FaYoutube size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;