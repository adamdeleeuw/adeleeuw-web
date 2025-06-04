"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === "email") {
      if (!EMAIL_REGEX.test(e.target.value)) {
        setEmailError("Please enter a valid email address.")
      } else {
        setEmailError(null)
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    if (!EMAIL_REGEX.test(formData.email)) {
      setEmailError("Please enter a valid email address.")
      setIsSubmitting(false)
      return
    } else {
      setEmailError(null)
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const result = await response.json()
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="contact" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="text-sky-600">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your project? I'd love to hear about your ideas and discuss how we can bring them to life
            together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to work on new projects and help businesses grow through exceptional web development.
                Whether you have a specific project in mind or just want to explore possibilities, let's start a
                conversation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">adam@deleeuwdigital.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (604) 344-0618</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">Available Worldwide (Remote)</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-sky-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
                <p className="text-gray-600">
                  I typically respond to all inquiries within 24 hours. For urgent projects, feel free to mention it in
                  your message and I'll prioritize your request.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
                  {error && (
                    <div className="mb-4 p-3 rounded bg-red-100 text-red-700 border border-red-200">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                        {emailError && (
                          <div className="mt-1 text-sm text-red-600">{emailError}</div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Full Website">Full Website</option>
                        <option value="SEO & Optimization">SEO & Optimization</option>
                        <option value="Website Upgrade">Website Upgrade</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about my services</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity. Landing pages typically take 3-6 days, while full websites
                can take 1-1.5 weeks. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide ongoing maintenance?</h3>
              <p className="text-gray-600">
                Yes! I offer ongoing maintenance packages to keep your website updated, secure, and performing
                optimally. This includes regular backups, security updates, and content updates as needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's included in your pricing?</h3>
              <p className="text-gray-600">
                All projects include responsive design, basic SEO optimization, performance optimization, and 30 days of
                post-launch support. Additional features and ongoing maintenance are available separately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with clients internationally?</h3>
              <p className="text-gray-600">
                I work with clients worldwide and am comfortable with remote collaboration. I'm flexible with time zones
                and use modern communication tools to ensure smooth project delivery.
              </p>
            </div>
          </div>
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
