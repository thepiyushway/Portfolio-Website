export type Project = {
  title: string;
  description: string;
  tags: string[];
  impact: string;
  image: string;
  liveDemo: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: 'Enterprise Knowledge Engine',
    description: 'Reduced customer support response time by 50% by implementing a RAG-based AI assistant.',
    tags: ['Python', 'VectorDB', 'AWS'],
    impact: '50% faster resolution',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    liveDemo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    title: 'High-Throughput API Gateway',
    description: 'Architected a microservices gateway handling 100k+ RPS with 99.99% uptime for global fintech.',
    tags: ['TypeScript', 'Kubernetes', 'Edge'],
    impact: '99.99% uptime',
    image: 'https://images.unsplash.com/photo-1526378723219-f3f0b6b8f56b?auto=format&fit=crop&w=900&q=80',
    liveDemo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    title: 'Real-Time Data Analytics Platform',
    description: 'Developed a platform for real-time data ingestion and visualization using Apache Kafka and Tableau.',
    tags: ['Kafka', 'Spark', 'Tableau'],
    impact: 'Sub-second insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    liveDemo: 'https://example.com',
    github: 'https://github.com'
  }
];
