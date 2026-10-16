'use client';
import { InfiniteMovingCards } from './InfiniteMovingCards';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    quote:
      "Emmanuel Thatching and Swimming Pools completely transformed our outdoor space with stunning thatch work and pool restoration. The team was incredibly professional. Highly recommended for anyone in Gauteng.",
    name: "Sarah Jenkins",
    title: "Homeowner, Sandton",
  },
  {
    quote:
      "We hired them for our thatch roof overhaul and pool installation. Emmanuel and his team were hands-on throughout the entire process. The attention to detail exceeded our expectations.",
    name: "Michael Ndlovu",
    title: "Property Investor",
  },
  {
    quote:
      "Their thatching and pool team is top-notch! They turned our property into a luxury resort-style outdoor living area. The thatch lapa and swimming pool are our new favorite spots.",
    name: "Emma van der Merwe",
    title: "Homeowner, Pretoria",
  },
  {
    quote:
      "Reliable, on-time, and within budget. It's hard to find contractors you can trust in Johannesburg, but Emmanuel Thatching and Swimming Pools - Pty Ltd delivered on every promise.",
    name: "David Smith",
    title: "Homeowner, Midrand",
  },
  {
    quote:
      "Excellent pool maintenance and thatching maintenance services. We use Emmanuel Thatching and Swimming Pools for all our rental properties. A true premium service.",
    name: "Lerato Mokoena",
    title: "Estate Manager",
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-surface overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="text-center gsap-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4 block">Client Realities</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-4">
            Testimonials
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="hidden md:block h-[1px] w-12 bg-black"></span>
            <p className="font-serif italic text-2xl text-primary">
              What our clients say about us.
            </p>
            <span className="hidden md:block h-[1px] w-12 bg-black"></span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center gsap-fade-up">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="w-full max-w-[100vw]"
        />
      </div>

      <div className="mt-16 text-center gsap-fade-up flex justify-center">
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-black hover:text-primary transition-colors group border-b-2 border-black hover:border-primary pb-1"
        >
          <span>Read all reviews on Google</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
