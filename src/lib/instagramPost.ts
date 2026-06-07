// Narrow extraction for one fixed profile's GraphQL feed response.
// Intentionally untyped at the response/node boundary — the payload is huge
// and we only ever read a handful of fields, so a full schema would be dead weight.

export type LatestPost = {
  image: string | null;
  caption: string | null;
  likes: number | null;
  comments: number | null;
  views: number | null;
  postUrl: string | null;
  mediaType: 'image' | 'carousel' | 'video' | 'reel';
};

type ImageCandidate = { url?: string; width?: number };

function highestRes(candidates?: ImageCandidate[] | null): string | null {
  if (!candidates?.length) return null;
  return candidates.reduce((best, c) => ((c?.width ?? 0) > (best?.width ?? 0) ? c : best)).url ?? null;
}

function getMediaType(post: any): LatestPost['mediaType'] {
  if (post?.media_type === 8) return 'carousel';
  if (post?.media_type === 2) return post?.product_type === 'clips' ? 'reel' : 'video';
  return 'image';
}

export function getCoverImage(post: any): string | null {
  // Carousels carry their own media list — use the first slide's images
  if (post?.carousel_media?.length) {
    return highestRes(post.carousel_media[0]?.image_versions2?.candidates);
  }
  // Images, videos, and reels all expose their cover/thumbnail here
  return highestRes(post?.image_versions2?.candidates);
}

export function extractLatestPost(response: any): LatestPost | null {
  const post = response?.data?.xdt_api__v1__feed__user_timeline_graphql_connection?.edges?.[0]?.node;
  if (!post) return null;

  return {
    image: getCoverImage(post),
    caption: post?.caption?.text ?? null,
    likes: post?.like_count ?? null,
    comments: post?.comment_count ?? null,
    views: post?.play_count ?? post?.view_count ?? null,
    postUrl: post?.code ? `https://www.instagram.com/p/${post.code}/` : null,
    mediaType: getMediaType(post),
  };
}
