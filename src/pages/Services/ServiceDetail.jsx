import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import CTA from '../../components/common/CTA';
import FAQ from '../../components/common/FAQ';
import { getServiceBySlug, getRelatedServices } from '../../data/servicesData';
import { faqData } from '../../data/faqData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const relatedServices = getRelatedServices(slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-darkBlue">Service not found</h2>
        <Link to="/services" className="text-royalBlue hover:underline mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  return (
    <>
      <PageBanner 
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: 'Services', url: '/services' },
          { label: service.title }
        ]}
      />

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-6xl mb-4 block">{service.icon}</span>
              <h2 className="text-3xl font-extrabold text-darkBlue leading-tight">
                {service.title} Services
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
              <div className="mt-6">
                <Button to="/contact" variant="primary" size="lg">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {service.technologies.slice(0, 4).map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100/50 text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-sm font-semibold text-darkBlue">{tech}</div>
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
            title="Key Benefits"
            subtitle={`Why choose our ${service.title} services`}
            badge="Benefits"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100/50"
              >
                <CheckCircle size={20} className="text-cyan flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Features"
            subtitle={`What you get with our ${service.title} services`}
            badge="Features"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-royalBlue/10 rounded-lg flex items-center justify-center text-royalBlue text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-bold text-darkBlue">{feature}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Technologies We Use"
            subtitle={`Cutting-edge tools and technologies for ${service.title}`}
            badge="Tech Stack"
          />
          
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2.5 bg-white rounded-xl shadow-sm border border-gray-100/50 text-sm font-medium text-darkBlue hover:border-royalBlue/30 transition"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Process"
            subtitle={`How we deliver ${service.title} excellence`}
            badge="Process"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="relative group">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-royalBlue/10 rounded-full flex items-center justify-center text-sm font-bold text-royalBlue">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-darkBlue">{step}</h3>
                  <p className="text-sm text-gray-500 mt-1">Step {index + 1} in our process</p>
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
            title={`Why Choose Us for ${service.title}`}
            subtitle="Experience, expertise, and commitment to excellence"
            badge="Why Us"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              '12+ years of industry experience',
              'Expert team of professionals',
              'Proven track record of success',
              'Client-centric approach',
              'Competitive pricing',
              '24/7 support and maintenance'
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

      {/* FAQ */}
      <FAQ items={faqData.slice(0, 4)} />

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Related Services"
              subtitle={`Explore other services that complement ${service.title}`}
              badge="Related"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {relatedServices.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card hover className="h-full group">
                    <Link to={`/services/${related.slug}`} className="block h-full">
                      <div className="text-3xl mb-3">{related.icon}</div>
                      <h3 className="font-bold text-darkBlue group-hover:text-royalBlue transition">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{related.shortDesc}</p>
                      <div className="mt-3 inline-flex items-center text-royalBlue text-sm font-medium">
                        Learn More <ChevronRight size={14} className="ml-1" />
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA 
        title={`Ready to Get Started with ${service.title}?`}
        subtitle={`Let's discuss how our ${service.title} services can help your business grow.`}
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default ServiceDetail;