import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Heart,
  Layers,
  MessageCircle,
  Mic,
  Play,
  Rocket,
  ThumbsUp,
  Users,
} from 'lucide-react';
import { Button } from '../components/ui/Button';

// ─── constants ────────────────────────────────────────────────────────────────

const STRATEGY_CALL_URL = 'https://calendly.com/thepiyushway/30min';
const MENTORSHIP_URL = 'https://topmate.io/thepiyushway';

const AI_CONSULTING_ITEMS = [
  { icon: Layers, text: 'Build full-stack AI products end-to-end : from zero to production' },
  { icon: Cpu,    text: 'Integrate AI & LLMs into your existing systems and workflows' },
  { icon: Users,  text: 'Strategic advisory for engineering teams and startups' },
  { icon: Mic,    text: 'Speaker sessions and content collaborations' },
] as const;

const MENTORSHIP_ITEMS = [
  '1:1 Personalized Mentorship',
  'Mock Interviews (DSA & System Design)',
  'Long-term Career Growth Strategy',
  'Resume Review & Restructuring',
  'LinkedIn Profile Optimization',
] as const;

const COMMUNITY_POSTS = [
  {
    platform: 'YouTube' as const,
    url: 'https://www.youtube.com/watch?v=XIM_nbXESho',
    // YouTube has a reliable public thumbnail CDN — no fetch needed
    staticThumbnail: 'https://img.youtube.com/vi/XIM_nbXESho/hqdefault.jpg',
    title: 'System Design & AI Breakdown',
    stats: [
      { icon: Play, value: '13K' },
      { icon: MessageCircle, value: '17K' },
    ],
    brandBg: 'bg-red-50',
    brandText: 'text-red-600',
  },
  {
    platform: 'Instagram' as const,
    url: 'https://www.instagram.com/p/DExTk-ph8Kw/?img_index=1',
    staticThumbnail: null,
    title: 'Visual AI experiments & creator stories',
    layout: 'horizontal' as const,
    stats: [
      { icon: Heart, value: '158' },
      { icon: MessageCircle, value: '55K' },
    ],
    brandBg: 'bg-pink-50',
    brandText: 'text-pink-600',
  },
  {
    platform: 'LinkedIn' as const,
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7032364448006754304/',
    staticThumbnail: null,
    title: "Piyush's latest article on engineering leadership — practical, national engineering leadership and beyond.",
    stats: [
      { icon: ThumbsUp, value: '131' },
      { icon: MessageCircle, value: '35' },
    ],
    brandBg: 'bg-blue-50',
    brandText: 'text-blue-700',
  },
] as const;

// ─── microlink hook ────────────────────────────────────────────────────────────

function useMicrolinkImage(url: string | null) {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(url !== null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`, {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.status === 'success') {
          setImage(res.data?.image?.url ?? null);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { image, loading };
}

// ─── animation helpers ─────────────────────────────────────────────────────────

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

// ─── platform icons ────────────────────────────────────────────────────────────

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-red-600" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig-grad)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.81 2.256 6.09 2.243 6.498 2.243 12s.013 5.91.072 7.19c.059 1.278.353 2.451 1.32 3.418.967.967 2.14 1.261 3.418 1.32 1.28.059 1.688.072 7.19.072s5.91-.013 7.19-.072c1.278-.059 2.451-.353 3.418-1.32.967-.967 1.261-2.14 1.32-3.418C23.987 17.91 24 17.502 24 12s-.013-5.91-.072-7.19c-.059-1.278-.353-2.451-1.32-3.418C21.641.425 20.468.131 19.19.072 17.91.013 17.502 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#0A66C2]" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── service cards ─────────────────────────────────────────────────────────────

function ConsultingCard() {
  return (
    <motion.div
      variants={cardVariant}
      className="flex flex-col rounded-2xl bg-[linear-gradient(145deg,#0f172a_0%,#0b2f58_55%,#1e1b4b_100%)] p-8 shadow-elevated"
    >
      <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
        <BrainCircuit size={22} className="text-cyan-300" />
      </span>

      <h3 className="mb-3 text-2xl font-bold text-white">AI Consulting &amp; Strategy</h3>
      <p className="mb-6 text-sm leading-7 text-cyan-100/70">
        Whether you want to ship a product powered by AI, embed intelligence into what you've already built,
        or just need a sharp technical mind in the room — I can help.
      </p>

      <ul className="mb-8 space-y-3">
        {AI_CONSULTING_ITEMS.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 text-sm text-cyan-100/80">
            <Icon size={16} className="mt-0.5 shrink-0 text-cyan-400" />
            {text}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button
          href={STRATEGY_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
        >
          Book a Strategy Call
        </Button>
      </div>
    </motion.div>
  );
}

function MentorshipCard() {
  return (
    <motion.div
      variants={cardVariant}
      className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-soft"
    >
      <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
        <Rocket size={22} className="text-brand-primary" />
      </span>

      <h3 className="mb-2 text-2xl font-bold text-slate-900">Mentorship Services</h3>
      <p className="mb-6 text-sm leading-6 text-slate-500">
        Accelerate your career with personalized, tactical guidance from someone who's been through it.
      </p>

      <ul className="mb-8 space-y-3.5">
        {MENTORSHIP_ITEMS.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <CheckCircle2 size={18} className="shrink-0 text-green-500" />
            <span className="text-sm font-medium text-slate-700">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a
          href={MENTORSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors duration-200 hover:text-brand-hover"
        >
          View All Services
          <ArrowRight size={15} />
        </a>
      </div>
    </motion.div>
  );
}

type Post = (typeof COMMUNITY_POSTS)[number];

function FallbackGradient({ platform }: { platform: Post['platform'] }) {
  const cls =
    platform === 'Instagram'
      ? 'bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600'
      : 'bg-gradient-to-br from-blue-600 to-blue-800';
  return (
    <div className={`flex h-full w-full items-center justify-center ${cls}`}>
      <span className="select-none text-4xl font-black tracking-tight text-white/20">
        {platform.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

function PlatformBadge({ post }: { post: Post }) {
  const PlatformIcon =
    post.platform === 'YouTube' ? YouTubeIcon : post.platform === 'Instagram' ? InstagramIcon : LinkedInIcon;
  return (
    <div
      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${post.brandBg} ${post.brandText}`}
    >
      <PlatformIcon />
      {post.platform}
    </div>
  );
}

function Stats({ stats }: { stats: Post['stats'] }) {
  return (
    <div className="flex items-center gap-4 border-t border-slate-100 pt-3">
      {stats.map(({ icon: StatIcon, value }) => (
        <span key={value} className="flex items-center gap-1 text-xs text-slate-500">
          <StatIcon size={13} className="shrink-0" />
          {value}
        </span>
      ))}
    </div>
  );
}

// Default layout: full-width thumbnail on top, text below
function DefaultCard({ post, image, loading }: { post: Post; image: string | null; loading: boolean }) {
  const src = post.staticThumbnail ?? image;
  const isYouTube = post.platform === 'YouTube';

  return (
    <motion.a
      variants={cardVariant}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-elevated"
    >
      <div className="relative h-44 overflow-hidden bg-slate-200">
        {loading ? (
          <div className="h-full w-full animate-pulse bg-slate-200" />
        ) : src ? (
          <>
            <img
              src={src}
              alt={post.title}
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            {isYouTube && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                  <Play size={20} className="translate-x-0.5 fill-white text-white" />
                </span>
              </div>
            )}
          </>
        ) : (
          <FallbackGradient platform={post.platform} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <PlatformBadge post={post} />
        </div>
        <p className="mb-4 flex-1 line-clamp-3 text-sm font-medium leading-6 text-slate-800">{post.title}</p>
        <Stats stats={post.stats} />
      </div>
    </motion.a>
  );
}

// Horizontal layout: platform badge top, then image-left / title-right, stats bottom
function HorizontalCard({ post, image, loading }: { post: Post; image: string | null; loading: boolean }) {
  const src = post.staticThumbnail ?? image;

  return (
    <motion.a
      variants={cardVariant}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-elevated"
    >
      <div className="mb-4">
        <PlatformBadge post={post} />
      </div>

      <div className="mb-4 flex gap-4">
        {/* square thumbnail */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-200">
          {loading ? (
            <div className="h-full w-full animate-pulse bg-slate-200" />
          ) : src ? (
            <img
              src={src}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <FallbackGradient platform={post.platform} />
          )}
        </div>

        {/* title */}
        <p className="flex-1 text-sm font-semibold leading-6 text-slate-800">{post.title}</p>
      </div>

      <Stats stats={post.stats} />
    </motion.a>
  );
}

function CommunityCard({ post }: { post: Post }) {
  const needsFetch = post.staticThumbnail === null;
  const { image, loading } = useMicrolinkImage(needsFetch ? post.url : null);
  const isHorizontal = 'layout' in post && post.layout === 'horizontal';

  return isHorizontal ? (
    <HorizontalCard post={post} image={image} loading={needsFetch && loading} />
  ) : (
    <DefaultCard post={post} image={image} loading={needsFetch && loading} />
  );
}

// ─── main export ───────────────────────────────────────────────────────────────

export function ServicesSection() {
  return (
    <>
      {/* Services */}
      <section className="bg-slate-50 py-0">
        <div className="section-wrapper pt-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="mb-6 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-primary">
              What I bring to the table
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">How Can I Help You?</h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            <ConsultingCard />
            <MentorshipCard />
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-white py-0">
        <div className="section-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="mb-6 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Content &amp; Community
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Latest from the Community</h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {COMMUNITY_POSTS.map((post) => (
              <CommunityCard key={post.platform} post={post} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35, ease }}
            className="mt-10 flex justify-center"
          >
            <Button
              href="https://topmate.io/thepiyushway"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              View All Content
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
