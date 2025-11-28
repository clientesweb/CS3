"use client"

import {
  Gift,
  Users,
  Crown,
  Newspaper,
  MessageSquare,
  Handshake,
  Shield,
  Headphones,
  Globe,
  ChevronDown,
} from "lucide-react"
import { useState, useEffect } from "react"

function LiveNumber({ baseNumber }: { baseNumber: number }) {
  const [number, setNumber] = useState(baseNumber)

  useEffect(() => {
    const interval = setInterval(() => {
      // Random variation between -50 and +50
      const variation = Math.floor(Math.random() * 101) - 50
      setNumber((prev) => Math.max(0, prev + variation))
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return <span>{number.toLocaleString()}</span>
}

export function Sidebar() {
  const [promotionsOpen, setPromotionsOpen] = useState(false)
  const [sponsorshipsOpen, setSponsorshipsOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a2c38] border-r border-[#2a3c48] overflow-y-auto">
      <div className="p-4 border-b border-[#2a3c48] space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Casino Players</span>
          <span className="text-green-400 font-semibold">
            <LiveNumber baseNumber={57349} />
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Sports Bettors</span>
          <span className="text-blue-400 font-semibold">
            <LiveNumber baseNumber={18571} />
          </span>
        </div>
      </div>

      <nav className="p-4 space-y-1">
        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <div className="flex items-center gap-3">
            <Gift className="w-4 h-4" />
            <span>Promotions</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${promotionsOpen ? "rotate-180" : ""}`}
            onClick={() => setPromotionsOpen(!promotionsOpen)}
          />
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Users className="w-4 h-4" />
          <span>Affiliate</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Crown className="w-4 h-4" />
          <span>VIP Club</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Newspaper className="w-4 h-4" />
          <span>Blog</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <MessageSquare className="w-4 h-4" />
          <span>Forum</span>
        </button>

        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <div className="flex items-center gap-3">
            <Handshake className="w-4 h-4" />
            <span>Sponsorships</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${sponsorshipsOpen ? "rotate-180" : ""}`}
            onClick={() => setSponsorshipsOpen(!sponsorshipsOpen)}
          />
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Shield className="w-4 h-4" />
          <span>Responsible Gambling</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Headphones className="w-4 h-4" />
          <span>Live Support</span>
        </button>

        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4" />
            <span>Language: English</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${languageOpen ? "rotate-180" : ""}`}
            onClick={() => setLanguageOpen(!languageOpen)}
          />
        </button>
      </nav>
    </aside>
  )
}
