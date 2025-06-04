"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-sky-600 transition-colors p-2"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu} />}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-sky-50">
            <span className="text-xl font-bold text-sky-600">Navigation</span>
            <button
              onClick={closeMenu}
              className="text-gray-700 hover:text-sky-600 transition-colors p-2 hover:bg-sky-100 rounded-lg"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 bg-white">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={closeMenu}
                className={`block px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isActive("/")
                    ? "bg-sky-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-sky-50 hover:text-sky-600 hover:shadow-md"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isActive("/about")
                    ? "bg-sky-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-sky-50 hover:text-sky-600 hover:shadow-md"
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className={`block px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isActive("/services")
                    ? "bg-sky-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-sky-50 hover:text-sky-600 hover:shadow-md"
                }`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isActive("/contact")
                    ? "bg-sky-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-sky-50 hover:text-sky-600 hover:shadow-md"
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Adam de Leeuw</p>
              <p className="text-xs text-gray-500">© 2024 de Leeuw Digital</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
