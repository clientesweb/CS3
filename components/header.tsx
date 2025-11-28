"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { LoginModal } from "./login-modal"
import { RegisterModal } from "./register-modal"

export function Header() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#1a2c38] border-b border-[#2a3c48] z-50">
        <div className="h-full flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3 lg:gap-4">
            <div>
              <Image
                src="/images/logo-slake.png"
                alt="Stake"
                width={80}
                height={32}
                className="h-8 w-auto lg:h-12 lg:w-auto"
              />
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-bold text-white bg-[#2a3c48] rounded-lg hover:bg-[#3a4c58] transition-colors">
                Casino
              </button>
              <button className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-white hover:bg-[#2a3c48] rounded-lg transition-colors">
                Sports
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-[#2a3c48] text-sm lg:text-base px-3 lg:px-4"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
            <Button
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm lg:text-base px-4 lg:px-6"
              onClick={() => setRegisterOpen(true)}
            >
              Register
            </Button>
          </div>
        </div>
      </header>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <RegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </>
  )
}
