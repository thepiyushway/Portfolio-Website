import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { heroSubscribeReveal, heroViewport } from './animations';

type HeroSubscribeProps = {
  label: string;
  placeholder: string;
  helperText: string;
  idleLabel: string;
  successLabel: string;
};

export function HeroSubscribe({ label, placeholder, helperText, idleLabel, successLabel }: HeroSubscribeProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      return;
    }

    setSubscribed(true);
    setEmail('');
    window.setTimeout(() => setSubscribed(false), 3000);
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            aria-label="Email address"
            required
          />
          <p className="mt-2 text-xs text-slate-400">{helperText}</p>
        </div>

        <Button type="submit" variant="primary" className="min-w-30 sm:mt-7">
          {subscribed ? successLabel : idleLabel}
        </Button>
      </div>
    </motion.form>
  );
}
