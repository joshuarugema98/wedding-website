import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { OurStory } from '@/components/our-story'
import { AboutUs } from '@/components/about-us'
import { ArrowIcon, CalendarIcon, PinIcon } from '@/components/icons'
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
        <AboutUs />
        <section
          className="schedule-section"
          id="celebrations"
          aria-labelledby="celebrations-title"
        >
          <h2 id="celebrations-title">Schedule</h2>
          <div className="schedule-days">
            <article className="schedule-day" aria-labelledby="gusaba-title">
              <p className="schedule-date">Friday, December 18, 2026</p>
              <h3 id="gusaba-title">Gusaba — Traditional Ceremony</h3>
              <p className="event-time">2:00 PM</p>
              <div className="event-actions">
                <a
                  className="event-button"
                  href="/calendar/gusaba.ics"
                  download
                >
                  <CalendarIcon />
                  Add to Calendar
                </a>
                <a
                  className="directions-link"
                  href={events.gusaba.map}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PinIcon />
                  Directions
                </a>
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
            </article>
            <article className="schedule-day" aria-labelledby="wedding-title">
              <p className="schedule-date">Sunday, December 20, 2026</p>
              <h3 id="wedding-title">Wedding Ceremony & Reception</h3>
              <div className="wedding-times">
                <p>
                  <span>Church Ceremony</span>2:00 PM
                </p>
                <p>
                  <span>Reception</span>4:00 PM
                </p>
              </div>
              <div className="event-actions">
                <a
                  className="event-button"
                  href="/calendar/wedding.ics"
                  download
                >
                  <CalendarIcon />
                  Add to Calendar
                </a>
                <a
                  className="directions-link"
                  href={events.wedding.map}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PinIcon />
                  Directions
                </a>
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
              Your presence in our lives means the world to us. As we build our
              home together, we’re choosing a few meaningful pieces to enjoy for
              years to come.
            </p>
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
            <p>
              Monetary gifts are also welcome. If you prefer to give this way,
              please{' '}
              <a className="registry-contact-link" href="#contact">
                contact us directly
              </a>
              . Thank you for your love and generosity.
            </p>
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
