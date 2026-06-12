export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'work', label: 'Work', href: '#work' },
] as const;

export type NavLink = (typeof navLinks)[number];

/** Every routable view — derived from navLinks so a new nav entry extends this union automatically. */
export type ViewId = NavLink['id'];
