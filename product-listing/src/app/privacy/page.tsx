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
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-20 w-32 h-32 bg-white/15 rounded-full animate-float"></div>
          <div className="absolute top-40 right-28 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-white/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-white/25 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <div className="glass-card p-6">
                <Shield className="h-20 w-20 text-white mx-auto animate-glow" />
              </div>
            </div>
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                🔒 Your Data is Protected
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information with the 
              <span className="text-white font-semibold"> highest standards of security.</span>
            </p>
            
            {/* Privacy Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="glass-card px-6 py-4 flex items-center space-x-3">
                <Lock className="h-6 w-6" />
                <span className="font-medium">Encrypted Data</span>
              </div>
              <div className="glass-card px-6 py-4 flex items-center space-x-3">
                <Shield className="h-6 w-6" />
                <span className="font-medium">GDPR Compliant</span>
              </div>
              <div className="glass-card px-6 py-4 flex items-center space-x-3">
                <Eye className="h-6 w-6" />
                <span className="font-medium">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="max-w-6xl mx-auto">
          {/* Last Updated */}
          <div className="text-center mb-12">
            <p className="text-gray-500 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 inline-block shadow-sm">
              Last updated: {lastUpdated}
            </p>
          </div>
          {/* Introduction */}
          <div className="glass-card p-10 mb-16 text-center hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At StyleHub, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy describes how we collect, use, 
              disclose, and safeguard your information when you visit our website or make a purchase.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By using our services, you agree to the collection and use of information in 
              accordance with this policy. We will not use or share your information with 
              anyone except as described in this Privacy Policy.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div 
                  key={index} 
                  className="glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-6 shadow-lg hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start group">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">{item}</span>
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