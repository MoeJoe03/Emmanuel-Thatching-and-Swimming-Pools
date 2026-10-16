import { processSteps } from './servicesData';

export default function ProcessStepsSection() {
  return (
    <section className="bg-[#0A0A0A] text-white py-20 md:py-28 px-6 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-primary"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            FOUR STEPS,<br />
            <span className="font-serif italic font-normal text-primary lowercase">
              one conversation.
            </span>
          </h2>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {processSteps.map((step) => (
            <div key={step.num} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-serif italic font-bold text-primary mb-2">
                {step.num}
              </span>
              <h3 className="text-sm font-black uppercase tracking-wider text-white mb-2.5">
                {step.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
