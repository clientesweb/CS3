import Image from "next/image"

interface GameCardProps {
  image: string
  title: string
}

export function GameCard({ image, title }: GameCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden cursor-pointer">
      <div className="aspect-[3/4] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      </div>
    </div>
  )
}
