"use client"

import { X, Gift, Users, Crown, Newspaper, MessageSquare, Handshake, Shield, Headphones, Globe } from "lucide-react"
import { useEffect } from "react"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[60] lg:hidden" onClick={onClose} />
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] bg-[#1a2c38] border-r border-[#2a3c48] overflow-y-auto z-[70] lg:hidden transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b border-[#2a3c48] flex items-center justify-between">
          <h2 className="text-white font-semibold">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-[#2a3c48] rounded transition-colors">
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
            <Gift className="w-4 h-4" />
            <span>Promotions</span>
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

          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
            <Handshake className="w-4 h-4" />
            <span>Sponsorships</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
            <Shield className="w-4 h-4" />
            <span>Responsible Gambling</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
            <Headphones className="w-4 h-4" />
            <span>Live Support</span>
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:bg-[#2a3c48] rounded transition-colors">
            <Globe className="w-4 h-4" />
            <span>Language: English</span>
          </button>
        </nav>
      </aside>
    </>
  )
}
