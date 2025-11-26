import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SearchBar } from "@/components/search-bar"
import { TrendingGames } from "@/components/trending-games"
import { RouletteLive } from "@/components/roulette-live"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
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
      </div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <MobileNav />
    </div>
  )
}
