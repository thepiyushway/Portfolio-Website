import { Cpu, Heart, Layers, MessageCircle, Mic, ThumbsUp, Users } from 'lucide-react';

export const STRATEGY_CALL_URL = 'https://calendly.com/thepiyushway/30min';
export const MENTORSHIP_URL = 'https://topmate.io/thepiyushway';

export const AI_CONSULTING_ITEMS = [
  { icon: Layers, text: 'Build full-stack AI products end-to-end : from zero to production' },
  { icon: Cpu,    text: 'Integrate AI & LLMs into your existing systems and workflows' },
  { icon: Users,  text: 'Strategic advisory for engineering teams and startups' },
  { icon: Mic,    text: 'Speaker sessions and content collaborations' },
] as const;

export const MENTORSHIP_ITEMS = [
  '1:1 Personalized Mentorship',
  'Mock Interviews (DSA & System Design)',
  'Long-term Career Growth Strategy',
  'Resume Review & Restructuring',
  'LinkedIn Profile Optimization',
] as const;

export const COMMUNITY_POSTS = [
  {
    platform: 'YouTube',
    // The channel has no uploads yet, so there's no real "latest video" to
    // link to — point at the channel itself rather than a placeholder video.
    url: 'https://www.youtube.com/@thepiyushway',
    // Shown until the live "latest upload" fetch resolves (or if the YouTube
    // Data API key is missing/the request fails) — see useLatestYoutubeVideo.
    staticThumbnail: '/images/youtube-fallback.jpg',
    title: 'New Videos Coming Soon : Subscribe to get Notified',
    stats: [{ icon: Users, value: '805' }],
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7032364448006754304/',
    staticThumbnail: '/images/linkedin-profile.png',
    title: "Piyush's latest article on engineering leadership — practical, national engineering leadership and beyond.",
    stats: [
      { icon: ThumbsUp, value: '131' },
      { icon: MessageCircle, value: '35' },
    ],
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/p/DExTk-ph8Kw/?img_index=1',
    staticThumbnail: null,
    title: 'Visual AI experiments & creator stories',
    stats: [
      { icon: Heart, value: '158' },
      { icon: MessageCircle, value: '55K' },
    ],
  },
] as const;

export type Post = (typeof COMMUNITY_POSTS)[number];
