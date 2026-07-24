import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import { technologiesData } from '../../data/technologiesData';

const Technologies = () => {
  const categories = [
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'databases', label: 'Databases', icon: '🗄️' },
    { key: 'cloud', label: 'Cloud', icon: '☁️' },
    { key: 'mobile', label: 'Mobile', icon: '📱' },
    { key: 'devops', label: 'DevOps', icon: '🔧' },
  ];

  return (
    <>
      <PageBanner 
        title="Our Technology Stack"
        subtitle="Cutting-edge technologies we use to build innovative solutions"
        breadcrumbs={[{ label: 'Technologies' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Technologies We Master"
            subtitle="From frontend to backend, cloud to mobile — we've got you covered"
            badge="Tech Stack"
          />
          
          {categories.map((category, catIndex) => (
            <div key={category.key} className="mt-16 first:mt-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-darkBlue">{category.label}</h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-royalBlue/20 to-transparent" />
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologiesData[category.key]?.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card hover className="p-5 text-center h-full group">
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <h4 className="font-bold text-darkBlue group-hover:text-royalBlue transition">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{tech.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Technologies;