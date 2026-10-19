import { aboutUsQuestions, type CoupleAnswer } from '@/lib/about-us'

function Answers({ answers }: { answers: readonly CoupleAnswer[] }) {
  return answers.map((answer, index) => (
    <div className="couple-response" key={answer.speaker ?? index}>
      {answer.speaker && (
        <strong className="couple-speaker">{answer.speaker}:</strong>
      )}
      {answer.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  ))
}

export function AboutUs() {
  return (
    <section
      className="about-section container"
      id="about"
      aria-labelledby="about-title"
    >
      <h2 id="about-title">The story behind the story</h2>
      <ol className="question-list" role="list">
        {aboutUsQuestions.map((item, index) => (
          <li className="question-row" key={item.question}>
            <h3 id={`couple-question-${index + 1}`}>{item.question}</h3>
            <div className="question-answer">
              <Answers answers={item.answers} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
