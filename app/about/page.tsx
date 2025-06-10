import Link from "next/link"
import Image from "next/image"
import { Lightbulb, Target, Heart, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="about" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-sky-600">Adam</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Passionate web developer dedicated to creating exceptional digital experiences that drive business growth
            and user engagement.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  With a background in Computer Engineering, I focus on collaborating with businesses to deliver
                  meaningful digital solutions. My foundation blends technical expertise with a strategic,
                  business-minded approach, driven by a passion for exploring and utilizing cutting-edge technologies,
                  especially AI and machine learning, to craft innovative web experiences.
                </p>
                <p>
                  I specialize in modern web technologies and focus on delivering clean, efficient code that not only
                  looks great but performs exceptionally. Every project I take on is an opportunity to solve unique
                  challenges and create something meaningful.
                </p>
                <p>
                  When I'm not coding, you'll find me diving into the latest developments in AI and ML, experimenting
                  with new tools, or exploring emerging tech trends to continually expand my expertise and stay ahead of
                  industry shifts.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl p-8 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-sky-600 rounded"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-2 border-sky-600 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-sky-600 rounded"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-sky-600 rounded"></div>
              </div>

              {/* Profile Image */}
              <div className="relative z-10">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/images/adam-profile.jpg"
                    alt="Adam de Leeuw - Web Developer"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Adam de Leeuw</h3>
                <p className="text-sky-600 font-semibold mb-1">Full-Stack Web Developer</p>
                <p className="text-gray-600 text-sm">Computer Engineering Background</p>
                <p className="text-gray-600 text-sm font-medium">Business-Minded Approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                I stay at the forefront of web technology, constantly learning and implementing the latest tools and
                techniques to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                Every line of code is written with purpose. I believe in attention to detail and delivering
                pixel-perfect results that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                I genuinely love what I do. This passion drives me to go above and beyond for every client, ensuring
                their success becomes my success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-600">The technologies and tools I use to bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "HTML5 & CSS3",
              "JavaScript (ES6+)",
              "React & Next.js",
              "Node.js & Express",
              "Git & Version Control",
              "Responsive Design",
              "SEO Optimization",
              "Performance Optimization",
              "Testing & Debugging",
              "Deployment & Hosting",
            ].map((skill, index) => (
              <div key={index} className="bg-sky-50 p-4 rounded-lg text-center hover:bg-sky-100 transition-colors">
                <span className="font-semibold text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-sky-100 mb-8">
            Ready to bring your web project to life? I'd love to hear about your ideas and discuss how we can make them
            reality.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400 mb-4">de Leeuw Digital</div>
            <p className="text-gray-400 mb-6">Adam de Leeuw</p>
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
