import meerkat from '@/assets/meerkat.svg'
import cloud from '@/assets/cloud.svg'

export default function BgImagesTravelList() {
  return (
    <div>
      <img
        src={cloud}
        alt="image-leaf"
        className="hidden lg:block rotate-10 pointer-events-none select-none absolute opacity-3 top-10 xl:right-60 2xl:right-60 w-auto h-[200px] object-contain z-0"
      />
      <img
        src={meerkat}
        alt="image-bug"
        className="hidden lg:block pointer-events-none select-none absolute opacity-5 bottom-10 xl:left-20 2xl:left-50 w-auto h-[350px] object-contain z-0"
      />
    </div>
  )
}
