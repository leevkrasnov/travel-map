interface ZoomControlsProps {
  onZoomIn: () => void
  onZoomOut: () => void
}

export default function ZoomControls({
  onZoomIn,
  onZoomOut,
}: ZoomControlsProps) {
  return (
    <div className="absolute right-5 top-20 flex gap-2 flex-col z-10">
      <button
        className="bg-white text-gray-800 w-8 h-8 flex items-center justify-center shadow-2xl hover:bg-gray-50 transition border cursor-pointer"
        onClick={onZoomIn}
      >
        <span className="text-3xl">+</span>
      </button>
      <button
        className="bg-white text-gray-800 w-8 h-8 flex items-center justify-center shadow-2xl hover:bg-gray-50 transition border cursor-pointer"
        onClick={onZoomOut}
      >
        <span className="text-3xl">−</span>
      </button>
    </div>
  )
}
