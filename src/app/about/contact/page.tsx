import React from 'react'; import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-8 py-16 pt-[160px]">
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6"> Whether you have a question, need support, or want to explore partnership opportunities, we’re here to help. </p>
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