import SiteHeader from '@/components/feature/SiteHeader';
import SiteFooter from '@/components/feature/SiteFooter';
import Seo from '@/components/feature/Seo';
import { profileHero } from '@/mocks/profile';
import ProfileHero from './components/ProfileHero';
import StudioStory from './components/StudioStory';
import Capabilities from './components/Capabilities';
import NetworkSection from './components/NetworkSection';
import ProfileCta from './components/ProfileCta';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-50">
      <Seo
        title="About the Studio | 7Mantle Studios"
        description="A distributed animation studio built on full time specialists, dedicated consultants and long term vendor partners across Chennai, Tokyo, Sao Paulo, Toronto and London."
        path="/profile"
        image={profileHero.backgroundImage}
        imageAlt="Inside 7Mantle Studios, a distributed 3D and 2D animation studio"
      />
      <SiteHeader />
      <main className="flex-1">
        <ProfileHero />
        <StudioStory />
        <Capabilities />
        <NetworkSection />
        <ProfileCta />
      </main>
      <SiteFooter />
    </div>
  );
}