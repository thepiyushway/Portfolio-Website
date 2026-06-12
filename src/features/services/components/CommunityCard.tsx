import { Eye, Heart, MessageCircle, Play, ThumbsUp } from 'lucide-react';
import { parseInstagramDescription } from '../api/microlink';
import { useLatestYoutubeVideo } from '../hooks/useLatestYoutubeVideo';
import { useMicrolinkData } from '../hooks/useMicrolinkData';
import type { Post } from '../content';
import { ContentCard, type CardPost, type StatItem } from './ContentCard';
import { InstagramCard } from './InstagramCard';

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 ? 1 : 0)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(n % 1_000 ? 1 : 0)}K`;
  return String(n);
}

// YouTube: pull the channel's newest upload from the Data API (thumbnail,
// title, view/like/comment counts) and override the static placeholder with
// it once it resolves — the static config stays as the fallback shown until
// then, or permanently if the API key is absent or the fetch fails.
function YoutubeCommunityCard({ post }: { post: Extract<Post, { platform: 'YouTube' }> }) {
  const { video, loading } = useLatestYoutubeVideo();

  const cardPost: CardPost = {
    platform: 'YouTube',
    url: video?.url ?? post.url,
    staticThumbnail: post.staticThumbnail,
  };
  const stats: readonly StatItem[] = video
    ? [
        { icon: Play, value: formatCount(video.views) },
        { icon: ThumbsUp, value: formatCount(video.likes) },
        { icon: MessageCircle, value: formatCount(video.comments) },
      ]
    : post.stats;

  return (
    <ContentCard
      post={cardPost}
      image={video?.thumbnail ?? null}
      loading={loading}
      title={video?.title ?? post.title}
      stats={stats}
    />
  );
}

// Instagram: prefer the live view/like/comment counts and caption pulled from
// the post's own OG description, falling back to the static placeholders
// until (or unless) that fetch resolves. Views only surface for video/reel
// posts, so the stat is omitted entirely when the description has none.
function InstagramCommunityCard({ post }: { post: Extract<Post, { platform: 'Instagram' }> }) {
  const needsFetch = post.staticThumbnail === null;
  const { image, description, loading } = useMicrolinkData(needsFetch ? post.url : null);

  const { views, likes, comments, caption } = parseInstagramDescription(description);
  const title = caption ?? post.title;
  const stats: StatItem[] = [
    ...(views !== null ? [{ icon: Eye, value: String(views) }] : []),
    { icon: Heart, value: String(likes ?? post.stats[0].value) },
    { icon: MessageCircle, value: String(comments ?? post.stats[1].value) },
  ];

  return <InstagramCard post={post} image={image} loading={loading} title={title} stats={stats} />;
}

// Default: render the static config, fetching OG metadata only when no
// static thumbnail is provided.
function StandardCommunityCard({ post }: { post: Post }) {
  const needsFetch = post.staticThumbnail === null;
  const { image, loading } = useMicrolinkData(needsFetch ? post.url : null);

  return <ContentCard post={post} image={image} loading={needsFetch && loading} title={post.title} stats={post.stats} />;
}

// Dispatch on platform here so each card component's hooks stay unconditional.
export function CommunityCard({ post }: { post: Post }) {
  if (post.platform === 'YouTube') {
    return <YoutubeCommunityCard post={post} />;
  }
  if (post.platform === 'Instagram') {
    return <InstagramCommunityCard post={post} />;
  }
  return <StandardCommunityCard post={post} />;
}
