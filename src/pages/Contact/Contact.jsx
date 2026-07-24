import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <MapPin size={22} />, label: 'Address', value: 'Plot No. 34, Road No. 5, New Venkataramana Colony, Vanasthalipuram, Hyderabad – 500070' },
    { icon: <Phone size={22} />, label: 'Phone', value: '+91-9948886996, 040-35570047' },
    { icon: <Mail size={22} />, label: 'Email', value: 'info@eversttechservices.com, info.eversttechservices@gmail.com' },
    { icon: <Clock size={22} />, label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM' },
  ];

  return (
    <>
      <PageBanner 
        title="Get in Touch"
        subtitle="We'd love to hear from you. Let's start a conversation about your next project."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Contact Information"
                subtitle="Reach out to us through any of the following channels"
                centered={false}
                className="text-left"
              />
              
              <div className="space-y-4 mt-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-royalBlue/10 rounded-xl flex items-center justify-center text-royalBlue flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-royalBlue uppercase tracking-wider">
                          {item.label}
                        </div>
                        <p className="text-gray-600 text-sm mt-0.5">{item.value}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.978!2d78.5800!3d17.3200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1e6c5b8b9d9%3A0x4b5c6d7e8f9a0b1c!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1644250000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Everst Tech Services Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Send Us a Message"
                subtitle="We'll get back to you within 24 hours"
                centered={false}
                className="text-left"
              />
              
              <Card className="mt-8 p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-darkBlue mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-darkBlue mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-darkBlue mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-darkBlue mb-1.5">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-darkBlue mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;