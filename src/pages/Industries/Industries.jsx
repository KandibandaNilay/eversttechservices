import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import { industryData } from '../../data/industryData';

const Industries = () => {
  return (
    <>
      <PageBanner 
        title="Industries We Serve"
        subtitle="Tailored technology solutions for diverse industry verticals"
        breadcrumbs={[{ label: 'Industries' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Industry Expertise"
            subtitle="We deliver specialized solutions across a wide range of industries"
            badge="Industries"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industryData.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card hover className="h-full group">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-darkBlue group-hover:text-royalBlue transition">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;