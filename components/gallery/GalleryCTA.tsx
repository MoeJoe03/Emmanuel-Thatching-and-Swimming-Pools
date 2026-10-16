import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function GalleryCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Kicker */}
        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
          — READY TO BUILD?
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
          LET&apos;S MAKE YOURS{' '}
          <span className="font-serif italic font-normal text-primary lowercase tracking-normal block sm:inline">
            project #200+.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Free estimate, honest scope, in-house family crew. Call Emmanuel direct or drop us a message.
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-[#9a7009] text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-sm shadow-md transition-colors"
          >
            GET A FREE ESTIMATE
          </Link>
          <a
            href="tel:+27633252012"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-black text-black hover:bg-black hover:text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>(063) 325-2012</span>
          </a>
        </div>
      </div>
    </section>
  );
}
