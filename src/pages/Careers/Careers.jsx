import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import CTA from '../../components/common/CTA';
import { jobsData } from '../../data/jobsData';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

const Careers = () => {
  const benefits = [
    { icon: '💻', title: 'Remote & Hybrid Work', desc: 'Flexible work arrangements to suit your lifestyle' },
    { icon: '📈', title: 'Career Growth', desc: 'Continuous learning and professional development' },
    { icon: '🏥', title: 'Health Benefits', desc: 'Comprehensive health insurance coverage' },
    { icon: '🎯', title: 'Performance Bonuses', desc: 'Rewarding performance and achievements' },
    { icon: '🌴', title: 'Paid Time Off', desc: 'Generous vacation and holiday policies' },
    { icon: '🤝', title: 'Collaborative Culture', desc: 'Supportive and inclusive work environment' },
  ];

  const hiringProcess = [
    { step: 'Application Review', desc: 'We review your application and resume' },
    { step: 'Initial Screening', desc: 'A brief call to discuss your experience' },
    { step: 'Technical Assessment', desc: 'Evaluate your technical skills' },
    { step: 'Interview', desc: 'Meet our team and discuss your fit' },
    { step: 'Offer', desc: 'We extend an offer to join our team' },
  ];

  return (
    <>
      <PageBanner 
        title="Careers at Everst Tech"
        subtitle="Join us in building innovative technology solutions that make a difference"
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Life at Everst Tech */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-royalBlue/10 text-royalBlue text-xs font-semibold uppercase tracking-wider mb-4">
                Life at Everst Tech
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue leading-tight">
                Work with Purpose, <span className="text-royalBlue">Grow with Passion</span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                At Everst Tech Services, we believe in creating an environment where talented individuals can thrive, innovate, and make a real impact. We're a team of passionate technologists who love what we do.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We foster a culture of collaboration, continuous learning, and mutual respect. Join us and be part of a team that's shaping the future of technology.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {['🚀', '💡', '🌟', '🏆'].map((emoji, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50 text-center">
                  <div className="text-3xl mb-2">{emoji}</div>
                  <div className="text-sm font-medium text-darkBlue">
                    {['Innovation', 'Creativity', 'Excellence', 'Success'][index]}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Work With Us"
            subtitle="Discover the benefits of being part of the Everst Tech team"
            badge="Benefits"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full text-center group">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold text-darkBlue">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Current Openings"
            subtitle="Find your next career opportunity with us"
            badge="Jobs"
          />
          
          <div className="space-y-4 mt-12 max-w-4xl mx-auto">
            {jobsData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:border-royalBlue/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-darkBlue">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-1.5 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} /> {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {job.type}
                        </span>
                        <span className="text-royalBlue font-medium">{job.experience}</span>
                      </div>
                    </div>
                    <Button to={`/careers/${job.id}`} variant="outline" size="sm">
                      Apply Now
                      <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Hiring Process"
            subtitle="Our straightforward and transparent hiring journey"
            badge="Process"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 max-w-5xl mx-auto">
            {hiringProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative"
              >
                <Card className="text-center h-full">
                  <div className="w-10 h-10 mx-auto bg-gradient-to-br from-royalBlue/10 to-cyan/10 rounded-full flex items-center justify-center text-royalBlue font-bold text-sm mb-3">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-darkBlue text-sm">{step.step}</h4>
                  <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                </Card>
                {index < hiringProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-300">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Apply Now"
            subtitle="Upload your resume and tell us about yourself"
            badge="Apply"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <Card className="p-6 md:p-8">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1.5">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1.5">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1.5">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition" placeholder="+91-XXXXX-XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1.5">Position Applied For *</label>
                  <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition bg-white">
                    <option value="">Select a position</option>
                    {jobsData.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1.5">Upload Resume *</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-royalBlue/50 transition cursor-pointer">
                    <div className="text-3xl mb-2">📄</div>
                    <p className="text-sm text-gray-500">Drag & drop your resume here, or click to browse</p>
                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1.5">Cover Letter (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition resize-none" placeholder="Tell us why you'd be a great fit..." />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      <CTA 
        title="Don't See the Right Role?"
        subtitle="We're always looking for talented individuals. Send us your resume and we'll reach out when something matches."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default Careers;