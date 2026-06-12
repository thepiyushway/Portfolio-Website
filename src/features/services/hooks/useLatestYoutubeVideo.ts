import { useEffect, useState } from 'react';
import { readCache, writeCache } from '@/lib/cache';
import { fetchLatestYoutubeVideo, type YoutubeVideo } from '../api/youtube';

const YOUTUBE_CACHE_KEY = 'youtube:latest-upload';

// The YouTube Data API has a fixed daily quota shared across every visitor —
// successful lookups are cached in localStorage so repeat visits within the
// TTL reuse cached data instead of burning through it.
export function useLatestYoutubeVideo() {
  const [video, setVideo] = useState<YoutubeVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = readCache<YoutubeVideo>(YOUTUBE_CACHE_KEY);
    if (cached) {
      setVideo(cached);
      setLoading(false);
      return;
    }

    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    if (!apiKey) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    (async () => {
      try {
        const next = await fetchLatestYoutubeVideo(apiKey, controller.signal);
        if (!next) return;

        setVideo(next);
        writeCache(YOUTUBE_CACHE_KEY, next);
      } catch {
        // Network error/abort — keep the static fallback.
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  return { video, loading };
}
