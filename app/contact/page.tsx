import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CTAStrip from '@/components/CTAStrip';
import Footer from '@/components/Footer';
import StickyPhoneBadge from '@/components/services/StickyPhoneBadge';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';

export const metadata: Metadata = {
  title: "Contact Us & Free Quote | Emmanuel Thatching & Swimming Pools Pty Ltd",
  description: "Get in touch with Emmanuel Thatching & Swimming Pools. Request a free on-site estimate for thatching, custom swimming pools, Harvey tiles, decking, and paving across Gauteng.",
  openGraph: {
    title: "Contact Us | Emmanuel Thatching & Swimming Pools",
    description: "Call, WhatsApp, or request a free quote for thatching and pool construction anywhere in Johannesburg, Pretoria, and the East Rand.",
    type: "website",
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <StickyPhoneBadge />
      <ContactHero />
      <ContactFormSection />
      <CTAStrip />
      <Footer />
    </main>
  );
}
