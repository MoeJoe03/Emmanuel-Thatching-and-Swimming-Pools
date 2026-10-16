'use client';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 gsap-fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4 block">Free Estimates</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-4">
            Request a Quote
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="hidden md:block h-[1px] w-12 bg-black"></span>
            <p className="font-serif italic text-2xl md:text-3xl text-gray-600">
              Ready to remodel? <span className="text-primary font-medium">Let&apos;s build something lasting.</span>
            </p>
            <span className="hidden md:block h-[1px] w-12 bg-black"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-surface p-8 md:p-12 border border-gray-100 shadow-sm rounded-sm gsap-fade-up">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-gray-900" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-gray-900" placeholder="+27 63 325 2012" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-gray-900" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Service Type</label>
                <select id="service" className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-gray-900 appearance-none">
                  <option value="">Select a service...</option>
                  <option value="thatch">Thatch Roofing & Repairs</option>
                  <option value="pools">Swimming Pools & Renovations</option>
                  <option value="building">Building & Renovations</option>
                  <option value="harvey">Harvey Tile Installation</option>
                  <option value="decking">Decking & Repairs</option>
                  <option value="painting">Painting & Repairs</option>
                  <option value="paving">Paving & Repairs</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Project Details</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-gray-900 resize-none" placeholder="Tell us about your space..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-4 font-black uppercase tracking-tighter text-lg hover:bg-[#9a7009] transition-colors shadow-md">
                Get Your Free Quote Today
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-12 gsap-fade-up">
            <div>
              <h3 className="font-oswald text-2xl font-bold uppercase text-gray-900 mb-6 tracking-wide">Direct Contact</h3>
              <div className="space-y-6">
                <a href="tel:+27633252012" className="flex items-center group">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">Call Us</p>
                    <p className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">+27 63 325 2012</p>
                  </div>
                </a>

                <a href="https://wa.me/27633252012" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-sm mr-4 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300 text-[#25D366]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">WhatsApp</p>
                    <p className="text-xl font-medium text-gray-900 group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</p>
                  </div>
                </a>

                <a href="mailto:emmanuelthatching@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email</p>
                    <p className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">emmanuelthatching@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm mr-4">
                    <MapPin className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">Location</p>
                    <p className="text-lg font-medium text-gray-900">Johannesburg, Gauteng, SA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-sm text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="font-oswald text-xl uppercase tracking-widest mb-2 font-semibold text-primary">Service Areas</h4>
                 <p className="text-gray-300 leading-relaxed text-sm">
                   We proudly serve the greater Johannesburg region, Midrand, Sandton, Pretoria, and surrounding areas in Gauteng. Local expertise means faster response times for your property maintenance.
                 </p>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
