'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DollarSign, Users, TrendingUp, Gift, Star, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    followers: '',
    experience: '',
    motivation: ''
  });

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Commission",
      description: "Earn up to 15% commission on every sale you generate",
      highlight: "Up to 15%"
    },
    {
      icon: Users,
      title: "30-Day Cookie Window",
      description: "Get credit for purchases made within 30 days of your referral",
      highlight: "30 Days"
    },
    {
      icon: TrendingUp,
      title: "Performance Bonuses",
      description: "Extra rewards for top performers and milestone achievements",
      highlight: "Bonus Rewards"
    },
    {
      icon: Gift,
      title: "Exclusive Products",
      description: "Early access to new collections and affiliate-only discounts",
      highlight: "VIP Access"
    }
  ];

  const commissionTiers = [
    {
      tier: "Bronze",
      sales: "$0 - $2,000",
      commission: "8%",
      perks: ["Basic affiliate tools", "Monthly newsletters", "Product catalog access"]
    },
    {
      tier: "Silver",
      sales: "$2,001 - $5,000",
      commission: "10%",
      perks: ["Advanced analytics", "Priority support", "Custom discount codes", "Early product access"]
    },
    {
      tier: "Gold",
      sales: "$5,001 - $10,000",
      commission: "12%",
      perks: ["Dedicated account manager", "Custom landing pages", "Exclusive promotions", "Performance bonuses"]
    },
    {
      tier: "Platinum",
      sales: "$10,000+",
      commission: "15%",
      perks: ["Highest commission rate", "Co-marketing opportunities", "VIP events", "Custom partnerships"]
    }
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      handle: "@fashionfwd_sarah",
      earnings: "$8,500/month",
      testimonial: "StyleHub's affiliate program has transformed my blog into a sustainable income source. The products are amazing and my audience loves them!",
      tier: "Gold"
    },
    {
      name: "Mike Chen",
      handle: "@styleinfluencer",
      earnings: "$12,000/month",
      testimonial: "The support team is incredible and the commission rates are the best I've found. Plus, the 30-day cookie window really makes a difference.",
      tier: "Platinum"
    },
    {
      name: "Emma Rodriguez",
      handle: "@emmas_closet",
      earnings: "$5,200/month",
      testimonial: "I love that I can promote products I actually believe in. The quality is outstanding and my followers trust my recommendations.",
      tier: "Silver"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Affiliate application submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Join the StyleHub Affiliate Program
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Turn your passion for fashion into profit. Partner with StyleHub and earn 
              competitive commissions while promoting products you love to your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                <DollarSign className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Partner With StyleHub?
            </h2>
            <p className="text-lg text-gray-600">
              Industry-leading benefits and support for our affiliate partners
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {benefit.description}
                  </p>
                  <Badge className="bg-purple-100 text-purple-800">
                    {benefit.highlight}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Commission Tiers & Rewards
            </h2>
            <p className="text-lg text-gray-600">
              Earn more as you grow - the sky's the limit!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {commissionTiers.map((tier, index) => (
              <div key={index} className={`rounded-lg border-2 p-6 ${
                tier.tier === 'Platinum' 
                  ? 'border-purple-200 bg-purple-50' 
                  : tier.tier === 'Gold'
                  ? 'border-yellow-200 bg-yellow-50'
                  : tier.tier === 'Silver'
                  ? 'border-gray-200 bg-gray-50'
                  : 'border-orange-200 bg-orange-50'
              }`}>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {tier.tier}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {tier.sales}
                  </p>
                  <div className="text-3xl font-bold text-purple-600">
                    {tier.commission}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {tier.perks.map((perk, perkIndex) => (
                    <div key={perkIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how our affiliates are building successful businesses with StyleHub
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.handle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{story.earnings}</div>
                    <Badge variant="outline" className="text-xs">
                      {story.tier} Tier
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm italic mb-4">
                  "{story.testimonial}"
                </p>
                
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600">
              Apply now and join thousands of successful StyleHub affiliates
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website/Blog URL *
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="followers" className="block text-sm font-medium text-gray-700 mb-2">
                    Social Media Followers
                  </label>
                  <select
                    id="followers"
                    name="followers"
                    value={formData.followers}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select range</option>
                    <option value="0-1000">0 - 1,000</option>
                    <option value="1001-5000">1,001 - 5,000</option>
                    <option value="5001-10000">5,001 - 10,000</option>
                    <option value="10001-50000">10,001 - 50,000</option>
                    <option value="50000+">50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Affiliate Marketing Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="experienced">Experienced (3+ years)</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join our affiliate program? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us about your audience, content style, and why StyleHub would be a good fit..."
                />
              </div>

              <div className="text-center">
                <Button type="submit" size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-gray-500 text-sm mt-4">
                  We'll review your application and get back to you within 2-3 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to get approved?",
                answer: "Most applications are reviewed within 2-3 business days. We'll email you with approval status and next steps."
              },
              {
                question: "When do I get paid?",
                answer: "Commissions are paid monthly on the 15th for the previous month's sales. Minimum payout is $50."
              },
              {
                question: "What marketing materials do you provide?",
                answer: "We provide banners, product images, discount codes, and detailed analytics to help you succeed."
              },
              {
                question: "Can I promote on social media?",
                answer: "Yes! We encourage promotion across all channels including Instagram, TikTok, YouTube, blogs, and more."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}