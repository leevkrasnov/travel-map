import { useMemo } from 'react'
import { getRandomSvg } from '@/utils/common'

import bear from '@/assets/card-icons/bear.svg'
import bird from '@/assets/card-icons/bird.svg'
import dinosaur from '@/assets/card-icons/dinosaur.svg'
import lion from '@/assets/card-icons/lion.svg'
import penguin from '@/assets/card-icons/penguin.svg'
import walrus from '@/assets/card-icons/walrus.svg'
import worm from '@/assets/card-icons/worm.svg'

const images = [
  { path: bear, alt: 'image-bear' },
  { path: bird, alt: 'image-bird' },
  { path: dinosaur, alt: 'image-dinosaur' },
  { path: lion, alt: 'image-lion' },
  { path: penguin, alt: 'image-penguin' },
  { path: walrus, alt: 'image-walrus' },
  { path: worm, alt: 'image-worm' },
]

export default function BgImageTravelCard() {
  const { path, alt } = useMemo(() => getRandomSvg(images), [])

  return (
    <img
      src={path}
      alt={alt}
      className={`pointer-events-none select-none absolute opacity-3 bottom-2 right-2 overflow-hidden h-[80px] w-auto lg:h-[130px] object-contain z-0`}
    />
  )
}
