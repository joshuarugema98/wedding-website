'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowIcon } from '@/components/icons'
import { couplePhotos } from '@/lib/photos'

export function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(null)
  const lightbox = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 760px)')
    function closeOnMobile() {
      if (mobile.matches) lightbox.current?.close()
    }
    mobile.addEventListener('change', closeOnMobile)
    return () => mobile.removeEventListener('change', closeOnMobile)
  }, [])

  function openPhoto(index: number, button: HTMLButtonElement) {
    opener.current = button
    setExpanded(index)
    lightbox.current?.showModal()
  }

  function changeExpandedPhoto(direction: -1 | 1) {
    setExpanded((index) =>
      index === null
        ? null
        : (index + direction + couplePhotos.length) % couplePhotos.length,
    )
  }

  function changePhoto(direction: -1 | 1) {
    setCurrent(
      (index) =>
        (index + direction + couplePhotos.length) % couplePhotos.length,
    )
  }

  return (
    <section
      className="photo-gallery container"
      id="photos"
      aria-labelledby="photos-title"
    >
      <h2 className="visually-hidden" id="photos-title">
        Our photos
      </h2>
      <div
        className="photo-collage"
        role="group"
        aria-label="Our photo collage"
      >
        {couplePhotos.map((photo, index) => (
          <figure className="collage-photo" key={photo.image.src}>
            <button
              className="collage-photo-trigger"
              type="button"
              aria-label={`Enlarge photo ${index + 1}: ${photo.alt}`}
              aria-haspopup="dialog"
              aria-controls="photo-lightbox"
              onClick={(event) => openPhoto(index, event.currentTarget)}
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 1264px) 33vw, 400px"
                style={{ objectPosition: photo.collagePosition }}
              />
            </button>
          </figure>
        ))}
      </div>
      <div
        className="mobile-photo-carousel"
        role="group"
        aria-label="Our photo carousel"
        aria-roledescription="carousel"
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            changePhoto(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
      >
        <div className="photo-stage">
          <div id="photo-slides">
            {couplePhotos.map((photo, index) => (
              <figure
                className="photo-slide"
                key={photo.image.src}
                hidden={current !== index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${couplePhotos.length}`}
              >
                <Image
                  className="photo-backdrop"
                  src={photo.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  loading="eager"
                  sizes="450px"
                />
                <Image
                  className="photo-foreground"
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 760px) calc(100vw - 52px), 900px"
                />
              </figure>
            ))}
          </div>
          <button
            className="photo-arrow photo-arrow-previous"
            type="button"
            aria-label="Previous photo"
            aria-controls="photo-slides"
            onClick={() => changePhoto(-1)}
          >
            <ArrowIcon />
          </button>
          <button
            className="photo-arrow photo-arrow-next"
            type="button"
            aria-label="Next photo"
            aria-controls="photo-slides"
            onClick={() => changePhoto(1)}
          >
            <ArrowIcon />
          </button>
        </div>
        <p
          className="photo-counter"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="visually-hidden">
            {couplePhotos[current].alt}. Photo{' '}
          </span>
          {String(current + 1).padStart(2, '0')}
          <span aria-hidden="true"> / </span>
          <span className="visually-hidden"> of </span>
          {String(couplePhotos.length).padStart(2, '0')}
        </p>
      </div>
      <dialog
        className="photo-lightbox"
        id="photo-lightbox"
        ref={lightbox}
        aria-label="Our photos, expanded view"
        onClose={() => {
          setExpanded(null)
          if (window.matchMedia('(min-width: 761px)').matches) {
            opener.current?.focus({ preventScroll: true })
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) lightbox.current?.close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            changeExpandedPhoto(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
      >
        <button
          className="lightbox-close"
          type="button"
          aria-label="Close expanded photos"
          onClick={() => lightbox.current?.close()}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <figure className="lightbox-photo" id="expanded-photo">
          {expanded !== null && (
            <Image
              key={couplePhotos[expanded].image.src}
              src={couplePhotos[expanded].image}
              alt={couplePhotos[expanded].alt}
              sizes="calc(100vw - 176px)"
              quality={85}
              loading="eager"
            />
          )}
        </figure>
        <button
          className="photo-arrow photo-arrow-previous"
          type="button"
          aria-label="Previous expanded photo"
          aria-controls="expanded-photo"
          onClick={() => changeExpandedPhoto(-1)}
        >
          <ArrowIcon />
        </button>
        <button
          className="photo-arrow photo-arrow-next"
          type="button"
          aria-label="Next expanded photo"
          aria-controls="expanded-photo"
          onClick={() => changeExpandedPhoto(1)}
        >
          <ArrowIcon />
        </button>
        <p className="lightbox-counter" role="status" aria-atomic="true">
          {expanded !== null && (
            <>
              <span className="visually-hidden">
                {couplePhotos[expanded].alt}. Photo{' '}
              </span>
              {expanded + 1} / {couplePhotos.length}
            </>
          )}
        </p>
      </dialog>
    </section>
  )
}
