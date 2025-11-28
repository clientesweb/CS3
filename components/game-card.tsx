"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface GameCardProps {
  image: string
  title: string
  initialPlayers?: number
}

export function GameCard({ image, title, initialPlayers }: GameCardProps) {
  const [playerCount, setPlayerCount] = useState(initialPlayers || Math.floor(Math.random() * 900) + 100)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount((prev) => {
        const change = Math.floor(Math.random() * 20) - 10
        const newCount = prev + change
        return Math.max(16, newCount)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    window.open(
      "https://demogamesfree.pragmaticplay.net/gs2c/html5Game.do?extGame=1&symbol=vs5supergummy&gname=Super%20Gummy%20Strike&jurisdictionID=99&mgckey=stylename@generic~SESSION@66fbaffe-90bb-42a8-bac9-b58b132719d6",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <div className="group relative rounded-xl overflow-hidden cursor-pointer" onClick={handleClick}>
      <div className="aspect-[3/4] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-md">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-white text-xs font-medium">{playerCount.toLocaleString()}</span>
          <span className="text-gray-300 text-xs">playing</span>
        </div>
      </div>
    </div>
  )
}
