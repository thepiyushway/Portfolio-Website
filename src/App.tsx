import { useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './features/hero/HeroSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './features/projects/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { ContactSection } from './features/contact/ContactSection';
import { Footer } from './components/Footer';

type ViewId = 'home' | 'about' | 'work' | 'contact';

function getViewFromHash(hash: string): ViewId {
  const value = hash.replace('#', '');

  if (value === 'about' || value === 'work' || value === 'contact') {
    return value;
  }

  return 'home';
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
          <ProjectsSection />
        </>
      );
    }

    if (activeView === 'contact') {
      return <ContactSection />;
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
    <div className="scroll-smooth bg-grid-pattern bg-grid-offset bg-no-repeat">
      <Navbar />
      <main>{content}</main>
      <Footer />
    </div>
  );
}

export default App;
