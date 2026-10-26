import {
  BrainCircuit,
  Database,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react'
import {
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillItem,
  StatItem,
} from '../types'

export const personalInfo = {
  name: 'Lalit Gaikwad',
  shortName: 'LG',
  role: 'React Native Developer & AI Engineer',
  location: 'PUNE, INDIA',
  email: 'lalitgaikwad274@gmail.com',
  github: 'https://github.com/lalitgaikwad274',
  linkedin: 'https://www.linkedin.com/',
  status: 'OPEN TO OPPORTUNITIES',
}

export const navItems: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Journey', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats: StatItem[] = [
  { value: '4', suffix: '+', label: 'Years in software development*' },
  { value: '30', suffix: '%', label: 'Recharge page performance improvement*' },
  { value: 'AI', suffix: '+', label: 'Mobile-first product mindset' },
  { value: '∞', label: "Curiosity for what's next" },
]

export const skills: SkillItem[] = [
  {
    icon: Smartphone,
    title: 'Mobile engineering',
    desc: 'Cross-platform apps built for speed, polish, and reliability.',
    tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'React Navigation'],
  },
  {
    icon: BrainCircuit,
    title: 'Generative AI',
    desc: 'Useful AI experiences grounded in real product workflows.',
    tags: ['LLM integration', 'RAG', 'Prompt engineering', 'Whisper', 'TTS'],
  },
  {
    icon: Workflow,
    title: 'Backend systems',
    desc: 'Clean APIs and services that connect product experiences end to end.',
    tags: ['Python', 'FastAPI', 'Node.js', 'Express.js'],
  },
  {
    icon: Database,
    title: 'Data & platform',
    desc: 'Practical data layers, observability, and delivery tooling.',
    tags: ['PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'CI/CD'],
  },
]

export const projects: ProjectItem[] = [
  {
    n: '01',
    type: 'AI PRODUCT',
    title: 'AI Meeting Notes',
    desc: 'A voice-first notes workflow that turns recordings into searchable transcripts, concise summaries, key points, and action items.',
    stack: ['React Native', 'FastAPI', 'Whisper', 'GPT-4o', 'PostgreSQL'],
    icon: BrainCircuit,
    tone: 'violet',
    link: 'https://github.com/lalitgaikwad274',
  },
  {
    n: '02',
    type: 'MOBILE · TELECOM',
    title: 'Vodafone Idea (Vi)',
    desc: 'Contributed to prepaid and postpaid user journeys, API-driven experiences, offer discovery, and performance improvements in a large-scale mobile app.',
    stack: ['React Native', 'Redux Toolkit', 'REST APIs', 'Kibana'],
    icon: Smartphone,
    tone: 'lime',
    link: 'https://www.myvi.in/',
  },
  {
    n: '03',
    type: 'AI · RAG',
    title: 'Intelligent Recharge Assistant',
    desc: 'A conversational assistant concept for understanding recharge intent, retrieving relevant plans, and connecting answers to live telecom APIs.',
    stack: ['Python', 'FastAPI', 'RAG', 'Azure AI Search', 'LLMs'],
    icon: Sparkles,
    tone: 'blue',
    link: 'https://github.com/lalitgaikwad274',
  },
]

export const experience: ExperienceItem[] = [
  {
    date: 'NOW',
    title: 'Mobile + AI Engineering',
    company: 'Independent projects & continuous learning',
    text: 'Building at the intersection of mobile product development, backend APIs, and Generative AI.',
  },
  {
    date: 'PRODUCTION',
    title: 'React Native Developer',
    company: 'Vodafone Idea (Vi) app',
    text: 'Worked across mobile journeys, offer experiences, API integrations, and app performance optimization.',
  },
]
