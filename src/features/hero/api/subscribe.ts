import { z } from 'zod';

// Mirrors the four `status` values the Apps Script endpoint returns, plus the
// client-only `invalid_email` we can short-circuit before any network call.
export type SubscribeOutcome = 'subscribed' | 'already_subscribed' | 'invalid_email' | 'error';

const emailSchema = z.email();

export function isValidEmail(value: string): boolean {
  return emailSchema.safeParse(value.trim()).success;
}

/**
 * Submits an email to the Google Apps Script mailing-list endpoint.
 *
 * The script validates + dedupes server-side; the client validation here is
 * just for instant feedback. The body is sent as `text/plain` so the request
 * stays a CORS "simple" request — Apps Script doesn't answer preflights.
 */
export async function subscribeEmail(email: string, signal?: AbortSignal): Promise<SubscribeOutcome> {
  const trimmed = email.trim();
  if (!isValidEmail(trimmed)) {
    return 'invalid_email';
  }

  const endpoint = import.meta.env.VITE_SUBSCRIBE_ENDPOINT;
  if (!endpoint) {
    console.error('VITE_SUBSCRIBE_ENDPOINT is not set — see google-apps-script/README.md');
    return 'error';
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ email: trimmed }),
      redirect: 'follow',
      signal,
    });

    if (!response.ok) {
      return 'error';
    }

    const data = (await response.json()) as { status?: SubscribeOutcome };
    return data.status ?? 'error';
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error;
    }
    console.error('Subscribe request failed', error);
    return 'error';
  }
}
