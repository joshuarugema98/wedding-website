import './App.css'

const details = [
  { title: 'When & where', description: 'Our wedding date and venue will be shared here.' },
  { title: 'The celebration', description: 'Find ceremony and reception details here soon.' },
  { title: 'Travel & stay', description: 'Travel tips and places to stay are on their way.' },
  { title: 'RSVP', description: 'Details on how to RSVP will be shared here.' },
]

function App() {
  return (
    <main className="wedding-page">
      <header className="welcome">
        <p className="eyebrow">Together with our favourite people</p>
        <h1>Our wedding</h1>
        <p className="introduction">
          We can’t wait to celebrate with you. All the details for our day
          will be right here.
        </p>
      </header>

      <section className="details" aria-label="Wedding information">
        {details.map(({ title, description }) => (
          <article className="detail" key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <footer>More details coming soon, with love.</footer>
    </main>
  )
}

export default App
