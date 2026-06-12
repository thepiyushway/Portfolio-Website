import type { MouseEvent } from 'react';

export const SOCIAL_LOGOS = {
  youtube: '/logos/social/youtube.png',
  linkedin: '/logos/social/linkedin.png',
  instagram: '/logos/social/instagram.png',
  twitter: '/logos/social/x.png',
} as const;

function isMobileDevice(): boolean {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function getDeepLink(href: string): string | null {
  const instagramMatch = href.match(/instagram\.com\/([^/?#]+)/i);
  if (instagramMatch?.[1]) {
    return `instagram://user?username=${instagramMatch[1]}`;
  }

  const linkedInMatch = href.match(/linkedin\.com\/in\/([^/?#]+)/i);
  if (linkedInMatch?.[1]) {
    return `linkedin://in/${linkedInMatch[1]}`;
  }

  return null;
}

export function openSocialWithMobileFallback(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!isMobileDevice()) return;

  const appDeepLink = getDeepLink(href);
  if (!appDeepLink) return;

  event.preventDefault();

  const fallbackTimer = window.setTimeout(() => {
    window.location.assign(href);
  }, 900);

  const cancelFallback = () => {
    window.clearTimeout(fallbackTimer);
  };

  const onVisibilityChange = () => {
    if (document.hidden) {
      cancelFallback();
    }
  };

  document.addEventListener('visibilitychange', onVisibilityChange, { once: true });
  window.location.assign(appDeepLink);
}
