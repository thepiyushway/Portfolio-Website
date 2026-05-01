import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const SOCIAL_ICON_MAP = {
  youtube: Youtube,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter
} as const;

export type SocialIconKey = keyof typeof SOCIAL_ICON_MAP;
