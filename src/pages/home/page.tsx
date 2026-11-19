import SiteHeader from '@/components/feature/SiteHeader';
import SiteFooter from '@/components/feature/SiteFooter';
import Seo from '@/components/feature/Seo';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import WhatWeDoSection from './components/WhatWeDoSection';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-50">
      <Seo
        title="3D & 2D Animation Studio in Chennai | 7Mantle Studios"
        description="7Mantle Studios is a full service 3D and 2D animation studio in Chennai producing feature films, TV series, short films and game animation for clients worldwide."
        path="/"
      />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <WhoWeAreSection />
        <WhatWeDoSection />
      </main>
      <SiteFooter />
    </div>
  );
}