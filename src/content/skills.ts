export type SkillCategory = {
  /** Stable identity for React keys — never derive keys from display name. */
  id: string;
  category: string;
  skills: string[];
};

export const skillsIntro =
  'I enjoy taking ideas from a whiteboard discussion to a working product : building the frontend, backend, cloud infrastructure, and AI pieces needed to make it real.';

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    category: 'Backend',
    skills: ['Python', 'FastAPI', 'REST APIs', 'GraphQL', 'Microservices', 'System Design']
  },
  {
    id: 'frontend',
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'Tailwind CSS']
  },
  {
    id: 'ai-engineering',
    category: 'AI Engineering',
    skills: ['LLM Applications', 'RAG', 'AI Agents', 'MCP', 'LangChain', 'OpenAI APIs', 'Context Engineering', 'Agentic Workflows']
  },
  {
    id: 'databases',
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'DynamoDB', 'Elasticsearch', 'Firebase Realtime DB', 'Vector DB (Pinecone)']
  },
  {
    id: 'cloud-monitoring',
    category: 'Cloud & Monitoring',
    skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Prometheus', 'Grafana']
  }
];
