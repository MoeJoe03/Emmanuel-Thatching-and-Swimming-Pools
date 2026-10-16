import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 sm:gap-4 mb-6 group">
            <div className="relative w-14 h-14 shrink-0 drop-shadow-md">
              <Image
                src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/emmanuel/videos/emmanuel%20logo%20(1).png"
                alt="Emmanuel Thatching and Swimming Pools - Pty Ltd"
                width={56}
                height={56}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-lg text-white leading-tight uppercase">
                Emmanuel Thatching &amp; Pools
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Pty Ltd</span>
            </div>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Premier thatching, swimming pools, home renovation and outdoor living specialists in South Africa, blending structural integrity with aesthetic perfection.
          </p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer">
              <span className="sr-only">Facebook</span>
              F
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all cursor-pointer">
              <span className="sr-only">Instagram</span>
              I
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest text-primary mb-6">Our Services</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><Link href="/services#thatch" className="hover:text-primary transition-colors">Thatch Roofing &amp; Repairs</Link></li>
            <li><Link href="/services#pools" className="hover:text-primary transition-colors">Swimming Pools &amp; Renovations</Link></li>
            <li><Link href="/services#building" className="hover:text-primary transition-colors">Building &amp; Alterations</Link></li>
            <li><Link href="/services#harvey" className="hover:text-primary transition-colors">Harvey Tile Conversions</Link></li>
            <li><Link href="/services#decking" className="hover:text-primary transition-colors">Timber &amp; Composite Decking</Link></li>
            <li><Link href="/services#painting" className="hover:text-primary transition-colors">Painting &amp; Waterproofing</Link></li>
            <li><Link href="/services#paving" className="hover:text-primary transition-colors">Paving &amp; Driveways</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest text-primary mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact &amp; Free Quote</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-widest text-primary mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex flex-col">
              <span className="uppercase text-xs font-bold text-gray-500 mb-1">Phone</span>
              <a href="tel:+27633252012" className="hover:text-white text-lg font-black text-gray-200">+27 63 325 2012</a>
            </li>
            <li className="flex flex-col">
              <span className="uppercase text-xs font-bold text-gray-500 mb-1">Email</span>
              <a href="mailto:emmanuelthatching@gmail.com" className="hover:text-white font-medium">emmanuelthatching@gmail.com</a>
            </li>
            <li className="flex flex-col">
              <span className="uppercase text-xs font-bold text-gray-500 mb-1">Location</span>
              <span className="font-medium">Benoni, Gauteng, South Africa</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Emmanuel Thatching and Swimming Pools - Pty Ltd. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
