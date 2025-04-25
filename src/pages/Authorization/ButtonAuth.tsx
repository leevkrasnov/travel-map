type ButtonAuthProps = {
  variant: string
}

export default function ButtonAuth({ variant }: ButtonAuthProps) {
  return (
    <button className="py-1 text-sm px-6 border rounded-2xl text-gray-100 bg-gray-800 hover:bg-gray-700 duration-300 cursor-pointer">
      {variant}
    </button>
  )
}
