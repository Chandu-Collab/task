'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FileText, Shield, CreditCard, Truck, RefreshCw, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using StyleHub, you accept and agree to be bound by these Terms of Service",
        "These terms apply to all visitors, users, and others who access or use the service",
        "If you disagree with any part of these terms, you may not access the service",
        "We reserve the right to update these terms at any time without prior notice",
        "Your continued use of the service constitutes acceptance of any changes"
      ]
    },
    {
      icon: Shield,
      title: "User Accounts",
      content: [
        "You must be at least 18 years old to create an account",
        "You are responsible for safeguarding your account credentials",
        "You must not share your account with others",
        "You agree to provide accurate and complete information",
        "We reserve the right to suspend or terminate accounts that violate our terms",
        "You are responsible for all activities that occur under your account"
      ]
    },
    {
      icon: CreditCard,
      title: "Orders and Payments",
      content: [
        "All orders are subject to acceptance and availability",
        "Prices are subject to change without notice",
        "Payment must be received before order processing",
        "We accept major credit cards and other payment methods as displayed",
        "You authorize us to charge your payment method for all purchases",
        "Orders may be cancelled or refused at our discretion"
      ]
    },
    {
      icon: Truck,
      title: "Shipping and Delivery",
      content: [
        "Shipping times are estimates and not guaranteed",
        "Risk of loss transfers to you upon delivery to carrier",
        "We are not responsible for delays caused by shipping carriers",
        "International orders may be subject to customs duties and taxes",
        "Delivery confirmation constitutes proof of delivery",
        "Claims for non-delivery must be made within 30 days"
      ]
    },
    {
      icon: RefreshCw,
      title: "Returns and Exchanges",
      content: [
        "Items may be returned within 30 days of purchase",
        "Items must be in original condition with tags attached",
        "Return shipping costs are the responsibility of the customer",
        "Refunds will be processed to the original payment method",
        "Final sale items cannot be returned or exchanged",
        "We reserve the right to refuse returns that don't meet our policy"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Uses",
      content: [
        "You may not use our service for any unlawful purpose",
        "You may not transmit viruses, worms, or other malicious code",
        "You may not attempt to gain unauthorized access to our systems",
        "You may not impersonate others or provide false information",
        "You may not interfere with or disrupt the service",
        "Commercial use without written permission is prohibited"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            These terms and conditions outline the rules and regulations for the use of StyleHub's services.
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
              Welcome to StyleHub
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service ("Terms") govern your use of StyleHub's website, mobile application, 
              and services (collectively, the "Service") operated by StyleHub Inc. ("us", "we", or "our").
            </p>
            <p className="text-gray-600">
              Please read these Terms carefully before using our Service. Your access to and use of the 
              Service is conditioned on your acceptance of and compliance with these Terms.
            </p>
          </div>

          {/* Terms Sections */}
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

          {/* Intellectual Property */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                The Service and its original content, features, and functionality are and will remain 
                the exclusive property of StyleHub Inc. and its licensors.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Rights</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Website design and layout</li>
                    <li>• Product descriptions and images</li>
                    <li>• StyleHub brand and logos</li>
                    <li>• Software and technology</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Personal, non-commercial use</li>
                    <li>• Content you create and upload</li>
                    <li>• Reviews and feedback</li>
                    <li>• Account information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy and Data */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Privacy and Data Protection
            </h2>
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
              and protect your information when you use our Service.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Data Collection:</strong> By using our Service, you consent to the collection 
                and use of information as outlined in our Privacy Policy.
              </p>
            </div>
          </div>

          {/* Disclaimers and Limitations */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Disclaimers and Limitation of Liability
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Service "As Is"</h3>
                <p className="text-yellow-700 text-sm">
                  Our Service is provided on an "as is" and "as available" basis without warranties 
                  of any kind, either express or implied.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Limitation of Liability</h3>
                <p className="text-red-700 text-sm">
                  In no event shall StyleHub Inc., its directors, employees, or agents be liable 
                  for any indirect, incidental, special, consequential, or punitive damages.
                </p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be interpreted and governed by the laws of the State of California, 
              without regard to conflict of law provisions.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
                <p className="text-gray-600 text-sm">
                  Any disputes arising from these terms will be resolved through binding arbitration 
                  in accordance with the rules of the American Arbitration Association.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibent text-gray-900 mb-2">Jurisdiction</h3>
                <p className="text-gray-600 text-sm">
                  You agree that any legal action or proceeding shall be brought exclusively 
                  in the federal or state courts located in San Francisco, California.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Termination
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We may terminate or suspend your account and access to the Service immediately, 
                without prior notice or liability, for any reason whatsoever.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Reasons for Termination</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Breach of Terms of Service</li>
                  <li>• Fraudulent or illegal activity</li>
                  <li>• Violation of intellectual property rights</li>
                  <li>• Abuse of other users or staff</li>
                  <li>• Inactivity for extended periods</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm">
                Upon termination, your right to use the Service will cease immediately. 
                All provisions which by their nature should survive termination shall survive.
              </p>
            </div>
          </div>

          {/* Severability */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Severability and Entire Agreement
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                If any provision of these Terms is held to be unenforceable or invalid, 
                such provision will be changed and interpreted to accomplish the objectives 
                of such provision to the greatest extent possible under applicable law.
              </p>
              <p className="text-gray-600">
                These Terms constitute the entire agreement between us regarding our Service, 
                and supersede and replace any prior agreements we might have between us regarding the Service.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900 rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white mb-2">Legal Department</h3>
                <p className="text-gray-300 text-sm">
                  Email: legal@stylehub.com<br />
                  Phone: 1-800-STYLEHUB<br />
                  Address: 123 Fashion Ave, Style City, SC 12345
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-gray-300 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday: 10:00 AM - 4:00 PM PST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Changes Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="font-semibold text-blue-800 mb-2">Changes to Terms</h3>
            <p className="text-blue-700 text-sm">
              We reserve the right to modify or replace these Terms at any time. If a revision 
              is material, we will try to provide at least 30 days advance notice prior to any 
              new terms taking effect. Material changes will be communicated via email or 
              prominent notice on our website.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}