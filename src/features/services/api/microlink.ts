export type MicrolinkData = { image: string | null; description: string | null };

export async function fetchMicrolinkData(url: string, signal: AbortSignal): Promise<MicrolinkData | null> {
  const res = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`, { signal });
  const json = await res.json();
  if (json.status !== 'success') return null;

  return {
    image: json.data?.image?.url ?? null,
    description: json.data?.description ?? null,
  };
}

// Instagram's own OG description always reads "<likes> likes, <comments> comments
// - <username> on <date>: "<caption>"" — video/reel posts prefix it with a view
// count ("<views> views, <likes> likes, ..."), so capture that group too when present.
export function parseInstagramDescription(description: string | null) {
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
