import SiteHeader from '@/components/feature/SiteHeader';
import SiteFooter from '@/components/feature/SiteFooter';
import Seo from '@/components/feature/Seo';
import { contactHero } from '@/mocks/contact';
import Reveal from '@/components/base/Reveal';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ContactReasons from './components/ContactReasons';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-50">
      <Seo
        title="Contact 7Mantle Studios | Start an Animation Project"
        description="Have a story to tell or a production to scale? Contact 7Mantle Studios in Chennai about 3D and 2D animation development and production. We reply within two working days."
        path="/contact"
        image={contactHero.backgroundImage}
        imageAlt="Contact 7Mantle Studios about an animation project"
      />
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />

        <section className="w-full py-16 md:py-24">
          <div className="w-full px-4 md:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-3">
                <Reveal>
                  <ContactForm />
                </Reveal>
              </div>
              <div className="lg:col-span-2">
                <Reveal delay={120}>
                  <ContactInfo />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <ContactReasons />
      </main>
      <SiteFooter />
    </div>
  );
}