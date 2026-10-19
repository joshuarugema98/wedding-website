'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowIcon } from '@/components/icons'
import { aboutUsSlides, type CoupleAnswer } from '@/lib/about-us'

function Answers({ answers }: { answers: readonly CoupleAnswer[] }) {
  return answers.map((answer, index) => (
    <div className="story-response" key={answer.speaker ?? index}>
      {answer.speaker && (
        <strong className="story-speaker">{answer.speaker}:</strong>
      )}
      {answer.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  ))
}

export function AboutUs() {
  const [current, setCurrent] = useState(0)

  function changeSlide(direction: -1 | 1) {
    setCurrent(
      (index) =>
        (index + direction + aboutUsSlides.length) % aboutUsSlides.length,
    )
  }

  return (
    <section
      className="about-section container"
      id="about"
      aria-labelledby="about-title"
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          changeSlide(event.key === 'ArrowLeft' ? -1 : 1)
        }
      }}
    >
      <h2 id="about-title">The Things You Might Not Know</h2>
      <div className="story-carousel">
        <div className="story-media">
          <div id="story-photos">
            {aboutUsSlides.map((slide, index) => (
              <figure
                className="story-photo"
                key={slide.image.src}
                hidden={current !== index}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  loading="eager"
                  sizes="(max-width: 760px) min(420px, calc(100vw - 52px)), 450px"
                />
              </figure>
            ))}
          </div>
          <div className="story-controls">
            <button
              type="button"
              onClick={() => changeSlide(-1)}
              aria-label="Previous question"
              aria-controls="story-photos story-answers"
              className="story-arrow story-previous"
            >
              <ArrowIcon />
            </button>
            <p role="status" aria-live="polite" aria-atomic="true">
              <span className="visually-hidden">
                {aboutUsSlides[current].question}. Question{' '}
              </span>
              {String(current + 1).padStart(2, '0')}
              <span aria-hidden="true"> / </span>
              <span className="visually-hidden"> of </span>
              {String(aboutUsSlides.length).padStart(2, '0')}
            </p>
            <button
              type="button"
              onClick={() => changeSlide(1)}
              aria-label="Next question"
              aria-controls="story-photos story-answers"
              className="story-arrow"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
        <div id="story-answers">
          {aboutUsSlides.map((slide, index) => (
            <div
              className="story-copy"
              key={slide.image.src}
              hidden={current !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${aboutUsSlides.length}`}
            >
              <h3>{slide.question}</h3>
              <div className="story-answer">
                <Answers answers={slide.answers} />
                {slide.moreAnswers && (
                  <details className="answer-disclosure">
                    <summary>
                      <span className="answer-read-more">Read more</span>
                      <span className="answer-read-less">Show less</span>
                      <span className="answer-toggle-icon" aria-hidden="true" />
                    </summary>
                    <div className="answer-continuation">
                      <Answers answers={slide.moreAnswers} />
                    </div>
                  </details>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
