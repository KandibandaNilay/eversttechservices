import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';

const FAQ = ({ items, title = 'Frequently Asked Questions', subtitle = 'Find answers to common questions about our services' }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-royalBlue/10 text-royalBlue text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="relative mb-8">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition bg-white/80 backdrop-blur-sm"
            />
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-2xl shadow-sm border border-gray-100/50 transition-all duration-300 ${
                  openIndex === index ? 'shadow-lg shadow-royalBlue/5 border-royalBlue/20' : 'hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left"
                >
                  <span className={`font-semibold text-darkBlue ${openIndex === index ? 'text-royalBlue' : ''}`}>
                    {item.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'bg-royalBlue text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100/50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No questions found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;