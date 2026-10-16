'use client';
import { galleryFilters } from './galleryData';

interface GalleryHeroProps {
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
  projectCount: number;
}

export default function GalleryHero({
  activeFilter,
  onSelectFilter,
  projectCount,
}: GalleryHeroProps) {
  return (
    <section className="pt-32 pb-8 sm:pt-36 sm:pb-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Kicker */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">
          — OUR WORK
        </span>
      </div>

      {/* Headline */}
      <div className="text-center max-w-3xl mx-auto mb-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black leading-[1.05]">
          PROJECTS WE&apos;RE{' '}
          <span className="font-serif italic font-normal text-primary lowercase tracking-normal block sm:inline">
            proud of.
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10">
        Discover our craftsmanship through a curated collection of recent thatching, swimming pool, Harvey tile, decking, painting, and paving projects around Johannesburg and the Gauteng metro.
      </p>

      {/* Filter Bar matching the reference PDF */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 pb-4">
        <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 mr-2 hidden sm:inline-block">
          FILTER:
        </span>
        {galleryFilters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => onSelectFilter(filter)}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-primary text-white shadow-sm ring-1 ring-primary'
                  : 'bg-white text-gray-700 hover:text-black hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </section>
  );
}
