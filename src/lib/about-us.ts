import type { StaticImageData } from 'next/image'
import photo1 from '../../public/images/1.jpg'
import photo2 from '../../public/images/22.jpg'
import photo3 from '../../public/images/33.jpg'
import photo4 from '../../public/images/4.jpg'
import photo5 from '../../public/images/5.jpg'

export type CoupleAnswer = {
  speaker?: 'Sandrine' | 'Joshua'
  paragraphs: readonly string[]
}

type CoupleQuestion = {
  question: string
  image: StaticImageData
  alt: string
  answers: readonly CoupleAnswer[]
  moreAnswers?: readonly CoupleAnswer[]
}

export const aboutUsSlides: readonly CoupleQuestion[] = [
  {
    question: 'Who fell first?',
    image: photo1,
    alt: 'Joshua and Sandrine walking along the beach in white',
    answers: [
      {
        speaker: 'Sandrine',
        paragraphs: [
          'Joshua. Without question. In fact, I have reason to believe he’d had a crush on me since high school. Unfortunately, my strongest piece of evidence remains the mysterious note, which he continues to deny.',
          'For the record, I wasn’t very far behind.',
        ],
      },
      { speaker: 'Joshua', paragraphs: ['No comment'] },
    ],
  },
  {
    question: 'What’s something our friends would say about us?',
    image: photo2,
    alt: 'Joshua and Sandrine kayaking together at sunset',
    answers: [
      {
        paragraphs: [
          'That we have a habit of social events without saying goodbye.',
          'We have perfected the art of communicating an entire exit strategy with a single look across the room. No discussion needed. Although, to be fair, Joshua is usually the one ready to leave. Sandrine would happily stay another hour.',
        ],
      },
    ],
  },
  {
    question: 'When did you know this was something serious?',
    image: photo3,
    alt: 'Joshua embracing Sandrine on the beach',
    answers: [
      {
        speaker: 'Joshua',
        paragraphs: [
          'During a Lakers game. We were losing badly, and Sandrine was so upset she wouldn’t even entertain a little small talk. Watching her take our team’s defeat so personally, I somehow knew she was the person I wanted to spend the rest of my life with.',
        ],
      },
    ],
    moreAnswers: [
      {
        speaker: 'Sandrine',
        paragraphs: [
          'It was a collection of smaller moments. I’ve always been inclined to avoid difficult conversations, while Joshua has always insisted that we talk things through. Over time, I realised that we weren’t just enjoying each other’s company; we were learning to understand each other and choosing to build something lasting.',
        ],
      },
      {
        paragraphs: [
          'Different moments, perhaps, but the same realisation: somewhere along the way, this had become something neither of us wanted to imagine life without.',
        ],
      },
    ],
  },
  {
    question: 'What’s something you hope never changes?',
    image: photo4,
    alt: 'Joshua and Sandrine standing together by the water on a sunny day',
    answers: [
      {
        paragraphs: [
          'Our playfulness. The way we can laugh together, tease each other, and find humour in almost anything.',
        ],
      },
    ],
  },
  {
    question: 'What are you most looking forward to about marriage?',
    image: photo5,
    alt: 'A black-and-white photograph of Joshua and Sandrine laughing together on a beach',
    answers: [
      {
        paragraphs: [
          'The little things.',
          'Friday night dinners with a funny movie, a Sixers game, or whichever team LeBron happens to be playing for. Travelling together, creating our own Christmas traditions, building a family, and growing old alongside someone who knows us so well.',
          'And, of course, continuing to make fun of each other. We have a lifetime of material to work with.',
        ],
      },
    ],
  },
]
