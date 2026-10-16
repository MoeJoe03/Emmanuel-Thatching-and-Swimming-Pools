'use client';
import Image from 'next/image';
import heroImg from '@/src/assets/images/thatch_roof_lapa_1790268917662.jpg';

export default function ServicesHero() {
  return (
    <section className="bg-[#FAF9F6] text-gray-900 pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Scope */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Kicker with dash */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-primary"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary">
                WHAT WE DO
              </span>
            </div>

            {/* Massive condensed headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-950 leading-[0.98] mb-6">
              THATCHING &amp; POOL<br />
              SERVICES IN<br />
              JOHANNESBURG, GP
            </h1>

            {/* Subparagraph */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              We keep our scope intentional: thatching, swimming pools, building renovations, Harvey conversions, decking, painting, and paving, so the work stays in-house and the quality stays consistent.
            </p>

            {/* Tagline / Bullet points */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-black uppercase tracking-widest text-gray-700">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                THATCHING
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                POOLS
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                BUILDING
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                HARVEY TILES
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                DECKING
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                PAINTING
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                PAVING
              </span>
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-sm overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={heroImg}
                alt="Emmanuel Thatching and Swimming Pools"
                fill
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
