'use client';
import { useState, useMemo } from 'react';
import GalleryHero from './GalleryHero';
import GalleryGrid from './GalleryGrid';
import { galleryProjects } from './galleryData';

export default function GalleryPageClient() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') {
      return galleryProjects;
    }
    return galleryProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <GalleryHero
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
        projectCount={filteredProjects.length}
      />
      <GalleryGrid projects={filteredProjects} />
    </>
  );
}
