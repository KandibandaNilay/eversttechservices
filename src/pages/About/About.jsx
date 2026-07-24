import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Heart, Users, Award, Clock, 
  CheckCircle, ArrowRight, Calendar, Building 
} from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import CTA from '../../components/common/CTA';
import Stats from '../../components/common/Stats';

const About = () => {
  const statsData = [
    { value: '500+', label: 'Projects Delivered', icon: '🚀' },
    { value: '50+', label: 'Team Members', icon: '👥' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '12+', label: 'Years in Business', icon: '🏆' },
  ];

  const coreValues = [
    { icon: <Heart size={28} />, title: 'Integrity', desc: 'We operate with honesty and transparency in all our dealings.' },
    { icon: <Users size={28} />, title: 'Client First', desc: 'Our clients\' success is our success. We go above and beyond.' },
    { icon: <Award size={28} />, title: 'Excellence', desc: 'We strive for excellence in everything we do.' },
    { icon: <Clock size={28} />, title: 'Innovation', desc: 'We embrace new technologies and innovative approaches.' },
  ];

  const timeline = [
    { year: '2012', title: 'Company Founded', desc: 'Everst Tech Services was established with a vision to deliver quality IT solutions.' },
    { year: '2015', title: 'Expanded Services', desc: 'Expanded our service portfolio to include cloud and mobile solutions.' },
    { year: '2018', title: 'Global Reach', desc: 'Started serving clients across India and international markets.' },
    { year: '2021', title: 'AI & ML Focus', desc: 'Launched AI and Machine Learning practice to drive innovation.' },
    { year: '2024', title: '100+ Clients', desc: 'Reached the milestone of 100+ satisfied clients worldwide.' },
  ];

  const achievements = [
    { label: 'Awards Won', value: '15+', icon: '🏆' },
    { label: 'Client Retention', value: '95%', icon: '💯' },
    { label: 'Projects Completed', value: '500+', icon: '📊' },
    { label: 'Team Size', value: '50+', icon: '👨‍💻' },
  ];

  return (
    <>
      <PageBanner 
        title="About Everst Tech Services"
        subtitle="We are a team of passionate technologists committed to delivering excellence and driving innovation for businesses worldwide."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Company Overview */}
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
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue leading-tight">
                Building the Future of <span className="text-royalBlue">Technology</span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Everst Tech Services is a premier IT solutions provider dedicated to helping businesses leverage technology for growth and innovation. With over a decade of experience, we have delivered 500+ successful projects across diverse industries.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Our team of 50+ skilled professionals combines technical expertise with a deep understanding of business needs to deliver solutions that drive real impact. We are committed to quality, innovation, and client success.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button to="/services" variant="primary">
                  Explore Services
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button to="/contact" variant="outline">
                  Get in Touch
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-royalBlue/10 to-cyan/10 border border-gray-100/50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold text-darkBlue">Innovation at Heart</h3>
                  <p className="text-gray-500 mt-2">Driving digital transformation for 12+ years</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-royalBlue/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full group">
                <div className="w-14 h-14 bg-gradient-to-br from-royalBlue/10 to-cyan/10 rounded-2xl flex items-center justify-center text-royalBlue group-hover:scale-110 transition-transform mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-darkBlue mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering excellence and building lasting partnerships with our clients.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full group">
                <div className="w-14 h-14 bg-gradient-to-br from-royalBlue/10 to-cyan/10 rounded-2xl flex items-center justify-center text-royalBlue group-hover:scale-110 transition-transform mb-4">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold text-darkBlue mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a global leader in technology solutions, known for innovation, quality, and client success. We envision a world where technology seamlessly enables businesses to achieve their full potential.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
            badge="Values"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center group h-full">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-royalBlue/10 to-cyan/10 rounded-2xl flex items-center justify-center text-royalBlue group-hover:scale-110 transition-transform mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-darkBlue mb-1.5">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-darkBlue/5 to-royalBlue/5">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Everst Tech"
            subtitle="What sets us apart from the competition"
            badge="Why Us"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              '12+ years of industry experience',
              '50+ skilled technology professionals',
              '500+ successful projects delivered',
              '98% client satisfaction rate',
              'Cutting-edge technology expertise',
              'End-to-end solution delivery',
              'Flexible engagement models',
              'Competitive and transparent pricing'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100/50"
              >
                <CheckCircle size={20} className="text-cyan flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Journey"
            subtitle="A timeline of our growth and achievements"
            badge="History"
          />
          
          <div className="relative max-w-3xl mx-auto mt-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-royalBlue/30 to-cyan/30" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="p-5">
                    <div className="text-sm font-bold text-royalBlue">{item.year}</div>
                    <h4 className="font-bold text-darkBlue">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-royalBlue rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white/80">
        <div className="container mx-auto px-4">
          <Stats stats={statsData} />
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Achievements"
            subtitle="Numbers that speak to our commitment and success"
            badge="Achievements"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-3xl font-extrabold text-royalBlue">{item.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Let's Build Something Great Together"
        subtitle="We're always looking for new challenges and opportunities to make a difference."
        buttonText="Start a Project"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;