export type SkillId =
  | 'react'
  | 'nextjs'
  | 'typescript'
  | 'angularjs'
  | 'react-native'
  | 'expo'
  | 'lovable'
  | 'framer-motion'
  | 'tailwind'
  | 'sass'
  | 'bootstrap'
  | 'material-ui'
  | 'figma'
  | 'redux'
  | 'react-query'
  | 'cypress'
  | 'jest'
  | 'storybook'
  | 'sentry'
  | 'wordpress'
  | 'elementor'
  | 'woocommerce'
  | 'php'
  | 'strapi'
  | 'nodejs'
  | 'expressjs'
  | 'mongodb'
  | 'firebase'
  | 'supabase'
  | 'clerk'
  | 'vercel'
  | 'ssms'
  | 'midtrans'
  | 'rajaongkir'
  | 'duitku'
  | 'google-api'
  | 'whatsapp-automation'
  | 'elevenlabs'
  | 'gemini'
  | 'claude'
  | 'github'
  | 'gitlab'
  | 'jira'
  | 'trello'
  | 'clickup';

export type SkillCategoryId =
  | 'frontend'
  | 'mobile'
  | 'ai'
  | 'styling'
  | 'data'
  | 'quality'
  | 'cms'
  | 'platform'
  | 'integrations'
  | 'collaboration';

export interface ISkillCategory {
  id: SkillCategoryId;
  label: string;
  description: string;
}

export interface ISkill {
  id: SkillId;
  name: string;
  altText: string;
  /** Next.js static image import or a react-icons component */
  icon: any;
  iconKind?: 'image' | 'component';
  /** Omit to keep the skill on cards without a Services category section */
  category?: SkillCategoryId;
  featured?: boolean;
}

export type ProjectLifecycle = 'active' | 'inactive' | 'maintenance';
export type ProjectDeployment = 'production' | 'staging' | 'maintenance';

export interface IExperiencesData {
  name: string;
  altText: string;
  description: string;
  img: any;
  link: string;
  /** Product lifecycle shown as Active / Inactive on the card */
  status: ProjectLifecycle;
  /** Where the build runs: production, staging, or under maintenance */
  deployment: ProjectDeployment;
}

export interface ISocialLink {
  name: string;
  url: string;
}

export interface IHomeHeading {
  name: string;
  role: string;
  headingText: string;
  description: string;
}

export interface ILinks {
  name: string;
  path: string;
  mobileOnly?: boolean;
}

export interface IStatsData {
  id?: string;
  num: number;
  text: string;
}

/** @deprecated Prefer ISkill from skills.ts */
export interface ITechMastered {
  id?: string;
  name: string;
  altText: string;
  icon: any;
}
