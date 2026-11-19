import { useState } from 'react';
import SiteHeader from '@/components/feature/SiteHeader';
import SiteFooter from '@/components/feature/SiteFooter';
import Seo from '@/components/feature/Seo';
import { jobsHero } from '@/mocks/jobs';
import JobsHero from './components/JobsHero';
import JobList from './components/JobList';
import WhyJoin from './components/WhyJoin';
import ApplicationForm from './components/ApplicationForm';

export default function JobsPage() {
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-50">
      <Seo
        title="Animation Jobs & Careers | 7Mantle Studios"
        description="Open animation roles at 7Mantle Studios in Chennai and remote. Explore current openings in layout, animation and production, then apply with your reel and portfolio."
        path="/jobs"
        image={jobsHero.backgroundImage}
        imageAlt="Animation careers at 7Mantle Studios"
      />
      <SiteHeader />
      <main className="flex-1">
        <JobsHero />
        <JobList onApply={setSelectedRole} />
        <WhyJoin />
        <ApplicationForm selectedRole={selectedRole} onRoleChange={setSelectedRole} />
      </main>
      <SiteFooter />
    </div>
  );
}