'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Shield, Eye, Lock, Users, Globe, FileText } from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account or making purchases",
        "Payment information (processed securely through our payment partners)",
        "Shipping and billing addresses",
        "Communication preferences and marketing consent",
        "Device information, IP address, and browsing data",
        "Cookies and similar tracking technologies"
      ]
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: [
        "Process orders and provide customer service",
        "Send order confirmations and shipping updates",
        "Personalize your shopping experience",
        "Send marketing communications (with your consent)",
        "Improve our website and services",
        "Prevent fraud and ensure security"
      ]
    },
    {
      icon: Shield,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Service providers who help us operate our business",
        "Payment processors for transaction processing",
        "Shipping companies for order fulfillment",
        "Legal authorities when required by law",
        "Business transfers (mergers, acquisitions)"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "Industry-standard encryption for sensitive data",
        "Secure payment processing (PCI DSS compliant)",
        "Regular security audits and vulnerability testing",
        "Limited access to personal information",
        "Employee training on data protection",
        "Incident response procedures"
      ]
    },
    {
      icon: Globe,
      title: "Your Rights",
      content: [
        "Access your personal information",
        "Correct inaccurate data",
        "Delete your account and data",
        "Port your data to another service",
        "Opt out of marketing communications",
        "Object to certain data processing"
      ]
    },
    {
      icon: FileText,
      title: "Cookies & Tracking",
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to improve user experience",
        "Marketing cookies for personalized ads",
        "Third-party cookies from our partners",
        "Cookie preferences can be managed in settings",
        "Some features may not work without cookies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
          </p>
          <p className="text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              At StyleHub, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy describes how we collect, use, 
              disclose, and safeguard your information when you visit our website or make a purchase.
            </p>
            <p className="text-gray-600">
              By using our services, you agree to the collection and use of information in 
              accordance with this policy. We will not use or share your information with 
              anyone except as described in this Privacy Policy.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Data Retention
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We retain your personal information only for as long as necessary to provide 
                our services and fulfill the purposes outlined in this Privacy Policy.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Account Information</h3>
                  <p className="text-gray-600 text-sm">
                    Retained while your account is active and for 2 years after account closure
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Order History</h3>
                  <p className="text-gray-600 text-sm">
                    Retained for 7 years for tax and legal compliance purposes
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Marketing Data</h3>
                  <p className="text-gray-600 text-sm">
                    Retained until you opt out or for 3 years since last engagement
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics Data</h3>
                  <p className="text-gray-600 text-sm">
                    Anonymized and retained for up to 26 months for analysis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* International Transfers */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              International Data Transfers
            </h2>
            <p className="text-gray-600 mb-4">
              Your information may be transferred to and processed in countries other than 
              your country of residence. These countries may have different data protection 
              laws than your jurisdiction.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Protection Measures:</strong> We ensure appropriate safeguards are 
                in place, including Standard Contractual Clauses and adequacy decisions 
                where applicable.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Children's Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              Our services are not intended for children under 13 years of age. We do not 
              knowingly collect personal information from children under 13.
            </p>
            <p className="text-gray-600">
              If you are a parent or guardian and believe your child has provided us with 
              personal information, please contact us so we can delete such information.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900 rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact our privacy team:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white mb-2">Privacy Officer</h3>
                <p className="text-gray-300 text-sm">
                  Email: privacy@stylehub.com<br />
                  Phone: 1-800-PRIVACY (1-800-774-8229)<br />
                  Address: 123 Privacy Lane, Data City, DC 12345
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">EU Representative</h3>
                <p className="text-gray-300 text-sm">
                  For EU residents:<br />
                  Email: eu-privacy@stylehub.com<br />
                  Address: Privacy EU Ltd, Dublin, Ireland
                </p>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h3 className="font-semibold text-yellow-800 mb-2">Policy Updates</h3>
            <p className="text-yellow-700 text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" 
              date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}