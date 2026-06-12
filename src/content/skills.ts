export type Skill = {
  /** Stable identity for React keys — never derive keys from display name. */
  id: string;
  name: string;
  icon: string;
};

export type SkillCategory = {
  /** Stable identity for React keys — never derive keys from display name. */
  id: string;
  category: string;
  skills: Skill[];
};

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SIMPLEICON = 'https://cdn.simpleicons.org';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    category: 'Frontend',
    skills: [
      { id: 'html5', name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
      { id: 'css3', name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
      { id: 'javascript', name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { id: 'typescript', name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
      { id: 'react', name: 'React', icon: `${DEVICON}/react/react-original.svg` },
      { id: 'nextjs', name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg` }
    ]
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { id: 'python', name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { id: 'fastapi', name: 'FastAPI', icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { id: 'graphql', name: 'GraphQL', icon: `${DEVICON}/graphql/graphql-plain.svg` },
      { id: 'postgresql', name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` }
    ]
  },
  {
    id: 'devops',
    category: 'DevOps',
    skills: [
      { id: 'docker', name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
      { id: 'kubernetes', name: 'Kubernetes', icon: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { id: 'github-actions', name: 'GitHub Actions', icon: `${DEVICON}/githubactions/githubactions-original.svg` },
      { id: 'terraform', name: 'Terraform', icon: `${DEVICON}/terraform/terraform-original.svg` }
    ]
  },
  {
    id: 'cloud',
    category: 'Cloud',
    skills: [
      { id: 'aws', name: 'AWS', icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { id: 'azure', name: 'Azure', icon: `${DEVICON}/azure/azure-original.svg` },
      { id: 'google-cloud', name: 'Google Cloud', icon: `${DEVICON}/googlecloud/googlecloud-original.svg` }
    ]
  },
  {
    id: 'ai',
    category: 'AI',
    skills: [
      { id: 'pytorch', name: 'PyTorch', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { id: 'tensorflow', name: 'TensorFlow', icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { id: 'pandas', name: 'Pandas', icon: `${DEVICON}/pandas/pandas-original.svg` },
      { id: 'apache-spark', name: 'Apache Spark', icon: `${DEVICON}/apachespark/apachespark-original.svg` }
    ]
  },
  {
    id: 'llm-engineering',
    category: 'LLM Engineering',
    skills: [
      { id: 'langchain', name: 'LangChain', icon: `${SIMPLEICON}/langchain` },
      { id: 'hugging-face', name: 'Hugging Face', icon: `${SIMPLEICON}/huggingface` },
      { id: 'anthropic', name: 'Anthropic', icon: `${SIMPLEICON}/anthropic` },
      { id: 'ollama', name: 'Ollama', icon: `${SIMPLEICON}/ollama` }
    ]
  }
];
