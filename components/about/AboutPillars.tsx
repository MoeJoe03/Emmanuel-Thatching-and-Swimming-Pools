'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    num: "01",
    title: "Master Thatch Roofing & Maintenance",
    description:
      "We source dense winter-cut Cape Reed and SABS-treated timber poles. From brand-new entertainment lapas to full thatch overhauls, deep combing, and certified fire retardant treatments, we ensure your roof breathes naturally while remaining strictly watertight.",
    link: "/services#thatch",
    tag: "SIGNATURE TRADE",
  },
  {
    num: "02",
    title: "Custom Swimming Pools & Resurfacing",
    description:
      "Complete pool construction, Marblite plastering, fibreglass relining, and underground plumbing overhauls. We specialize in transforming neglected, leaking pools into sparkling resort-grade focal points.",
    link: "/services#pools",
    tag: "CONSTRUCTION & REPAIR",
  },
  {
    num: "03",
    title: "Building Work & Structural Renovations",
    description:
      "Turnkey room additions, custom braai room enclosures, boundary walls, and masonry structural remodeling. We manage all foundation trenching, lintels, face brick, and plastering in-house.",
    link: "/services#building",
    tag: "MASONRY & EXPANSIONS",
  },
  {
    num: "04",
    title: "Harvey Tile Thatch-Over Conversions",
    description:
      "A permanent solution for homeowners seeking zero-maintenance roofing. We install stone-coated steel Harvey tiles directly over your existing thatch structure, eliminating fire risk and hail damage while keeping the warm thatch aesthetic inside.",
    link: "/services#harvey",
    tag: "PERMANENT PROTECTION",
  },
  {
    num: "05",
    title: "Timber Decking & Outdoor Carpentry",
    description:
      "Engineered Balau, Garapa, and CCA-treated pine decking designed specifically to withstand harsh Highveld seasonal expansion. Built on reinforced concrete footings with hidden stainless-steel fasteners.",
    link: "/services#decking",
    tag: "HARDWOOD SPECIALTY",
  },
  {
    num: "06",
    title: "Protective Painting & Waterproofing",
    description:
      "Full exterior and interior painting using premium elastomeric and weather-guard coatings. We prep surfaces thoroughly, stitching structural cracks and waterproofing parapet walls to prevent water ingress.",
    link: "/services#painting",
    tag: "FACADE & SEALING",
  },
  {
    num: "07",
    title: "Interlocking Paving & Stone Hardscaping",
    description:
      "Engineered sub-base compaction prevents ground subsidence. We lay precision cobblestone, bevel, and interlocking pavers for heavy-duty driveways, walkways, braai areas, and swimming pool copings.",
    link: "/services#paving",
    tag: "PRECISION GROUNDWORK",
  },
];

export default function AboutPillars() {
  return (
    <section className="py-20 md:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
            — CORE SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-tight mb-4">
            BUILT WITH PURPOSE.{' '}
            <span className="font-serif italic font-normal text-primary lowercase tracking-normal block sm:inline">
              mastered over two decades.
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            By keeping all seven specialized trades within our permanent team, we manage your entire outdoor living project under one contract, one point of contact, and one standard of quality.
          </p>
        </div>

        {/* 7-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              className={`bg-white border border-gray-200 p-8 rounded-sm shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${
                idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
                  <span className="font-oswald text-2xl font-bold text-primary">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div>
                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black group-hover:text-primary transition-colors"
                >
                  <span>Explore Trade Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
