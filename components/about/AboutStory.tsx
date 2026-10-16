'use client';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="py-20 md:py-24 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story / Dual Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/thatch.jpg"
                alt="Emmanuel craftsmanship and on-site thatch construction in Gauteng"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Floating Inset Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-2/3 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-4 border-white bg-black">
              <Image
                src="https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/pool%20image%20for%20services.jpg"
                alt="Custom swimming pool renovation in Johannesburg"
                fill
                sizes="33vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Accent Gold Badge */}
            <div className="absolute top-6 left-6 bg-black/90 backdrop-blur-md px-4 py-2 border-l-4 border-primary shadow-lg">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                ESTABLISHED IN BENONI
              </p>
              <p className="text-xs font-bold text-white uppercase tracking-tight">
                Gauteng Wide Operations
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-6 lg:pt-0">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              — WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-6 leading-tight">
              A TRADITION OF HONEST SCOPE,{' '}
              <span className="font-serif italic font-normal text-primary lowercase tracking-normal block">
                in-house crews, and no shortcuts.
              </span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Emmanuel Thatching &amp; Swimming Pools (Pty) Ltd was founded with a singular conviction: homeowners deserve authentic craftsmanship managed directly on-site by the business owner, not subcontracted down through tiers of third parties.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
              Over two decades in Gauteng, we have built lasting structures that withstand torrential Highveld hailstorms, blazing summer sun, and shifting subsoils. Every thatch roof we cap, pool we gunite, and deck we engineer is overseen by Emmanuel personally.
            </p>

            {/* Values Bullet Points */}
            <div className="space-y-3.5 border-t border-gray-100 pt-6">
              {[
                "Direct owner supervision on every single project, from start to sign-off.",
                "100% in-house artisans — we never sell your job to unvetted subcontractors.",
                "Genuine SABS-compliant materials: Winter-cut Cape Reed, CCA timber, and marine-grade resins.",
                "Fixed, itemized quotations with zero hidden surprises or mid-project cost escalations.",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
