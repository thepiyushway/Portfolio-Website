import type { SocialIconKey } from './iconMap';

export type Social = {
  id: string;
  name: string;
  href: string;
  description: string;
  cta: string;
  icon: SocialIconKey;
};

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
