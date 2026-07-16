import { FaGithub, FaGitlab, FaLinkedin, FaMedium } from 'react-icons/fa';

export const SOCIAL_ICONS = {
  GitHub: <FaGithub />,
  GitLab: <FaGitlab />,
  LinkedIn: <FaLinkedin />,
  Medium: <FaMedium />,
} as const;

export type SocialName = keyof typeof SOCIAL_ICONS;
