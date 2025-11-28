"use client"

import { Search, Dice5, Receipt, Trophy, MessageSquare } from "lucide-react"

interface MobileNavProps {
  onBrowseClick: () => void
}

export function MobileNav({ onBrowseClick }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-[#1a2c38] border-t border-[#2a3c48] z-50 lg:hidden">
      <div className="h-full flex items-center justify-around px-2">
        <button
          onClick={onBrowseClick}
          className="flex flex-col items-center gap-1 py-2 px-4 text-gray-400 hover:text-white transition-colors"
        >
          <Search className="w-5 h-5" />
          <span className="text-xs font-medium">Browse</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 text-white transition-colors relative">
          <Dice5 className="w-5 h-5" />
          <span className="text-xs font-medium">Casino</span>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb]" />
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-400 hover:text-white transition-colors">
          <Receipt className="w-5 h-5" />
          <span className="text-xs font-medium">Bets</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-400 hover:text-white transition-colors">
          <Trophy className="w-5 h-5" />
          <span className="text-xs font-medium">Sports</span>
        </button>

        <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-400 hover:text-white transition-colors">
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-medium">Chat</span>
        </button>
      </div>
    </nav>
  )
}
