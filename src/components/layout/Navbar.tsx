import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/content/navigation';
import { socials } from '@/content/site';
import { SOCIAL_LOGOS, type SocialId } from '@/lib/socials';

const MAILTO_HREF = 'mailto:thepiyushway@gmail.com?subject=Let\'s%20Work%20Together&body=Hi%20Piyush%2C%0A%0AI\'d%20love%20to%20discuss%20a%20potential%20collaboration.%0A%0ABest%20regards';
const RESUME_HREF = 'https://www.linkedin.com/in/thepiyushway/';

const SOCIAL_STYLE_MAP = {
  youtube:   { color: 'text-red-500',   bg: 'hover:bg-red-50' },
  linkedin:  { color: 'text-blue-600',  bg: 'hover:bg-blue-50' },
  instagram: { color: 'text-pink-500',  bg: 'hover:bg-pink-50' },
  twitter:   { color: 'text-slate-700', bg: 'hover:bg-slate-100' },
} as const satisfies Record<SocialId, { color: string; bg: string }>;

const mobileVariants = {
  open: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
  closed: { opacity: 0, y: -10 },
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [contentOpen, setContentOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 26);
    const onHashChange = () => setActive(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('scroll', onScroll);
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    if (!contentOpen) return;
    const handler = (e: MouseEvent) => {
      if (contentRef.current && e.target instanceof Node && !contentRef.current.contains(e.target)) {
        setContentOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [contentOpen]);

  const handleLinkClick = (value?: string) => {
    setMobileOpen(false);
    setContentOpen(false);
    if (value) setActive(value);
  };

  const contentSocials = socials.filter((s) => s.id in SOCIAL_STYLE_MAP);

  return (
    <header
      className={`fixed left-4 right-4 top-3 z-50 rounded-2xl border border-white/40 bg-white/70 p-3 shadow-soft backdrop-blur-xl transition md:left-6 md:right-6 ${
        isScrolled ? 'shadow-glow' : ''
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="flex items-center justify-between gap-4">
        <a
          href="#home"
          aria-label="Piyush Sharma home"
          className="inline-flex min-w-0 items-center gap-2 rounded-full pr-2 text-brand-700 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
        >
          <img
            src="/favicon.jpg"
            alt=""
            aria-hidden="true"
            className="h-10 w-10 flex-shrink-0 rounded-full border border-blue-100 object-cover shadow-soft"
            loading="eager"
            decoding="async"
          />
          <span className="max-w-40 truncate whitespace-nowrap text-sm font-extrabold tracking-wide text-slate-900 sm:max-w-none sm:text-base">
            Piyush Sharma
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const activeClass = active === link.id
              ? 'bg-blue-100 text-blue-700 ring-1 ring-blue-200'
              : 'text-slate-600 hover:bg-blue-50 hover:text-brand-700';
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeClass}`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}

          {/* Content dropdown */}
          <div className="relative" ref={contentRef}>
            <button
              onClick={() => setContentOpen((prev) => !prev)}
              className={`rounded-full px-4 py-2 !text-sm !font-medium !leading-5 transition ${
                contentOpen ? 'bg-blue-100 text-blue-700 ring-1 ring-blue-200' : 'text-slate-600 hover:bg-blue-50 hover:text-brand-700'
              }`}
              aria-expanded={contentOpen}
            >
              Content
            </button>

            <AnimatePresence>
              {contentOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-slate-100 bg-white p-2 shadow-lg"
                >
                  {contentSocials.map(({ id, name, href }) => {
                    const { color, bg } = SOCIAL_STYLE_MAP[id];
                    const logo = SOCIAL_LOGOS[id];
                    return (
                      <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setContentOpen(false)}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${color} ${bg} transition`}
                      >
                        <img src={logo} alt="" className="h-4 w-4 rounded object-contain" />
                        {name}
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="ml-2 flex items-center gap-2 border-l border-slate-200 pl-3">
            <a
              href={MAILTO_HREF}
              className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-hover"
            >
              Hire Me
            </a>
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Resume/CV
            </a>
          </div>
        </nav>

        <button
          aria-label="Menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="mt-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            variants={mobileVariants}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.li key={link.id} whileTap={{ scale: 0.97 }}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}

              {/* Content social links */}
              <motion.li>
                <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Content
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {contentSocials.map(({ id, name, href }) => {
                    const { color, bg } = SOCIAL_STYLE_MAP[id];
                    const logo = SOCIAL_LOGOS[id];
                    return (
                      <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ${color} ${bg} transition`}
                      >
                        <img src={logo} alt="" className="h-4 w-4 rounded object-contain" />
                        {name}
                      </a>
                    );
                  })}
                </div>
              </motion.li>

              <motion.li whileTap={{ scale: 0.97 }} className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href={MAILTO_HREF}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-hover"
                >
                  Hire Me
                </a>
                <a
                  href={RESUME_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Resume/CV
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
