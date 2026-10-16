import { Star } from 'lucide-react';

export default function GalleryTestimonial() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* 5 Stars */}
        <div className="flex items-center justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-primary text-primary"
            />
          ))}
        </div>

        {/* Big italic serif quote matching reference PDF */}
        <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 font-normal leading-relaxed md:leading-snug mb-8">
          &ldquo;Emmanuel and his team are amazing at what they do. He made recommendations based on our needs and budget, with safety and quality as the priority.&rdquo;
        </blockquote>

        {/* Verified attribution */}
        <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-gray-400">
          VERIFIED GOOGLE REVIEWS · 5.0 AVERAGE · 48+ REVIEWS
        </p>
      </div>
    </section>
  );
}
