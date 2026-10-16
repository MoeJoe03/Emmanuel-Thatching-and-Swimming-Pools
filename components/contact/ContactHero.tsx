'use client';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const directChannels = [
  {
    icon: Phone,
    title: "Call Us Direct",
    detail: "+27 63 325 2012",
    action: "tel:+27633252012",
    label: "Dial Now",
    badge: "Direct Line",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    detail: "+27 63 325 2012",
    action: "https://wa.me/27633252012?text=Hi%20Emmanuel,%20I%20would%20like%20to%20inquire%20about%20a%20quote.",
    label: "Send Message",
    badge: "Fastest Response",
  },
  {
    icon: Mail,
    title: "Email Inquiries",
    detail: "emmanuelthatching@gmail.com",
    action: "mailto:emmanuelthatching@gmail.com",
    label: "Send Email",
    badge: "Written Scope",
  },
];

export default function ContactHero() {
  return (
    <section className="pt-32 pb-12 sm:pt-36 sm:pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Kicker */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">
          — GET IN TOUCH
        </span>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black leading-[1.05]">
          START YOUR{' '}
          <span className="font-serif italic font-normal text-primary lowercase tracking-normal block sm:inline">
            project today.
          </span>
        </h1>
      </div>

      {/* Lead Paragraph */}
      <p className="text-center text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
        From immediate storm thatch repairs to new luxury swimming pools, Harvey tile conversions, and full outdoor entertainment remodels — we provide free, honest, on-site assessments across Gauteng.
      </p>

      {/* 3 Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {directChannels.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.action}
              target={item.action.startsWith('http') ? '_blank' : undefined}
              rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group p-6 bg-white border border-gray-200 hover:border-primary/60 rounded-sm shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 bg-[#FAF9F6] border border-gray-200 flex items-center justify-center rounded-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-sm font-black uppercase tracking-tight text-black mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 break-all mb-4">
                  {item.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black group-hover:text-primary transition-colors">
                <span>{item.label}</span>
                <span className="text-primary text-base">→</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
