export type ExperienceRole = {
  id: string;
  role: string;
  period: string;
  employmentType: string;
  track: string;
  summary: string;
  keyImpact: string;
  highlights: string[];
  tools: string[];
};

export type CompanyExperience = {
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
        summary: 'Joined Microsoft Teams as a Full-Stack Engineer, delivering customer-facing features, owning live-site reliability and incident management, and pioneering AI-driven development through custom agents, MCPs, skills, and internal engineering tools.',
        keyImpact: 'Drove reliability, feature delivery, and operational excellence across Teams Events by shipping 8+ major features, reducing active incidents by 58%, and building AI-powered tooling that accelerated debugging and developer productivity.',
        highlights: [
          'Delivered 8+ customer-facing features and platform enhancements across frontend and backend, including Event Access Policies, Sensitivity Label Enforcement, Upgrade UX, Co-location support, Zoom integrations, and Attendance Reports.',
          'Led DRI and live-site operations across OneEvents, enhancing monitoring, telemetry, dashboards, and incident response processes while reducing active incidents by 58%',
          'Created 4+ AI-native tools and workflows (agents, MCPs, skills) to streamline engineering operations, reduce investigation effort and accelerate software delivery.'
        ],
        tools: ['React.js', 'TypeScript', 'GraphQL', 'REST APIs', 'Generative AI', 'OOPS', 'Microsoft Azure']
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
        keyImpact: 'Reduced risk reporting time by 95%, delivered ₹5 lakh/month in operational savings, and improved capital efficiency through credit risk platform modernization.',
        highlights: [
          'Built a Credit Risk Platform that reduced risk report generation time by 95%, resulting in ₹5 lakh monthly operational savings.',
          'Designed and launched a Call Reporting Dashboard for relationship managers and clients, improving visibility into client interactions and engagement.',
          'Optimized client collateral mapping workflows, contributing to a 1% improvement in Capital Adequacy Ratio (CAR).'
        ],
        tools: ['Python', 'FastAPI', 'REST APIs', 'Microservices', 'GitHub Actions', 'AWS']
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
        keyImpact: 'Drove $178M in annualized impact by expanding review solicitation models globally while cutting weekly ticket volume by 33%.',
        highlights: [
          'Expanded CTRC review solicitation model to CA, UK, and IN marketplaces, generating annualized transactional CP impact of $178M.',
          'Improved GREP Targeting System through Spark optimization, monitoring, and scheduling enhancements.',
          'Reduced operational ticket volume by 33% as team Operational SPOC.'
        ],
        tools: ['Artificial Intelligence', 'Python', 'REST APIs', 'AWS', 'Apache Spark', 'Data Pipelines', 'Distributed Systems']
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
        summary: 'Worked across American Express’ Enterprise Cloud Platform (eCP) and CODE organizations, building cloud infrastructure, automation platforms, and large-scale data systems.',
        keyImpact: 'Enabled regulatory compliance and enterprise modernization by onboarding 200+ services and transforming 15+ legacy ETL workflows onto modern cloud and big-data platforms.',
        highlights: [
          'Onboarded 200+ services as part of the RBI Data Localization initiative.',
          'Built an AI-powered Slack assistant to automate cloud engineering support.',
          'Led enterprise-wide SSL certificate migration across internal services.'
        ],
        tools: ['Python', 'Artificial Intelligence', 'RASA NLU', 'AWS']
      },
      {
        id: 'amex-technology-intern',
        role: 'Technology Intern',
        period: 'Jan 2020 - Jun 2020',
        employmentType: 'Internship',
        track: 'Global Commercial Services',
        summary: '',
        keyImpact: '',
        highlights: [
          'Migrated 15+ Ab Initio workflows to Apache Spark-based pipelines.',
          'Earned a Pre-Placement Offer (PPO) for internship performance.'
        ],
        tools: ['Scala', 'Apache Spark', 'Hadoop', 'Oracle']
      }
    ]
  }
];
