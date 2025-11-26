"use client"

import { GameCard } from "./game-card"
import { ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { useRef } from "react"

const games = [
  {
    image: "/images/1f7290ebd571a568a6d0540d26513311378109ce2060614641899a4e510cb1c5.avif",
    title: "Donny & Danny",
  },
  {
    image: "/images/8db52b5d607989a10d73eff0c7d487e1a0e783b7dfe63c67162177c581ffb023.avif",
    title: "Sweet Bonanza",
  },
  {
    image: "/images/73318f9e220e1637c4b11338d10f377cd997d0232636f5f5a1940167ad0451cd.avif",
    title: "Gates of Olympus",
  },
  {
    image: "/images/73754d4bf421b78fbd3895bbc7890d379797588cb699d6cbe47f3656aa93613b.avif",
    title: "Wisdom of Athena",
  },
  {
    image: "/images/1d599736ba8a969639ded76bbe88e370cc7b3adb396a4490359f18ec0a760f3e.avif",
    title: "Sugar Rush",
  },
  {
    image: "/images/9ff267150fab30e5f0cff7f09456fa2e5e966015c7fe65969104f4c4c442a746.avif",
    title: "Wanted Dead or Wild",
  },
  {
    image: "/images/14d5410c6cf4c303d291262a10e949dc14b0ac2eca2a7a730b0401919c01358e.avif",
    title: "Super Gummy Strike",
  },
]

export function TrendingGames() {
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
    <section className="px-4 pb-8 lg:px-6 lg:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-[#2563eb]" />
            <h2 className="text-lg lg:text-2xl font-bold text-white">Trending Games</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-1.5 lg:p-2 rounded-lg bg-[#2a3c48] hover:bg-[#3a4c58] transition-colors"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-1.5 lg:p-2 rounded-lg bg-[#2a3c48] hover:bg-[#3a4c58] transition-colors"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {games.map((game, index) => (
            <div key={index} className="flex-none w-36 lg:w-48">
              <GameCard image={game.image} title={game.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
