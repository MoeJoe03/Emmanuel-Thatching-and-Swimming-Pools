'use client';
import { useState } from 'react';
import { Phone, Clock, CheckCircle2, Send, MessageCircle } from 'lucide-react';

export default function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      service: '',
      timeline: '',
      message: '',
    });
  };

  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                — REQUEST A FREE ESTIMATE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-3">
                TELL US ABOUT{' '}
                <span className="font-serif italic font-normal text-primary lowercase tracking-normal">
                  your space.
                </span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Provide as much detail as possible. We will review your requirements and get in touch within 24 hours to arrange an on-site inspection.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 sm:p-10 bg-[#FAF9F6] border-2 border-primary/40 rounded-sm shadow-sm text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="text-gray-700 text-sm max-w-md mx-auto leading-relaxed mb-6">
                  Your inquiry regarding <strong>{formData.service || 'your project'}</strong> in{' '}
                  <strong>{formData.location || 'Gauteng'}</strong> has been received. Emmanuel will contact you shortly at{' '}
                  <strong>{formData.phone || 'your number'}</strong>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/27633252012?text=Hi%20Emmanuel,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.service || 'my project')}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebc59] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:text-black hover:border-black px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-[#FAF9F6] p-6 sm:p-8 border border-gray-200 rounded-sm">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Nkosi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-sm text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-sm text-gray-900"
                    />
                  </div>
                </div>

                {/* Email & Suburb Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. david@example.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-sm text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Property Suburb / Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandton, Benoni, Centurion"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-sm text-gray-900"
                    />
                  </div>
                </div>

                {/* Service Type & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Primary Trade / Service *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-sm text-gray-900 appearance-none cursor-pointer"
                    >
                      <option value="">Select a trade...</option>
                      <option value="Thatch Roofing & Repairs">Thatch Roofing &amp; Repairs</option>
                      <option value="Swimming Pools & Renovations">Swimming Pools &amp; Renovations</option>
                      <option value="Harvey Tile Installation">Harvey Tile Thatch-Over</option>
                      <option value="Timber Decking">Timber Decking &amp; Carpentry</option>
                      <option value="Exterior Painting & Waterproofing">Painting &amp; Waterproofing</option>
                      <option value="Paving & Hardscaping">Paving &amp; Driveways</option>
                      <option value="Building & Structural Renovation">Building &amp; Renovation</option>
                      <option value="Full Outdoor Transformation">Multiple Combined Trades</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Anticipated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-sm text-gray-900 appearance-none cursor-pointer"
                    >
                      <option value="Immediate / Urgent">Immediate / Urgent Repair</option>
                      <option value="Within 2-4 weeks">Within 2–4 Weeks</option>
                      <option value="1-3 Months">1–3 Months</option>
                      <option value="Budgeting / Planning">Budgeting / Planning Only</option>
                    </select>
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Project Scope &amp; Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the size, current condition, issues with leaks/pumps, or what you wish to create..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm text-sm text-gray-900 resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-[#9a7009] text-white py-4 px-6 font-bold uppercase tracking-wider text-xs sm:text-sm rounded-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free On-Site Inspection</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  🔒 Zero obligation. We never share your details with third parties.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Operational Info & What to Expect (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Direct Line Callout */}
            <div className="bg-black text-white p-6 sm:p-8 rounded-sm border border-neutral-800">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
                PREFER TO TALK?
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
                Speak Direct to Emmanuel
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Skip the form and talk directly to the contractor who manages the crew and inspects every job site.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+27633252012"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#9a7009] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(063) 325-2012</span>
                </a>
                <a
                  href="https://wa.me/27633252012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#FAF9F6] p-6 sm:p-8 rounded-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-sm uppercase tracking-tight text-black">
                  Operational Schedule
                </h4>
              </div>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="font-medium text-gray-600">Monday – Friday</span>
                  <span className="font-bold text-black">07:00 – 17:30</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium text-gray-600">Saturday</span>
                  <span className="font-bold text-black">08:00 – 14:00</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
