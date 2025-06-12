"use client"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/navbar"
import { ShieldCheck, Info, Lock, UserCheck, Users, RefreshCw, AlertTriangle, Mail } from "lucide-react"

export default function PrivacyPage() {
    const [hoveredRow1, setHoveredRow1] = useState<number | null>(null)
    const [hoveredRow3, setHoveredRow3] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 text-gray-900">
            {/* Navigation */}
            <Navbar currentPage="privacy" />
            <main className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-2 sm:px-4 md:px-8 py-8 md:py-16 animate-fade-in">
                <div className="bg-white/90 rounded-3xl shadow-xl border border-sky-100 p-4 sm:p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 opacity-10 text-sky-300 text-[8rem] pointer-events-none select-none">
                        <ShieldCheck size={128} />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-sky-700 flex items-center gap-3">
                        <ShieldCheck className="w-10 h-10 text-sky-500" /> Privacy Policy
                    </h1>
                    <p className="text-gray-500 mb-8 italic">Last updated: 11 June 2025</p>
                    <p className="mb-6 text-base sm:text-lg leading-relaxed">
                        Thank you for choosing de Leeuw Digital ("DL Digital", "we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit deleuuwdigital.com or engage our web‑development and marketing services (collectively, the “Services”).
                    </p>
                    <p className="mb-8 text-base sm:text-lg leading-relaxed">
                        By accessing or using our Services, you agree to the practices described below. If you do not agree with any part of this Privacy Policy, please discontinue use of the Services.
                    </p>

                    {/* Section 1 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <Info className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">1. Information We Collect</h2>
                    </div>
                    <div className="overflow-x-auto mb-8">
                        <table className="min-w-full border border-sky-100 rounded-xl shadow-sm bg-white text-sm sm:text-base">
                            <thead>
                                <tr className="bg-sky-50">
                                    <th className="px-4 py-2 text-left font-semibold text-sky-700">Category</th>
                                    <th className="px-4 py-2 text-left font-semibold text-sky-700">Examples</th>
                                    <th className="px-4 py-2 text-left font-semibold text-sky-700">Legal Basis*</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Information you provide", "• Name, company, email, phone number\n• Project details you enter in contact/lead forms\n• Payment details (handled by Stripe)", "Consent; Contract"],
                                    ["Automatically collected data", "• IP address, browser type, device ID\n• Referring URL and pages visited\n• Time‑on‑page, clickstream actions", "Legitimate interest"],
                                    ["Cookies & tracking", "• Session cookies (site functionality)\n• Analytics cookies (Google Analytics 4)\n• Advertising cookies (Google Ads re-targeting)", "Consent (where required)"]
                                ].map((row, i) => (
                                    <tr
                                        key={i}
                                        className={`transition-colors ${hoveredRow1 === i ? "bg-sky-100/60" : ""}`}
                                        onMouseEnter={() => setHoveredRow1(i)}
                                        onMouseLeave={() => setHoveredRow1(null)}
                                    >
                                        <td className="px-4 py-2 border-b border-sky-100 align-top whitespace-nowrap font-medium">{row[0]}</td>
                                        <td className="px-4 py-2 border-b border-sky-100 align-top whitespace-pre-line">{row[1]}</td>
                                        <td className="px-4 py-2 border-b border-sky-100 align-top">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-xs text-gray-500 mt-2">*Where the EU GDPR applies, the table lists the primary lawful basis.</div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <UserCheck className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">2. How We Use Your Information</h2>
                    </div>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-sm sm:text-base">
                        <li><span className="font-semibold">Provide and improve the Services</span> – build and maintain your website, process transactions, and debug issues.</li>
                        <li><span className="font-semibold">Communicate with you</span> – respond to inquiries, send project updates and invoices, and schedule free consultations.</li>
                        <li><span className="font-semibold">Marketing and re-targeting</span> – serve ads or emails you have opted‑in to receive.</li>
                        <li><span className="font-semibold">Analytics</span> – understand how users interact with our site to enhance UX and conversion rates.</li>
                        <li><span className="font-semibold">Legal compliance & protection</span> – detect fraud, enforce our terms, and comply with applicable laws.</li>
                    </ul>
                    <p className="mb-8 text-sm sm:text-base">We do not sell or rent your personal data.</p>

                    {/* Section 3 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <Users className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">3. Sharing & Disclosure</h2>
                    </div>
                    <div className="overflow-x-auto mb-8">
                        <table className="min-w-full border border-sky-100 rounded-xl shadow-sm bg-white text-sm sm:text-base">
                            <thead>
                                <tr className="bg-sky-50">
                                    <th className="px-4 py-2 text-left font-semibold text-sky-700">Recipient</th>
                                    <th className="px-4 py-2 text-left font-semibold text-sky-700">Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Service providers (e.g., Google Workspace, Netlify, Stripe, Mailchimp)", "Hosting, email delivery, payment processing, analytics"],
                                    ["Professional advisors", "Accounting, legal, or auditing services"],
                                    ["Regulators / law‑enforcement", "Where required by law or to protect our rights"]
                                ].map((row, i) => (
                                    <tr
                                        key={i}
                                        className={`transition-colors ${hoveredRow3 === i ? "bg-sky-100/60" : ""}`}
                                        onMouseEnter={() => setHoveredRow3(i)}
                                        onMouseLeave={() => setHoveredRow3(null)}
                                    >
                                        <td className="px-4 py-2 border-b border-sky-100 align-top whitespace-nowrap font-medium">{row[0]}</td>
                                        <td className="px-4 py-2 border-b border-sky-100 align-top whitespace-pre-line">{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-xs text-gray-500 mt-2">All third‑party processors are bound by confidentiality and data‑processing agreements.</div>
                    </div>

                    {/* Section 4 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <RefreshCw className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">4. Data Retention</h2>
                    </div>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-sm sm:text-base">
                        <li><span className="font-semibold">Client records</span> – 7 years (tax & contractual)</li>
                        <li><span className="font-semibold">Marketing leads</span> – until you withdraw consent or 24 months after last engagement</li>
                        <li><span className="font-semibold">Analytics data</span> – 26 months (GA 4 default)</li>
                    </ul>

                    {/* Section 5 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <UserCheck className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">5. Your Rights</h2>
                    </div>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-sm sm:text-base">
                        <li>Access, correct, or delete personal data we hold on you</li>
                        <li>Withdraw consent at any time (for marketing)</li>
                        <li>Object to or restrict certain processing</li>
                        <li>Port your data (receive a copy in a common format)</li>
                        <li>Lodge a complaint with your local data‑protection authority</li>
                    </ul>
                    <p className="mb-8 text-sm sm:text-base">To exercise any of these rights, email us at <a href="mailto:adam@deleeuwdigital.com" className="text-sky-600 underline hover:text-sky-800 transition-colors">adam@deleeuwdigital.com</a>.</p>

                    {/* Section 6 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <Lock className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">6. Security</h2>
                    </div>
                    <p className="mb-8 text-sm sm:text-base">We implement industry‑standard safeguards: HTTPS encryption, least‑privilege access, strong passwords, and regular vulnerability scans. No method of transmission over the Internet is 100 percent secure; therefore we cannot guarantee absolute security.</p>

                    {/* Section 7 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <AlertTriangle className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">7. Children’s Privacy</h2>
                    </div>
                    <p className="mb-8 text-sm sm:text-base">Our Services are not directed to children under 13. We do not knowingly collect data from minors. If you believe a child has provided us with personal information, please contact us for deletion.</p>

                    {/* Section 8 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <RefreshCw className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">8. Changes to This Policy</h2>
                    </div>
                    <p className="mb-8 text-sm sm:text-base">We may update this Privacy Policy periodically. Material changes will be posted on this page with a new "Last updated" date and, where required, we will seek your consent.</p>

                    {/* Section 9 */}
                    <div className="flex items-center gap-2 mb-2 mt-10">
                        <Mail className="text-sky-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-sky-700">9. Contact Us</h2>
                    </div>
                    <p className="mb-2 text-sm sm:text-base">de Leeuw Digital<br />Attn: Privacy Officer<br />Vancouver, BC, Canada<br />Email: <a href="mailto:adam@deleeuwdigital.com" className="text-sky-600 underline hover:text-sky-800 transition-colors">adam@deleeuwdigital.com</a></p>
                    <p className="text-gray-500 text-sm">For additional details about cookies or data‑processing agreements, please contact us at the address above.</p>
                </div>
            </main>
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
                            <Link href="/privacy" className="text-gray-400 hover:text-sky-400 transition-colors">
                                Privacy Policy
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
