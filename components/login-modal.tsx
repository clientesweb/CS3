"use client"

import type React from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({})

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Email or Username is required"
    }
    // Check if it's an email format
    if (value.includes("@")) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address"
      }
    } else if (value.length < 3) {
      return "Username must be at least 3 characters"
    }
    return ""
  }

  const validatePassword = (value: string) => {
    if (!value) {
      return "Password is required"
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters"
    }
    return ""
  }

  const handleBlur = (field: "email" | "password") => {
    setTouched({ ...touched, [field]: true })
    if (field === "email") {
      const error = validateEmail(email)
      setErrors({ ...errors, email: error })
    } else {
      const error = validatePassword(password)
      setErrors({ ...errors, password: error })
    }
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (touched.email) {
      const error = validateEmail(value)
      setErrors({ ...errors, email: error })
    }
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (touched.password) {
      const error = validatePassword(value)
      setErrors({ ...errors, password: error })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    setErrors({
      email: emailError,
      password: passwordError,
    })

    setTouched({
      email: true,
      password: true,
    })

    // If there are errors, don't submit
    if (emailError || passwordError) {
      return
    }

    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="bg-[#1a2c38] border-[#2a3c48] text-white p-0 gap-0 max-w-[90vw] sm:max-w-md md:max-w-lg"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#2a3c48]">
          <Image src="/logo-slake.png" alt="Slake" width={80} height={32} className="h-8 w-auto" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Email or Username Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm sm:text-base text-gray-300">
              Email or Username <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              onBlur={() => handleBlur("email")}
              className={`bg-[#0f1c26] border-[#2a3c48] text-white h-12 sm:h-14 text-sm sm:text-base focus:border-[#14b8a6] focus:ring-[#14b8a6] rounded-lg ${
                touched.email && errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
            />
            {touched.email && errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm sm:text-base text-gray-300">
              Password <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                onBlur={() => handleBlur("password")}
                className={`bg-[#0f1c26] border-[#2a3c48] text-white h-12 sm:h-14 text-sm sm:text-base focus:border-[#14b8a6] focus:ring-[#14b8a6] rounded-lg pr-12 ${
                  touched.password && errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {touched.password && errors.password && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div>
            <button type="button" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-lg"
          >
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
