'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-black"
    >
      {/* Background Image: Untouched original photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/hero_image.png"
          alt="Emmanuel Thatching, Swimming Pools and Outdoor Renovations in Gauteng"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
          referrerPolicy="no-referrer"
        />

        {/* Directional Overlay: Darkest behind text on the left, fading naturally before reaching the thatch structure */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.72) 36%, rgba(0,0,0,0.38) 58%, rgba(0,0,0,0.10) 78%, rgba(0,0,0,0.0) 92%)',
          }}
        />
      </div>

      {/* Global Page Container: Matches navbar logo alignment (max-w-7xl mx-auto px-6 md:px-12) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
        {/* Content Column: width min(760px, 52vw) occupying left 45-50% zone */}
        <div className="w-full max-w-full md:max-w-[680px] lg:max-w-[720px] xl:max-w-[760px] text-left">
          
          {/* Eyebrow */}
          <div className="mb-5 sm:mb-6 gsap-fade-up">
            <p className="text-[#B8860B] font-bold text-[11px] sm:text-xs uppercase tracking-[0.25em]">
              — THATCHING • POOLS • RENOVATIONS
            </p>
          </div>

          {/* Semantic H1: Dominant SEO element with balanced responsive line wrapping */}
          <h1 className="text-white font-black uppercase tracking-tight text-[36px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[62px] leading-[0.98] mb-5 sm:mb-6 gsap-fade-up">
            <span className="block">THATCHING, SWIMMING</span>
            <span className="block xl:inline">POOLS &amp; RENOVATIONS </span>
            <span className="block xl:inline">IN GAUTENG</span>
          </h1>

          {/* Bold Supporting Statement */}
          <p className="text-white font-bold uppercase tracking-tight text-[15px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-snug max-w-[650px] mb-4 sm:mb-5 gsap-fade-up">
            QUALITY WORKMANSHIP FOR YOUR HOME, FROM THATCH ROOFING AND SWIMMING POOLS TO BUILDING AND OUTDOOR RENOVATIONS.
          </p>

          {/* Descriptive Body Copy */}
          <p className="text-gray-200 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] max-w-[650px] mb-2 sm:mb-3 font-normal gsap-fade-up">
            Emmanuel Thatching &amp; Swimming Pools brings 21+ years of experience to homes across Benoni, Johannesburg and Gauteng. From thatch roofing and repairs to swimming pool renovations, building work, Harvey tile installation, decking, paving and painting, we handle new projects, repairs and upgrades with a focus on practical workmanship and a quality finished result.
          </p>

          {/* Closing Emphasis */}
          <p className="font-serif italic text-[#B8860B] text-[15px] sm:text-base md:text-lg font-medium mb-7 sm:mb-9 gsap-fade-up">
            One team. Multiple services. Built to last.
          </p>

          {/* Clear CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 gsap-fade-up">
            <Link
              href="/contact"
              className="h-[52px] sm:h-[56px] px-8 sm:px-9 bg-[#B8860B] hover:bg-[#9a7009] text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xs inline-flex items-center justify-center transition-colors shadow-md text-center"
            >
              REQUEST A QUOTE
            </Link>

            <Link
              href="/gallery"
              className="h-[52px] sm:h-[56px] px-8 sm:px-9 bg-transparent hover:bg-white hover:text-black text-white border-2 border-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-xs inline-flex items-center justify-center transition-colors text-center"
            >
              VIEW OUR WORK
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
