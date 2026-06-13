export type ExperienceRole = {
  /** Stable identity for React keys — never derive keys from role title. */
  id: string;
  role: string;
  period: string;
  employmentType: string;
  track: string;
  summary: string;
  highlights: string[];
  tools: string[];
  /** Short, scannable headline metrics derived from highlights. Shown as badges in the expanded card. */
  metrics?: string[];
};

export type CompanyExperience = {
  /** Stable identity for React keys and DOM ids (e.g. accordion panel ids). */
  id: string;
  company: string;
  companyLogo: string;
  location: string;
  period: string;
  roles: ExperienceRole[];
};

export const companyExperiences: CompanyExperience[] = [
  {
    id: 'microsoft',
    company: 'Microsoft',
    companyLogo: '/logos/microsoft-icon.png',
    location: 'Bengaluru, India',
    period: 'Jan 2025 - Present',
    roles: [
      {
        id: 'microsoft-software-engineer-2',
        role: 'Software Engineer II',
        period: 'Jan 2025 - Present',
        employmentType: 'Full-time',
        track: 'Microsoft Teams',
        summary: 'Joined Microsoft Teams as a Full Stack Developer, building user-facing and platform capabilities for collaboration workflows.',
        highlights: [
          'Building product features across frontend and backend systems for Microsoft Teams.',
          'Collaborating with cross-functional stakeholders to improve user experience and delivery velocity.',
          'Driving production-quality implementation with reliability and maintainability as core engineering goals.'
        ],
        tools: ['React.js', 'TypeScript', 'Node.js', 'Distributed Systems', 'REST APIs', 'Azure']
      }
    ]
  },
  {
    id: 'kotak-mahindra-bank',
    company: 'Kotak Mahindra Bank',
    companyLogo: '/logos/kotak-icon.png',
    location: 'Bengaluru, India',
    period: 'Jun 2023 - Jan 2025',
    roles: [
      {
        id: 'kotak-software-development-engineer',
        role: 'Software Development Engineer',
        period: 'Jun 2023 - Jan 2025',
        employmentType: 'Full-time',
        track: 'Risk Engineering',
        summary: 'Worked on risk and reporting systems for enterprise banking workflows with measurable business impact.',
        highlights: [
          'Built a Credit Risk Platform that reduced risk report generation time by 95%, resulting in ₹5 lakh monthly operational savings.',
          'Designed and launched a Call Reporting Dashboard for relationship managers and clients, improving visibility into client interactions and engagement.',
          '    Optimized client collateral mapping workflows, contributing to a 1% improvement in Capital Adequacy Ratio (CAR).'
        ],
        metrics: ['95% Faster', '₹5L/mo Saved', '+1% CAR'],
        tools: ['Python', 'FastAPI', 'Docker', 'Microservices', 'AWS']
      }
    ]
  },
  {
    id: 'amazon',
    company: 'Amazon',
    companyLogo: '/logos/amazon-icon.png',
    location: 'Bengaluru, India',
    period: 'Jun 2022 - Mar 2023',
    roles: [
      {
        id: 'amazon-sde-1',
        role: 'Software Development Engineer (SDE-1)',
        period: 'Jun 2022 - Mar 2023',
        employmentType: 'Full-time',
        track: 'Customer Behaviour Analytics Team',
        summary: 'Worked in the Repeat Engagement Team under Customer Behaviour Analysis org, owning Amazon’s insights pipeline, from data collection to deep analytics. Ultimately, we answer why customer behavior changes, and how to influence it.',
        highlights: [
          'Expanded CTRC review solicitation model to CA, UK, and IN marketplaces, generating annualized transactional CP impact of $178M.',
          'Modernized GREP targeting system by improving alarming, scheduling, and Spark memory efficiency.',
          'Served as operational SPOC, reducing weekly tickets from about 120 to 80 and resolved 194 tickets during on-call rotation.'
        ],
        metrics: ['$178M Impact', '33% Fewer Tickets', '194 Resolved'],
        tools: ['Python', 'REST APIs', 'Apache Spark', 'Data Pipelines', 'Operations']
      }
    ]
  },
  {
    id: 'american-express',
    company: 'American Express',
    companyLogo: '/logos/amex-icon.png',
    location: 'Bengaluru, India',
    period: 'Jan 2020 - Jun 2022',
    roles: [
      {
        id: 'amex-engineer-3',
        role: 'Engineer III',
        period: 'Jul 2021 - Jun 2022',
        employmentType: 'Full-time',
        track: 'Global Commercial Services',
        summary: 'Part of the Enterprise Cloud Platform team enabling faster time-to-market for business-critical applications.',
        highlights: [
          'Onboarded 200+ services to the India cluster for data localization compliance initiatives.',
          'Collaborated with platform teams to rotate and update SSL certificates across internal intranet services.',
          'Built an AI-powered Slack bot using RASA NLU to assist with recurring cloud engineering support queries.'
        ],
        metrics: ['200+ Services', 'AI Slack Bot'],
        tools: ['Python', 'AI', 'Cloud Engineering', 'Platform Operations', 'RASA']
      },
      {
        id: 'amex-technology-intern',
        role: 'Technology Intern',
        period: 'Jan 2020 - Jun 2020',
        employmentType: 'Internship',
        track: 'Global Commercial Services',
        summary: 'Contributed to GDR Data Modernization under the CODE team in Global Commercial Services.',
        highlights: [
          'Replicated ETL pipelines previously built in Ab Initio using Spark, Hadoop, and Oozie.',
          'Transformed around 15 Ab Initio graphs into Spark jobs in Scala.',
          'Converted stored procedures from DB2 to Oracle and received a pre-placement offer at internship completion.'
        ],
        metrics: ['15+ ETL Jobs', 'PPO Offer'],
        tools: ['Apache Spark', 'Python', 'Scala', 'Hadoop', 'Oozie', 'ETL']
      }
    ]
  }
];
