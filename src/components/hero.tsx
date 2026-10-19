import Image from 'next/image'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <figure className="hero-image">
        <div className="hero-photo-frame">
          <Image
            src="/images/cover.JPG"
            alt="A couple dressed in white on a grassy hillside"
            fill
            priority
            sizes="(max-width: 359px) calc(100vw - 40px), (max-width: 760px) calc(100vw - 52px), 70vw"
            className="hero-photo"
          />
        </div>
      </figure>
      <div className="hero-content">
        <p className="hero-date">18 & 20 December 2026 · Kigali, Rwanda</p>
        <h1 id="hero-title">
          Joshua<span>& Sandrine</span>
        </h1>
        <p className="hero-scripture">
          Let all that you do be done in love.<span>1 Corinthians 16:14</span>
        </p>
      </div>
    </section>
  )
}
