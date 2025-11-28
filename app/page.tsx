"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SearchBar } from "@/components/search-bar"
import { TrendingGames } from "@/components/trending-games"
import { RouletteLive } from "@/components/roulette-live"
import { MobileNav } from "@/components/mobile-nav"
import { MobileDrawer } from "@/components/mobile-drawer"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#1a2c38]">
      <div className="lg:pl-64">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <SearchBar />
          <TrendingGames />
          <RouletteLive />
        </main>
        <Footer />
      </div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <MobileNav onBrowseClick={() => setDrawerOpen(true)} />
    </div>
  )
}
