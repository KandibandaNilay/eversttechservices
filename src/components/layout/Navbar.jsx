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
      setIsScrolled(window.scrollY > 20);
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
      {/* Top Bar - Rich Corporate Navy */}
      <div className="hidden lg:block bg-darkBlue text-white/90 text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 group">
              <FaPhone size={12} className="text-cyan group-hover:animate-pulse" />
              <a href="tel:+919948886996" className="hover:text-cyan transition-colors font-medium">+91-9948886996</a>
            </span>
            <span className="flex items-center gap-2 group">
              <FaEnvelope size={12} className="text-cyan group-hover:animate-pulse" />
              <a href="mailto:info@eversttechservices.com" className="hover:text-cyan transition-colors font-medium">info@eversttechservices.com</a>
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt size={12} className="text-cyan" />
              <span className="font-medium">Hyderabad, India</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            {[FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram].map((Icon, idx) => (
              <a key={idx} href="#" className="hover:text-cyan transition-colors hover:scale-110 transform duration-200">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar - Crisp White Glass */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgb(0,0,0,0.05)] border-b border-gray-100 py-1' 
            : 'bg-white shadow-sm border-b border-gray-100 py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20 transition-all duration-300">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-royalBlue to-cyan rounded-xl flex items-center justify-center shadow-md shadow-royalBlue/20 group-hover:shadow-royalBlue/40 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-darkBlue tracking-tight">
                  Everst<span className="text-royalBlue">Tech</span>
                </span>
                <span className="block text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase -mt-0.5">
                  Services
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  {link.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button 
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                          location.pathname.startsWith('/services') 
                            ? 'text-royalBlue bg-royalBlue/5' 
                            : 'text-gray-600 hover:text-royalBlue hover:bg-gray-50'
                        }`}
                      >
                        Services
                        <FaChevronDown size={12} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mega Menu Dropdown */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[700px]"
                          >
                            <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-5 grid grid-cols-2 gap-2 relative overflow-hidden">
                              
                              {servicesData.map((service) => (
                                <Link
                                  key={service.id}
                                  to={`/services/${service.slug}`}
                                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-200 group/item relative z-10"
                                >
                                  <div className="w-12 h-12 mt-0.5 bg-royalBlue/5 border border-royalBlue/10 rounded-xl flex items-center justify-center text-royalBlue group-hover/item:bg-royalBlue group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300 shrink-0">
                                    <span className="text-xl">{service.icon}</span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-darkBlue group-hover/item:text-royalBlue transition-colors mb-1">{service.title}</div>
                                    <div className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{service.shortDesc}</div>
                                  </div>
                                </Link>
                              ))}
                              
                              <div className="col-span-2 mt-2 pt-2 border-t border-gray-100">
                                <Link 
                                  to="/services" 
                                  className="flex items-center justify-center gap-2 text-sm font-bold text-royalBlue hover:text-darkBlue transition-colors bg-royalBlue/5 hover:bg-royalBlue/10 rounded-xl py-3"
                                >
                                  Explore All Enterprise Services <FaArrowRight size={12} />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                          isActive 
                            ? 'text-royalBlue bg-royalBlue/5' 
                            : 'text-gray-600 hover:text-royalBlue hover:bg-gray-50'
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
            <div className="hidden lg:block ml-2">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-royalBlue to-cyan text-white px-7 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-cyan/20 hover:shadow-cyan/40 transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-royalBlue transition-colors border border-gray-200"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Light Theme) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="container mx-auto px-4 py-6 max-h-[75vh] overflow-y-auto">
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      {link.hasDropdown ? (
                        <div>
                          <button 
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-darkBlue hover:bg-gray-50 hover:text-royalBlue transition-colors text-base font-bold"
                          >
                            Services
                            <FaChevronRight size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-90 text-royalBlue' : 'text-gray-400'}`} />
                          </button>
                          
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-4 pl-4 border-l-2 border-gray-100 space-y-1 mt-2 mb-2 overflow-hidden"
                              >
                                {servicesData.map((service) => (
                                  <Link
                                    key={service.id}
                                    to={`/services/${service.slug}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-600 hover:text-royalBlue"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span className="text-royalBlue">{service.icon}</span>
                                    <span>{service.title}</span>
                                  </Link>
                                ))}
                                <Link 
                                  to="/services" 
                                  className="block px-4 py-3 text-royalBlue font-bold text-sm hover:text-darkBlue"
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
                            `block px-4 py-3.5 rounded-xl text-base font-bold transition-colors ${
                              isActive 
                                ? 'text-royalBlue bg-royalBlue/5' 
                                : 'text-gray-700 hover:bg-gray-50 hover:text-royalBlue'
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
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link 
                    to="/contact" 
                    className="block w-full bg-gradient-to-r from-royalBlue to-cyan text-white text-center px-6 py-4 rounded-xl font-bold shadow-md shadow-cyan/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Your Project
                  </Link>
                  <div className="flex items-center justify-center gap-6 mt-8 text-gray-400">
                    <a href="#" className="hover:text-royalBlue transition-colors"><FaFacebook size={22} /></a>
                    <a href="#" className="hover:text-royalBlue transition-colors"><FaTwitter size={22} /></a>
                    <a href="#" className="hover:text-royalBlue transition-colors"><FaLinkedin size={22} /></a>
                    <a href="#" className="hover:text-royalBlue transition-colors"><FaYoutube size={22} /></a>
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