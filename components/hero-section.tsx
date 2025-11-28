"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dice5, Trophy, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [casinoPlayers, setCasinoPlayers] = useState(55326)
  const [sportsPlayers, setSportsPlayers] = useState(8624)

  useEffect(() => {
    const interval = setInterval(() => {
      setCasinoPlayers((prev) => {
        const change = Math.floor(Math.random() * 100) - 50
        return Math.max(16, prev + change)
      })
      setSportsPlayers((prev) => {
        const change = Math.floor(Math.random() * 50) - 25
        return Math.max(16, prev + change)
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-6 pb-8 px-4 md:pt-12 md:pb-8 lg:pt-24 lg:pb-12 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8 mb-8 lg:mb-12">
          {/* Left side - Hero text */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8 text-balance">
              World's Largest Online Casino and Sportsbook
            </h1>

            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white mx-auto lg:mx-0 w-full sm:w-fit px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg mb-4 md:mb-6">
              Register
            </Button>

            <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
              <p className="text-xs md:text-sm text-gray-400">Or sign up with</p>
              <div className="flex gap-2 md:gap-3 justify-center lg:justify-start">
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2a3c48] hover:bg-[#3a4c58] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                    <path
                      fill="#fff"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#fff"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#fff"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#fff"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2a3c48] hover:bg-[#3a4c58] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="#1877f2">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2a3c48] hover:bg-[#3a4c58] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="#00c300">
                    <path
                      d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .628.285.628.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2a3c48] hover:bg-[#3a4c58] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="#9146ff">
                    <path
                      d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center gap-2 mb-3 md:mb-4 lg:hidden">
              <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
              <h2 className="text-base md:text-lg font-bold text-white">Start Playing</h2>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
              {/* Casino Card */}
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden border-2 border-[#2563eb] hover:border-[#3b82f6] transition-all cursor-pointer group">
                <div className="aspect-[3/4] relative">
                  <Image src="/images/stake-casino-home-18-jul-25-en.avif" alt="Casino" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 lg:p-4">
                    <div className="flex flex-col gap-1 text-white">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <Dice5 className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                        <span className="font-semibold text-xs md:text-sm lg:text-base">Casino</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs md:text-xs lg:text-sm">{casinoPlayers.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sports Card */}
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden border-2 border-[#22c55e] hover:border-[#4ade80] transition-all cursor-pointer group">
                <div className="aspect-[3/4] relative">
                  <Image src="/images/stake-sports-home-18-jul-25-en.avif" alt="Sports" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 lg:p-4">
                    <div className="flex flex-col gap-1 text-white">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                        <span className="font-semibold text-xs md:text-sm lg:text-base">Sports</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs md:text-xs lg:text-sm">{sportsPlayers.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
