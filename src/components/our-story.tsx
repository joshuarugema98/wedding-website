export function OurStory() {
  return (
    <section
      className="our-story-section content-width"
      id="our-story"
      aria-labelledby="our-story-title"
    >
      <h2 id="our-story-title">Our Story</h2>
      <div className="our-story-body">
        <p className="our-story-intro">
          <em>
            Our story began with a mysterious note in Grade 9. At least, that’s
            one version of events.
          </em>
        </p>
        <p className="our-story-preview">
          We met in high school, on my first day as a new student. Someone
          passed me a piece of paper asking for my phone number. I had no idea
          who it was from, but later that day, I received a WhatsApp message
          from Joshua.
        </p>
        <details className="our-story-disclosure">
          <summary>
            <span className="our-story-read-more">Read our story</span>
            <span className="our-story-read-less">Show less</span>
            <span className="our-story-toggle-icon" aria-hidden="true" />
          </summary>
          <div className="our-story-continuation">
            <p>
              To this day, he denies having anything to do with the note. I
              remain unconvinced.
            </p>
            <p>
              Fast-forward a few years. We had graduated, I had moved to
              Canada for university, and Joshua had moved to China. We kept in
              touch, loosely. A birthday message here, a comment on an
              Instagram post there. Nothing particularly remarkable.
            </p>
            <p>
              Then, in 2020, Joshua transferred to my university in Canada. A
              coincidence, he might say. I have my own theories.
            </p>
            <p>
              One freezing winter morning, I was walking to class, watching my
              steps, when I looked up and saw a very familiar face. There
              stood Joshua, in a red hoodie and a rather questionable yellow
              winter jacket.
            </p>
            <p>
              My first thought was how much taller he’d become. My second was
              about the jacket.
            </p>
            <p>
              Before I knew it, my feet had decided we were going to say
              hello, whether or not my brain had agreed. We hugged, and after
              three years apart, with any number of intelligent things I could
              have said, all I managed was <em>“Warakuze”</em> — Kinyarwanda
              for “You’ve grown.”
            </p>
            <p>
              I don’t remember what he said back. I do remember his smile.
            </p>
            <p>
              With mutual friends and the same church, we began seeing more of
              each other. It wasn’t until early 2021, though, that we finally
              spent time together without our friends. We went to the cinema,
              then ended up sitting in the car by the downtown waterfront,
              talking for hours.
            </p>
            <p>
              Somewhere between that evening and the many conversations that
              followed, things began to change. Occasional messages became
              daily conversations. Busy university schedules and work didn’t
              stop us from finding time for each other every weekend.
            </p>
            <p>And, well, here we are.</p>
          </div>
        </details>
      </div>
    </section>
  )
}
