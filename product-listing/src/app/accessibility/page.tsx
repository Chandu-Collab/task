'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Accessibility, Eye, Ear, Keyboard, MousePointer, Users, CheckCircle, AlertCircle, Mail } from 'lucide-react';

export default function AccessibilityPage() {
  const lastUpdated = "December 15, 2024";

  const commitments = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast, scalable text, and screen reader compatibility",
      features: [
        "WCAG 2.1 AA compliant color contrast ratios",
        "Scalable fonts and responsive design",
        "Alt text for all images and graphics",
        "Clear visual focus indicators",
        "Support for screen readers and magnification tools"
      ]
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full website functionality using keyboard only",
      features: [
        "Tab navigation through all interactive elements",
        "Skip links to main content areas",
        "Logical tab order and focus management",
        "Keyboard shortcuts for common actions",
        "No keyboard traps or inaccessible elements"
      ]
    },
    {
      icon: Ear,
      title: "Audio & Video",
      description: "Accessible multimedia content for all users",
      features: [
        "Closed captions for all video content",
        "Audio descriptions where applicable",
        "Transcript availability for audio content",
        "Visual indicators for audio cues",
        "Adjustable playback speed and volume"
      ]
    },
    {
      icon: Users,
      title: "Cognitive Accessibility",
      description: "Clear, simple, and consistent user experience",
      features: [
        "Plain language and clear instructions",
        "Consistent navigation and layout",
        "Error prevention and clear error messages",
        "Sufficient time for reading and interaction",
        "Ability to pause, stop, or hide moving content"
      ]
    }
  ];

  const tools = [
    {
      category: "Screen Readers",
      tools: ["NVDA", "JAWS", "VoiceOver", "TalkBack", "Dragon Naturally Speaking"]
    },
    {
      category: "Browser Extensions",
      tools: ["axe DevTools", "WAVE", "Lighthouse", "Color Oracle", "Funkify"]
    },
    {
      category: "Operating System",
      tools: ["Windows Magnifier", "macOS Zoom", "High Contrast Mode", "Voice Control", "Switch Control"]
    }
  ];

  const wcagLevels = [
    {
      level: "A",
      status: "compliant",
      description: "Basic accessibility features that make content accessible to most users",
      examples: ["Images have alt text", "Videos have captions", "Content is keyboard accessible"]
    },
    {
      level: "AA",
      status: "compliant",
      description: "Enhanced accessibility that addresses major barriers for disabled users",
      examples: ["Sufficient color contrast", "Text can be resized to 200%", "No seizure-inducing content"]
    },
    {
      level: "AAA",
      status: "partial",
      description: "Highest level of accessibility for specialized situations",
      examples: ["Sign language interpretation", "Extended audio descriptions", "Context-sensitive help"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Accessibility className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            StyleHub is committed to providing an inclusive and accessible shopping experience 
            for all users, regardless of their abilities or disabilities.
          </p>
          <p className="text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment to Accessibility
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                At StyleHub, we believe that everyone should have equal access to fashion and shopping. 
                We are committed to making our website accessible to people with disabilities and 
                continuously work to improve the user experience for all our customers.
              </p>
              <p className="text-gray-600">
                Our website is designed and developed following the Web Content Accessibility Guidelines (WCAG) 2.1 
                Level AA standards, ensuring that our content is perceivable, operable, understandable, and robust 
                for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accessibility Features
            </h2>
            <p className="text-lg text-gray-600">
              How we make StyleHub accessible to everyone
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {commitments.map((commitment, index) => {
              const IconComponent = commitment.icon;
              return (
                <div key={index} className="border rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {commitment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WCAG Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WCAG 2.1 Compliance Status
            </h2>
            <p className="text-lg text-gray-600">
              Our current compliance level with Web Content Accessibility Guidelines
            </p>
          </div>

          <div className="space-y-6">
            {wcagLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-2xl font-bold text-gray-900 mr-4">
                      Level {level.level}
                    </div>
                    <Badge 
                      className={level.status === 'compliant' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                      }
                    >
                      {level.status === 'compliant' ? 'Fully Compliant' : 'Partially Compliant'}
                    </Badge>
                  </div>
                  {level.status === 'compliant' ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <AlertCircle className="h-6 w-6 text-yellow-500" />
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">
                  {level.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {level.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compatible Assistive Technologies
            </h2>
            <p className="text-lg text-gray-600">
              We test our website with various assistive technologies to ensure compatibility
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tools.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="text-center">
                      <Badge variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Keyboard Shortcuts
            </h2>
            <p className="text-lg text-gray-600">
              Navigate our website efficiently using these keyboard shortcuts
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
                <div className="space-y-3">
                  {[
                    { keys: "Tab", action: "Move to next interactive element" },
                    { keys: "Shift + Tab", action: "Move to previous interactive element" },
                    { keys: "Enter", action: "Activate buttons and links" },
                    { keys: "Space", action: "Activate buttons and checkboxes" },
                    { keys: "Esc", action: "Close modal dialogs" }
                  ].map((shortcut, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 border border-gray-300 rounded">
                        {shortcut.keys}
                      </kbd>
                      <span className="text-gray-600 text-sm">{shortcut.action}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Browsing</h3>
                <div className="space-y-3">
                  {[
                    { keys: "Alt + S", action: "Focus search bar" },
                    { keys: "Alt + M", action: "Open main menu" },
                    { keys: "Alt + C", action: "Go to shopping cart" },
                    { keys: "Alt + H", action: "Go to homepage" },
                    { keys: "Alt + F", action: "Go to footer" }
                  ].map((shortcut, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 border border-gray-300 rounded">
                        {shortcut.keys}
                      </kbd>
                      <span className="text-gray-600 text-sm">{shortcut.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Known Issues */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Known Issues & Improvements
            </h2>
            <p className="text-lg text-gray-600">
              We're continuously working to improve accessibility
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Areas for Improvement</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Some third-party content may not meet full WCAG AAA standards</li>
                    <li>• Color-only information in some data visualizations</li>
                    <li>• Complex tables may need additional navigation aids</li>
                    <li>• Some dynamic content updates could be better announced</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Recent Improvements</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Enhanced keyboard navigation for product galleries</li>
                    <li>• Improved screen reader announcements for cart updates</li>
                    <li>• Added high contrast mode support</li>
                    <li>• Implemented skip links for main content areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback and Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Accessibility Feedback
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Your feedback helps us improve. If you encounter any accessibility barriers 
            or have suggestions for improvement, please let us know.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 rounded-lg p-6">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-4">Contact Our Accessibility Team</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <p>Email: accessibility@stylehub.com</p>
                <p>Phone: 1-800-ACCESS (1-800-223-3377)</p>
                <p>TTY: 1-800-855-2881</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-4">Alternative Shopping Methods</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <p>Phone Orders: 1-800-STYLEHUB</p>
                <p>Chat Support: Available 24/7</p>
                <p>Personal Shopping: Schedule assistance</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-5 w-5" />
              Send Accessibility Feedback
            </Button>
          </div>
        </div>
      </section>

      {/* Standards and Resources */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="font-semibold text-blue-800 mb-2">Standards We Follow</h3>
            <p className="text-blue-700 text-sm">
              This website follows WCAG 2.1 Level AA guidelines, Section 508 standards, 
              and the Americans with Disabilities Act (ADA) requirements. We regularly 
              audit our accessibility and work with disability advocacy groups to ensure 
              we're meeting the needs of all users.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}