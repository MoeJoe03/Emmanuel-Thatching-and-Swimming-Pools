'use client';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Kicker */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">
          — OUR HERITAGE &amp; MISSION
        </span>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black leading-[1.05]">
          OVER 21 YEARS OF{' '}
          <span className="font-serif italic font-normal text-primary lowercase tracking-normal block sm:inline">
            architectural craftsmanship.
          </span>
        </h1>
      </div>

      {/* Lead Subtitle */}
      <p className="text-center text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
        Founded in Benoni and serving all of Johannesburg, Pretoria, and the East Rand,{' '}
        <strong>Emmanuel Thatching &amp; Swimming Pools (Pty) Ltd</strong> delivers turnkey outdoor living transformations. From authentic Cape Reed thatching to engineered gunite swimming pools, we build with generational durability in mind.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#9a7009] text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-sm shadow-md transition-colors"
        >
          <span>Request a Site Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="tel:+27633252012"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-sm transition-colors"
        >
          <Phone className="w-4 h-4 text-primary" />
          <span>Call (063) 325-2012</span>
        </a>
      </div>
    </section>
  );
}
