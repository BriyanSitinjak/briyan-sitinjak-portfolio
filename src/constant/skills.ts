import {
  SiAnthropic,
  SiClerk,
  SiExpo,
  SiFigma,
  SiGooglegemini,
  SiGoogle,
  SiJest,
  SiReact,
  SiStrapi,
  SiSupabase,
  SiVercel,
  SiWhatsapp,
  SiClickup,
} from 'react-icons/si';

import ReactJsIcon from '@/src/assets/icon_react.svg';
import BootstrapIcon from '@/src/assets/icon_bootstrap.svg';
import NextJsIcon from '@/src/assets/icon_nextjs.svg';
import ReduxJsIcon from '@/src/assets/icon_redux.svg';
import ReactQueryIcon from '@/src/assets/icon_react_query.svg';
import TypescriptIcon from '@/src/assets/icon_typescript.svg';
import AngularJsIcon from '@/src/assets/icon_angularjs.svg';
import PHPIcon from '@/src/assets/icon_php.svg';
import FirebaseIcon from '@/src/assets/icon_firebase.svg';
import CypressIcon from '@/src/assets/icon_cypress.svg';
import SentryIcon from '@/src/assets/icon_sentry.svg';
import StoryBookIcon from '@/src/assets/icon_storybook.svg';
import GithubIcon from '@/src/assets/icon_github.svg';
import GitlabIcon from '@/src/assets/icon_gitlab.svg';
import TailwindIcon from '@/src/assets/icon_tailwindsvg.svg';
import SASSIcon from '@/src/assets/icon_sass.svg';
import MaterialIcon from '@/src/assets/icon_material.svg';
import FramerMotionIcon from '@/src/assets/icon_framer_motion.svg';
import WordPressIcon from '@/src/assets/icon_wordpress.svg';
import ElementorIcon from '@/src/assets/icon_elementor.svg';
import WoocommerceIcon from '@/src/assets/icon_woocommerce.svg';
import ExpressJsIcon from '@/src/assets/icon_expressjs.svg';
import NodeJsIcon from '@/src/assets/icon_nodejs.svg';
import MongoDbIcon from '@/src/assets/icon_mongodb.svg';
import TrelloIcon from '@/src/assets/icon_trello.svg';
import JiraIcon from '@/src/assets/icon_jira.svg';
import SSMSIcon from '@/src/assets/icon_ssms.svg';
import ElevenLabsIcon from '@/src/assets/icon_elevenlabs.svg';
import LovableIcon from '@/src/assets/icon_lovable.svg';
import MidtransIcon from '@/src/assets/icon_midtrans.svg';
import RajaOngkirIcon from '@/src/assets/icon_rajaongkir.svg';
import DuitkuIcon from '@/src/assets/icon_duitku.svg';

import { ISkill, ISkillCategory, SkillId } from './type';

/** Capability areas hiring managers scan for — web vs mobile kept separate. */
export const SKILL_CATEGORIES: ISkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend (Web)',
    description: 'Product UI, app architecture, and production web delivery.',
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    description: 'Cross-platform apps with React Native and Expo.',
  },
  {
    id: 'ai',
    label: 'AI & Intelligent Features',
    description: 'Voice, LLMs, and AI-assisted product flows.',
  },
  {
    id: 'styling',
    label: 'UI & Design',
    description: 'Design systems, styling, motion, and Figma handoff.',
  },
  {
    id: 'data',
    label: 'State & Data',
    description: 'Client state, server state, and forms at scale.',
  },
  {
    id: 'quality',
    label: 'Quality & Observability',
    description: 'Testing, monitoring, and component documentation.',
  },
  {
    id: 'cms',
    label: 'CMS & Commerce',
    description: 'WordPress, Elementor, and WooCommerce delivery.',
  },
  {
    id: 'platform',
    label: 'Platform & Backend',
    description: 'Auth, APIs, CMS backends, hosting, and supporting services.',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    description: 'Payments, shipping, messaging, and third-party APIs.',
  },
  {
    id: 'collaboration',
    label: 'Delivery Tools',
    description: 'Version control and remote team workflows.',
  },
];

export const SKILLS: ISkill[] = [
  {
    id: 'react',
    name: 'React',
    altText: 'react',
    icon: ReactJsIcon,
    category: 'frontend',
    featured: true,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    altText: 'next_js',
    icon: NextJsIcon,
    category: 'frontend',
    featured: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    altText: 'typescript',
    icon: TypescriptIcon,
    category: 'frontend',
    featured: true,
  },
  {
    id: 'angularjs',
    name: 'AngularJS',
    altText: 'angular_js',
    icon: AngularJsIcon,
    category: 'frontend',
  },
  {
    id: 'lovable',
    name: 'Lovable',
    altText: 'lovable',
    icon: LovableIcon,
    category: 'frontend',
  },
  {
    id: 'react-native',
    name: 'React Native',
    altText: 'react_native',
    icon: SiReact,
    iconKind: 'component',
    category: 'mobile',
    featured: true,
  },
  {
    id: 'expo',
    name: 'Expo',
    altText: 'expo',
    icon: SiExpo,
    iconKind: 'component',
    category: 'mobile',
    featured: true,
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    altText: 'elevenlabs',
    icon: ElevenLabsIcon,
    category: 'ai',
    featured: true,
  },
  {
    id: 'gemini',
    name: 'Gemini LLM',
    altText: 'gemini',
    icon: SiGooglegemini,
    iconKind: 'component',
    category: 'ai',
    featured: true,
  },
  {
    id: 'claude',
    name: 'Claude',
    altText: 'claude',
    icon: SiAnthropic,
    iconKind: 'component',
    category: 'ai',
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    altText: 'framer_motion',
    icon: FramerMotionIcon,
    category: 'styling',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    altText: 'tailwind',
    icon: TailwindIcon,
    category: 'styling',
    featured: true,
  },
  {
    id: 'sass',
    name: 'Sass',
    altText: 'sass',
    icon: SASSIcon,
    category: 'styling',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    altText: 'bootstrap',
    icon: BootstrapIcon,
    category: 'styling',
  },
  {
    id: 'material-ui',
    name: 'Material UI',
    altText: 'material_ui',
    icon: MaterialIcon,
    category: 'styling',
  },
  {
    id: 'figma',
    name: 'Figma',
    altText: 'figma',
    icon: SiFigma,
    iconKind: 'component',
    category: 'styling',
    featured: true,
  },
  {
    id: 'redux',
    name: 'Redux',
    altText: 'redux_js',
    icon: ReduxJsIcon,
    category: 'data',
  },
  {
    id: 'react-query',
    name: 'React Query',
    altText: 'react_query',
    icon: ReactQueryIcon,
    category: 'data',
  },
  {
    id: 'cypress',
    name: 'Cypress',
    altText: 'cypress',
    icon: CypressIcon,
    category: 'quality',
    featured: true,
  },
  {
    id: 'jest',
    name: 'Jest',
    altText: 'jest',
    icon: SiJest,
    iconKind: 'component',
    category: 'quality',
    featured: true,
  },
  {
    id: 'storybook',
    name: 'Storybook',
    altText: 'storybook',
    icon: StoryBookIcon,
    category: 'quality',
  },
  {
    id: 'sentry',
    name: 'Sentry',
    altText: 'sentry',
    icon: SentryIcon,
    category: 'quality',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    altText: 'wordpress',
    icon: WordPressIcon,
    category: 'cms',
    featured: true,
  },
  {
    id: 'elementor',
    name: 'Elementor',
    altText: 'elementor',
    icon: ElementorIcon,
    category: 'cms',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    altText: 'woocommerce',
    icon: WoocommerceIcon,
    category: 'cms',
  },
  {
    id: 'php',
    name: 'PHP',
    altText: 'php',
    icon: PHPIcon,
    category: 'cms',
  },
  {
    id: 'strapi',
    name: 'Strapi Headless',
    altText: 'strapi_headless',
    icon: SiStrapi,
    iconKind: 'component',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    altText: 'node_js',
    icon: NodeJsIcon,
    category: 'platform',
  },
  {
    id: 'expressjs',
    name: 'Express.js',
    altText: 'express_js',
    icon: ExpressJsIcon,
    category: 'platform',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    altText: 'mongodb',
    icon: MongoDbIcon,
    category: 'platform',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    altText: 'firebase',
    icon: FirebaseIcon,
    category: 'platform',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    altText: 'supabase',
    icon: SiSupabase,
    iconKind: 'component',
    category: 'platform',
    featured: true,
  },
  {
    id: 'clerk',
    name: 'Clerk',
    altText: 'clerk',
    icon: SiClerk,
    iconKind: 'component',
    category: 'platform',
    featured: true,
  },
  {
    id: 'vercel',
    name: 'Vercel',
    altText: 'vercel',
    icon: SiVercel,
    iconKind: 'component',
    category: 'platform',
    featured: true,
  },
  {
    id: 'ssms',
    name: 'SQL Server',
    altText: 'ssms',
    icon: SSMSIcon,
    category: 'platform',
  },
  {
    id: 'midtrans',
    name: 'Midtrans',
    altText: 'midtrans',
    icon: MidtransIcon,
    category: 'integrations',
    featured: true,
  },
  {
    id: 'rajaongkir',
    name: 'RajaOngkir',
    altText: 'rajaongkir',
    icon: RajaOngkirIcon,
    category: 'integrations',
    featured: true,
  },
  {
    id: 'duitku',
    name: 'Duitku',
    altText: 'duitku',
    icon: DuitkuIcon,
    category: 'integrations',
    featured: true,
  },
  {
    id: 'google-api',
    name: 'Google API',
    altText: 'google_api',
    icon: SiGoogle,
    iconKind: 'component',
    category: 'integrations',
  },
  {
    id: 'whatsapp-automation',
    name: 'WhatsApp Automation',
    altText: 'whatsapp_automation',
    icon: SiWhatsapp,
    iconKind: 'component',
    category: 'integrations',
  },
  {
    id: 'github',
    name: 'GitHub',
    altText: 'github',
    icon: GithubIcon,
    category: 'collaboration',
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    altText: 'gitlab',
    icon: GitlabIcon,
    category: 'collaboration',
  },
  {
    id: 'jira',
    name: 'Jira',
    altText: 'jira',
    icon: JiraIcon,
    category: 'collaboration',
  },
  {
    id: 'trello',
    name: 'Trello',
    altText: 'trello',
    icon: TrelloIcon,
    category: 'collaboration',
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    altText: 'clickup',
    icon: SiClickup,
    iconKind: 'component',
    category: 'collaboration',
  },
];

/** Project name → skills used (aligned with LIST_EXPERIENCES descriptions). */
export const PROJECT_STACKS: Record<string, SkillId[]> = {
  'Expenses Tracker': ['react-native', 'expo', 'typescript'],
  'Vinje Partners': ['nextjs', 'typescript', 'tailwind', 'vercel'],
  'CMS EdViss': ['nextjs', 'typescript', 'redux', 'tailwind'],
  EdViss: ['nextjs', 'typescript', 'tailwind'],
  'Figma of EdViss': ['figma'],
  Manashakti: ['lovable'],
  'Manashakti Apps': ['react-native', 'expo', 'typescript', 'supabase', 'elevenlabs'],
  'Figma of Manashakti': ['figma'],
  'Ranah Karya': ['nextjs', 'tailwind'],
  'FairPax Indonesia': [
    'wordpress',
    'woocommerce',
    'elementor',
    'php',
    'midtrans',
    'rajaongkir',
  ],
  'Kaulu Concept': ['react', 'tailwind', 'vercel'],
  'Kingdom Technology': [
    'nextjs',
    'typescript',
    'react',
    'tailwind',
    'clerk',
    'strapi',
    'gemini',
    'clickup',
  ],
  'Trade Link Shop': ['wordpress', 'elementor', 'woocommerce', 'duitku'],
  'Portal HRMS': ['nextjs', 'typescript', 'material-ui', 'react-query', 'redux'],
  'Vela Aero': ['wordpress', 'elementor'],
  'Portal Kampus': ['nextjs', 'typescript', 'material-ui', 'react-query', 'redux'],
  'Portal Kerja': ['nextjs', 'typescript', 'redux', 'sass'],
  'Portal Sekolah': ['nextjs', 'typescript', 'redux', 'sass', 'jest', 'cypress'],
  Camy: ['nextjs', 'typescript', 'tailwind'],
  'Timur Project': ['nextjs', 'tailwind', 'vercel'],
  'Kompek FEB UI': ['wordpress', 'elementor', 'google-api'],
  'Indo Menara Digital': ['wordpress', 'elementor', 'php'],
  'Onyx Tailors': ['wordpress'],
  'Golkar Institue': ['wordpress'],
  TEP: ['wordpress'],
  'Indonesia Health Pass': ['wordpress'],
  'Bersama Dokter': ['wordpress'],
  HIPMI: ['wordpress'],
  'Sunset People Project': ['wordpress', 'php', 'whatsapp-automation'],
  'Sewa Blower Murah': ['wordpress', 'elementor'],
  'Ruhama Alexandria': ['wordpress', 'elementor'],
  Mediatech: ['wordpress', 'woocommerce', 'rajaongkir'],
  Livera: ['wordpress'],
  'Chameleon / Digital Native Agency': ['wordpress', 'php'],
};

export const getSkillById = (id: SkillId) => SKILLS.find((skill) => skill.id === id);

export const getProjectStack = (projectName: string): SkillId[] =>
  PROJECT_STACKS[projectName] ?? [];

export const getProjectsForSkill = (skillId: SkillId, projectNames: string[]) =>
  projectNames.filter((name) => getProjectStack(name).includes(skillId));

export const countProjectsForSkill = (skillId: SkillId, projectNames: string[]) =>
  getProjectsForSkill(skillId, projectNames).length;
