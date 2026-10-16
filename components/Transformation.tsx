"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronsLeftRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BEFORE_IMAGE =
  "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/before_tiles.png";
const AFTER_IMAGE =
  "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/gallery/harvey%20tiles.jpg";

export default function Transformation() {
  const ref = useScrollAnimation();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <section ref={ref} className="py-24 overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Interactive Before / After Image Slider */}
          <div className="w-full gsap-scale-up">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => setIsDragging(false)}
              className="relative aspect-video lg:aspect-[4/5] xl:aspect-[3/4] rounded-sm overflow-hidden select-none cursor-ew-resize shadow-2xl border border-white/10 group bg-neutral-900"
            >
              {/* After Image (Base layer) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={AFTER_IMAGE}
                  alt="After Harvey Tile Roof Conversion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>

              {/* Before Image (Clipped overlay layer) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <Image
                  src={BEFORE_IMAGE}
                  alt="Before Roof Condition"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm border border-white/20 shadow-lg">
                  BEFORE
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm border border-primary shadow-lg">
                  AFTER
                </span>
              </div>

              {/* Divider Line & Slider Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Vertical Divider line */}
                <div className="w-[3px] h-full -ml-[1.5px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)]" />

                {/* Center Draggable Circle Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-black/90 border-2 border-primary shadow-2xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <ChevronsLeftRight className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Drag instruction pill at bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-black/75 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                  Drag to compare
                </span>
              </div>

              {/* Hidden Range Input for Accessibility & Keyboard control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                aria-label="Before and after transformation slider"
              />
            </div>

            {/* Satisfaction guarantee badge */}
            <div className="mt-4 flex items-center justify-between text-xs text-gray-400 px-1">
              <span className="font-semibold text-gray-300">
                Harvey Tile Thatch-Over Conversion
              </span>
              <span className="font-bold text-primary uppercase tracking-wider">
                100% Guaranteed Workmanship
              </span>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4 block gsap-fade-up">
              THE EMMANUEL DIFFERENCE
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.1] gsap-fade-up">
              Transforming Old Spaces{" "}
              <span className="block italic font-serif text-primary tracking-normal capitalize text-4xl md:text-5xl mt-2">
                Into Beautiful Living Environments.
              </span>
            </h2>

            <p className="text-white text-lg leading-relaxed mb-8 gsap-fade-up">
              At Emmanuel Thatching and Swimming Pools - Pty Ltd, we don&apos;t just
              patch things up. We reimagine your property&apos;s potential.
              Whether you&apos;re looking for expert{" "}
              <strong>thatching, swimming pool installation &amp; repair</strong>, or{" "}
              <strong>renovation specialists near you</strong>, we deliver
              craftsmanship that enhances your lifestyle and adds lasting value
              to your home.
            </p>

            <ul className="space-y-4 mb-10 gsap-fade-up">
              {[
                "Seamless integration of indoor and outdoor living areas.",
                "Premium materials sourced for durability and aesthetic appeal.",
                "Minimal disruption to your daily life during construction.",
                "Transparent communication and precise project management.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>

            <div className="gsap-fade-up">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-white bg-black text-white px-8 py-4 font-black uppercase tracking-tighter text-lg hover:bg-white hover:text-black transition-colors"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
