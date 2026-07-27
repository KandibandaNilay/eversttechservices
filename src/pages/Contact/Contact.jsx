import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  ArrowRight, MessageSquareCode, ChevronRight, Zap, Globe 
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

const Button = ({ children, variant = 'primary', className = '', href = '#', type = 'button', disabled = false, onClick }) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20",
    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:border-slate-600",
    ghost: "bg-transparent text-amber-400 hover:bg-amber-500/10"
  };
  
  const styling = `${base} ${variants[variant] || variants.primary} ${className}`;
  
  if (type === 'submit' || onClick) {
    return <button type={type} onClick={onClick} disabled={disabled} className={styling}>{children}</button>;
  }
  
  return (
    <a href={href} className={styling}>
      {children}
    </a>
  );
};

// --- MAIN CONTACT COMPONENT ---
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated API call delay for premium UX feel
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Optional: Reset form after showing success state
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: 'Headquarters', value: 'Plot No. 34, Road No. 5, New Venkataramana Colony,\nVanasthalipuram, Hyderabad – 500070', accent: 'amber' },
    { icon: <Phone className="w-5 h-5" />, label: 'Direct Line', value: '+91-9948886996\n040-35570047', accent: 'teal' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email Support', value: 'info@eversttechservices.com\ninfo.eversttechservices@gmail.com', accent: 'orange' },
    { icon: <Clock className="w-5 h-5" />, label: 'Business Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM\nSunday: Closed', accent: 'amber' },
  ];

  const accentMap = {
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-900',
    teal: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-400 group-hover:text-slate-900',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:bg-orange-400 group-hover:text-slate-900',
  };

  return (
    <div className="bg-[#0A0E14] min-h-screen text-slate-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-50 font-sans">
      
      {/* --- HERO / PAGE BANNER --- */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,166,35,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-mono mb-6">
              <span className="hover:text-amber-400 cursor-pointer transition-colors">Home</span>
              <ChevronRight size={14} />
              <span className="text-amber-500">Contact</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Contact <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Engineering</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Connect with our solution architects to discuss your enterprise requirements, cloud scaling needs, or custom software architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT LAYOUT --- */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT PANEL - Contact Info */}
            <div className="lg:col-span-5 bg-[#0D1117] rounded-3xl p-10 md:p-12 border border-slate-800 relative overflow-hidden flex flex-col shadow-2xl">
              {/* Ambient Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md font-mono">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  Support & Architecture
                </div>
                
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">future.</span>
                </h2>
                <p className="text-slate-400 font-light leading-relaxed mb-12">
                  Whether you need comprehensive digital transformation or tactical infrastructure upgrades, our enterprise experts are ready to assist.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-5 group cursor-default"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${accentMap[item.accent]}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1.5">{item.label}</h4>
                        <p className="text-slate-400 text-sm whitespace-pre-line leading-relaxed group-hover:text-slate-300 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Element Bottom */}
              <div className="relative z-10 mt-16 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                  <MessageSquareCode className="text-slate-500 w-6 h-6 shrink-0" />
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - Contact Form */}
            <div className="lg:col-span-7 bg-[#0D1117] rounded-3xl p-10 md:p-12 border border-slate-800 relative shadow-2xl">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
                  >
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-white">Project Inquiry</h3>
                      <p className="text-slate-400 font-light text-sm mt-2">All fields marked with an asterisk (*) are required.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name *</label>
                          <input
                            type="text" name="name" required value={formData.name} onChange={handleChange}
                            className="w-full bg-[#0A0E14] border border-slate-800 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Work Email *</label>
                          <input
                            type="email" name="email" required value={formData.email} onChange={handleChange}
                            className="w-full bg-[#0A0E14] border border-slate-800 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                          <input
                            type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full bg-[#0A0E14] border border-slate-800 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject *</label>
                          <input
                            type="text" name="subject" required value={formData.subject} onChange={handleChange}
                            className="w-full bg-[#0A0E14] border border-slate-800 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                            placeholder="Architecture consultation"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Details *</label>
                        <textarea
                          name="message" required rows={5} value={formData.message} onChange={handleChange}
                          className="w-full bg-[#0A0E14] border border-slate-800 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all resize-none"
                          placeholder="Tell us about your requirements, timeline, and scale..."
                        />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10 py-4">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing Request...
                            </>
                          ) : (
                            <>
                              Initialize Communication <Send className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  /* SUCCESS STATE UI */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 bg-teal-500/20 rounded-full animate-ping opacity-50" />
                      <CheckCircle2 className="w-12 h-12 text-teal-400 relative z-10" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-3">Transmission Received</h3>
                    <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-light">
                      Thank you for reaching out. A solution architect from Everst Tech will review your inquiry and contact you shortly.
                    </p>
                    <Button variant="ghost" onClick={() => setIsSuccess(false)}>
                      Send Another Message <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="relative z-10 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-6 px-2">
            <Globe className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-bold text-white">Global Headquarters</h3>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-[#0D1117] p-2 h-[450px] shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.978!2d78.5800!3d17.3200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1e6c5b8b9d9%3A0x4b5c6d7e8f9a0b1c!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1644250000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ 
                border: 0, 
                borderRadius: '1.25rem',
                // This CSS filter magically turns the default light Google Map into a beautiful Dark Mode map!
                filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)'
              }}
              allowFullScreen=""
              loading="lazy"
              title="Everst Tech Services Location"
              className="transition-all duration-700 hover:brightness-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
}