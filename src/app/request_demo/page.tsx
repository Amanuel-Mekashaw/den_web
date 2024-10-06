'use client';

import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CheckCircle, Shield, Lock, Zap, X } from 'lucide-react';

export default function RequestDemo() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for spinner
  const [showModal, setShowModal] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null); // Create ref for ReCAPTCHA


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start spinner

    // Get the reCAPTCHA token
    const token = await recaptchaRef.current?.executeAsync(); // Execute reCAPTCHA
    recaptchaRef.current?.reset(); // Reset reCAPTCHA

    // Proceed with form submission only if reCAPTCHA token is valid
    if (token) {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          recaptchaToken: token, // Send the reCAPTCHA token to the server
        }),
      });

      setIsLoading(false);

      if (response.ok) {
        setIsSubmitted(true);
        setShowModal(true); // Show success modal
      } else {
        console.error('Failed to send email');
      }
    } else {
      setIsLoading(false);
      console.error('reCAPTCHA failed');
    }
  };
  const closeModal = () => {
    setShowModal(false); // Close the modal when clicked
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-8 py-24 sm:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Discover how our solutions can protect you from the latest threats.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Our team of cybersecurity experts has the knowledge and experience to safeguard your business. Request a demo.
            </p>
            <div className="space-y-4">
              {[
                { icon: Shield, text: 'Advanced threat detection' },
                { icon: Lock, text: 'End-to-end encryption' },
                { icon: Zap, text: 'Real-time monitoring' },
                { icon: CheckCircle, text: 'Compliance management' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Request Your Personalized Demo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name <span className="text-red-800">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-800">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Business Email <span className="text-red-800">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Add ReCAPTCHA component */}
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                size="invisible"
              />
              <p className="text-xs text-gray-500 mt-4">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" className="underline ml-1" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>{' '}
                and
                <a href="https://policies.google.com/terms" className="underline ml-1" target="_blank" rel="noreferrer">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-2 rounded-md text-white font-bold text-lg flex justify-center items-center"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l2-2A7.977 7.977 0 0112 20v4c-4.97 0-9-4.03-9-9h4z"
                    ></path>
                  </svg>
                ) : (
                  'Get Your Demo'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
              viewBox="0 0 320.591 320.591"
              onClick={closeModal}
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>

            <div className="my-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 shrink-0 fill-green-500 inline"
                viewBox="0 0 512 512"
              >
                <path d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z" />
                <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z" />
              </svg>
              <h4 className="text-xl text-gray-800 font-semibold mt-4">
                Success! Request Submitted
              </h4>
              <p className="text-lg text-gray-500 leading-relaxed mt-4">
                Thank you for requesting a demo! Our team will review your request and get back to you shortly.
              </p>
            </div>

            <button
              type="button"
              className="px-5 py-2.5 w-full rounded-lg text-white text-sm border-none outline-none bg-gray-800 hover:bg-gray-700"
              onClick={closeModal}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
