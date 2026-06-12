export type Skill = { name: string; icon: string };
export type SkillCategory = { category: string; skills: Skill[] };

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SIMPLEICON = 'https://cdn.simpleicons.org';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
      { name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg` }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { name: 'FastAPI', icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: 'GraphQL', icon: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` }
    ]
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
      { name: 'Kubernetes', icon: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: 'GitHub Actions', icon: `${DEVICON}/githubactions/githubactions-original.svg` },
      { name: 'Terraform', icon: `${DEVICON}/terraform/terraform-original.svg` }
    ]
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'AWS', icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: 'Azure', icon: `${DEVICON}/azure/azure-original.svg` },
      { name: 'Google Cloud', icon: `${DEVICON}/googlecloud/googlecloud-original.svg` }
    ]
  },
  {
    category: 'AI',
    skills: [
      { name: 'PyTorch', icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: 'TensorFlow', icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: 'Pandas', icon: `${DEVICON}/pandas/pandas-original.svg` },
      { name: 'Apache Spark', icon: `${DEVICON}/apachespark/apachespark-original.svg` }
    ]
  },
  {
    category: 'LLM Engineering',
    skills: [
      { name: 'LangChain', icon: `${SIMPLEICON}/langchain` },
      { name: 'Hugging Face', icon: `${SIMPLEICON}/huggingface` },
      { name: 'Anthropic', icon: `${SIMPLEICON}/anthropic` },
      { name: 'Ollama', icon: `${SIMPLEICON}/ollama` }
    ]
  }
];
