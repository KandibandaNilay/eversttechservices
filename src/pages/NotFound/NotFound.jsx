import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button';

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-darkBlue/5 via-royalBlue/5 to-cyan/5">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl md:text-9xl font-extrabold text-royalBlue/20 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-darkBlue mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-500 max-w-md mx-auto mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/" variant="primary" size="lg">
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;