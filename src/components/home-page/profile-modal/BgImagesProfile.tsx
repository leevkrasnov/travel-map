import leaf from '@/assets/leaf.svg'
import bug from '@/assets/bug.svg'

export default function BgImagesProfile() {
  return (
    <div>
      <img
        src={leaf}
        alt="image-leaf"
        className="hidden lg:block rotate-90 pointer-events-none select-none absolute opacity-3 top-10 right-8 xl:right-30 2xl:right-60 w-auto h-[500px] object-contain z-0"
      />
      <img
        src={bug}
        alt="image-bug"
        className="hidden lg:block pointer-events-none select-none rotate-30 absolute opacity-5 bottom-10 left-10 xl:left-40 2xl:left-70 w-auto h-[350px] object-contain z-0"
      />
    </div>
  )
}
