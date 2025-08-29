'use client'
import React, { useState } from 'react'
import { FiHeart, FiUsers, FiBook, FiActivity } from 'react-icons/fi'

export default function Donation() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
    const [customAmount, setCustomAmount] = useState('')
    const [donationType, setDonationType] = useState('one-time')

    const predefinedAmounts = [500, 1000, 2500, 5000, 10000]

    const causes = [
        {
            icon: <FiBook className="w-8 h-8" />,
            title: 'Education',
            description: 'Support educational programs and scholarships for underprivileged students.',
            color: 'bg-blue-500'
        },
        {
            icon: <FiActivity className="w-8 h-8" />,
            title: 'Healthcare',
            description: 'Provide medical assistance and healthcare services to those in need.',
            color: 'bg-green-500'
        },
        {
            icon: <FiUsers className="w-8 h-8" />,
            title: 'Community Support',
            description: 'Fund community development projects and social welfare programs.',
            color: 'bg-purple-500'
        },
        {
            icon: <FiHeart className="w-8 h-8" />,
            title: 'Emergency Relief',
            description: 'Support emergency relief efforts and disaster response initiatives.',
            color: 'bg-red-500'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Make a Donation</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Your contribution helps us continue our mission of serving the community and making a positive impact.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Causes Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Where Your Donation Goes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {causes.map((cause, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className={`${cause.color} text-white p-3 rounded-full w-fit mb-4`}>
                                    {cause.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{cause.title}</h3>
                                <p className="text-gray-600">{cause.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Donation Form */}
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Donation Amount</h3>
                    
                    {/* Donation Type */}
                    <div className="mb-6">
                        <div className="flex space-x-4 justify-center">
                            <button
                                onClick={() => setDonationType('one-time')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                    donationType === 'one-time'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                One-time
                            </button>
                            <button
                                onClick={() => setDonationType('monthly')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                    donationType === 'monthly'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Monthly
                            </button>
                        </div>
                    </div>

                    {/* Amount Selection */}
                    <div className="mb-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            {predefinedAmounts.map((amount) => (
                                <button
                                    key={amount}
                                    onClick={() => {
                                        setSelectedAmount(amount)
                                        setCustomAmount('')
                                    }}
                                    className={`p-4 rounded-lg border-2 font-semibold transition-colors ${
                                        selectedAmount === amount
                                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                                            : 'border-gray-300 hover:border-blue-300'
                                    }`}
                                >
                                    ₹{amount.toLocaleString()}
                                </button>
                            ))}
                        </div>
                        
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                            <input
                                type="number"
                                placeholder="Enter custom amount"
                                value={customAmount}
                                onChange={(e) => {
                                    setCustomAmount(e.target.value)
                                    setSelectedAmount(null)
                                }}
                                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Donate Button */}
                    <button
                        disabled={!selectedAmount && !customAmount}
                        className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Donate {selectedAmount ? `₹${selectedAmount.toLocaleString()}` : customAmount ? `₹${parseInt(customAmount).toLocaleString()}` : ''} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                    </button>

                    <p className="text-sm text-gray-600 text-center mt-4">
                        Your donation is secure and helps us continue our mission of serving the community.
                    </p>
                </div>

                {/* Impact Section */}
                <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">₹500</div>
                            <p className="text-gray-600">Can provide educational materials for one student for a month</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">₹1,000</div>
                            <p className="text-gray-600">Can fund basic medical checkup for a family</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">₹5,000</div>
                            <p className="text-gray-600">Can support a community development project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
