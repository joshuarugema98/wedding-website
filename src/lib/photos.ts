import photo1 from '../../public/images/1.jpg'
import photo2 from '../../public/images/22.jpg'
import photo3 from '../../public/images/33.jpg'
import photo4 from '../../public/images/4.jpg'
import photo5 from '../../public/images/5.jpg'
import photo6 from '../../public/images/6.jpg'

// Static imports give replacements a new content-hashed URL automatically.
export const couplePhotos = [
  {
    image: photo1,
    alt: 'Joshua and Sandrine walking along the beach in white',
    collagePosition: '50% 58%',
  },
  {
    image: photo2,
    alt: 'Joshua and Sandrine kayaking together at sunset',
    collagePosition: '50% 50%',
  },
  {
    image: photo3,
    alt: 'Joshua embracing Sandrine on the beach',
    collagePosition: '50% 46%',
  },
  {
    image: photo4,
    alt: 'Joshua and Sandrine standing together by the water on a sunny day',
    collagePosition: '50% 60%',
  },
  {
    image: photo5,
    alt: 'A black-and-white photograph of Joshua and Sandrine laughing together on a beach',
    collagePosition: '50% 62%',
  },
  {
    image: photo6,
    alt: 'Joshua and Sandrine laughing as they run along the beach in white',
    collagePosition: '50% 20%',
  },
] as const
