export const portfolioData = [
  {
    id: 1,
    title: 'Healthcare Management Platform',
    slug: 'healthcare-management-platform',
    category: 'Healthcare',
    description: 'A comprehensive healthcare management platform connecting patients, doctors, and healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    challenge: 'Our client needed a unified platform to manage patient records, appointments, and telehealth services.',
    solution: 'We built a secure, HIPAA-compliant platform with real-time video consultation, EHR integration, and automated scheduling.',
    results: '3x increase in patient engagement, 40% reduction in no-shows, and streamlined operations for 50+ healthcare providers.',
    caseStudy: 'Detailed case study content...'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    category: 'E-commerce',
    description: 'A modern e-commerce platform with AI-powered recommendations and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    challenge: 'The client needed a scalable e-commerce platform with personalization and high performance.',
    solution: 'We built a serverless e-commerce platform with AI-powered product recommendations, real-time inventory, and one-click checkout.',
    results: '150% increase in conversion rate, 2x average order value, and 99.9% uptime during peak traffic.',
    caseStudy: 'Detailed case study content...'
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    slug: 'mobile-banking-app',
    category: 'Fintech',
    description: 'A secure and intuitive mobile banking application for modern banking needs.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'PostgreSQL'],
    challenge: 'A traditional bank wanted to modernize their mobile banking experience.',
    solution: 'We developed a feature-rich mobile app with biometric authentication, real-time transactions, and personalized financial insights.',
    results: '500K+ downloads, 4.8 star rating, and 60% of customers using digital banking weekly.',
    caseStudy: 'Detailed case study content...'
  },
  {
    id: 4,
    title: 'AI-Powered Analytics Dashboard',
    slug: 'ai-analytics-dashboard',
    category: 'Data Analytics',
    description: 'An AI-powered analytics dashboard providing real-time business insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    technologies: ['Python', 'React', 'D3.js', 'AWS', 'TensorFlow'],
    challenge: 'A large enterprise needed to unify data from multiple sources and generate actionable insights.',
    solution: 'We built an AI-powered dashboard with predictive analytics, anomaly detection, and interactive visualizations.',
    results: 'Reduced reporting time by 80%, improved decision-making speed, and identified $5M in cost savings.',
    caseStudy: 'Detailed case study content...'
  },
  {
    id: 5,
    title: 'Real Estate Management System',
    slug: 'real-estate-management',
    category: 'Real Estate',
    description: 'A comprehensive real estate management system for property listings and transactions.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe'],
    challenge: 'A real estate firm needed a platform to manage listings, transactions, and client relationships.',
    solution: 'We created a full-featured platform with property search, virtual tours, document management, and integrated payment processing.',
    results: '3x increase in leads, streamlined transaction process, and improved client satisfaction.',
    caseStudy: 'Detailed case study content...'
  },
  {
    id: 6,
    title: 'Supply Chain Optimization',
    slug: 'supply-chain-optimization',
    category: 'Logistics',
    description: 'AI-driven supply chain optimization platform for logistics companies.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    technologies: ['Python', 'React', 'PostgreSQL', 'Docker', 'Kubernetes'],
    challenge: 'A logistics company needed to optimize their supply chain and reduce operational costs.',
    solution: 'We developed an AI-powered platform with route optimization, inventory management, and predictive demand forecasting.',
    results: '25% reduction in delivery costs, 30% improvement in delivery times, and increased operational efficiency.',
    caseStudy: 'Detailed case study content...'
  }
];

export const getProjectBySlug = (slug) => {
  return portfolioData.find(project => project.slug === slug);
};