'use client';
import { Phone } from 'lucide-react';

export default function StickyPhoneBadge() {
  return (
    <aside aria-label="Quick Phone Call" className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <a
        href="tel:+27633252012"
        className="bg-primary hover:bg-[#9a7009] text-white py-4 px-2.5 rounded-l-sm shadow-xl flex flex-col items-center gap-2 group transition-all"
        title="Call Emmanuel direct"
      >
        <Phone className="w-3.5 h-3.5 text-white animate-pulse" />
        <span
          className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap text-white"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          CALL (063) 325-2012
        </span>
      </a>
    </aside>
  );
}
