export const blogData = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    slug: 'future-of-ai-in-software-development',
    category: 'AI & Machine Learning',
    author: 'John Doe',
    date: '2026-01-15',
    readTime: '5 min read',
    excerpt: 'Explore how artificial intelligence is transforming software development, from code generation to testing and deployment.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Top 10 Web Development Trends in 2026',
    slug: 'top-web-development-trends-2026',
    category: 'Web Development',
    author: 'Jane Smith',
    date: '2026-01-10',
    readTime: '7 min read',
    excerpt: 'Discover the latest trends shaping web development, including AI-powered development tools, WebAssembly, and Jamstack architectures.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Building Scalable Cloud Architecture',
    slug: 'building-scalable-cloud-architecture',
    category: 'Cloud Computing',
    author: 'Mike Johnson',
    date: '2026-01-05',
    readTime: '6 min read',
    excerpt: 'Learn the principles of building scalable and resilient cloud architectures that can handle millions of users.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Mobile App Development: Native vs Cross-Platform',
    slug: 'native-vs-cross-platform-mobile-development',
    category: 'Mobile Development',
    author: 'Sarah Wilson',
    date: '2025-12-28',
    readTime: '4 min read',
    excerpt: 'Compare native and cross-platform mobile app development approaches to choose the right strategy for your project.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Implementing DevOps Best Practices',
    slug: 'devops-best-practices',
    category: 'DevOps',
    author: 'David Brown',
    date: '2025-12-20',
    readTime: '8 min read',
    excerpt: 'A comprehensive guide to implementing DevOps best practices for faster, more reliable software delivery.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Cyber Security Best Practices for Businesses',
    slug: 'cyber-security-best-practices',
    category: 'Cyber Security',
    author: 'Emily Davis',
    date: '2025-12-15',
    readTime: '5 min read',
    excerpt: 'Protect your business from cyber threats with these essential security best practices.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop'
  }
];

export const getBlogBySlug = (slug) => {
  return blogData.find(blog => blog.slug === slug);
};