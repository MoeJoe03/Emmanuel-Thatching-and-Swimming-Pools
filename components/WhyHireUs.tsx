'use client';
import { Hammer, Star, Clock, PencilRuler, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reasons = [
  {
    title: "Experienced Specialists",
    text: "Decades of combined knowledge in local building codes and modern aesthetics.",
    icon: Hammer
  },
  {
    title: "High-Quality Workmanship",
    text: "We never cut corners. Every detail matters, from foundation to final paint.",
    icon: Star
  },
  {
    title: "Reliable & On-Time",
    text: "We keep to our schedule so you can enjoy your new space sooner.",
    icon: Clock
  },
  {
    title: "Custom Solutions",
    text: "Tailored designs that fit your property and lifestyle perfectly.",
    icon: PencilRuler
  },
  {
    title: "Trusted Local Service",
    text: "Proudly serving Johannesburg and Gauteng with integrity and care.",
    icon: ShieldCheck
  }
];

export default function WhyHireUs() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 gsap-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4 block">Our Values</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-4">
            Why Hire Us
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="hidden md:block h-[1px] w-12 bg-black"></span>
            <p className="font-serif italic text-2xl text-primary">
              Building trust through excellence.
            </p>
            <span className="hidden md:block h-[1px] w-12 bg-black"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 gsap-fade-up"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black tracking-tighter uppercase text-black mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
