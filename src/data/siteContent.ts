import { LucideIcon } from 'lucide-react';
import {
  Airplay,
  Atom,
  Bolt,
  Briefcase,
  Code2,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Monitor,
  PlayCircle,
  Search,
  Send,
  Star,
  Users,
  X,
  Youtube
} from 'lucide-react';

export type NavLink = { id: string; label: string; href: string };

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

function getCompletedYears(startDate: Date): number {
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const anniversaryThisYear = new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate());

  if (today < anniversaryThisYear) {
    years -= 1;
  }

  return Math.max(0, years);
}

const careerStartDate = new Date(2021, 0, 1);
const yearsOfExperience = getCompletedYears(careerStartDate);

export const hero = {
  titles: ['Software Engineer', 'AI Solutions Consultant', 'Tech Educator & Mentor'],
  tagline:
    'Building scalable full-stack systems, deploying production-grade AI with real impact, and mentoring engineers to grow faster.',
  avatar: '/images/profile.jpg',
  stats: [
    { value: `${yearsOfExperience}+`, label: 'Years of Experience' },
    { value: '300+', label: 'Students Mentored' },
    { value: '50+', label: 'Projects Shipped' }
  ],
  workedWith: [
    { name: 'Microsoft', logo: '/logos/microsoft-logo.png' },
    { name: 'Amazon', logo: '/logos/amazon-logo.png' },
    { name: 'American Express', logo: '/logos/american-express-logo.png' },
    { name: 'Kotak Mahindra Bank', logo: '/logos/kotak-mahindra-bank-logo.png' }
  ]
};

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
};

export const testimonialFeed: Testimonial[] = [
  { name: 'Amanpreet Kaur', quote: 'Very helpful mentorship with clear guidance on where and how to apply', rating: 5 },
  { name: 'Preeti Sharma', quote: 'Very informative helped me in reshaping my resume as per industry standards', rating: 5 },
  { name: 'Udit Gupta', quote: 'He clearly explains what to do and what not to do in real interviews', rating: 5 },
  { name: 'Prasad Patil', quote: 'His answers to the doubts were very helpful and friendly throughout', rating: 5 },
  { name: 'Aditya Chaudhary', quote: 'Big thanks for such a helpful and inspiring session! Learned a lot', rating: 5 },
  { name: 'Shaina', quote: "They shared their experience and provided a DSA sheet that's helped me grow", rating: 5 },
  { name: 'Nandhavarman G', quote: 'Very talented and well explained', rating: 5 },
  { name: 'Abhirath', quote: 'Great list. Thanks :)', rating: 5 },
  { name: 'Anonymous', quote: 'He answered all of my queries very patiently in a very insightful manner', rating: 5 },
  { name: 'rohitjc', quote: 'Your insights and guidance have been truly impactful in shaping my perspective', rating: 5 },
  { name: 'Pranav', quote: 'He is knowledgeable :)', rating: 5 },
];

export const infoCards = [
  {
    icon: Briefcase,
    title: 'Experience',
    description: '10+ years in full-stack engineering, AI architectures, leading teams at startups and enterprise scale.'
  },
  {
    icon: Code2,
    title: 'Technologies',
    description: 'Python, TypeScript, React, LLMs, LangChain, AWS Cloud infrastructure, scalable microservices.'
  },
  {
    icon: Globe,
    title: 'Industries',
    description: 'Fintech, EdTech, SaaS, and specialized AI workflows for enterprise operations.'
  }
];

export const pillarCards = [
  {
    icon: Layers,
    title: 'Software Engineering',
    description: 'Build robust, scalable backends and user experiences across cloud-native stacks.',
    cta: 'Inquire'
  },
  {
    icon: Bolt,
    title: 'AI for Businesses',
    description: 'Integrate ML and automation to accelerate operations and unlock new product capabilities.',
    cta: 'Learn More'
  },
  {
    icon: Briefcase,
    title: 'Freelance Consulting',
    description: 'Strategic advice on architecture, tech stacks, and hiring for early-stage founders.',
    cta: 'Book Call'
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Guided path for developers to level up in system design and AI product development.',
    cta: 'Apply Now'
  },
  {
    icon: PlayCircle,
    title: 'Content Creation',
    description: 'Educational videos, blogs, and deep-dive posts for software and AI workflow insights.',
    cta: 'Subscribe'
  },
  {
    icon: Airplay,
    title: 'Enterprise Strategy',
    description: 'Advising C-suite on Go-to-Market AI initiatives and risk-managed innovation roadmaps.',
    cta: 'Contact'
  }
];

export const projects = [
  {
    title: 'Enterprise Knowledge Engine',
    description: 'Reduced customer support response time by 50% by implementing a RAG-based AI assistant.',
    tags: ['Python', 'VectorDB', 'AWS'],
    impact: '50% faster resolution',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com'
  },
  {
    title: 'High-Throughput API Gateway',
    description: 'Architected a microservices gateway handling 100k+ RPS with 99.99% uptime for global fintech.',
    tags: ['TypeScript', 'Kubernetes', 'Edge'],
    impact: '99.99% uptime',
    image: 'https://images.unsplash.com/photo-1526378723219-f3f0b6b8f56b?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com'
  }
];

export type ExperienceEntry = {
  period: string;
  company: string;
  companyLogo: string;
  location: string;
  track: string;
  status: string;
  role: string;
  summary: string;
  highlights: string[];
  tools: string[];
};

export const experienceTimeline: ExperienceEntry[] = [
  {
    period: 'Jan 2025 - Present',
    company: 'Microsoft',
    companyLogo: '/logos/microsoft-logo.png',
    location: 'Bengaluru, India',
    track: 'Microsoft Teams',
    status: 'Working',
    role: 'Software Engineer II',
    summary: 'Joined Microsoft Teams as a Full Stack Developer, building user-facing and platform capabilities for collaboration workflows.',
    highlights: [
      'Building product features across frontend and backend systems for Microsoft Teams.',
      'Collaborating with cross-functional stakeholders to improve user experience and delivery velocity.',
      'Driving production-quality implementation with reliability and maintainability as core engineering goals.'
    ],
    tools: ['React.js', 'TypeScript', 'Node.js', 'Distributed Systems', 'REST APIs', 'Azure']
  },
  {
    period: 'Jun 2023 - Jan 2025',
    company: 'Kotak Mahindra Bank',
    companyLogo: '/logos/kotak-mahindra-bank-logo.png',
    location: 'Bengaluru, India',
    track: 'Risk Engineering',
    status: 'Completed',
    role: 'Software Development Engineer',
    summary: 'Worked on risk and reporting systems for enterprise banking workflows with measurable business impact.',
    highlights: [
      'Developed the Credit Risk platform, reducing risk report creation time by 95% and helping save approximately INR 500,000 monthly.',
      'Designed and launched a call reporting dashboard for relationship managers and clients.',
      'Optimized client collateral mapping, improving Capital Adequacy Ratio by 1%.'
    ],
    tools: ['Python', 'FastAPI', 'Docker', 'Microservices', 'AWS']
  },
  {
    period: 'Jun 2022 - Mar 2023',
    company: 'Amazon',
    companyLogo: '/logos/amazon-logo.png',
    location: 'Bengaluru, India',
    track: 'Customer Behaviour Analytics Team',
    status: 'Completed',
    role: 'Software Development Engineer (SDE-1)',
    summary: 'Contributed to repeat engagement products and analytics pipelines under Customer Behavior Analysis.',
    highlights: [
      'Expanded CTRC review solicitation model to CA, UK, and IN marketplaces, generating annualized transactional CP impact of $178M.',
      'Modernized GREP targeting system by improving alarming, scheduling, and Spark memory efficiency.',
      'Served as operational SPOC, reducing weekly tickets from about 120 to 80 and resolved 194 tickets during on-call rotation.'
    ],
    tools: ['Python', 'REST APIs', 'Apache Spark', 'Data Pipelines', 'Operations']
  },
  {
    period: 'Jul 2021 - Jun 2022',
    company: 'American Express',
    companyLogo: '/logos/american-express-logo.png',
    location: 'Bengaluru, India',
    track: 'Global Commercial Services',
    status: 'Completed',
    role: 'Engineer III',
    summary: 'Part of the Enterprise Cloud Platform team enabling faster time-to-market for business-critical applications.',
    highlights: [
      'Onboarded 200+ services to the India cluster for data localization compliance initiatives.',
      'Collaborated with platform teams to rotate and update SSL certificates across internal intranet services.',
      'Built an AI-powered Slack bot using RASA NLU to assist with recurring cloud engineering support queries.'
    ],
    tools: ['Python', 'AI', 'Cloud Engineering', 'Platform Operations', 'RASA']
  },
  {
    period: 'Jan 2020 - Jun 2020',
    company: 'American Express',
    companyLogo: '/logos/american-express-logo.png',
    location: 'Bengaluru, India',
    track: 'Global Commercial Services',
    status: 'Completed',
    role: 'Technology Intern',
    summary: 'Contributed to GDR Data Modernization under the CODE team in Global Commercial Services.',
    highlights: [
      'Replicated ETL pipelines previously built in Ab Initio using Spark, Hadoop, and Oozie.',
      'Transformed around 15 Ab Initio graphs into Spark jobs in Scala.',
      'Converted stored procedures from DB2 to Oracle and received a pre-placement offer at internship completion.'
    ],
    tools: ['Apache Spark', 'Python', 'Scala', 'Hadoop', 'Oozie', 'ETL']
  }
];

export const platforms = [
  {
    icon: Youtube,
    name: 'YouTube',
    label: 'Follow',
    link: 'https://www.youtube.com/@ThePiyushWay?sub_confirmation=1',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    label: 'Connect',
    link: 'https://www.linkedin.com/in/thepiyushway',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: X,
    name: 'X / Twitter',
    label: 'Follow',
    link: 'https://x.com/intent/follow?screen_name=thepiyushway',
    color: 'from-slate-900 to-slate-700'
  },
  {
    icon: Search,
    name: 'Blog',
    label: 'Read',
    link: 'https://www.youtube.com/@ThePiyushWay',
    color: 'from-violet-500 to-indigo-500'
  },
  {
    icon: Mail,
    name: 'Newsletter',
    label: 'Join',
    link: 'mailto:thepiyushway@gmail.com?subject=Newsletter%20Subscription',
    color: 'from-teal-500 to-cyan-500'
  }
];

export const trusted = [
  {
    name: 'David Chen',
    role: 'VP, Product @ Traction Labs',
    quote: 'One of the consultants who actually understood the bridge between business needs and complete AI implementation.',
    rating: 5
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Engineering @ FlowShift',
    quote: 'The mentorship program was a game-changer, training 15 senior engineers in weeks with modern AI thinking.',
    rating: 5
  },
  {
    name: 'Mark Thompson',
    role: 'CTO @ Meridian Systems',
    quote: 'No technical content is the best I’ve seen: clear, concise, and incredibly practical for modern systems.',
    rating: 5
  }
];
