'use client';
import { servicesData } from './servicesData';

export default function NotSureWhereToStart() {
  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-[#FAF9F6] text-gray-900 py-20 md:py-28 px-6 md:px-12 border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        {/* Ready Callout Block */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-primary"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary">
              READY?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-950 leading-tight mb-4">
            NOT SURE WHERE<br />
            TO START?{' '}
            <span className="font-serif italic font-normal text-primary">
              Just ask.
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Call Emmanuel direct or drop a message. We&apos;ll take it from there.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/27633252012?text=Hello%20Emmanuel,%20I%20would%20like%20to%20request%20a%20free%20estimate."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-950 hover:bg-primary text-white text-xs font-black uppercase tracking-widest px-8 py-3.5 transition-colors shadow-md rounded-sm"
            >
              REQUEST FREE ESTIMATE
            </a>
            <a
              href="tel:+27633252012"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-gray-950 hover:bg-gray-950 hover:text-white text-gray-950 text-xs font-black uppercase tracking-widest px-8 py-3 transition-colors rounded-sm"
            >
              (063) 325-2012
            </a>
          </div>
        </div>

        {/* "GO DEEPER ON ANY SERVICE" Section */}
        <div className="pt-6">
          <h3 className="text-center text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-gray-900 mb-5">
            GO DEEPER ON ANY SERVICE
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 border border-gray-300 rounded-sm bg-white shadow-sm overflow-hidden divide-x divide-y sm:divide-y-0 divide-gray-300">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className="py-4 px-2 sm:px-3 text-center text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-primary hover:bg-amber-50/50 transition-colors cursor-pointer"
              >
                {service.navLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
