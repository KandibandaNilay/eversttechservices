import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Code, Users } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import { portfolioData } from '../../data/portfolioData';

const Portfolio = () => {
  return (
    <>
      <PageBanner 
        title="Our Portfolio"
        subtitle="Showcasing our best work and successful projects"
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Projects"
            subtitle="Explore some of our most impactful work"
            badge="Portfolio"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card hover className="overflow-hidden h-full group p-0">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-royalBlue uppercase tracking-wider mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold text-darkBlue group-hover:text-royalBlue transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 bg-royalBlue/5 rounded-lg text-xs text-royalBlue font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 bg-gray-100 rounded-lg text-xs text-gray-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <Link 
                      to={`/portfolio/${project.slug}`} 
                      className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-royalBlue hover:gap-2 transition-all"
                    >
                      View Details <ArrowRight size={14} className="transition-all" />
                    </Link>
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

export default Portfolio;