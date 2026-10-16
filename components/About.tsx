'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="relative py-20 md:py-24 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none gsap-scale-up py-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-lg">
              <Image
                src="https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/thatch.jpg"
                alt="Emmanuel Thatching and Swimming Pools - Pty Ltd"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 gsap-parallax"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Pattern Overlay */}
            <div className="absolute bottom-0 -left-3 w-3/4 h-24 bg-primary -z-10 rounded-sm" />
            <div className="absolute top-0 -right-3 w-1/2 h-1/3 border-2 border-primary -z-10 rounded-sm" />
          </div>

          {/* Copy Column */}
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4 block gsap-fade-up">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6 gsap-fade-up">
              About Us
            </h2>
            <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter gsap-fade-up">
              <p className="font-serif text-xl sm:text-2xl italic text-gray-900 mb-6 border-l-4 border-primary pl-4">
                &quot;Over 21 years of dedicated experience in creating, improving and maintaining homes and outdoor spaces across Gauteng.&quot;
              </p>
              
              <p className="mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <strong>Emmanuel Thatching &amp; Swimming Pools (Pty) Ltd</strong> is a Benoni-based company with over 21 years of experience in creating, improving and maintaining homes and outdoor spaces across Gauteng.
              </p>

              <p className="mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                From thatch roofing and swimming pools to building renovations, Harvey tile installation, decking, painting and paving, we offer a wide range of services for both new projects and existing properties in need of repairs or upgrades.
              </p>

              <p className="mb-8 text-base sm:text-lg text-gray-700 leading-relaxed">
                Our experience across multiple trades allows us to take on different aspects of a property project while keeping the process straightforward for our clients. Whether it&apos;s repairing an existing thatch roof, renovating a swimming pool or giving an outdoor space a complete refresh, the focus remains on practical workmanship and a quality finished result.
              </p>

              <h3 className="text-2xl font-black tracking-tighter uppercase text-black mb-4 mt-8">Core Trades &amp; Expertise</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm uppercase tracking-wider font-semibold text-gray-700">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Thatch Roofing &amp; Repairs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Swimming Pools &amp; Renovations</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Building &amp; Renovations</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Harvey Tile Installation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Decking &amp; Repairs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Painting &amp; Waterproofing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Paving &amp; Hardscaping</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 21+ Years Experience</li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 gsap-fade-up">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500 mb-2">Led By</p>
              <p className="font-serif italic text-2xl text-gray-900">Emmanuel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
