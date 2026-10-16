import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CTAStrip from '@/components/CTAStrip';
import Footer from '@/components/Footer';
import StickyPhoneBadge from '@/components/services/StickyPhoneBadge';
import GalleryPageClient from '@/components/gallery/GalleryPageClient';

export const metadata: Metadata = {
  title: "Project Gallery | Emmanuel Thatching & Swimming Pools Pty Ltd",
  description: "Explore our recent thatching, swimming pool construction, Harvey tile thatch-over conversions, timber decking, painting, and paving projects completed across Johannesburg and Gauteng.",
  openGraph: {
    title: "Project Gallery | Emmanuel Thatching & Swimming Pools",
    description: "Curated collection of master-crafted thatching, custom swimming pools, Harvey tiles, and outdoor living spaces in Gauteng.",
    type: "website",
  }
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <StickyPhoneBadge />
      <GalleryPageClient />
      <CTAStrip />
      <Footer />
    </main>
  );
}
