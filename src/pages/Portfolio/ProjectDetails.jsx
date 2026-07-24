import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Code, Users, CheckCircle } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import CTA from '../../components/common/CTA';
import { getProjectBySlug, portfolioData } from '../../data/portfolioData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = getProjectBySlug(id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-darkBlue">Project not found</h2>
        <Link to="/portfolio" className="text-royalBlue hover:underline mt-4 inline-block">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <>
      <PageBanner 
        title={project.title}
        subtitle={project.category}
        breadcrumbs={[
          { label: 'Portfolio', url: '/portfolio' },
          { label: project.title }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-xl mb-10"
            >
              <img src={project.image} alt={project.title} className="w-full h-auto" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-royalBlue/10 rounded-lg text-sm font-semibold text-royalBlue">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">{project.technologies.join(' • ')}</span>
              </div>

              <h2 className="text-2xl font-bold text-darkBlue mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                <Card className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold text-darkBlue text-sm">Challenge</h4>
                  <p className="text-sm text-gray-500 mt-1">{project.challenge}</p>
                </Card>
                <Card className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <h4 className="font-semibold text-darkBlue text-sm">Solution</h4>
                  <p className="text-sm text-gray-500 mt-1">{project.solution}</p>
                </Card>
                <Card className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-semibold text-darkBlue text-sm">Results</h4>
                  <p className="text-sm text-gray-500 mt-1">{project.results}</p>
                </Card>
              </div>

              <div className="my-10">
                <h3 className="text-xl font-bold text-darkBlue mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-royalBlue/5 rounded-xl text-sm font-medium text-royalBlue">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="my-10">
                <h3 className="text-xl font-bold text-darkBlue mb-4">Case Study</h3>
                <Card className="p-6 bg-gray-50/50">
                  <p className="text-gray-600 leading-relaxed">{project.caseStudy}</p>
                </Card>
              </div>

              <div className="flex gap-4 mt-8">
                <Button to="/portfolio" variant="outline">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Portfolio
                </Button>
                <Button to="/contact" variant="primary">
                  Start a Similar Project
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Build Your Project?"
        subtitle="Let's create something amazing together"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default ProjectDetails;