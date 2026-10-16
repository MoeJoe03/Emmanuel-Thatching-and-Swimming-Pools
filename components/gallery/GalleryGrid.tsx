'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Phone, ArrowUpRight } from 'lucide-react';
import { GalleryProject } from './galleryData';

interface GalleryGridProps {
  projects: GalleryProject[];
}

export default function GalleryGrid({ projects }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % projects.length);
  }, [selectedIndex, projects.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
  }, [selectedIndex, projects.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Prevent background scroll when lightbox open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  const activeProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16">
      {/* 4-Column Photo Grid matching PDF */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenLightbox(index)}
            className="group relative aspect-[4/3] sm:aspect-square bg-gray-200 overflow-hidden cursor-pointer rounded-xs border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Hover overlay with project details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-primary mb-1">
                {project.category}
              </span>
              <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-xs mt-1 flex items-center justify-between">
                <span>{project.location}</span>
                <span className="text-primary text-[11px] font-bold uppercase tracking-wider flex items-center gap-0.5">
                  View <ArrowUpRight className="w-3 h-3" />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Note at bottom of grid matching page 2 of PDF */}
      <div className="mt-12 text-center">
        <p className="font-serif italic text-gray-500 text-xs sm:text-sm">
          More coming soon. Emmanuel&apos;s always on a roof, at a pool, or on a project somewhere.
        </p>
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous project"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 border border-white/20 p-2.5 sm:p-3 rounded-full transition-all z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next project"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 border border-white/20 p-2.5 sm:p-3 rounded-full transition-all z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-neutral-900 border border-neutral-800 rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Image Box */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </div>

            {/* Project Details Footer */}
            <div className="p-4 sm:p-6 bg-[#0E0E0E] border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    {activeProject.category}
                  </span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-400 text-xs font-semibold">
                    {activeProject.location}
                  </span>
                </div>
                <h2 className="text-white font-black text-lg sm:text-xl uppercase tracking-tight">
                  {activeProject.title}
                </h2>
                {activeProject.description && (
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-2xl">
                    {activeProject.description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="tel:+27633252012"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Call (063) 325-2012</span>
                </a>
                <Link
                  href="/#contact"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center bg-primary hover:bg-[#9a7009] text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-sm transition-colors"
                  onClick={handleCloseLightbox}
                >
                  Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
