'use client';
import { Shield, Zap, Sparkles, CheckSquare, Award } from 'lucide-react';

const standards = [
  {
    icon: Shield,
    title: "SABS 0407 Building Code",
    desc: "Strict adherence to South African national standards for timber pole selection, pole spacing, rafters, and minimum roof pitch to guarantee efficient rainwater shedding.",
  },
  {
    icon: Zap,
    title: "Lightning Mast Earthing & Safety",
    desc: "Installation of dedicated standalone lightning conductor masts with certified copper grounding rods to safeguard thatch dwellings against Highveld electrical storms.",
  },
  {
    icon: Sparkles,
    title: "Certified Fire-Retardant Protection",
    desc: "Application of SABS-compliant chemical fire retardants that penetrate thatch fibres, reducing flame spread and meeting insurance underwriter criteria.",
  },
  {
    icon: CheckSquare,
    title: "Pressure-Tested Pool Engineering",
    desc: "Underground suction and return lines are pressure-tested prior to backfilling, preventing unseen subterranean leaks and soil erosion under paving.",
  },
];

export default function AboutCompliance() {
  return (
    <section className="py-20 md:py-24 bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-5">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              — STRUCTURAL INTEGRITY &amp; COMPLIANCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              ENGINEERED FOR SAFETY.{' '}
              <span className="font-serif italic font-normal text-primary lowercase tracking-normal block">
                built to withstand highveld extremes.
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              South Africa&apos;s climate tests outdoor structures with fierce summer hailstorms, high UV indexes, and torrential downpours. We build above minimum standards so your investment remains secure for decades.
            </p>

            <div className="inline-flex items-center gap-3 p-4 bg-neutral-900 border border-neutral-800 rounded-sm">
              <Award className="w-8 h-8 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  Quality Guaranteed
                </p>
                <p className="text-[11px] text-gray-400">
                  Comprehensive workmanship guarantee on all structural projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Standards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {standards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-neutral-900/90 border border-neutral-800 rounded-sm hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-7 h-7 text-primary mb-4" />
                  <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
