"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export function SearchBar() {
  const [category, setCategory] = useState("Casino")

  return (
    <div className="px-4 pb-6 lg:px-6 lg:pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your game or event"
              className="w-full pl-12 pr-4 py-3 bg-[#2a3c48] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] text-sm lg:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
