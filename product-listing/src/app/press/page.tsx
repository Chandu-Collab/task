'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Download, ArrowRight, Newspaper, Users, Award, Building } from 'lucide-react';

export default function PressPage() {
  const pressReleases = [
    {
      title: "StyleHub Launches Revolutionary AI-Powered Personal Stylist",
      date: "December 15, 2024",
      category: "Product Launch",
      excerpt: "New AI technology helps customers discover personalized fashion recommendations with 95% accuracy.",
      downloadUrl: "#"
    },
    {
      title: "StyleHub Achieves Carbon Neutral Shipping Across All Operations",
      date: "November 28, 2024",
      category: "Sustainability",
      excerpt: "Company reaches milestone in environmental commitment with innovative packaging solutions.",
      downloadUrl: "#"
    },
    {
      title: "StyleHub Reports 150% Growth in Sustainable Fashion Sales",
      date: "October 20, 2024",
      category: "Financial",
      excerpt: "Q3 results show unprecedented demand for eco-friendly fashion alternatives.",
      downloadUrl: "#"
    },
    {
      title: "StyleHub Partners with Leading Fashion Schools for Talent Development",
      date: "September 15, 2024",
      category: "Partnership",
      excerpt: "New initiative creates direct pipeline for emerging fashion designers and stylists.",
      downloadUrl: "#"
    }
  ];

  const mediaKit = [
    {
      title: "High-Resolution Logos",
      description: "PNG, SVG, and EPS formats available",
      icon: Building,
      downloadUrl: "#"
    },
    {
      title: "Product Images",
      description: "Professional photography assets",
      icon: Newspaper,
      downloadUrl: "#"
    },
    {
      title: "Executive Headshots",
      description: "Leadership team photos",
      icon: Users,
      downloadUrl: "#"
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics and information",
      icon: Award,
      downloadUrl: "#"
    }
  ];

  const awards = [
    {
      title: "Best E-commerce Innovation",
      organization: "Tech Awards 2024",
      year: "2024",
      description: "Recognized for AI-powered styling technology"
    },
    {
      title: "Sustainability Leader",
      organization: "Green Business Council",
      year: "2024",
      description: "Leading efforts in sustainable fashion"
    },
    {
      title: "Fastest Growing Retailer",
      organization: "Retail Excellence Awards",
      year: "2023",
      description: "Outstanding growth in online fashion retail"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with StyleHub's latest news, announcements, and media resources. 
              Find everything you need for press coverage and media inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Press Releases</h2>
            <Button variant="outline">
              View All Releases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{release.category}</Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {release.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {release.excerpt}
                    </p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Media Kit
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mediaKit.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Awards & Recognition
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {award.organization} • {award.year}
                </p>
                <p className="text-gray-600 text-sm">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Media Inquiries
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            For press inquiries, interview requests, or additional information, 
            please contact our media relations team.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Press Contact</h3>
              <div className="text-gray-300">
                <p className="mb-2"><strong>Sarah Johnson</strong></p>
                <p className="mb-1">Director of Communications</p>
                <p className="mb-1">press@stylehub.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Partnership Inquiries</h3>
              <div className="text-gray-300">
                <p className="mb-2"><strong>Michael Chen</strong></p>
                <p className="mb-1">Partnership Manager</p>
                <p className="mb-1">partnerships@stylehub.com</p>
                <p>(555) 123-4568</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}