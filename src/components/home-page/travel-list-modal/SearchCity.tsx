import { useSearchCityStore } from '@/store/useSearchCityState'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchCity() {
  const [isDisabled, setIsDisabled] = useState(false)
  const query = useSearchCityStore((state) => state.query)
  const setQuery = useSearchCityStore((state) => state.setQuery)

  const eventKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setIsDisabled(true)
      setTimeout(() => {
        setIsDisabled(false)
      }, 200)
    }
  }

  return (
    <div className="relative w-[140px] lg:w-[200px] text-davy-gray">
      <input
        type="text"
        disabled={isDisabled}
        value={query}
        onKeyDown={eventKeyDown}
        placeholder="Город"
        onChange={(e) => setQuery(e.target.value)}
        className="border border-mount-pink rounded-2xl p-4 pl-12 h-[45px] md:h-[55px] md:text-xl w-full focus:shadow-sm focus:bg-white duration-300 outline-none focus:outline-none"
      />
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
        <Search strokeWidth={1.2} />
      </div>
    </div>
  )
}
