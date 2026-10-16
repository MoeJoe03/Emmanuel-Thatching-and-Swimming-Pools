'use client';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

const regions = [
  {
    region: "East Rand & Ekurhuleni",
    suburbs: "Benoni · Brakpan · Springs · Kempton Park · Boksburg · Edenvale · Bedfordview · Alberton",
  },
  {
    region: "Johannesburg Metro",
    suburbs: "Sandton · Bryanston · Randburg · Fourways · Rosebank · Northcliff · Morningside · Linden",
  },
  {
    region: "Pretoria & Midrand",
    suburbs: "Pretoria East · Centurion · Tierpoort · Waterkloof · Midrand · Waterfall Estate · Irene",
  },
  {
    region: "Vaal Triangle & Surrounds",
    suburbs: "Meyerton · Three Rivers · Vereeniging · Vanderbijlpark · Magaliesburg & Lodge Areas",
  },
];

export default function AboutAreas() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
            — GEOGRAPHIC FOOTPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-tight mb-4">
            PROUDLY SERVING{' '}
            <span className="font-serif italic font-normal text-primary lowercase tracking-normal">
              all of Gauteng &amp; surrounds.
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            With our primary staging yard in Benoni, our teams deploy daily across residential estates, commercial lodges, and private residences throughout Gauteng.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAF9F6] border border-gray-200 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <h3 className="font-bold text-sm uppercase tracking-tight text-black">
                    {item.region}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {item.suburbs}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  Fast On-Site Assessments
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="bg-neutral-900 text-white p-8 sm:p-12 rounded-sm border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
              READY TO DISCUSS YOUR PROPERTY?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
              Speak Directly with Emmanuel
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
              Get experienced, straightforward advice on thatching, pool repairs, Harvey tile conversions, or landscaping with no pressure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href="tel:+27633252012"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>(063) 325-2012</span>
            </a>
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#9a7009] text-white px-7 py-3.5 text-xs font-black uppercase tracking-wider rounded-sm transition-colors shadow-md"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
