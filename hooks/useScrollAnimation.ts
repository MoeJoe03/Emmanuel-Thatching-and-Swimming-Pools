'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade and slide up slowly
      gsap.utils.toArray('.gsap-fade-up').forEach((el: any) => {
        // Find closest parent section or use element itself
        const trigger = el.closest('section') || el;
        
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: trigger,
              start: "top 80%",
              toggleActions: "play none none reverse", // play on enter, reverse on leave back
            }
          }
        );
      });

      // Subtle scale up for cards/images
      gsap.utils.toArray('.gsap-scale-up').forEach((el: any) => {
        const trigger = el.closest('section') || el;
        
        gsap.fromTo(el,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: trigger,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // Parallax effect
      gsap.utils.toArray('.gsap-parallax').forEach((el: any) => {
        const trigger = el.closest('section, div') || el.parentElement;
        
        gsap.fromTo(el,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
