'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 pt-[160px]">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            At Denovo Security, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We may collect the following types of information when you use our services or visit our website:
            <br /><br />
            • Personal Information: This may include your name, email address, phone number, and other contact details that you provide to us.
            <br />
            • Usage Data: We collect information about how you interact with our website and services.
            <br />
            • Cookies: Our website may use cookies and similar tracking technologies to enhance user experience, analyze site traffic, and improve our services.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Denovo Security may use the information we collect for various purposes, including:
            <br /><br />
            • To provide and maintain our services.
            <br />
            • To notify you about changes to our services or policies.
            <br />
            • To improve our website and services based on user feedback.
            <br />
            • To respond to your requests, questions, and support needs.
            <br />
            • For marketing purposes, with your consent.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Sharing Your Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We do not sell or rent your personal information to third parties. We may share your data with:
            <br /><br />
            • Service Providers: Third-party vendors who assist us in operating our website and providing our services, under confidentiality agreements.
            <br />
            • Legal Compliance: If required by law or to respond to valid legal processes, we may disclose your information to authorities.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Data Security</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We implement appropriate security measures to protect your personal information. However, please be aware that no security measure is entirely foolproof, and we cannot guarantee the complete security of your data.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Your Rights</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You have certain rights regarding your personal data, including:
            <br /><br />
            • Access: You may request a copy of the personal data we hold about you.
            <br />
            • Correction: You may request to correct any inaccuracies in your data.
            <br />
            • Deletion: You may request the deletion of your personal data, subject to legal requirements.
            <br /><br />
            To exercise these rights, please contact us using the details provided below.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
            <br /><br />
            Denovo Security
            <br />
            Email: admin@denovosecurity.com
            <br />
            {/* Phone: +1(571)260-8781 */}
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
