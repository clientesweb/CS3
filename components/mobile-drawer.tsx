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
  Search,
} from "lucide-react"
import { useState } from "react"

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [promotionsOpen, setPromotionsOpen] = useState(false)
  const [sponsorshipsOpen, setSponsorshipsOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity lg:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 bottom-16 w-full bg-[#1a2c38] overflow-y-auto z-[70] transition-transform lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-4 p-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your game"
              className="w-full pl-12 pr-4 py-3.5 bg-[#2a3c48] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] text-sm border border-[#3a4c58]"
            />
          </div>

          {/* Casino and Sports Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-4 bg-[#2a3c48] hover:bg-[#3a4c58] rounded-lg text-white font-semibold transition-colors text-base">
              Casino
            </button>
            <button className="py-4 bg-[#2a3c48] hover:bg-[#3a4c58] rounded-lg text-white font-semibold transition-colors text-base">
              Sports
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          <button
            onClick={() => setPromotionsOpen(!promotionsOpen)}
            className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors"
          >
            <div className="flex items-center gap-3">
              <Gift className="w-4 h-4" />
              <span>Promotions</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${promotionsOpen ? "rotate-180" : ""}`} />
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

          <button
            onClick={() => setSponsorshipsOpen(!sponsorshipsOpen)}
            className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors"
          >
            <div className="flex items-center gap-3">
              <Handshake className="w-4 h-4" />
              <span>Sponsorships</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${sponsorshipsOpen ? "rotate-180" : ""}`} />
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
            <Shield className="w-4 h-4" />
            <span>Responsible Gambling</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
            <Headphones className="w-4 h-4" />
            <span>Live Support</span>
          </button>

          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-300 hover:bg-[#2a3c48] rounded transition-colors"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4" />
              <span>Language: English</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${languageOpen ? "rotate-180" : ""}`} />
          </button>
        </nav>
      </aside>
    </>
  )
}
