import ladybag from '@/assets/ladybug.svg'
import bee from '@/assets/bee.svg'

export default function BgImagesTravelForm() {
  return (
    <div>
      <img
        src={ladybag}
        alt="image-ladybag"
        className="hidden lg:block pointer-events-none select-none absolute opacity-3 top-10 right-8 xl:right-30 2xl:right-60 w-auto h-[430px] object-contain z-0"
      />
      <img
        src={bee}
        alt="image-bee"
        className="hidden rotate-10 lg:block pointer-events-none select-none absolute opacity-4 bottom-10 left-10 xl:left-40 2xl:left-70 w-auto h-[350px] object-contain z-0"
      />
    </div>
  )
}
