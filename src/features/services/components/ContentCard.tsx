import { motion } from 'framer-motion';
import { Play, type LucideIcon } from 'lucide-react';
import { SOCIAL_LOGOS } from '@/lib/socials';
import { cardVariant } from '../animations';
import type { Post } from '../content';

const PLATFORM_LOGOS: Record<Post['platform'], string> = {
  YouTube: SOCIAL_LOGOS.youtube,
  Instagram: SOCIAL_LOGOS.instagram,
  LinkedIn: SOCIAL_LOGOS.linkedin,
};

export function FallbackGradient({ platform }: { platform: Post['platform'] }) {
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

export function PlatformBadge({ platform }: { platform: Post['platform'] }) {
  return (
    <div className="inline-flex w-fit items-center gap-2">
      <img src={PLATFORM_LOGOS[platform]} alt="" className="h-8 w-8 rounded-md object-contain" />
      <span className="text-lg font-semibold text-slate-900">{platform}</span>
    </div>
  );
}

export type StatItem = { icon: LucideIcon; value: string };

export function Stats({ stats }: { stats: readonly StatItem[] }) {
  return (
    <div className="flex items-center gap-4">
      {stats.map(({ icon: StatIcon, value }) => (
        <span key={value} className="flex items-center gap-1 text-xs text-slate-500">
          <StatIcon size={13} aria-hidden="true" className="shrink-0" />
          {value}
        </span>
      ))}
    </div>
  );
}

// Structural shape ContentCard needs — looser than Post so callers (e.g. the
// YouTube card) can override `url`/`staticThumbnail` with live data without
// fighting Post's const-asserted literal types.
export type CardPost = { platform: Post['platform']; url: string; staticThumbnail: string | null };

// Single shared layout for every platform: compact thumbnail strip on top,
// caption + engagement below — keeps all three cards the same height & weight.
export function ContentCard({
  post,
  image,
  loading,
  title,
  stats,
}: {
  post: CardPost;
  image: string | null;
  loading: boolean;
  title: string;
  stats: readonly StatItem[];
}) {
  // Live data wins when available (e.g. the fetched video's own thumbnail);
  // the static asset is the fallback shown until then or if the fetch fails.
  const src = image ?? post.staticThumbnail;
  const isYouTube = post.platform === 'YouTube';

  return (
    <motion.a
      variants={cardVariant}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-elevated"
    >
      <div className="px-4 pt-3.5">
        <PlatformBadge platform={post.platform} />
      </div>

      <div className="relative mt-3 h-44 shrink-0 overflow-hidden bg-slate-100 sm:h-52">
        {loading ? (
          <div className="h-full w-full animate-pulse bg-slate-200" />
        ) : src ? (
          <>
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {isYouTube && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/90 shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                  <Play size={16} aria-hidden="true" className="translate-x-0.5 fill-white text-white" />
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
