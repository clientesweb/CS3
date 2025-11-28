import Link from "next/link"
import { ExternalLink, ChevronDown } from "lucide-react"
import { Disc3, MessageCircle, Facebook, Instagram, Youtube, ShoppingCart } from "lucide-react"

const footerSections = [
  {
    title: "Casino",
    links: [
      { label: "Casino Games", href: "#" },
      { label: "Slots", href: "#" },
      { label: "Live Casino", href: "#" },
      { label: "Roulette", href: "#" },
      { label: "Blackjack", href: "#" },
      { label: "Poker", href: "#" },
      { label: "Publishers", href: "#" },
      { label: "Promos & Competitions", href: "#" },
      { label: "Stake Engine", href: "#", external: true },
      { label: "Stake Vendors", href: "#", external: true },
    ],
  },
  {
    title: "Sports",
    links: [
      { label: "Sportsbook", href: "#" },
      { label: "Live Sports", href: "#" },
      { label: "Soccer", href: "#" },
      { label: "Basketball", href: "#" },
      { label: "Tennis", href: "#" },
      { label: "eSports", href: "#" },
      { label: "Bet Bonuses", href: "#" },
      { label: "Sports Rules", href: "#" },
      { label: "Racing Rules", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#", external: true },
      { label: "Fairness", href: "#" },
      { label: "Responsible Gambling", href: "#" },
      { label: "Gambling Helpline", href: "#", external: true },
      { label: "Live Support", href: "#" },
      { label: "Self Exclusion", href: "#" },
      { label: "Law Enforcement Request", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "VIP Club", href: "#" },
      { label: "Affiliate", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "AML Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    title: "Payment Info",
    links: [
      { label: "Deposit & Withdrawals", href: "#" },
      { label: "Currency Guide", href: "#" },
      { label: "Crypto Guide", href: "#" },
      { label: "Supported Crypto", href: "#" },
      { label: "How to Use the Vault", href: "#" },
      { label: "How Much to Bet With", href: "#" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { label: "How-to Guides", href: "#" },
      { label: "Online Casino Guide", href: "#" },
      { label: "Sports Betting Guide", href: "#" },
      { label: "How to Live Stream Sports", href: "#" },
      { label: "Stake VIP Guide", href: "#" },
      { label: "House Edge Guide", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#1a2c38] border-t border-[#2a3c48] text-white pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Navigation */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#b1bad3] hover:text-white text-sm flex items-center gap-1 transition-colors"
                    >
                      {link.label}
                      {link.external && <ExternalLink className="w-3 h-3" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 lg:mb-8">
          <Link href="#" className="text-white hover:text-[#b1bad3] transition-colors">
            <Disc3 className="w-8 h-8 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#b1bad3] transition-colors">
            <MessageCircle className="w-8 h-8 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#b1bad3] transition-colors">
            <Facebook className="w-8 h-8 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#b1bad3] transition-colors">
            <svg
              className="w-8 h-8 sm:w-6 sm:h-6 lg:w-5 lg:h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="#" className="text-white hover:text-[#b1bad3] transition-colors">
            <Instagram className="w-8 h-8 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#b1bad3] transition-colors">
            <Youtube className="w-8 h-8 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#b1bad3] transition-colors">
            <ShoppingCart className="w-8 h-8 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
          </Link>
        </div>

        {/* Divider */}
        <div className="hidden lg:block border-t border-[#2a3c48] mb-8" />
        <div className="lg:hidden border-t border-[#2a3c48] mb-8" />

        {/* Legal Information */}
        <div className="text-center space-y-4 mb-8 px-2">
          <p className="text-xs text-[#b1bad3]">© 2025 slake.live | All Rights Reserved.</p>
          <p className="text-xs text-[#b1bad3] max-w-4xl mx-auto leading-relaxed">
            Slake is owned and operated by Global Gaming Solutions B.V., registration number: 168294, registered
            address: Kaya Richard J. Beaujon Z/N, Curaçao. Payment agent companies are Global Gaming Ltd and GGS Digital
            Limited. Contact us at support@slake.live.
          </p>
          <p className="text-xs text-[#b1bad3] leading-relaxed">
            Slake is committed to responsible gambling, for more information visit{" "}
            <Link
              href="https://www.gamblingtherapy.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Gamblingtherapy.org
            </Link>
          </p>
        </div>

        {/* BTC Price */}
        <div className="text-center mb-6">
          <p className="text-sm text-[#b1bad3]">1 BTC = $90,661.83</p>
        </div>

        {/* Language Selector */}
        <div className="flex justify-center mb-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2a3c48] hover:bg-[#3a4c58] rounded-md text-sm transition-colors">
            English
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Logos */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 sm:w-40">
            <img src="/logo-slake.png" alt="Slake" className="w-full h-auto" />
          </div>
          <div className="w-32">
            <img src="/gcb-seal.svg" alt="GCB Certified" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </footer>
  )
}
