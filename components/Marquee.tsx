'use client';
import { motion } from 'motion/react';

const services = [
  "Thatch Roofing & Repairs",
  "Swimming Pools & Renovations",
  "Building & Renovations",
  "Harvey Tile Installation",
  "Decking & Repairs",
  "Painting & Repairs",
  "Paving & Repairs"
];

export default function Marquee() {
  return (
    <div className="w-full bg-black h-[80px] sm:h-[125px] flex items-center overflow-hidden border-y-2 border-white">
      <div className="flex w-[200%] gap-6 sm:gap-12">
        <motion.div 
          className="flex flex-nowrap items-center whitespace-nowrap min-w-full gap-6 sm:gap-12 pr-6 sm:pr-12"
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35
          }}
        >
          {[...services, ...services].map((service, index) => {
            const isOutlined = index % 2 === 0;
            return (
              <div key={index} className="flex items-center gap-6 sm:gap-12">
                <span 
                  className={`text-[24px] sm:text-[48px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] ${isOutlined ? 'text-transparent' : 'text-white/90'}`}
                  style={{ 
                    fontFamily: '"Archivo Black", sans-serif', 
                    textDecoration: 'none', 
                    fontStyle: 'normal',
                    ...(isOutlined ? { WebkitTextStroke: '1.5px #B8860B' } : {})
                  }}
                >
                  {service}
                </span>
                <span className="text-[16px] sm:text-[28px] text-primary">●</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
