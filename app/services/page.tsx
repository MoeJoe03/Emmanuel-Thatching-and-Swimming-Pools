import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CTAStrip from '@/components/CTAStrip';
import Footer from '@/components/Footer';
import ServicesPageClient from '@/components/services/ServicesPageClient';

export const metadata: Metadata = {
  title: "Our Services | Emmanuel Thatching & Swimming Pools Pty Ltd",
  description: "Comprehensive thatching, swimming pool construction, Marblite resurfacing, Harvey tile thatch-over roofing, timber decking, painting, and paving across Johannesburg and Gauteng.",
  openGraph: {
    title: "Our Services | Emmanuel Thatching & Swimming Pools",
    description: "Master-crafted thatching, custom swimming pools, and structural outdoor living solutions in Gauteng.",
    type: "website",
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <ServicesPageClient />
      <CTAStrip />
      <Footer />
    </main>
  );
}
