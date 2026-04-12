"use client";

import Image from "next/image";

interface ProjectGalleryProps {
  project: {
    title: string;
    mainImage: string;
    slug: string;
    gallery?: string[];
  };
}

export const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  const images = (project.gallery && project.gallery.length > 0 ? project.gallery : [
    project.mainImage,
    `/images/projects/${project.slug}-1.png`,
    `/images/projects/${project.slug}-2.png`,
    `/images/projects/${project.slug}-3.png`
  ]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <div key={`gallery-${img}-${i}`} className={`relative overflow-hidden group ${i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'}`}>
          <Image
            src={img}
            alt={`${project.title} execution step ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-2000 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = project.mainImage;
            }}
          />
          <div className="absolute inset-0 bg-navy/10 group-hover:opacity-0 transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
};
