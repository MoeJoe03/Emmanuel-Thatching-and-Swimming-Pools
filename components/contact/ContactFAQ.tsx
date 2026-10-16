'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do you charge for initial quotes and site inspections?",
    a: "No. All initial consultations, on-site measurements, and itemized quotes across Johannesburg, Pretoria, the East Rand, and surrounding Gauteng areas are 100% free with no obligation.",
  },
  {
    q: "Which specific areas across Gauteng do you service?",
    a: "We deploy daily from our Benoni staging base across Sandton, Bryanston, Randburg, Fourways, Pretoria East, Centurion, Midrand, Brakpan, Springs, Kempton Park, Boksburg, Bedfordview, Edenvale, Alberton, and the Vaal Triangle.",
  },
  {
    q: "Can Harvey tiles be installed directly over my existing thatch roof?",
    a: "Yes. Our Harvey tile thatch-over process mounts stone-coated steel tiles over treated battens directly onto the existing thatch framework. This eliminates external weather maintenance and fire hazards while preserving the beautiful exposed thatch aesthetic inside your home or lapa.",
  },
  {
    q: "How long does a typical thatch repair or pool renovation take?",
    a: "Standard thatch combings or ridge cap renewals usually take 2 to 4 working days. Full swimming pool renovations (Marblite replastering or fibreglass relining with new coping stones) typically take 5 to 9 working days depending on weather and plaster curing periods.",
  },
  {
    q: "Do you use subcontractors or third-party crews?",
    a: "No. Every project is carried out exclusively by our permanent in-house team of skilled artisans under direct on-site management by Emmanuel. This ensures accountability and consistent high standards from day one.",
  },
  {
    q: "Are your thatching repairs compliant with South African insurance criteria?",
    a: "Yes. We adhere strictly to SABS 0407 specifications, use CCA-treated structural poles, and provide certified fire-retardant chemical applications that satisfy insurance underwriter safety regulations.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
            — COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-4">
            FREQUENTLY ASKED{' '}
            <span className="font-serif italic font-normal text-primary lowercase tracking-normal">
              questions.
            </span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Clear, straightforward answers about how we operate, scope, and deliver projects across Gauteng.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-black uppercase tracking-tight">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-gray-100 text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
