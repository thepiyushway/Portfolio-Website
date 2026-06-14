import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import type { HeroConfig } from '@/content/site';
import { cn } from '@/lib/cn';
import { subscribeEmail, type SubscribeOutcome } from './api/subscribe';
import { heroSubscribeReveal, heroViewport } from './animations';

type HeroSubscribeProps = {
  config: HeroConfig['subscribe'];
};

type Status = 'idle' | 'submitting' | SubscribeOutcome;

const TONE_BY_STATUS: Partial<Record<Status, string>> = {
  subscribed: 'text-emerald-600',
  already_subscribed: 'text-amber-600',
  invalid_email: 'text-red-600',
  error: 'text-red-600',
};

export function HeroSubscribe({ config }: HeroSubscribeProps) {
  const { label, placeholder, helperText, idleLabel, submittingLabel, successLabel, messages } = config;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const resetTimer = useRef<number | undefined>(undefined);

  const isSubmitting = status === 'submitting';
  const isDone = status === 'subscribed' || status === 'already_subscribed';

  const message =
    status === 'subscribed'
      ? messages.success
      : status === 'already_subscribed'
        ? messages.already
        : status === 'invalid_email'
          ? messages.invalid
          : status === 'error'
            ? messages.error
            : null;

  const buttonLabel = isSubmitting ? submittingLabel : isDone ? successLabel : idleLabel;

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    window.clearTimeout(resetTimer.current);
    setStatus('submitting');

    const outcome = await subscribeEmail(email);
    setStatus(outcome);

    if (outcome === 'subscribed' || outcome === 'already_subscribed') {
      setEmail('');
    }

    // Clear the result message after a few seconds so the form returns to idle.
    resetTimer.current = window.setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <motion.form
      onSubmit={handleSubscribe}
      initial={heroSubscribeReveal.initial}
      whileInView={heroSubscribeReveal.whileInView}
      viewport={heroViewport}
      transition={heroSubscribeReveal.transition}
      className="mt-6 mx-auto w-full max-w-xl"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
        <div className="flex-1">
          <label htmlFor="hero-email" className="mb-2 block text-sm font-medium text-slate-800">
            {label}
          </label>
          <Input
            id="hero-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle' && status !== 'submitting') {
                setStatus('idle');
              }
            }}
            placeholder={placeholder}
            aria-label="Email address"
            aria-invalid={status === 'invalid_email' || status === 'error'}
            disabled={isSubmitting}
            required
          />
          <p
            role="status"
            aria-live="polite"
            className={cn('mt-2 text-xs', message ? (TONE_BY_STATUS[status] ?? 'text-slate-400') : 'text-slate-400')}
          >
            {message ?? helperText}
          </p>
        </div>

        <Button type="submit" variant="primary" disabled={isSubmitting} className="min-w-30 sm:mt-7">
          {buttonLabel}
        </Button>
      </div>
    </motion.form>
  );
}
