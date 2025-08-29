'use client'
import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
        alert('Thank you for your message! We will get back to you soon.')
    }

    const contactInfo = [
        {
            icon: <FiMapPin className="w-6 h-6" />,
            title: 'Address',
            details: ['123 Community Street', 'City, State 12345', 'Country']
        },
        {
            icon: <FiPhone className="w-6 h-6" />,
            title: 'Phone',
            details: ['+91 98765 43210', '+91 87654 32109']
        },
        {
            icon: <FiMail className="w-6 h-6" />,
            title: 'Email',
            details: ['info@organization.org', 'contact@organization.org']
        },
        {
            icon: <FiClock className="w-6 h-6" />,
            title: 'Office Hours',
            details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Get in touch with us. We'd love to hear from you and answer any questions you may have.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We're here to help and answer any question you might have. We look forward to hearing from you.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <div className="text-blue-600">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                                        {info.details.map((detail, detailIndex) => (
                                            <p key={detailIndex} className="text-gray-600">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <FiMapPin className="w-12 h-12 mx-auto mb-2" />
                                <p>Interactive Map</p>
                                <p className="text-sm">Location will be displayed here</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="donation">Donation</option>
                                        <option value="volunteer">Volunteer Opportunity</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="support">Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Please describe your inquiry or message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center justify-center space-x-2"
                            >
                                <FiSend className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </form>

                        <p className="text-sm text-gray-600 text-center mt-4">
                            We typically respond within 24 hours during business days.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">How can I volunteer?</h4>
                            <p className="text-gray-600">You can contact us through this form or call us directly. We have various volunteer opportunities available.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">How are donations used?</h4>
                            <p className="text-gray-600">All donations go directly to our programs including education, healthcare, and community development initiatives.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Can I visit your office?</h4>
                            <p className="text-gray-600">Yes, we welcome visitors during our office hours. Please call ahead to schedule an appointment.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Do you provide tax receipts?</h4>
                            <p className="text-gray-600">Yes, we provide tax-deductible receipts for all donations as per applicable tax laws.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
