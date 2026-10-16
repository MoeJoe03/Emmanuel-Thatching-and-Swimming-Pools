'use client';
import ServicesHero from './ServicesHero';
import ServiceDetailCard from './ServiceDetailCard';
import NotSureWhereToStart from './NotSureWhereToStart';
import StickyPhoneBadge from './StickyPhoneBadge';
import { servicesData } from './servicesData';

export default function ServicesPageClient() {
  return (
    <div className="bg-[#FAF9F6] text-gray-900 min-h-screen relative">
      {/* Sticky phone badge along right edge */}
      <StickyPhoneBadge />

      {/* Page 1 Hero Section */}
      <ServicesHero />

      {/* Alternating Service Blocks (Page 1 & 2) */}
      <section className="bg-[#FAF9F6]">
        {servicesData.map((service, index) => (
          <ServiceDetailCard
            key={service.id}
            service={service}
            index={index}
            totalServices={servicesData.length}
          />
        ))}
      </section>

      {/* Page 3 Middle: Not Sure Where To Start? Just Ask. + Go Deeper On Any Service */}
      <NotSureWhereToStart />
    </div>
  );
}
