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

function App() {
  const [activeView, setActiveView] = useState<ViewId>(() => getViewFromHash(window.location.hash));

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
