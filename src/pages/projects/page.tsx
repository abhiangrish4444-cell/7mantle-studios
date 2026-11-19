import SiteHeader from '@/components/feature/SiteHeader';
import SiteFooter from '@/components/feature/SiteFooter';
import Seo from '@/components/feature/Seo';
import { projectsHero } from '@/mocks/projects';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGallery from './components/ProjectsGallery';
import ProjectsCta from './components/ProjectsCta';

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-50">
      <Seo
        title="Animation Projects & Portfolio | 7Mantle Studios"
        description="Selected 3D and 2D animation work from 7Mantle Studios across feature films, TV series, short films and game cinematics, including The Stolen Princess and Jokie."
        path="/projects"
        image={projectsHero.backgroundImage}
        imageAlt="Animation project stills from the 7Mantle Studios portfolio"
      />
      <SiteHeader />
      <main className="flex-1">
        <ProjectsHero />
        <ProjectsGallery />
        <ProjectsCta />
      </main>
      <SiteFooter />
    </div>
  );
}