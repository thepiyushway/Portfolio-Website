const YOUTUBE_CHANNEL_ID = 'UCwAm47rI_cqAj4gPBX_idWg'; // @thepiyushway

// Every channel's uploads are mirrored into a playlist whose ID is just the
// channel ID with its "UC" prefix swapped for "UU" — fetching that playlist's
// newest item costs 1 quota unit, versus 100 for search.list.
const YOUTUBE_UPLOADS_PLAYLIST_ID = `UU${YOUTUBE_CHANNEL_ID.slice(2)}`;

export type YoutubeVideo = {
  url: string;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  comments: number;
};

export async function fetchLatestYoutubeVideo(apiKey: string, signal: AbortSignal): Promise<YoutubeVideo | null> {
  const base = 'https://www.googleapis.com/youtube/v3';
  const query = (params: Record<string, string>) =>
    new URLSearchParams({ key: apiKey, ...params }).toString();

  const playlist = await fetch(
    `${base}/playlistItems?${query({ playlistId: YOUTUBE_UPLOADS_PLAYLIST_ID, part: 'snippet', maxResults: '1' })}`,
    { signal },
  ).then((r) => r.json());

  const videoId: string | undefined = playlist?.items?.[0]?.snippet?.resourceId?.videoId;
  if (!videoId) return null;

  const videos = await fetch(
    `${base}/videos?${query({ id: videoId, part: 'snippet,statistics' })}`,
    { signal },
  ).then((r) => r.json());

  const item = videos?.items?.[0];
  if (!item) return null;

  return {
    url: `https://www.youtube.com/watch?v=${videoId}`,
    title: item.snippet?.title ?? 'Latest video',
    thumbnail: item.snippet?.thumbnails?.high?.url ?? item.snippet?.thumbnails?.medium?.url ?? '',
    views: Number(item.statistics?.viewCount ?? 0),
    likes: Number(item.statistics?.likeCount ?? 0),
    comments: Number(item.statistics?.commentCount ?? 0),
  };
}
