'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface LightboxProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  projectTitle: string
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  projectTitle,
}: LightboxProps) {
  const [index, setIndex] = useState(currentIndex)

  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [index])

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-950/95 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-accent-light md:right-8 md:top-8"
        aria-label="Fermer la galerie"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 text-sm uppercase tracking-widest text-white md:top-8">
        {index + 1} / {images.length}
      </div>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-colors hover:text-accent-light md:left-8"
          aria-label="Image précédente"
        >
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Image */}
      <div className="relative h-[80vh] w-full max-w-6xl px-16 md:px-24">
        <Image
          src={images[index]}
          alt={`${projectTitle} - Photo ${index + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 1536px) 100vw, 1536px"
          priority
        />
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-colors hover:text-accent-light md:right-8"
          aria-label="Image suivante"
        >
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 overflow-x-auto px-4 md:bottom-8">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden transition-opacity md:h-20 md:w-20 ${
                i === index ? 'opacity-100 ring-2 ring-accent-light' : 'opacity-50 hover:opacity-75'
              }`}
            >
              <Image
                src={img}
                alt={`Miniature ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

