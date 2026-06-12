// Generic localStorage response cache with a TTL.
//
// Client-side lookups against rate-limited free-tier APIs (e.g. microlink's
// 50 req/day, the YouTube Data API's fixed daily quota) share their quota
// across every visitor. Caching successful responses in localStorage lets
// repeat visits within the TTL reuse cached data instead of burning quota.
export const RESPONSE_CACHE_TTL_MS = 24 * 60 * 60 * 1000;

type CacheEntry<T> = { value: T; cachedAt: number };

export function readCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry: CacheEntry<T> = JSON.parse(raw);
    if (Date.now() - entry.cachedAt > RESPONSE_CACHE_TTL_MS) return null;
    return entry.value;
  } catch {
    return null;
  }
}

export function writeCache<T>(key: string, value: T) {
  try {
    const entry: CacheEntry<T> = { value, cachedAt: Date.now() };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // Storage unavailable or full — fall back silently to live fetches.
  }
}
