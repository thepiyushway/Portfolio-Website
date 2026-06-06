import { Instagram, Linkedin, X, Youtube } from 'lucide-react';

const MAILTO_HREF = 'mailto:thepiyushway@gmail.com?subject=Let%27s%20Work%20Together';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-[min(94vw,1440px)] px-4 sm:px-6">
        <div className="grid gap-8 border-b border-slate-200 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Navigate</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm font-medium text-text-primary">
              <a href="#home"    className="hover:text-brand-primary">Home</a>
              <a href="#about"   className="hover:text-brand-primary">About</a>
              <a href="#work"    className="hover:text-brand-primary">Work</a>
              <a href="#contact" className="hover:text-brand-primary">Contact</a>
            </nav>
          </div>

        </div>

        <p className="py-4 text-xs text-slate-500">© {year} Piyush Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
}
