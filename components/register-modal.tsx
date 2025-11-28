"use client"

import { X } from "lucide-react"
import { useEffect } from "react"
import Image from "next/image"

interface RegisterModalProps {
  open: boolean
  onClose: () => void
}

export function RegisterModal({ open, onClose }: RegisterModalProps) {
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

  const handleRegister = () => {
    const email = "support@slake.com"
    const subject = encodeURIComponent("I want to register!")
    const body = encodeURIComponent("Hello,\n\nI would like to register for a Slake account.\n\nThank you!")
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 z-[80]" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
        <div className="bg-[#1a2c38] rounded-xl w-full max-w-md relative shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 hover:bg-[#2a3c48] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />
          </button>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Logo */}
            <div className="mb-8 md:mb-10">
              <Image src="/logo-slake.png" alt="Slake" width={100} height={40} className="h-10 w-auto" />
            </div>

            {/* Register message */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Create Your Account</h2>
              <p className="text-gray-300 text-sm md:text-base">
                Ready to join Slake? Click the button below to send us a registration request and we'll get you started!
              </p>
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 md:py-4 px-6 rounded-lg transition-colors text-base md:text-lg"
            >
              I want to register!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
