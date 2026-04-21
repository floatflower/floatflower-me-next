"use client";

import { useState } from "react";
import { GalleryLightbox } from "@/components/gallery/lightbox";

const SLIDES = [{ src: "/images/avatar.avif", alt: "Jerry Huang" }];

export function AvatarLightbox() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-36 h-36 rounded-full border-4 border-white overflow-hidden shadow-xl bg-stone-100 cursor-zoom-in shrink-0"
      >
        <img
          src="/images/portfolio/avatar.avif"
          alt="Jerry Huang"
          className="w-full h-full object-cover object-top"
        />
      </button>
      <GalleryLightbox
        open={open}
        index={0}
        slides={SLIDES}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
