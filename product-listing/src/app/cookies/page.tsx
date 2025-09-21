'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Cookie, Settings, BarChart3, Target, Shield, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

export default function CookiesPage() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const lastUpdated = "December 15, 2024";

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Necessary for the website to function properly",
      required: true,
      examples: [
        "Authentication and security",
        "Shopping cart functionality",
        "Session management",
        "Load balancing"
      ],
      retention: "Session or up to 1 year"
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      required: false,
      examples: [
        "Google Analytics",
        "Page view tracking",
        "User behavior analysis",
        "Performance monitoring"
      ],
      retention: "Up to 26 months"
    },
    {
      icon: Target,
      title: "Marketing Cookies",
      description: "Used to deliver personalized advertisements",
      required: false,
      examples: [
        "Facebook Pixel",
        "Google Ads tracking",
        "Retargeting campaigns",
        "Social media integration"
      ],
      retention: "Up to 13 months"
    },
    {
      icon: Settings,
      title: "Preference Cookies",
      description: "Remember your choices and personalize your experience",
      required: false,
      examples: [
        "Language preferences",
        "Currency selection",
        "Theme settings",
        "Notification preferences"
      ],
      retention: "Up to 1 year"
    }
  ];

  const thirdPartyCookies = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance tracking",
      provider: "Google LLC",
      retention: "26 months",
      optOut: "https://tools.google.com/dlpage/gaoptout"
    },
    {
      name: "Facebook Pixel",
      purpose: "Social media advertising and conversion tracking",
      provider: "Meta Platforms",
      retention: "13 months",
      optOut: "https://www.facebook.com/settings/?tab=ads"
    },
    {
      name: "Stripe",
      purpose: "Payment processing and fraud prevention",
      provider: "Stripe Inc.",
      retention: "Session",
      optOut: "Required for payment processing"
    },
    {
      name: "Hotjar",
      purpose: "User experience analytics and heatmaps",
      provider: "Hotjar Ltd.",
      retention: "365 days",
      optOut: "https://www.hotjar.com/legal/compliance/opt-out"
    }
  ];

  const handleCookieToggle = (type: keyof typeof cookieSettings) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveSettings = () => {
    // Save cookie preferences
    console.log('Cookie settings saved:', cookieSettings);
    // In a real implementation, this would update the cookie consent
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Cookie className="h-16 w-16 text-amber-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Learn about how we use cookies and similar technologies to improve your experience on StyleHub.
          </p>
          <p className="text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Cookie Settings Panel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-gray-600 mb-8">
              You can control which cookies we use by adjusting the settings below. 
              Note that disabling certain cookies may impact your experience on our website.
            </p>

            <div className="space-y-6">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon;
                const settingKey = type.title.toLowerCase().split(' ')[0] as keyof typeof cookieSettings;
                const isEnabled = cookieSettings[settingKey];
                
                return (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-amber-100 rounded-lg mr-4 mt-1">
                          <IconComponent className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {type.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {type.description}
                          </p>
                          <div className="text-xs text-gray-500">
                            Retention: {type.retention}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {type.required ? (
                          <Badge className="bg-red-100 text-red-800">Required</Badge>
                        ) : (
                          <button
                            onClick={() => handleCookieToggle(settingKey)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              isEnabled ? 'bg-green-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isEnabled ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-14">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center mt-8">
              <Button onClick={saveSettings} size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Settings className="mr-2 h-5 w-5" />
                Save Cookie Preferences
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Are Cookies?
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Definition
                </h3>
                <p className="text-gray-600 text-sm">
                  Cookies are small text files that are stored on your device when you visit a website. 
                  They help websites remember information about your visit, making your next visit easier 
                  and the site more useful to you.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How They Work
                </h3>
                <p className="text-gray-600 text-sm">
                  When you visit our website, we may place cookies on your device. These cookies contain 
                  information that is transferred to your device's hard drive and stored there for future reference.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why We Use Them
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Remember your preferences and settings
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Keep you signed in to your account
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Analyze website traffic and usage
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Provide personalized content and ads
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Your Control
                </h3>
                <p className="text-gray-600 text-sm">
                  You have full control over cookies. You can set your browser to refuse all cookies, 
                  or to indicate when a cookie is being sent. However, some website features may not 
                  function properly without cookies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Third-Party Cookies
          </h2>
          
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <p className="text-gray-600 mb-6">
              We work with trusted third-party services that may also set cookies on your device. 
              These help us provide better service and understand how our website is being used.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Provider</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Retention</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Opt Out</th>
                  </tr>
                </thead>
                <tbody>
                  {thirdPartyCookies.map((cookie, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 px-4 font-medium text-gray-900">{cookie.name}</td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{cookie.provider}</td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{cookie.retention}</td>
                      <td className="py-3 px-4 text-sm">
                        {cookie.optOut.startsWith('http') ? (
                          <a 
                            href={cookie.optOut} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Opt Out
                          </a>
                        ) : (
                          <span className="text-gray-500">{cookie.optOut}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Settings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Managing Cookies in Your Browser
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Chrome", steps: ["Settings > Privacy and Security > Cookies and other site data"] },
              { name: "Firefox", steps: ["Options > Privacy & Security > Cookies and Site Data"] },
              { name: "Safari", steps: ["Preferences > Privacy > Cookies and website data"] },
              { name: "Edge", steps: ["Settings > Privacy, search, and services > Cookies and site permissions"] },
              { name: "Opera", steps: ["Settings > Privacy & Security > Cookies and other site data"] },
              { name: "Internet Explorer", steps: ["Tools > Internet Options > Privacy > Settings"] }
            ].map((browser, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {browser.name}
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {browser.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 mt-2"></div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            If you have any questions about our use of cookies or this policy, 
            please don't hesitate to contact us.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800 rounded-lg p-6">
              <Eye className="h-8 w-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Privacy Team</h3>
              <p className="text-gray-300 text-sm">
                privacy@stylehub.com<br />
                1-800-PRIVACY
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <Settings className="h-8 w-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Technical Support</h3>
              <p className="text-gray-300 text-sm">
                support@stylehub.com<br />
                1-800-SUPPORT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Policy Updates</h3>
              <p className="text-amber-700 text-sm">
                This Cookie Policy may be updated from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date. We encourage 
                you to review this policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}