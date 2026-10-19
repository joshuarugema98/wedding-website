import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { OurStory } from '@/components/our-story'
import { PhotoCarousel } from '@/components/photo-carousel'
import { AboutUs } from '@/components/about-us'
import { ArrowIcon, PinIcon } from '@/components/icons'
import { events, wedding } from '@/lib/wedding'

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <Hero />
      <main id="main">
        <OurStory />
        <PhotoCarousel />
        <AboutUs />
        <section
          className="schedule-section"
          id="celebrations"
          aria-labelledby="celebrations-title"
        >
          <h2 id="celebrations-title">When & Where</h2>
          <div className="schedule-days">
            <article className="schedule-day" aria-labelledby="gusaba-title">
              <header className="event-heading">
                <p className="event-label">Introduction & dowry</p>
                <h3 id="gusaba-title">Gusaba</h3>
              </header>
              <p className="event-intro">
                Join us as we celebrate the traditional Rwandan engagement
                ceremony, where our families formally meet.
              </p>
              <p className="schedule-date">{events.gusaba.date}</p>
              <div className="event-timing">
                <p className="event-time">{events.gusaba.time}</p>
              </div>
              <a
                className="venue-link"
                href={events.gusaba.map}
                target="_blank"
                rel="noreferrer"
              >
                <PinIcon />
                <span>
                  {events.gusaba.venue}
                  <small>{events.gusaba.address}</small>
                </span>
              </a>
              <div className="event-actions">
                <a
                  className="event-map-link"
                  href={events.gusaba.map}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View map to Heaven Garden Rebero"
                >
                  View map <ArrowIcon />
                </a>
              </div>
            </article>
            <article className="schedule-day" aria-labelledby="wedding-title">
              <header className="event-heading">
                <p className="event-label">Church & reception</p>
                <h3 id="wedding-title">Wedding Ceremony</h3>
              </header>
              <p className="event-intro">
                Witness as we exchange our vows, followed by an evening of
                dining, dancing, and joy.
              </p>
              <p className="schedule-date">{events.wedding.date}</p>
              <div className="event-timing wedding-times">
                <p>
                  <span>Church Ceremony</span>2:00 PM
                </p>
                <p>
                  <span>Reception</span>4:00 PM
                </p>
              </div>
              <a
                className="venue-link"
                href={events.wedding.map}
                target="_blank"
                rel="noreferrer"
              >
                <PinIcon />
                <span>
                  {events.wedding.venue}
                  <small>{events.wedding.address}</small>
                </span>
              </a>
              <div className="event-actions">
                <a
                  className="event-map-link"
                  href={events.wedding.map}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View map to Kaleb Garden"
                >
                  View map <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
          <p className="timezone">
            All times are local to Kigali · CAT (UTC+2)
          </p>
        </section>

        <section
          className="registry-section content-width"
          id="registry"
          aria-labelledby="registry-title"
        >
          <h2 id="registry-title">Gift Registry</h2>
          <div className="registry-copy">
            <p>
              Your presence on our special day is the greatest gift we could
              ask for. As we will be returning to Canada after the celebration,
              we kindly ask that you do not bring physical gifts.
            </p>
            <p>
              If you would like to bless us with a gift, we have put together a
              registry with items that can be sent directly to us. Monetary
              gifts are also warmly appreciated; please{' '}
              <a className="registry-contact-link" href="#contact">
                contact us directly
              </a>{' '}
              if this is your preference.
            </p>
            <p>We look forward to celebrating with you!</p>
            {wedding.registryUrl ? (
              <a
                className="registry-link"
                href={wedding.registryUrl}
                target="_blank"
                rel="noreferrer"
              >
                View our registry <ArrowIcon />
              </a>
            ) : (
              <p>Registry details will be shared here soon.</p>
            )}
          </div>
        </section>

        <section
          className="contact-section content-width"
          id="contact"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title">Contact</h2>
          <div className="contact-grid">
            <div>
              <h3>Gusaba</h3>
              {events.gusaba.contacts.map((contact) => (
                <a href={`tel:${contact.phone}`} key={contact.phone}>
                  {contact.display}
                  <ArrowIcon />
                </a>
              ))}
            </div>
            <div>
              <h3>Wedding day</h3>
              {events.wedding.contacts.map((contact) => (
                <a href={`tel:${contact.phone}`} key={contact.phone}>
                  {contact.display}
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <section
          className="travel-section content-width"
          id="guests"
          aria-labelledby="guests-title"
        >
          <h2 id="guests-title">Travel</h2>
          <div className="travel-links">
            <a
              href="https://visitrwanda.com/practical-information/"
              target="_blank"
              rel="noreferrer"
            >
              Plan your visit <ArrowIcon />
            </a>
            <a href="https://visitrwanda.com/" target="_blank" rel="noreferrer">
              Explore Rwanda <ArrowIcon />
            </a>
          </div>
        </section>
        <div className="footer-bottom content-width">
          <p>With love, Joshua & Sandrine</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
