import { SOCIAL_LOGOS, type SocialId } from '@/lib/socials';

// ── Hero & social types — single source of truth, imported by the hero feature ──

export type HeroHeadingLine = {
  text: string;
  tone: 'default' | 'brand' | 'accent';
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroCompany = {
  name: string;
  logo: string;
};

export type HeroSocialLink = {
  name: string;
  href: string;
  label: string;
  logo: string;
  imgClass: string;
};

export type HeroCtaLink = {
  label: string;
  href: string;
};

export type SocialChannel = {
  id: SocialId;
  name: string;
  href: string;
  description: string;
  cta: string;
  icon: SocialId;
};

function getCompletedYears(startDate: Date): number {
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const anniversaryThisYear = new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate());

  if (today < anniversaryThisYear) {
    years -= 1;
  }

  return Math.max(0, years);
}

const careerStartDate = new Date(2021, 0, 1);

export const socials = [
  {
    id: 'youtube',
    name: 'YouTube',
    href: 'https://www.youtube.com/@ThePiyushWay?sub_confirmation=1',
    description: 'System design & AI breakdowns',
    cta: 'Subscribe',
    icon: 'youtube'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thepiyushway/',
    description: 'Daily insights & career growth',
    cta: 'Connect',
    icon: 'linkedin'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/thepiyushway/',
    description: 'Visual AI experiments & creator stories',
    cta: 'Follow',
    icon: 'instagram'
  },
  {
    id: 'twitter',
    name: 'X / Twitter',
    href: 'https://x.com/thepiyushway',
    description: 'Quick thoughts, threads & engineering takes',
    cta: 'Follow',
    icon: 'twitter'
  }
] as const satisfies readonly SocialChannel[];

export const siteConfig = {
  hero: {
    availabilityLabel: 'Open to Work & Collaborations',
    headingLines: [
      { text: 'Software Engineer', tone: 'default' },
      { text: 'AI Consultant', tone: 'brand' },
      { text: 'Tech Educator', tone: 'accent' }
    ] satisfies HeroHeadingLine[],
    tagline:
      'Building scalable full-stack systems, deploying production-grade AI with real impact, and mentoring engineers to grow faster.',
    avatar: '/images/profile.jpg',
    stats: [
      { value: `${getCompletedYears(careerStartDate)}+`, label: 'Years of Experience' },
      { value: '600+', label: 'Students Mentored' },
      { value: '50+', label: 'Projects Shipped' }
    ] satisfies HeroStat[],
    workedWith: [
      { name: 'Microsoft', logo: '/logos/microsoft-logo.png' },
      { name: 'Amazon', logo: '/logos/amazon-logo.png' },
      { name: 'American Express', logo: '/logos/american-express-logo.png' },
      { name: 'Kotak Mahindra Bank', logo: '/logos/kotak-mahindra-bank-logo.png' }
    ] satisfies HeroCompany[],
    cta: {
      primary: { label: 'Book a Strategy Call', href: 'https://calendly.com/thepiyushway/30min' },
      secondary: { label: 'Get Mentored', href: 'https://topmate.io/thepiyushway' }
    } satisfies Record<'primary' | 'secondary', HeroCtaLink>,
    socialPrompt: 'Join 45k+ developers learning full-stack development and AI',
    socialLinks: [
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/@ThePiyushWay?sub_confirmation=1',
        label: 'Subscribe on YouTube',
        logo: SOCIAL_LOGOS.youtube,
        imgClass: 'h-[40px] w-[55px] rounded-m object-contain'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/thepiyushway/',
        label: 'Connect on LinkedIn',
        logo: SOCIAL_LOGOS.linkedin,
        imgClass: 'h-[40px] w-[40px] rounded-m object-contain'
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/thepiyushway/',
        label: 'Follow on Instagram',
        logo: SOCIAL_LOGOS.instagram,
        imgClass: 'h-[40px] w-[40px] rounded-m object-contain'
      },
      {
        name: 'X / Twitter',
        href: 'https://x.com/thepiyushway',
        label: 'Follow on X / Twitter',
        logo: SOCIAL_LOGOS.twitter,
        imgClass: 'h-[40px] w-[40px] rounded-m object-contain'
      }
    ] satisfies HeroSocialLink[],
    subscribe: {
      label: 'Subscribe for AI, full-stack & real world insights!',
      placeholder: 'Enter your e-mail',
      helperText: 'No Spam. I hate it more than you do.',
      idleLabel: 'Subscribe',
      successLabel: 'Thank You! :)'
    }
  }
};

export type HeroConfig = typeof siteConfig.hero;
