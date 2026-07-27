import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
  FaPhone, FaEnvelope, FaBars, FaTimes,
  FaChevronDown, FaArrowRight 
} from 'react-icons/fa';
import { servicesData } from '../../data/servicesData';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services', hasDropdown: true },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#0A0E14]/95 backdrop-blur-xl border-slate-500 py-2' 
          : 'bg-[#0A0E14] border-slate-800 py-1'
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between">
          

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="EverstTech Logo"
            className="h-10 w-auto"
          />

          <span className="text-2xl font-black text-white tracking-tighter">
            EVERST<span className="text-amber-500">TECH</span>
          </span>
        </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                   <button className="text-lg font-bold text-black hover:text-amber-500 transition-colors flex items-center gap-2">
                    Services <FaChevronDown size={12} />
                  </button>
                    
                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-[-300px] top-full pt-6 w-[900px]"
                        >
                          {/* Scrollable container for 18+ services */}
                          <div className="bg-[#0D1117] rounded-3xl shadow-2xl border border-slate-800 p-10 max-h-[70vh] overflow-y-auto">
                            
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                              <h4 className="text-xl font-bold text-white">Our Enterprise Solutions</h4>
                              <Link to="/services" className="text-amber-500 hover:text-amber-400 font-bold text-sm flex items-center gap-1">
                                View All Services <FaArrowRight size={12} />
                              </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-8">
                              {servicesData.map((service) => (
                                <Link 
                                  key={service.id} 
                                  to={`/services/${service.slug}`} 
                                  className="group flex flex-col gap-2 p-4 rounded-2xl hover:bg-[#161b22] transition-all border border-transparent hover:border-slate-700"
                                >
                                  <div className="text-3xl">{service.icon}</div>
                                  <div>
                                    <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                                      {service.title}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                      {service.shortDesc}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink to={link.path} className={({ isActive }) => 
                    `text-lg font-bold transition-colors ${isActive ? 'text-amber-500' : 'text-slate-200 hover:text-amber-400'}`
                  }>
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link to="/contact" className="hidden lg:flex items-center gap-3 bg-amber-500 text-slate-950 px-6 py-3 rounded-md font-bold text-md hover:bg-amber-400 transition-all hover:scale-95
          ">
            Get a Consultation
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            className="lg:hidden bg-[#0A0E14] border-t border-slate-800 overflow-hidden"
          >
            <div className="px-8 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-xl font-bold text-slate-200 hover:text-amber-400">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;