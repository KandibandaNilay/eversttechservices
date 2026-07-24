import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight, MessageSquareCode } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';

const Contact = () => {
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
      
      // Optional: Reset form after showing success state for a few seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: 'Headquarters', value: 'Plot No. 34, Road No. 5, New Venkataramana Colony, Vanasthalipuram, Hyderabad – 500070' },
    { icon: <Phone className="w-5 h-5" />, label: 'Direct Line', value: '+91-9948886996\n040-35570047' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email Support', value: 'info@eversttechservices.com\ninfo.eversttechservices@gmail.com' },
    { icon: <Clock className="w-5 h-5" />, label: 'Business Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM\nSunday: Closed' },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen relative selection:bg-royalBlue/20 selection:text-royalBlue">
      {/* Advanced Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

      <PageBanner 
        title="Contact Engineering"
        subtitle="Connect with our solution architects to discuss your enterprise requirements."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Main Split Layout */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_80px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* LEFT PANEL - Dark Rich Contact Info */}
            <div className="lg:w-2/5 bg-slate-950 p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
              {/* Ambient Glows inside Dark Panel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-royalBlue/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Support & Sales
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-royalBlue">future.</span>
                </h2>
                <p className="text-slate-400 font-light leading-relaxed mb-12">
                  Whether you need custom software architecture, cloud scaling, or digital transformation, our experts are ready to assist.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                        <p className="text-slate-400 text-sm whitespace-pre-line leading-relaxed group-hover:text-slate-300 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Element Bottom */}
              <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <MessageSquareCode className="text-white w-6 h-6 shrink-0" />
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - White Form */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900">Project Inquiry</h3>
                      <p className="text-slate-500 text-sm mt-2">All fields marked with an asterisk (*) are required.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition-all duration-200"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        {/* Email Field */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Work Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition-all duration-200"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Phone Field */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition-all duration-200"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>

                        {/* Subject Field */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject *</label>
                          <input
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition-all duration-200"
                            placeholder="How can we help?"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Details *</label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition-all duration-200 resize-none"
                          placeholder="Tell us about your requirements, timeline, and goals..."
                        />
                      </div>

                      {/* Advanced Submit Button */}
                      <div className="pt-4">
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full md:w-auto relative group overflow-hidden rounded-xl bg-slate-900 text-white font-bold text-sm px-10 py-4 transition-all duration-300 disabled:opacity-70 disabled:cursor-wait hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]"
                        >
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-royalBlue to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="relative flex items-center justify-center gap-2">
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing Request...
                              </>
                            ) : (
                              <>
                                Initialize Communication
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </span>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  /* SUCCESS STATE UI */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-50" />
                      <CheckCircle2 className="w-12 h-12 text-emerald-500 relative z-10" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-3">Message Received!</h3>
                    <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                      Thank you for reaching out. A solution architect from EverstTech will review your inquiry and contact you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-royalBlue font-bold text-sm hover:text-darkBlue transition-colors flex items-center gap-2"
                    >
                      Send another message <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Edge-to-Edge Map Section */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm bg-white p-2 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.978!2d78.5800!3d17.3200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1e6c5b8b9d9%3A0x4b5c6d7e8f9a0b1c!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1644250000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen=""
              loading="lazy"
              title="Everst Tech Services Location"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;