"use client";

import { useState } from "react";
import { GalleryLightbox } from "@/components/gallery/lightbox";

const SLIDES = [
  { src: "/images/portfolio/photo-01.avif" },
  { src: "/images/portfolio/photo-02.avif" },
  { src: "/images/portfolio/photo-03.avif" },
  { src: "/images/portfolio/photo-04.avif" },
];

export function PhotoGrid() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {SLIDES.map((photo, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="aspect-[3/4] rounded-lg bg-amber-100 border border-amber-200 overflow-hidden cursor-zoom-in"
          >
            <img
              src={photo.src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>
      <GalleryLightbox
        open={open}
        index={index}
        slides={SLIDES}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
