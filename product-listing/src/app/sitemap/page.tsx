'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Map, Search, Home, ShoppingBag, Users, FileText, Shield, ExternalLink, ChevronRight } from 'lucide-react';

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const siteMap = [
    {
      category: 'main',
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Homepage', url: '/', description: 'Welcome to StyleHub - discover the latest fashion trends' },
        { name: 'About Us', url: '/about', description: 'Learn about our company, mission, and values' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our customer service team' }
      ]
    },
    {
      category: 'shop',
      title: 'Shopping',
      icon: ShoppingBag,
      pages: [
        { name: 'All Products', url: '/products', description: 'Browse our complete product catalog' },
        { name: 'Categories', url: '/categories', description: 'Shop by product categories' },
        { name: 'Electronics', url: '/categories/electronics', description: 'Latest electronics and gadgets' },
        { name: 'Fashion', url: '/categories/fashion', description: 'Trendy clothing and accessories' },
        { name: 'Home & Garden', url: '/categories/home-garden', description: 'Home decor and gardening supplies' },
        { name: 'Sports & Outdoors', url: '/categories/sports-outdoors', description: 'Sports equipment and outdoor gear' },
        { name: 'Deals & Offers', url: '/deals', description: 'Special discounts and limited-time offers' },
        { name: 'Wishlist', url: '/wishlist', description: 'Save your favorite items for later' },
        { name: 'Favorites', url: '/favorites', description: 'Your most-loved products' },
        { name: 'Compare Products', url: '/compare', description: 'Compare features and prices' },
        { name: 'Shopping Cart', url: '/cart', description: 'Review and checkout your items' },
        { name: 'Checkout', url: '/checkout', description: 'Complete your purchase' }
      ]
    },
    {
      category: 'account',
      title: 'Account & Services',
      icon: Users,
      pages: [
        { name: 'My Account', url: '/account', description: 'Manage your profile and preferences' },
        { name: 'Order Tracking', url: '/track-order', description: 'Track your order status and delivery' },
        { name: 'Help Center', url: '/help', description: 'Find answers to common questions' },
        { name: 'Customer Support', url: '/contact', description: 'Contact our support team' },
        { name: 'Returns & Exchanges', url: '/returns', description: 'Process returns and exchanges' },
        { name: 'Size Guide', url: '/size-guide', description: 'Find your perfect fit' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      category: 'company',
      title: 'Company Information',
      icon: FileText,
      pages: [
        { name: 'About StyleHub', url: '/about', description: 'Our story, mission, and team' },
        { name: 'Careers', url: '/careers', description: 'Join our team and grow with us' },
        { name: 'Press & Media', url: '/press', description: 'Press releases and media resources' },
        { name: 'Sustainability', url: '/sustainability', description: 'Our commitment to the environment' },
        { name: 'Affiliate Program', url: '/affiliate', description: 'Earn money by promoting our products' },
        { name: 'Gift Cards', url: '/gift-cards', description: 'Perfect gifts for any occasion' }
      ]
    },
    {
      category: 'legal',
      title: 'Legal & Privacy',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect and use your information' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions for using our service' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Information about cookies and tracking' },
        { name: 'Accessibility', url: '/accessibility', description: 'Our commitment to accessibility' },
        { name: 'Data Protection', url: '/data-protection', description: 'Your data rights and how to exercise them' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete overview of our website structure' }
      ]
    }
  ];

  const filteredPages = siteMap
    .filter(section => selectedCategory === 'all' || section.category === selectedCategory)
    .map(section => ({
      ...section,
      pages: section.pages.filter(page => 
        page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(section => section.pages.length > 0);

  const totalPages = siteMap.reduce((total, section) => total + section.pages.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Map className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Navigate through all pages of StyleHub. Find exactly what you're looking for 
            with our comprehensive site overview.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 inline-block">
            <p className="text-blue-800 font-medium">
              {totalPages} Total Pages • 5 Main Categories
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="main">Main Pages</option>
                  <option value="shop">Shopping</option>
                  <option value="account">Account & Services</option>
                  <option value="company">Company Info</option>
                  <option value="legal">Legal & Privacy</option>
                </select>
              </div>
            </div>
            {searchTerm && (
              <div className="mt-4 text-sm text-gray-600">
                Found {filteredPages.reduce((total, section) => total + section.pages.length, 0)} pages matching "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {filteredPages.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b">
                    <div className="flex items-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mr-3">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {section.title}
                      </h2>
                      <Badge variant="outline" className="ml-auto">
                        {section.pages.length} pages
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {section.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="group border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {page.name}
                            </h3>
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <p className="text-gray-600 text-sm mb-3">
                            {page.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <code className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {page.url}
                            </code>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => window.open(page.url, '_blank')}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              Visit
                              <ChevronRight className="h-3 w-3 ml-1" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPages.length === 0 && (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No pages found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-gray-600">
              Popular pages and frequently visited sections
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Shop All Products', url: '/products', popular: true },
              { name: 'Track Your Order', url: '/track-order', popular: true },
              { name: 'Customer Support', url: '/help', popular: true },
              { name: 'Size Guide', url: '/size-guide', popular: true },
              { name: 'Returns Policy', url: '/returns', popular: false },
              { name: 'Privacy Policy', url: '/privacy', popular: false },
              { name: 'Gift Cards', url: '/gift-cards', popular: false },
              { name: 'Careers', url: '/careers', popular: false }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </span>
                  {link.popular && (
                    <Badge className="bg-blue-100 text-blue-800 text-xs">
                      Popular
                    </Badge>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            XML Sitemap
          </h2>
          <p className="text-gray-300 mb-8">
            For search engines and automated tools, you can access our XML sitemap 
            which contains all URLs and metadata for our website.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800 rounded-lg p-6">
              <FileText className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Main Sitemap</h3>
              <p className="text-gray-300 text-sm mb-4">
                Complete XML sitemap for all public pages
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                View XML Sitemap
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <Map className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Product Sitemap</h3>
              <p className="text-gray-300 text-sm mb-4">
                Dedicated sitemap for all product pages
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                View Product Sitemap
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-400">
            Last updated: {new Date().toLocaleDateString()} • Updated automatically
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}