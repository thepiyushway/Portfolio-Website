import { motion } from 'framer-motion';
import { cardVariant } from '../animations';
import type { Post } from '../content';
import { FallbackGradient, PlatformBadge, Stats, type StatItem } from './ContentCard';

// Instagram-only layout: cover image and caption sit side by side, with
// engagement stats spanning the row beneath them.
export function InstagramCard({
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
        <PlatformBadge platform={post.platform} />
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
