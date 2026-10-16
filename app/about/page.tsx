import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CTAStrip from '@/components/CTAStrip';
import Footer from '@/components/Footer';
import StickyPhoneBadge from '@/components/services/StickyPhoneBadge';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutPillars from '@/components/about/AboutPillars';
import AboutAreas from '@/components/about/AboutAreas';

export const metadata: Metadata = {
  title: "About Us | Emmanuel Thatching & Swimming Pools Pty Ltd",
  description: "Learn about Emmanuel Thatching & Swimming Pools - Pty Ltd. Over 21 years of master thatching, custom swimming pool construction, Harvey tile installation, and outdoor renovations in Gauteng.",
  openGraph: {
    title: "About Us | Emmanuel Thatching & Swimming Pools",
    description: "Benoni-based outdoor living and structural specialists with over two decades of experience serving Johannesburg, Pretoria, and Gauteng.",
    type: "website",
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <StickyPhoneBadge />
      <AboutHero />
      <AboutStory />
      <AboutPillars />
      <AboutAreas />
      <CTAStrip />
      <Footer />
    </main>
  );
}
