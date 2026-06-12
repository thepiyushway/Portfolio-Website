import { useEffect, useState } from 'react';
import { readCache, writeCache } from '@/lib/cache';
import { fetchMicrolinkData, type MicrolinkData } from '../api/microlink';

// Runs client-side against microlink's rate-limited free tier (50 req/day,
// shared across every visitor) — successful responses are cached in
// localStorage so repeat visits within the TTL don't burn through the quota.
export function useMicrolinkData(url: string | null) {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState(url !== null);

  useEffect(() => {
    if (!url) return;

    const cacheKey = `microlink:${url}`;
    const cached = readCache<MicrolinkData>(cacheKey);
    if (cached) {
      setImage(cached.image);
      setDescription(cached.description);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    fetchMicrolinkData(url, controller.signal)
      .then((data) => {
        if (!data) return;
        setImage(data.image);
        setDescription(data.description);
        writeCache(cacheKey, data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { image, description, loading };
}
