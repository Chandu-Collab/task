'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { 
  Search, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShoppingCart, 
  Package, 
  CreditCard, 
  RotateCcw, 
  Users, 
  Settings,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

const helpCategories = [
  {
    id: 'orders',
    title: 'Orders & Shipping',
    icon: Package,
    description: 'Track orders, shipping info, and delivery updates',
    articles: [
      'How to track my order',
      'Shipping options and costs',
      'Delivery timeframes',
      'International shipping',
      'Order modifications'
    ]
  },
  {
    id: 'returns',
    title: 'Returns & Exchanges',
    icon: RotateCcw,
    description: 'Return policy, exchanges, and refunds',
    articles: [
      'Return policy overview',
      'How to return an item',
      'Exchange process',
      'Refund timeframes',
      'Return shipping labels'
    ]
  },
  {
    id: 'account',
    title: 'Account & Profile',
    icon: Users,
    description: 'Manage your account, password, and preferences',
    articles: [
      'Create an account',
      'Reset password',
      'Update profile information',
      'Email preferences',
      'Delete account'
    ]
  },
  {
    id: 'payment',
    title: 'Payment & Billing',
    icon: CreditCard,
    description: 'Payment methods, billing, and pricing questions',
    articles: [
      'Accepted payment methods',
      'Payment security',
      'Billing issues',
      'Coupon codes',
      'Price matching'
    ]
  },
  {
    id: 'products',
    title: 'Products & Inventory',
    icon: ShoppingCart,
    description: 'Product information, availability, and specifications',
    articles: [
      'Product availability',
      'Size and fit guides',
      'Product specifications',
      'Stock notifications',
      'Product reviews'
    ]
  },
  {
    id: 'technical',
    title: 'Technical Support',
    icon: Settings,
    description: 'Website issues, app problems, and technical help',
    articles: [
      'Website troubleshooting',
      'Mobile app support',
      'Browser compatibility',
      'Accessibility features',
      'System requirements'
    ]
  }
];

const quickActions = [
  {
    title: 'Track Your Order',
    description: 'Enter your order number to get real-time updates',
    icon: Package,
    link: '/track-order',
    color: 'bg-blue-500'
  },
  {
    title: 'Start a Return',
    description: 'Begin the return process for your items',
    icon: RotateCcw,
    link: '/returns',
    color: 'bg-green-500'
  },
  {
    title: 'Contact Support',
    description: 'Get help from our customer service team',
    icon: MessageCircle,
    link: '/contact',
    color: 'bg-purple-500'
  },
  {
    title: 'Size Guide',
    description: 'Find the perfect fit with our size charts',
    icon: Users,
    link: '/size-guide',
    color: 'bg-orange-500'
  }
];

export default function HelpPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search help articles
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <HelpCircle className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Find answers to your questions or get in touch with our support team
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="max-w-lg mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for help articles..."
                    className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <Button 
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 px-4"
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Quick Actions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action) => (
                <Link key={action.title} href={action.link}>
                  <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-gray-600 text-sm">{action.description}</p>
                    <ChevronRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-gray-600 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse Help Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <category.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.slice(0, 3).map((article, index) => (
                      <li key={index}>
                        <button className="text-blue-600 hover:text-blue-700 text-sm text-left hover:underline">
                          {article}
                        </button>
                      </li>
                    ))}
                    {category.articles.length > 3 && (
                      <li className="pt-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          See all {category.articles.length} articles →
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Still need help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Support */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">
                  Speak with our support team
                </p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div>Mon - Fri: 9 AM - 8 PM EST</div>
                  <div>Sat - Sun: 10 AM - 6 PM EST</div>
                  <div className="font-semibold text-gray-900">1-800-HELP-NOW</div>
                </div>
                <Button variant="outline" size="sm">
                  Call Now
                </Button>
              </div>

              {/* Email Support */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Send us a detailed message
                </p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div>We typically respond within</div>
                  <div className="font-semibold text-gray-900">24 hours</div>
                  <div>support@example.com</div>
                </div>
                <Link href="/contact">
                  <Button variant="outline" size="sm">
                    Send Email
                  </Button>
                </Link>
              </div>

              {/* Live Chat */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with us in real-time
                </p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div>Available 24/7</div>
                  <div className="font-semibold text-green-600">● Online now</div>
                  <div>Average wait: 2 minutes</div>
                </div>
                <Button size="sm">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}