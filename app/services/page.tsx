import Link from "next/link"
import Image from "next/image"
import { Globe, Layout, Search, ArrowUp, ExternalLink, ArrowRight, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="services" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-sky-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive web development solutions tailored to your business needs. From concept to launch, I've got
            you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Landing Pages */}
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl border border-sky-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Layout className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Landing Pages</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High-converting landing pages designed to capture leads and drive sales. Optimized for performance and
                user experience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Conversion-focused design
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Mobile-first responsive layout
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Fast loading speeds
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  A/B testing ready
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Book This Service
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Full Websites */}
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl border border-sky-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Full Websites</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete website solutions with multiple pages, custom functionality, and content management systems.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Multi-page architecture
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Content management system
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  E-commerce integration
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Custom functionality
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Book This Service
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* SEO/Optimization */}
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl border border-sky-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">SEO & Optimization</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Improve your website's search engine rankings and performance. Get found by your target audience online.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Technical SEO audit
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Performance optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Keyword research & strategy
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Analytics setup
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Book This Service
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Website Upgrades */}
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl border border-sky-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ArrowUp className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Website Upgrades</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modernize your existing website with new features, improved design, and enhanced performance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Design modernization
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Feature additions
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Security improvements
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-sky-600 mr-3" />
                  Mobile optimization
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Book This Service
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See My Work</h2>
            <p className="text-xl text-gray-600">Check out these live demos to see the quality of my work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Landing Page Demo */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/images/boutique-demo.png"
                  alt="Boutique Jewelry Landing Page Demo - Full page view showing elegant design with navigation and hero section"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing Page Demo</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A luxury boutique jewelry landing page featuring elegant typography, sophisticated imagery, and a
                  conversion-focused layout with clear call-to-action buttons.
                </p>
                <a
                  href="https://adamdeleeuw.github.io/demo-boutique-jewelry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
                >
                  View Live Demo
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Full Website Demo */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/images/detailIMG.png"
                  alt="Auto Detailing Full Website Demo"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Website Demo</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A complete auto detailing business website featuring multiple pages, service booking, gallery, and
                  professional branding with modern design elements.
                </p>
                <a
                  href="https://adamdeleeuw.github.io/detailing-demo-site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
                >
                  View Live Demo
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-xl text-gray-600">A streamlined approach to deliver exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-sky-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
              <p className="text-gray-600">Understanding your goals, target audience, and project requirements</p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-sky-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600">Creating wireframes and mockups that align with your vision</p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-sky-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-600">Building your website with clean, efficient, and scalable code</p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-sky-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Launch</h3>
              <p className="text-gray-600">Testing, optimization, and deployment with ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-sky-100 mb-8">
            Let's discuss your project and find the perfect solution for your needs.
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
