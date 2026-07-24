import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import PageBanner from '../../components/common/PageBanner';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { getBlogBySlug, blogData } from '../../data/blogData';

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-darkBlue">Blog post not found</h2>
        <Link to="/blog" className="text-royalBlue hover:underline mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  const relatedBlogs = blogData.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <>
      <PageBanner 
        title={blog.title}
        subtitle={blog.category}
        breadcrumbs={[
          { label: 'Blog', url: '/blog' },
          { label: blog.title }
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-xl mb-10"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-auto" />
            </motion.div>

            {/* Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <User size={14} /> {blog.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Tag size={14} /> {blog.category}
                </span>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed">{blog.excerpt}</p>
                <div className="h-0.5 bg-gray-100 my-8" />
                <p className="text-gray-600 leading-relaxed">{blog.content}</p>
              </div>
            </motion.article>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-darkBlue mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedBlogs.map((related) => (
                    <Card key={related.id} hover className="group">
                      <Link to={`/blog/${related.slug}`}>
                        <h4 className="font-bold text-darkBlue group-hover:text-royalBlue transition">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{related.excerpt}</p>
                        <span className="inline-block mt-3 text-sm text-royalBlue font-medium">
                          Read More →
                        </span>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <Button to="/blog" variant="outline">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;