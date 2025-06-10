import Link from "next/link"
import MobileNav from "./mobile-nav"

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-sky-600">
            de Leeuw Digital
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${currentPage === "home" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${currentPage === "about" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
                }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors ${currentPage === "services" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
                }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${currentPage === "contact" ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
