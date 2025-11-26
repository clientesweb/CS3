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
import { useState } from "react"

export function Sidebar() {
  const [promotionsOpen, setPromotionsOpen] = useState(false)
  const [sponsorshipsOpen, setSponsorshipsOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a2c38] border-r border-[#2a3c48] overflow-y-auto">
      <nav className="p-4 space-y-1">
        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <div className="flex items-center gap-3">
            <Gift className="w-4 h-4" />
            <span>Promotions</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${promotionsOpen ? "rotate-180" : ""}`}
            onClick={() => setPromotionsOpen(!promotionsOpen)}
          />
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Users className="w-4 h-4" />
          <span>Affiliate</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Crown className="w-4 h-4" />
          <span>VIP Club</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Newspaper className="w-4 h-4" />
          <span>Blog</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <MessageSquare className="w-4 h-4" />
          <span>Forum</span>
        </button>

        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <div className="flex items-center gap-3">
            <Handshake className="w-4 h-4" />
            <span>Sponsorships</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${sponsorshipsOpen ? "rotate-180" : ""}`}
            onClick={() => setSponsorshipsOpen(!sponsorshipsOpen)}
          />
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Shield className="w-4 h-4" />
          <span>Responsible Gambling</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
          <Headphones className="w-4 h-4" />
          <span>Live Support</span>
        </button>

        <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
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
