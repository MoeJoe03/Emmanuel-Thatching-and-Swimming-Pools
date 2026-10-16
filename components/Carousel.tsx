'use client';

import Image, { StaticImageData } from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Project Images
import pavingImg from '@/src/assets/images/paving_repairs_1790270663403.jpg';

interface ProjectCard {
  id: string;
  category: string;
  title: string;
  image: StaticImageData | string;
}

const rowOneProjects: ProjectCard[] = [
  {
    id: "r1-1",
    category: "Painting",
    title: "Brenthurst brakpan paintings",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/Brenthurst_brakpan_painting.jpg",
  },
  {
    id: "r1-2",
    category: "Decking",
    title: "Wooden decking repair",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/decking_benoni.jpg",
  },
  {
    id: "r1-3",
    category: "THATCHING",
    title: "Pollak park springs thatch repair",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/thatch.jpg",
  },
  {
    id: "r1-4",
    category: "SWIMMING POOLS",
    title: "Crystal blue swimming pool",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/_swimming_pool.jpeg",
  },
  {
    id: "r1-5",
    category: "HARVEY TILES",
    title: "Brakpan Harvey tile installation",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/harvey%20tiles.jpg",
  }
];

const rowTwoProjects: ProjectCard[] = [
  {
    id: "r2-1",
    category: "SWIMMING POOL & DECKING",
    title: "Serengeti Estate pool repair & decking restoration",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/pool%20image%20for%20services.jpg",
  },
  {
    id: "r2-2",
    category: "SWIMMING POOL",
    title: "Helderwyk estate brakpan pooL",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/Helderwyk_estate_brakpan_pool_renovation%20projec.jpg",
  },
  {
    id: "r2-3",
    category: "THATCHING",
    title: "Pretoria east tierpoort",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/thatch_roof_jhb.jpg",
  },
  {
    id: "r2-4",
    category: "Landscape",
    title: "Edenval landscape",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/Edenvale%20landscape%20project.jpg",
  },
  {
    id: "r2-5",
    category: "PAINTING & REPAIRS",
    title: "Full exterior protective painting & waterproofing",
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/painting.jpg",
  }
];

function CardItem({ project }: { project: ProjectCard }) {
  return (
    <div className="relative flex-none w-[280px] sm:w-[360px] md:w-[420px] aspect-[16/11] bg-gray-950 overflow-hidden group rounded-sm border border-black/10 shadow-sm select-none">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, 420px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      {/* Full bottom gradient & subtle blur covering the bottom of the image completely */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-[1]" />

      {/* Content overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
        <span className="text-[11px] sm:text-[12px] font-black uppercase tracking-wider text-[#C5A059] block mb-1 drop-shadow-sm">
          {project.category}
        </span>
        <p className="font-serif italic font-bold text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-md line-clamp-2">
          {project.title}
        </p>
      </div>
    </div>
  );
}

export default function Carousel() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} id="gallery" className="relative py-20 md:py-24 bg-white text-black overflow-hidden clear-both">
      {/* Compatibility anchor for #work */}
      <span id="work" className="absolute -top-24 left-0" />
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="gsap-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-3 block">
            FEATURED PROJECTS
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-black">
            Gallery
          </h2>
        </div>
        <div className="gsap-fade-up flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 font-bold">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Auto-Moving Gallery • Hover to Pause</span>
        </div>
      </div>

      {/* Moving Carousel Rows with edge fade gradients */}
      <div className="relative w-full overflow-hidden pause-on-hover py-0.5">
        {/* Soft edge blurs - positioned tighter to the edge, seamlessly covering from top to bottom */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-6 sm:w-10 md:w-16 bg-gradient-to-r from-white via-white/80 to-transparent backdrop-blur-[2px] z-20" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-6 sm:w-10 md:w-16 bg-gradient-to-l from-white via-white/80 to-transparent backdrop-blur-[2px] z-20" />

        {/* Carousel Rows Container */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Row 1 - Auto moving to the left */}
          <div className="flex gap-3 sm:gap-4 animate-marquee-left">
            {/* Double list for infinite loop */}
            {[...rowOneProjects, ...rowOneProjects].map((project, idx) => (
              <CardItem key={`r1-${idx}`} project={project} />
            ))}
          </div>

          {/* Row 2 - Auto moving to the right */}
          <div className="flex gap-3 sm:gap-4 animate-marquee-right">
            {/* Double list for infinite loop */}
            {[...rowTwoProjects, ...rowTwoProjects].map((project, idx) => (
              <CardItem key={`r2-${idx}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
