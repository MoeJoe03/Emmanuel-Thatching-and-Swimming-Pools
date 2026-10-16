'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const servicesOptions = [
  {
    id: "thatch",
    title: "Thatch Roofing & Repairs",
    gridClass: "col-span-1 sm:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 min-h-[380px] lg:min-h-[640px]",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/thatch.jpg",
    headingClass: "text-3xl sm:text-4xl lg:text-5xl",
    subClass: "text-xl sm:text-2xl",
    badge: "Specialty"
  },
  {
    id: "pools",
    title: "Swimming Pools & Renovations",
    gridClass: "col-span-1 sm:col-span-2 lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-1 min-h-[260px] lg:min-h-[350px]",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/pool%20image%20for%20services.jpg",
    headingClass: "text-2xl sm:text-3xl lg:text-4xl",
    subClass: "text-lg sm:text-xl",
    badge: "Specialty"
  },
  {
    id: "building",
    title: "Building & Renovations",
    gridClass: "col-span-1 lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-1 min-h-[240px] lg:min-h-[270px]",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/services/building_services.jpeg",
    headingClass: "text-xl sm:text-2xl",
    subClass: "text-sm sm:text-base",
  },
  {
    id: "harvey",
    title: "Harvey Tile Installation",
    gridClass: "col-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-2 lg:row-span-1 min-h-[240px] lg:min-h-[270px]",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/harvey_tile_installation_three_rivers.jpg",
    headingClass: "text-xl sm:text-2xl",
    subClass: "text-sm sm:text-base",
  },
  {
    id: "decking",
    title: "Decking & Repairs",
    gridClass: "col-span-1 sm:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-1 min-h-[260px] lg:min-h-[270px]",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/decking_benoni.jpg",
    headingClass: "text-2xl sm:text-3xl",
    subClass: "text-base sm:text-lg",
  },
  {
    id: "painting",
    title: "Painting & Repairs",
    gridClass: "col-span-1 lg:col-start-3 lg:col-span-1 lg:row-start-3 lg:row-span-1 min-h-[240px] lg:min-h-[270px]",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/painting.jpg",
    headingClass: "text-xl sm:text-2xl",
    subClass: "text-sm sm:text-base",
  },
  {
    id: "paving",
    title: "Paving & Repairs",
    gridClass: "col-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-3 lg:row-span-1 min-h-[240px] lg:min-h-[270px]",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/paving.jpg",
    headingClass: "text-xl sm:text-2xl",
    subClass: "text-sm sm:text-base",
  }
];

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="services" className="relative py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-14 gsap-fade-up">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black mb-4">
          Our Services
        </h2>
        <div className="flex items-center gap-4">
          <span className="hidden md:block h-[1px] w-12 bg-black"></span>
          <p className="font-serif italic text-2xl text-primary max-w-2xl">
            Crafting <span className="text-primary font-serif text-3xl">superior</span> environments across Johannesburg.
          </p>
        </div>
      </div>

      {/* 7-Card Bento Grid accurately matching the requested layout */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-2 bg-gray-100/60 rounded-md border border-gray-200"
        style={{
          gridTemplateRows: undefined,
        }}
      >
        {servicesOptions.map((service) => (
          <Link
            key={service.id}
            href={`/services#${service.id}`}
            className={`group relative overflow-hidden bg-gray-900 rounded-sm border border-black/10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 hover:shadow-2xl cursor-pointer gsap-fade-up ${service.gridClass}`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 group-hover:from-black/80 group-hover:via-black/35 transition-all duration-300" />
            
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              {service.badge && (
                <span className="bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow">
                  {service.badge}
                </span>
              )}
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="relative z-10 w-full">
              <h3 className={`font-black uppercase tracking-tighter text-white mb-2 leading-tight group-hover:text-primary transition-colors ${service.headingClass}`}>
                {service.title}
              </h3>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Services deep-dive banner */}
      <div className="mt-8 p-6 md:p-8 bg-black text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 gsap-fade-up">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary block mb-1">
            Gauteng Craftsmen
          </span>
          <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight">
            Looking for a Custom Build or Full Renovation?
          </h4>
          <p className="text-gray-400 text-sm mt-1 max-w-xl">
            Explore our full services directory or contact Emmanuel directly for a free on-site quote.
          </p>
        </div>
        <Link
          href="/services"
          className="whitespace-nowrap inline-flex items-center gap-2 bg-primary hover:bg-[#9a7009] text-white px-7 py-3.5 font-bold uppercase text-xs tracking-widest transition-colors shadow-lg"
        >
          <span>View All Services</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
