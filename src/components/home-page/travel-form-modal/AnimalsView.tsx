import ladybag from '@/assets/ladybug.svg'
import bee from '@/assets/bee.svg'

export default function AnimalsView() {
  return (
    <div>
      <img
        src={ladybag}
        alt="image-mountains"
        className=" pointer-events-none select-none absolute opacity-3 top-10 right-6 w-auto h-[430px] object-contain z-0"
      />
      <img
        src={bee}
        alt="image-mountains"
        className="hidden lg:block pointer-events-none select-none absolute opacity-5 bottom-10 left-6 w-auto h-[300px] object-contain z-0"
      />
    </div>
  )
}
