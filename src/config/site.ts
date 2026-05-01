import { type LucideIcon, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

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
    href: 'https://www.linkedin.com/in/thepiyushway',
    description: 'Daily insights & career growth',
    cta: 'Connect',
    icon: 'linkedin'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/thepiyushway',
    description: 'Visual AI experiments & creator stories',
    cta: 'Follow',
    icon: 'instagram'
  },
  {
    id: 'twitter',
    name: 'X / Twitter',
    href: 'https://x.com/intent/follow?screen_name=thepiyushway',
    description: 'Quick thoughts, threads, and engineering takes',
    cta: 'Follow',
    icon: 'twitter'
  }
] as const;

type HeroHeadingLine = {
  text: string;
  tone: 'default' | 'brand' | 'accent';
};

type HeroStat = {
  value: string;
  label: string;
};

type HeroCompany = {
  name: string;
  logo: string;
};

type HeroSocialLink = {
  name: string;
  href: string;
  label: string;
  Icon: LucideIcon;
  hoverClass: string;
};

export const siteConfig = {
  hero: {
    availabilityLabel: 'Open to Work & Collaborations',
    headingLines: [
      { text: 'Software Engineer', tone: 'default' },
      { text: 'AI Consultant', tone: 'brand' },
      { text: 'Tech Educator', tone: 'accent' }
    ] as HeroHeadingLine[],
    tagline:
      'Building scalable full-stack systems, deploying production-grade AI with real impact, and mentoring engineers to grow faster.',
    avatar: '/images/profile.jpg',
    stats: [
      { value: `${getCompletedYears(careerStartDate)}+`, label: 'Years of Experience' },
      { value: '300+', label: 'Students Mentored' },
      { value: '50+', label: 'Projects Shipped' }
    ] as HeroStat[],
    workedWith: [
      { name: 'Microsoft', logo: '/logos/microsoft-logo.png' },
      { name: 'Amazon', logo: '/logos/amazon-logo.png' },
      { name: 'American Express', logo: '/logos/american-express-logo.png' },
      { name: 'Kotak Mahindra Bank', logo: '/logos/kotak-mahindra-bank-logo.png' }
    ] as HeroCompany[],
    cta: {
      primary: { label: 'Book an Appointment', href: 'https://topmate.io/thepiyushway' },
      secondary: { label: 'Explore My Work', href: '#work' }
    },
    socialPrompt: 'Join 45k+ developers learning full-stack development and AI',
    socialLinks: [
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/@ThePiyushWay?sub_confirmation=1',
        label: 'Follow on YouTube',
        Icon: Youtube,
        hoverClass:
          'hover:border-red-300 hover:bg-red-50 hover:text-red-600 hover:shadow-[0_18px_36px_rgba(239,68,68,0.18)] focus-visible:border-red-300 focus-visible:bg-red-50 focus-visible:text-red-600'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/thepiyushway',
        label: 'Follow on LinkedIn',
        Icon: Linkedin,
        hoverClass:
          'hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-[0_18px_36px_rgba(0,99,194,0.18)] focus-visible:border-blue-300 focus-visible:bg-blue-50 focus-visible:text-blue-600'
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/thepiyushway',
        label: 'Follow on Instagram',
        Icon: Instagram,
        hoverClass:
          'hover:border-pink-300 hover:bg-pink-50 hover:text-pink-500 hover:shadow-[0_18px_36px_rgba(236,72,153,0.18)] focus-visible:border-pink-300 focus-visible:bg-pink-50 focus-visible:text-pink-500'
      },
      {
        name: 'X / Twitter',
        href: 'https://x.com/intent/follow?screen_name=thepiyushway',
        label: 'Follow on X / Twitter',
        Icon: Twitter,
        hoverClass:
          'hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 hover:shadow-[0_18px_36px_rgba(14,165,233,0.18)] focus-visible:border-sky-300 focus-visible:bg-sky-50 focus-visible:text-sky-600'
      }
    ] as HeroSocialLink[],
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
