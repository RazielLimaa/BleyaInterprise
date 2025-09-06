"use client"

import { useState, useEffect } from "react"
import BleYALogo from "@/components/logo"

export default function Navigation() {
  const [currentTime, setCurrentTime] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
    
      <nav className="fixed top-0 left-0 w-full z-[70] p-4 sm:p-6 lg:p-8" data-testid="navigation">
        
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
            data-testid="logo"
          >
            <BleYALogo className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-xl sm:text-2xl font-black text-[hsl(var(--text-beige))] hover:text-primary transition-colors duration-300">
              BleYA
            </span>
          </div>

          <div
            className="time-location text-xs sm:text-sm font-light text-[hsl(var(--text-beige))]/70 hidden sm:block"
            data-testid="time-location"
          >
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span data-testid="current-time" className="whitespace-nowrap">
                {currentTime}
              </span>
              <span>•</span>
              <span data-testid="location" className="whitespace-nowrap">
                Japan, Shibuya
              </span>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={`group inline-flex w-10 h-10 sm:w-12 sm:h-12 text-center items-center justify-center rounded transition-all duration-300 hover:scale-105 z-[80] relative ${
              isMenuOpen ? "text-gray-800 bg-white/90" : "text-white"
            }`}
            aria-pressed={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current pointer-events-none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className={`origin-center transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.1)] drop-shadow-sm ${
                  isMenuOpen ? "translate-x-0 translate-y-0 rotate-[315deg]" : "-translate-y-[5px] translate-x-[7px]"
                }`}
                y="7"
                width="9"
                height="2"
                rx="1"
              />
              <rect
                className={`origin-center transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] drop-shadow-sm ${
                  isMenuOpen ? "rotate-45 opacity-100" : "rotate-0 opacity-100"
                }`}
                y="7"
                width="16"
                height="2"
                rx="1"
              />
              <rect
                className={`origin-center transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.1)] drop-shadow-sm ${
                  isMenuOpen ? "translate-y-0 rotate-[135deg]" : "translate-y-[5px]"
                }`}
                y="7"
                width="9"
                height="2"
                rx="1"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Backdrop Blur */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-md z-40 transition-all duration-500 ease-out  ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm md:w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="p-6 sm:p-8 pt-20 sm:pt-24">
          {/* Menu Items */}
          <nav className="space-y-4 sm:space-y-6">
            <a
              href="#home"
              className="block text-xl sm:text-2xl font-semibold text-gray-800 hover:text-primary transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-xl sm:text-2xl font-semibold text-gray-800 hover:text-primary transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-xl sm:text-2xl font-semibold text-gray-800 hover:text-primary transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block text-xl sm:text-2xl font-semibold text-gray-800 hover:text-primary transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block text-xl sm:text-2xl font-semibold text-gray-800 hover:text-primary transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200 sm:hidden">
            <div className="text-sm font-light text-gray-600 text-center">
              <div className="flex flex-col space-y-1">
                <span data-testid="current-time-mobile">{currentTime}</span>
                <span data-testid="location-mobile">Japan, Shibuya</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
