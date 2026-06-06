import { Instagram, Linkedin, X, Youtube } from 'lucide-react';

const MAILTO_HREF = 'mailto:thepiyushway@gmail.com?subject=Let%27s%20Work%20Together';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-[min(94vw,1440px)] px-4 sm:px-6">
        <div className="grid gap-8 border-b border-slate-200 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Contact</p>
            <a
              href={MAILTO_HREF}
              className="mt-2 inline-block break-all text-sm font-semibold text-brand-primary hover:text-brand-hover"
            >
              thepiyushway@gmail.com
            </a>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <a href="https://www.youtube.com/@ThePiyushWay?sub_confirmation=1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-primary">
                <Youtube size={15} /> YouTube
              </a>
              <a href="https://www.linkedin.com/in/thepiyushway/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-primary">
                <Linkedin size={15} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/thepiyushway/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-primary">
                <Instagram size={15} /> Instagram
              </a>
              <a href="https://x.com/thepiyushway" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-primary">
                <X size={15} /> X
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Navigate</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm font-medium text-text-primary">
              <a href="#home"    className="hover:text-brand-primary">Home</a>
              <a href="#about"   className="hover:text-brand-primary">About</a>
              <a href="#work"    className="hover:text-brand-primary">Work</a>
              <a href="#contact" className="hover:text-brand-primary">Contact</a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Work</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-text-secondary">
              <a href="#work" className="hover:text-brand-primary">Projects</a>
              <a href="#work" className="hover:text-brand-primary">Experience</a>
            </div>
          </div>
        </div>

        <p className="py-4 text-xs text-slate-500">© {year} Piyush Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
}
