import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { blogData } from '../../data/blogData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogData.map(blog => blog.category))];

  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageBanner 
        title="Our Blog"
        subtitle="Insights, updates, and stories from the world of technology"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Latest Articles"
            subtitle="Stay updated with our latest insights and news"
            badge="Blog"
          />

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mt-12 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-royalBlue focus:ring-4 focus:ring-royalBlue/10 outline-none transition"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
                    selectedCategory === category
                      ? 'bg-royalBlue text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card hover className="overflow-hidden h-full group p-0">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User size={12} /> {blog.author}
                      </span>
                    </div>
                    <span className="inline-block px-2.5 py-0.5 bg-royalBlue/10 rounded-lg text-xs font-semibold text-royalBlue mb-2">
                      {blog.category}
                    </span>
                    <h3 className="text-lg font-bold text-darkBlue group-hover:text-royalBlue transition leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-400">{blog.readTime}</span>
                      <Link 
                        to={`/blog/${blog.slug}`} 
                        className="text-royalBlue font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No articles found matching your search.
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;