import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Eye,
  Heart,
  Layers,
  type LucideIcon,
  MessageCircle,
  Mic,
  Play,
  Rocket,
  ThumbsUp,
  Users,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SOCIAL_LOGOS } from '../lib/socialLogos';

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
  },
  {
    platform: 'Instagram' as const,
    url: 'https://www.instagram.com/p/DExTk-ph8Kw/?img_index=1',
    staticThumbnail: null,
    title: 'Visual AI experiments & creator stories',
    stats: [
      { icon: Heart, value: '158' },
      { icon: MessageCircle, value: '55K' },
    ],
  },
  {
    platform: 'LinkedIn' as const,
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7032364448006754304/',
    staticThumbnail: '/images/linkedin-profile.png',
    title: "Piyush's latest article on engineering leadership — practical, national engineering leadership and beyond.",
    stats: [
      { icon: ThumbsUp, value: '131' },
      { icon: MessageCircle, value: '35' },
    ],
  },
] as const;

// ─── microlink hook ────────────────────────────────────────────────────────────

function useMicrolinkData(url: string | null) {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
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
          setDescription(res.data?.description ?? null);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { image, description, loading };
}

// Instagram's own OG description always reads "<likes> likes, <comments> comments
// - <username> on <date>: "<caption>"" — video/reel posts prefix it with a view
// count ("<views> views, <likes> likes, ..."), so capture that group too when present.
function parseInstagramDescription(description: string | null) {
  const match = description?.match(
    /^(?:([\d,]+)\s+views?,\s*)?([\d,]+)\s+likes?,\s*([\d,]+)\s+comments?\s*-[^:]*:\s*([\s\S]*)$/,
  );
  if (!match) return { views: null, likes: null, comments: null, caption: null };

  const [, views, likes, comments, rawCaption] = match;
  return {
    views: views ? Number(views.replace(/,/g, '')) : null,
    likes: Number(likes.replace(/,/g, '')),
    comments: Number(comments.replace(/,/g, '')),
    caption: rawCaption.trim().replace(/^[“”"]+|[“”".]+$/g, '') || null,
  };
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

const PLATFORM_LOGOS: Record<Post['platform'], string> = {
  YouTube: SOCIAL_LOGOS.youtube,
  Instagram: SOCIAL_LOGOS.instagram,
  LinkedIn: SOCIAL_LOGOS.linkedin,
};

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
  return (
    <div className="inline-flex w-fit items-center gap-2">
      <img src={PLATFORM_LOGOS[post.platform]} alt="" className="h-6 w-6 rounded-md object-contain" />
      <span className="text-sm font-semibold text-slate-900">{post.platform}</span>
    </div>
  );
}

type StatItem = { icon: LucideIcon; value: string };

function Stats({ stats }: { stats: readonly StatItem[] }) {
  return (
    <div className="flex items-center gap-4">
      {stats.map(({ icon: StatIcon, value }) => (
        <span key={value} className="flex items-center gap-1 text-xs text-slate-500">
          <StatIcon size={13} className="shrink-0" />
          {value}
        </span>
      ))}
    </div>
  );
}

// Single shared layout for every platform: compact thumbnail strip on top,
// caption + engagement below — keeps all three cards the same height & weight.
function ContentCard({
  post,
  image,
  loading,
  title,
  stats,
}: {
  post: Post;
  image: string | null;
  loading: boolean;
  title: string;
  stats: readonly StatItem[];
}) {
  const src = post.staticThumbnail ?? image;
  const isYouTube = post.platform === 'YouTube';
  // The LinkedIn card uses our own profile screenshot rather than a cropped
  // video/post thumbnail — show it in full instead of cropping to fill.
  const fit = 'object-cover';

  return (
    <motion.a
      variants={cardVariant}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-elevated"
    >
      <div className="px-4 pt-3.5">
        <PlatformBadge post={post} />
      </div>

      <div className="relative mt-3 h-44 shrink-0 overflow-hidden bg-slate-100 sm:h-52">
        {loading ? (
          <div className="h-full w-full animate-pulse bg-slate-200" />
        ) : src ? (
          <>
            <img
              src={src}
              alt={title}
              className={`h-full w-full ${fit} transition-transform duration-500 group-hover:scale-105`}
            />
            {isYouTube && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/90 shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                  <Play size={16} className="translate-x-0.5 fill-white text-white" />
                </span>
              </div>
            )}
          </>
        ) : (
          <FallbackGradient platform={post.platform} />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-3.5">
        <p className="line-clamp-2 text-sm font-medium leading-5 text-slate-800">{title}</p>
        <div className="mt-auto">
          <Stats stats={stats} />
        </div>
      </div>
    </motion.a>
  );
}

// Instagram-only layout: cover image and caption sit side by side, with
// engagement stats spanning the row beneath them.
function InstagramCard({
  post,
  image,
  loading,
  title,
  stats,
}: {
  post: Post;
  image: string | null;
  loading: boolean;
  title: string;
  stats: readonly StatItem[];
}) {
  return (
    <motion.a
      variants={cardVariant}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-elevated"
    >
      <div className="px-4 pt-3.5">
        <PlatformBadge post={post} />
      </div>

      <div className="mt-3 flex flex-1 gap-4 px-4 pb-3.5">
        <div className="relative aspect-square w-1/2 shrink-0 overflow-hidden rounded-xl bg-slate-100">
          {loading ? (
            <div className="h-full w-full animate-pulse bg-slate-200" />
          ) : image ? (
            <img src={image} alt={title} className="h-full w-full object-contain" />
          ) : (
            <FallbackGradient platform={post.platform} />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <p className="line-clamp-6 text-sm leading-5 text-slate-700 sm:line-clamp-[8]">{title}</p>
          <div className="mt-auto">
            <Stats stats={stats} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function CommunityCard({ post }: { post: Post }) {
  const needsFetch = post.staticThumbnail === null;
  const { image, description, loading } = useMicrolinkData(needsFetch ? post.url : null);

  if (post.platform !== 'Instagram') {
    return <ContentCard post={post} image={image} loading={needsFetch && loading} title={post.title} stats={post.stats} />;
  }

  // Instagram: prefer the live view/like/comment counts and caption pulled from
  // the post's own OG description, falling back to the static placeholders
  // until (or unless) that fetch resolves. Views only surface for video/reel
  // posts, so the stat is omitted entirely when the description has none.
  const { views, likes, comments, caption } = parseInstagramDescription(description);
  const title = caption ?? post.title;
  const stats: StatItem[] = [
    ...(views !== null ? [{ icon: Eye, value: String(views) }] : []),
    { icon: Heart, value: String(likes ?? post.stats[0].value) },
    { icon: MessageCircle, value: String(comments ?? post.stats[1].value) },
  ];

  return <InstagramCard post={post} image={image} loading={loading} title={title} stats={stats} />;
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
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Latest Content</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Recent posts, videos, and insights from my platforms.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {COMMUNITY_POSTS.map((post) => (
              <CommunityCard key={post.platform} post={post} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease }}
            className="mt-8 flex justify-center"
          >
            <Button
              href="https://topmate.io/thepiyushway"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Explore My Content
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
