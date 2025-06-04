import Link from "next/link"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import Navbar from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Web Development
              <span className="block text-sky-600">That Converts</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              I create stunning, high-performance websites that drive results for your business. From landing pages to
              full-scale applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                View My Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose My Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I combine technical expertise with creative design to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clean Code</h3>
              <p className="text-gray-600 leading-relaxed">
                I write maintainable, scalable code that follows industry best practices and modern standards.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, responsive designs that look great on all devices and provide excellent user experience.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick turnaround times without compromising on quality. Your project will be delivered on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-600 mb-2">Buisness Focused</div>
              <div className="text-gray-700 font-medium">From Concept to Code</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction Guaranteed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support Available</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-600 mb-2">Experienced</div>
              <div className="text-gray-700 font-medium">Projects + CPEN degree</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-sky-100 mb-8">
            Let's discuss how I can help bring your vision to life with a custom web solution.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400 mb-4">Adam de Leeuw</div>
            <p className="text-gray-400 mb-6">de Leeuw Digital</p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-sky-400 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-sky-400 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-sky-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
              <p>&copy; 2024 Adam de Leeuw. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
