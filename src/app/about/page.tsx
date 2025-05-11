'use client';

import React, { useState } from 'react';
import { Users, Lightbulb, Target, ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';

const teamMembers = [
  { 
    name: 'Tekachew Gobena Ejeta', 
    role: 'CEO & Co-Founder', 
    image: '/placeholder.svg?height=200&width=200',
    bio: 'Tekachew brings over 20 years of tech industry experience, driving Denovo Security\'s vision and growth strategy. His passion for innovation and user-centric design has been the cornerstone of our success.'
  },
  { 
    name: 'Lelisa Adeba Jilcha',
    role: 'Co-Founder',
    image: '/placeholder.svg?height=200&width=200',
    bio: 'With a Ph.D. in Computer Science and multiple patents to his name, Lelisa leads our R&D efforts. His expertise in AI and machine learning has been crucial in developing our cutting-edge products.'
  },
  { 
    name: 'Kidanekal Kifle Tadesse',
    role: 'Head of Design', 
    image: '/placeholder.svg?height=200&width=200',
    bio: 'Kidanekal\'s keen eye for design and user experience has shaped the intuitive interfaces of our products. His human-centered approach ensures our technology is accessible and enjoyable for all users.'
  },
];

const FAQs = [
  {
    question: 'What makes Denovo Security unique in the tech industry?',
    answer: 'At Denovo Security, we prioritize innovation and staying ahead of the curve. We constantly seek new ways to improve our products and services, and we are always looking for ways to enhance the user experience.'
  },
  {
    question: 'What are Denovo Security\'s core values and how do they shape our work?',
    answer: 'Innovation, integrity, and customer-centricity form the foundation of everything we do at Denovo Security. We believe in pushing boundaries while maintaining the highest ethical standards.'
  },
];

export default function AboutUs() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-8 py-16 pt-[160px]">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            About Denovo Security
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Denovo Security is a leading provider of cybersecurity solutions, offering a comprehensive range of services to protect your digital assets.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Empower People', description: 'Creating technology that enhances and simplifies lives.' },
              { icon: Lightbulb, title: 'Drive Innovation', description: 'Developing groundbreaking solutions.' },
              { icon: Target, title: 'Achieve Excellence', description: 'Delivering quality in everything we do.' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <item.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <img src={member.image} alt={member.name} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <button
                  className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-700">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Whether you have a question, need support, or want to explore partnership opportunities, we’re here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">admin@denovosecurity.com </span>
                </div>
                {/* <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (571) 260-8781</span>
                </div> */}
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">3301 Richmond Hwy, Alexandria, Virginia 22305, US</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
