"use client"

import { GameCard } from "./game-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const rouletteGames = [
  {
    image: "/images/35ad71ac5000b070bf9d5ab332602ae69f8e22c8e1c8d24a1f4418a20bd18eda.avif",
    title: "Lightning Roulette",
  },
  {
    image: "/images/73d1e8568311b2e9da0b8265f96c6747428e5197f94458df9e9f782e55a06b42.avif",
    title: "Auto Roulette",
  },
  {
    image: "/images/323d8b0ff8f6749a76c49f2cccd09cab6db7da6510e51296fee2da086bcfb926.avif",
    title: "Speed Roulette",
  },
  {
    image: "/images/82f9889c56522c515d17634738f2327b17e67f08cf9540f5ea6c6cc56b9a85a3.avif",
    title: "Immersive Roulette",
  },
  {
    image: "/images/2f0ac41a0dc99d0d0466d068e61b273b2788bdd068895991873f9276ed141599.avif",
    title: "Instant Roulette",
  },
  {
    image: "/images/b40368dca8c59e3c834825be53985bcd692d0e4a372200509f0d93de4d96e318.avif",
    title: "XXXtreme Lightning Roulette",
  },
  {
    image: "/images/31d384b25e3d6c8704f84b3db84e31bceacf2ff16279fbcc25ad9e1bf55a7564.avif",
    title: "Quantum Roulette",
  },
  {
    image: "/images/b3ffdd5dc155ad6fa917cd1e9911d253774e6beaef55af010bd3cff6ef89cbd4.avif",
    title: "Gold Bar Roulette",
  },
  {
    image: "/images/c5996d604ffd3f6e1e34d94425948d29f78bbd0a96c9611a78b12de8b4ff7677.avif",
    title: "VIP Roulette",
  },
]

export function RouletteLive() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="px-4 pb-20 md:pb-24 lg:px-6 lg:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-3 md:mb-4 lg:mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse" />
            <h2 className="text-base md:text-lg lg:text-2xl font-bold text-white">Roulette Live</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-1.5 md:p-1.5 lg:p-2 rounded-lg bg-[#2a3c48] hover:bg-[#3a4c58] transition-colors"
            >
              <ChevronLeft className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-1.5 md:p-1.5 lg:p-2 rounded-lg bg-[#2a3c48] hover:bg-[#3a4c58] transition-colors"
            >
              <ChevronRight className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-2 md:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {rouletteGames.map((game, index) => (
            <div key={index} className="flex-none w-32 md:w-36 lg:w-48">
              <GameCard image={game.image} title={game.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
