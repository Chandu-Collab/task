'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Leaf, Recycle, Heart, Target, Wind, Droplets, Package, Users, ArrowRight } from 'lucide-react';

export default function SustainabilityPage() {
  const commitments = [
    {
      icon: Leaf,
      title: "Carbon Neutral by 2025",
      description: "We're committed to achieving carbon neutrality across all operations by 2025 through renewable energy and offset programs.",
      progress: 75
    },
    {
      icon: Recycle,
      title: "Zero Waste Packaging",
      description: "100% recyclable and compostable packaging materials with minimal environmental impact.",
      progress: 90
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Reducing water usage in our supply chain by 50% through innovative textile processing methods.",
      progress: 60
    },
    {
      icon: Wind,
      title: "Renewable Energy",
      description: "Powering our facilities with 100% renewable energy sources including solar and wind.",
      progress: 85
    }
  ];

  const initiatives = [
    {
      title: "Circular Fashion Program",
      description: "Take-back program for used clothing, giving garments a second life through recycling and upcycling.",
      impact: "500,000 items recycled",
      badgeText: "Active"
    },
    {
      title: "Sustainable Materials",
      description: "Partnering with suppliers who use organic cotton, recycled polyester, and innovative eco-friendly fabrics.",
      impact: "60% sustainable materials",
      badgeText: "Growing"
    },
    {
      title: "Fair Trade Partnership",
      description: "Working directly with certified fair trade suppliers to ensure ethical labor practices and fair wages.",
      impact: "200+ partner suppliers",
      badgeText: "Certified"
    },
    {
      title: "Local Production",
      description: "Reducing transportation emissions by sourcing and manufacturing products closer to our customers.",
      impact: "30% local sourcing",
      badgeText: "Expanding"
    }
  ];

  const certifications = [
    {
      name: "B-Corp Certified",
      description: "Certified Benefit Corporation meeting highest standards of social and environmental performance.",
      year: "2023"
    },
    {
      name: "Carbon Trust Standard",
      description: "Independently verified carbon footprint measurement and reduction program.",
      year: "2024"
    },
    {
      name: "GOTS Certified",
      description: "Global Organic Textile Standard certification for organic fiber processing.",
      year: "2023"
    },
    {
      name: "Fair Trade Certified",
      description: "Supporting fair wages and working conditions in our supply chain.",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Sustainability at StyleHub
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              We're committed to creating a more sustainable future for fashion. 
              From eco-friendly materials to carbon-neutral operations, sustainability 
              is at the heart of everything we do.
            </p>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Leaf className="mr-2 h-5 w-5" />
              View Our Impact Report
            </Button>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Environmental Commitments
            </h2>
            <p className="text-lg text-gray-600">
              Measurable goals with transparent progress tracking
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map((commitment, index) => {
              const IconComponent = commitment.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 mx-auto">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {commitment.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-green-600">{commitment.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${commitment.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Current Initiatives
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {initiatives.map((initiative, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {initiative.title}
                  </h3>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {initiative.badgeText}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  {initiative.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600">
                    <Target className="h-4 w-4 mr-2" />
                    <span className="font-medium">{initiative.impact}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Impact by Numbers
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
              <div className="text-gray-600">Reduction in Carbon Footprint</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500K</div>
              <div className="text-gray-600">Items Recycled This Year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Recyclable Packaging</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Sustainable Suppliers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Certifications & Partnerships
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {cert.description}
                </p>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  Since {cert.year}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Sustainability Mission
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Every purchase, every return, every choice makes a difference. 
            Together, we can create a more sustainable future for fashion.
          </p>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-800 rounded-lg p-6">
              <Package className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Shop Sustainable</h3>
              <p className="text-gray-300 text-sm mb-4">
                Choose from our eco-friendly product lines
              </p>
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                Shop Now
              </Button>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <Recycle className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Recycle Program</h3>
              <p className="text-gray-300 text-sm mb-4">
                Send us your old clothes for recycling
              </p>
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Spread the Word</h3>
              <p className="text-gray-300 text-sm mb-4">
                Share our mission with friends and family
              </p>
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900">
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}