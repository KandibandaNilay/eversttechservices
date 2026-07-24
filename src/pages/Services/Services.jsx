import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import CTA from '../../components/common/CTA';
import { servicesData } from '../../data/servicesData';

const Services = () => {
  return (
    <>
      <PageBanner 
        title="Our Services"
        subtitle="Comprehensive technology solutions designed to drive your business forward"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What We Offer"
            subtitle="Explore our full range of technology services"
            badge="Services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Card hover className="h-full group">
                  <Link to={`/services/${service.slug}`} className="block h-full">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-darkBlue group-hover:text-royalBlue transition mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.shortDesc}</p>
                    <div className="mt-4 inline-flex items-center text-royalBlue font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={14} className="ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Need a Custom Solution?"
        subtitle="Let's discuss your specific requirements and find the perfect solution for your business."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default Services;