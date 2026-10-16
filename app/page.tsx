import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Carousel from '@/components/Carousel';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CTAStrip from '@/components/CTAStrip';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Carousel />
      <About />
      <Contact />
      <CTAStrip />
      <Footer />
    </main>
  );
}
