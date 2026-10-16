import { Phone } from 'lucide-react';

export default function CTAStrip() {
  return (
    <a
      href="tel:+27633252012"
      className="block w-full bg-primary hover:bg-[#9a7009] transition-colors duration-300 py-10 sm:py-12 px-6 md:px-12 border-t border-white/10 group"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="block text-[10px] sm:text-[11px] text-white/70 font-black uppercase tracking-[0.25em] mb-1">
            READY TO START?
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-serif italic text-white font-normal leading-tight">
            Call Emmanuel direct.
          </span>
        </div>

        <div className="flex items-center gap-3 text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight group-hover:scale-[1.02] transition-transform">
          <Phone className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white shrink-0" />
          <span>(063) 325-2012</span>
        </div>
      </div>
    </a>
  );
}
