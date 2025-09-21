'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Shield, Lock, Eye, Download, Trash2, Edit, Globe, Users, FileText, AlertTriangle } from 'lucide-react';

export default function DataProtectionPage() {
  const [requestType, setRequestType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    accountEmail: '',
    requestDetails: '',
    identityVerification: ''
  });

  const lastUpdated = "December 15, 2024";

  const dataRights = [
    {
      icon: Eye,
      title: "Right to Access",
      description: "Request a copy of all personal data we hold about you",
      timeframe: "30 days",
      process: "Submit request form with identity verification"
    },
    {
      icon: Edit,
      title: "Right to Rectification",
      description: "Correct or update inaccurate personal information",
      timeframe: "30 days",
      process: "Contact us with the correct information and proof"
    },
    {
      icon: Trash2,
      title: "Right to Erasure",
      description: "Request deletion of your personal data (right to be forgotten)",
      timeframe: "30 days",
      process: "Submit deletion request with valid reason"
    },
    {
      icon: Download,
      title: "Right to Data Portability",
      description: "Receive your data in a structured, machine-readable format",
      timeframe: "30 days",
      process: "Request data export in preferred format"
    },
    {
      icon: Shield,
      title: "Right to Object",
      description: "Object to processing of your personal data for specific purposes",
      timeframe: "Immediate",
      process: "Submit objection with specific grounds"
    },
    {
      icon: Lock,
      title: "Right to Restrict Processing",
      description: "Limit how we use your personal data in certain circumstances",
      timeframe: "Immediate",
      process: "Request processing restriction with justification"
    }
  ];

  const dataCategories = [
    {
      category: "Account Information",
      examples: ["Name, email, password", "Account preferences", "Profile information", "Communication preferences"],
      retention: "While account is active + 2 years",
      lawfulBasis: "Contract performance"
    },
    {
      category: "Purchase History",
      examples: ["Order details", "Payment information", "Shipping addresses", "Product reviews"],
      retention: "7 years for tax compliance",
      lawfulBasis: "Contract performance, Legal obligation"
    },
    {
      category: "Marketing Data",
      examples: ["Email preferences", "Marketing consent", "Campaign interactions", "Demographic data"],
      retention: "Until consent withdrawn or 3 years inactive",
      lawfulBasis: "Consent, Legitimate interest"
    },
    {
      category: "Technical Data",
      examples: ["IP address", "Browser information", "Device data", "Usage analytics"],
      retention: "26 months for analytics",
      lawfulBasis: "Legitimate interest"
    }
  ];

  const internationalTransfers = [
    {
      country: "United States",
      partner: "Cloud hosting services",
      safeguards: "Standard Contractual Clauses, Privacy Shield successor",
      purpose: "Data processing and storage"
    },
    {
      country: "Canada",
      partner: "Customer service providers",
      safeguards: "Adequacy decision by European Commission",
      purpose: "Customer support operations"
    },
    {
      country: "India",
      partner: "Development team",
      safeguards: "Standard Contractual Clauses, GDPR compliance",
      purpose: "Technical development and maintenance"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle data protection request submission
    console.log('Data protection request:', { type: requestType, ...formData });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Data Protection & Your Rights
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Learn about your data protection rights and how to exercise them. 
            We're committed to protecting your personal information and respecting your privacy.
          </p>
          <p className="text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Data Protection Rights
            </h2>
            <p className="text-lg text-gray-600">
              Under GDPR and other data protection laws, you have several rights regarding your personal data
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dataRights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {right.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {right.description}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {right.timeframe}
                    </Badge>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    {right.process}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Data We Collect & Process
            </h2>
            <p className="text-lg text-gray-600">
              Transparency about what data we collect, why we collect it, and how long we keep it
            </p>
          </div>

          <div className="space-y-6">
            {dataCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border p-6">
                <div className="grid gap-6 md:grid-cols-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.category}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {category.lawfulBasis}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Examples</h4>
                    <ul className="space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-600 text-xs">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Retention Period</h4>
                    <p className="text-gray-600 text-xs">{category.retention}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Legal Basis</h4>
                    <p className="text-gray-600 text-xs">{category.lawfulBasis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              International Data Transfers
            </h2>
            <p className="text-lg text-gray-600">
              How we protect your data when transferred to other countries
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Country</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Partner Type</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Safeguards</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {internationalTransfers.map((transfer, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="font-medium text-gray-900">{transfer.country}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">{transfer.partner}</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">{transfer.safeguards}</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">{transfer.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Data Request Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exercise Your Rights
            </h2>
            <p className="text-lg text-gray-600">
              Submit a data protection request using the form below
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8">
            <form onSubmit={handleSubmitRequest} className="space-y-6">
              <div>
                <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                  Request Type *
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  required
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select a request type</option>
                  <option value="access">Data Access Request</option>
                  <option value="rectification">Data Rectification</option>
                  <option value="erasure">Data Erasure (Right to be Forgotten)</option>
                  <option value="portability">Data Portability</option>
                  <option value="object">Object to Processing</option>
                  <option value="restrict">Restrict Processing</option>
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="accountEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    StyleHub Account Email
                  </label>
                  <input
                    type="email"
                    id="accountEmail"
                    name="accountEmail"
                    value={formData.accountEmail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="If different from contact email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="requestDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Request Details *
                </label>
                <textarea
                  id="requestDetails"
                  name="requestDetails"
                  required
                  rows={4}
                  value={formData.requestDetails}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Please provide details about your request, including specific data categories if applicable..."
                />
              </div>

              <div>
                <label htmlFor="identityVerification" className="block text-sm font-medium text-gray-700 mb-2">
                  Identity Verification *
                </label>
                <textarea
                  id="identityVerification"
                  name="identityVerification"
                  required
                  rows={3}
                  value={formData.identityVerification}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Please provide information to verify your identity (last order number, billing address, etc.)"
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div className="text-yellow-700 text-sm">
                    <p className="font-medium mb-1">Identity Verification Required</p>
                    <p>To protect your privacy, we need to verify your identity before processing your request. We may contact you for additional verification if needed.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700">
                  <FileText className="mr-2 h-5 w-5" />
                  Submit Data Protection Request
                </Button>
                <p className="text-gray-500 text-sm mt-4">
                  We will respond to your request within 30 days as required by law.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-gray-300 text-lg">
              Technical and organizational measures to keep your information secure
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Lock,
                title: "Encryption",
                description: "End-to-end encryption for data in transit and at rest"
              },
              {
                icon: Shield,
                title: "Access Control",
                description: "Role-based access with multi-factor authentication"
              },
              {
                icon: Eye,
                title: "Monitoring",
                description: "24/7 security monitoring and threat detection"
              },
              {
                icon: Users,
                title: "Staff Training",
                description: "Regular privacy and security training for all employees"
              }
            ].map((measure, index) => {
              const IconComponent = measure.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {measure.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {measure.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Data Protection Officer
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            For any questions about data protection or to file a complaint, 
            contact our Data Protection Officer.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Direct Contact</h3>
              <div className="text-gray-600 text-sm space-y-2">
                <p>Email: dpo@stylehub.com</p>
                <p>Phone: 1-800-DATAPRO</p>
                <p>Address: Data Protection Office</p>
                <p>StyleHub Inc., 123 Privacy Lane</p>
                <p>Data City, DC 12345</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Supervisory Authority</h3>
              <div className="text-gray-600 text-sm space-y-2">
                <p>You also have the right to lodge a complaint with your local data protection authority</p>
                <p className="font-medium">EU Residents:</p>
                <p>Contact your national DPA</p>
                <p className="font-medium">UK Residents:</p>
                <p>Information Commissioner's Office (ICO)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}