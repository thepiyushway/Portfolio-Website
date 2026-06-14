import { useEffect, useMemo, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/features/hero/HeroSection';
import { TestimonialsSection } from '@/features/testimonials/TestimonialsSection';
import { AboutSection } from '@/features/about/AboutSection';
import { ExperienceSection } from '@/features/experience/ExperienceSection';
// Temporarily hidden until we have featured projects to show.
// import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { ServicesSection } from '@/features/services/ServicesSection';
import { navLinks, type ViewId } from '@/content/navigation';

function getViewFromHash(hash: string): ViewId {
  const value = hash.replace('#', '');
  return navLinks.find((link) => link.id === value)?.id ?? 'home';
}

// Per-view metadata. Fragment routes ("#about") are not distinct URLs to crawlers,
// so this is primarily a UX win (tab title, bookmarks, share cards once JS runs).
// The "home" copy is kept in sync with the static tags in index.html.
const VIEW_META: Record<ViewId, { title: string; description: string }> = {
  home: {
    title: 'Piyush Sharma : Software Engineer, AI Consultant & Tech Educator',
    description:
      'Piyush Sharma : Software Engineer, AI Consultant & Educator building scalable full-stack systems, shipping production-grade AI, and mentoring 600+ engineers.',
  },
  about: {
    title: 'About Piyush Sharma : Engineer, AI Consultant & Educator',
    description:
      'The story behind The Piyush Way — a Software Engineer and AI Consultant who has worked with Microsoft, Amazon and American Express, now mentoring engineers.',
  },
  work: {
    title: 'Work & Experience : Piyush Sharma, Software Engineer',
    description:
      'Experience and skills of Piyush Sharma across full-stack engineering, AI systems and system design at Microsoft, Amazon, American Express and Kotak.',
  },
};

function updateMeta(selector: string, content: string) {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
}

function applyViewMeta(view: ViewId) {
  const meta = VIEW_META[view];
  document.title = meta.title;
  updateMeta('meta[name="description"]', meta.description);
  updateMeta('meta[property="og:title"]', meta.title);
  updateMeta('meta[property="og:description"]', meta.description);
  updateMeta('meta[name="twitter:title"]', meta.title);
  updateMeta('meta[name="twitter:description"]', meta.description);
}

function App() {
  const [activeView, setActiveView] = useState<ViewId>(() => getViewFromHash(window.location.hash));

  useEffect(() => {
    applyViewMeta(activeView);
  }, [activeView]);

  useEffect(() => {
    const onHashChange = () => {
      const nextView = getViewFromHash(window.location.hash);
      setActiveView(nextView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', onHashChange);

    if (!window.location.hash) {
      window.location.hash = '#home';
    } else {
      onHashChange();
    }

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const content = useMemo(() => {
    if (activeView === 'about') {
      return <AboutSection />;
    }

    if (activeView === 'work') {
      return (
        <>
          <ExperienceSection />
          {/* Temporarily hidden until we have featured projects to show. */}
          {/* <ProjectsSection /> */}
        </>
      );
    }

    return (
      <>
        <HeroSection />
        <TestimonialsSection />
        <ServicesSection />
      </>
    );
  }, [activeView]);

  return (
    <div className="flex min-h-screen scroll-smooth flex-col bg-grid-pattern bg-grid-offset bg-no-repeat">
      <Navbar />
      <main className="flex-1">{content}</main>
      <Footer />
    </div>
  );
}

export default App;
