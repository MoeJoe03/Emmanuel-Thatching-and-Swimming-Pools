'use client';
import Image from 'next/image';
import { ServiceItem } from './servicesData';

interface ServiceDetailCardProps {
  service: ServiceItem;
  index: number;
  totalServices: number;
}

export default function ServiceDetailCard({
  service,
  index,
  totalServices,
}: ServiceDetailCardProps) {
  // Even indexes: Image Left, Content Right. Odd indexes: Content Left, Image Right.
  const isImageLeft = index % 2 === 0;

  const whatsappHref = `https://wa.me/27633252012?text=${encodeURIComponent(
    `Hello Emmanuel, I would like to request a free estimate for ${service.title.replace(' .', '')}.`
  )}`;

  // Split the 6 items into 2 columns of 3
  const col1 = service.handleList.slice(0, 3);
  const col2 = service.handleList.slice(3, 6);

  return (
    <article
      id={service.id}
      className="scroll-mt-28 py-16 sm:py-20 md:py-24 border-b border-gray-200/80 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image Block */}
          <div
            className={`lg:col-span-6 relative ${
              isImageLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-sm overflow-hidden shadow-xl border border-gray-200">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Number Badge pinned in bottom-right corner */}
              <div className="absolute bottom-0 right-0 bg-[#141414]/95 text-white px-4 py-2.5 flex flex-col items-center justify-center min-w-[64px] border-tl border border-white/10">
                <span className="text-xl sm:text-2xl font-black font-mono leading-none text-white">
                  {service.num}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-0.5">
                  OF 0{totalServices}
                </span>
              </div>
            </div>
          </div>

          {/* Content Block */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              isImageLeft ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            {/* Kicker with dash */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-primary"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary">
                {service.serviceTag}
              </span>
            </div>

            {/* Headline with period */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950 mb-3 leading-tight">
              {service.title}
            </h2>

            {/* Summary in italic serif */}
            <p className="font-serif italic text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              {service.summary}
            </p>

            {/* "WHAT WE HANDLE" Section Label */}
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 block pb-1 border-b border-gray-200/80">
                WHAT WE HANDLE
              </span>
            </div>

            {/* 2-Column Dash List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
              <div className="space-y-2">
                {col1.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-[13px] font-semibold text-gray-800"
                  >
                    <span className="text-primary font-black shrink-0">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {col2.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-[13px] font-semibold text-gray-800"
                  >
                    <span className="text-primary font-black shrink-0">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Action Buttons: Left Solid, Right Outline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-950 hover:bg-primary text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 transition-colors text-center shadow-md rounded-sm"
              >
                GET A FREE ESTIMATE
              </a>
              <a
                href="tel:+27633252012"
                className="inline-flex items-center justify-center border-2 border-gray-950 hover:bg-gray-950 hover:text-white text-gray-950 text-xs font-black uppercase tracking-widest px-6 py-3 transition-colors text-center rounded-sm"
              >
                CALL (063) 325-2012
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
