'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Package, 
  CreditCard, 
  RotateCcw,
  Truck,
  User,
  Shield,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const faqCategories = [
  {
    id: 'orders',
    name: 'Orders & Shipping',
    icon: Package,
    faqs: [
      {
        question: 'How can I track my order?',
        answer: 'You can track your order by visiting our Order Tracking page and entering your order number and email address. You\'ll also receive tracking information via email once your order ships.'
      },
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 3-5 business days, Express shipping takes 1-2 business days, and Overnight shipping delivers the next business day. International shipping varies by location and typically takes 7-14 business days.'
      },
      {
        question: 'Can I change or cancel my order?',
        answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, orders enter our fulfillment process and cannot be changed. Contact customer service immediately if you need to make changes.'
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes! We offer free standard shipping on orders over $50. Express and overnight shipping options are available for an additional fee.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and taxes may apply depending on your location.'
      }
    ]
  },
  {
    id: 'returns',
    name: 'Returns & Exchanges',
    icon: RotateCcw,
    faqs: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for most items. Items must be in original, unused condition with tags attached. Some exclusions apply to personalized items, perishables, and final sale items.'
      },
      {
        question: 'How do I return an item?',
        answer: 'Visit our Returns page to initiate a return. You\'ll receive a prepaid return label via email. Package the item securely and drop it off at any authorized shipping location.'
      },
      {
        question: 'How long does it take to get a refund?',
        answer: 'Refunds are processed within 5-7 business days after we receive your returned item. It may take additional time for your bank or credit card company to process the refund.'
      },
      {
        question: 'Can I exchange an item for a different size or color?',
        answer: 'Yes! You can request an exchange when initiating your return. Exchanges are processed faster than returns and typically ship within 1-2 business days of receiving your original item.'
      },
      {
        question: 'Who pays for return shipping?',
        answer: 'We provide free return shipping for defective items or our mistakes. For other returns, we provide prepaid labels and deduct $5.99 from your refund.'
      }
    ]
  },
  {
    id: 'payment',
    name: 'Payment & Billing',
    icon: CreditCard,
    faqs: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and buy-now-pay-later options like Klarna and Afterpay.'
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Absolutely! We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.'
      },
      {
        question: 'When will I be charged for my order?',
        answer: 'Your payment method is charged when your order is processed, typically within 1-2 hours of placing your order. For pre-orders, you\'ll be charged when the item ships.'
      },
      {
        question: 'Can I use multiple payment methods for one order?',
        answer: 'Currently, we only accept one payment method per order. However, you can use gift cards in combination with another payment method.'
      },
      {
        question: 'Do you offer price matching?',
        answer: 'Yes, we offer price matching on identical items from authorized retailers. Contact customer service with proof of the lower price within 7 days of your purchase.'
      }
    ]
  },
  {
    id: 'account',
    name: 'Account & Profile',
    icon: User,
    faqs: [
      {
        question: 'How do I create an account?',
        answer: 'Click "Sign Up" in the top right corner of our website. You can create an account using your email address or sign up with Google, Facebook, or Apple.'
      },
      {
        question: 'I forgot my password. How do I reset it?',
        answer: 'Click "Forgot Password" on the login page and enter your email address. You\'ll receive a password reset link within a few minutes. Check your spam folder if you don\'t see it.'
      },
      {
        question: 'How do I update my account information?',
        answer: 'Log into your account and go to "Account Settings" to update your personal information, shipping addresses, and payment methods.'
      },
      {
        question: 'Can I delete my account?',
        answer: 'Yes, you can delete your account by contacting customer service. Note that this action is permanent and cannot be undone. Your order history will be retained for our records.'
      },
      {
        question: 'How do I manage my email preferences?',
        answer: 'In your account settings, go to "Email Preferences" to choose which types of emails you\'d like to receive. You can also unsubscribe from promotional emails using the link in any email we send.'
      }
    ]
  },
  {
    id: 'products',
    name: 'Products & Sizing',
    icon: Shield,
    faqs: [
      {
        question: 'How do I find the right size?',
        answer: 'Check our Size Guide for detailed measurements and sizing charts. Each product page also includes specific sizing information. When in doubt, we recommend sizing up as you can always exchange for a smaller size.'
      },
      {
        question: 'Are product photos accurate?',
        answer: 'We strive to show accurate colors and details in our photos. However, colors may vary slightly due to different monitor settings. Check product descriptions for detailed information.'
      },
      {
        question: 'How do I know if an item is in stock?',
        answer: 'Stock availability is shown on each product page. If an item is out of stock, you can sign up for restock notifications to be alerted when it becomes available again.'
      },
      {
        question: 'Do you offer product warranties?',
        answer: 'Yes, most products come with manufacturer warranties. Warranty terms vary by product and brand. Check individual product pages for specific warranty information.'
      },
      {
        question: 'Can I see more photos or details of a product?',
        answer: 'Product pages include multiple photos, detailed descriptions, specifications, and customer reviews. You can also contact customer service for additional information.'
      }
    ]
  },
  {
    id: 'technical',
    name: 'Website & Technical',
    icon: Shield,
    faqs: [
      {
        question: 'Why is the website running slowly?',
        answer: 'This could be due to high traffic or your internet connection. Try refreshing the page, clearing your browser cache, or trying a different browser. If issues persist, contact our support team.'
      },
      {
        question: 'I can\'t add items to my cart. What\'s wrong?',
        answer: 'Make sure cookies are enabled in your browser. Try refreshing the page or clearing your browser cache. If you\'re still having issues, try using a different browser or device.'
      },
      {
        question: 'Is your website secure?',
        answer: 'Yes, our website uses SSL encryption to protect your personal and payment information. Look for the padlock icon in your browser\'s address bar when entering sensitive information.'
      },
      {
        question: 'Do you have a mobile app?',
        answer: 'Yes! Our mobile app is available for iOS and Android devices. Download it from the App Store or Google Play for a better shopping experience on your phone.'
      },
      {
        question: 'Why am I seeing different prices on mobile vs desktop?',
        answer: 'Prices should be consistent across all platforms. If you see different prices, try refreshing both pages or clearing your browser cache. Contact us if the issue persists.'
      }
    ]
  }
];

export default function FAQPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('orders');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter FAQs based on search query
    alert(`Searching for: ${searchQuery}`);
  };

  const toggleFAQ = (categoryId: string, faqIndex: number) => {
    const faqKey = `${categoryId}-${faqIndex}`;
    setExpandedFAQ(expandedFAQ === faqKey ? null : faqKey);
  };

  const currentCategory = faqCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <HelpCircle className="h-16 w-16 mx-auto mb-4 text-indigo-200" />
              <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                Find answers to the most common questions about our products, services, and policies
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search frequently asked questions..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4"
              >
                Search
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <nav className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <category.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b">
                  <div className="flex items-center space-x-3">
                    {currentCategory && <currentCategory.icon className="h-6 w-6 text-indigo-600" />}
                    <h2 className="text-2xl font-bold text-gray-900">{currentCategory?.name}</h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {currentCategory?.faqs.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFAQ(selectedCategory, index)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          {expandedFAQ === `${selectedCategory}-${index}` ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {expandedFAQ === `${selectedCategory}-${index}` && (
                          <div className="p-4 pt-0 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our customer support team is here to help 24/7.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-400 text-sm mb-4">Mon-Fri 9AM-8PM EST</p>
                  <Button variant="outline" size="sm" className="text-gray-900">
                    Call Now
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-400 text-sm mb-4">Available 24/7</p>
                  <Button variant="outline" size="sm" className="text-gray-900">
                    Start Chat
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-400 text-sm mb-4">Response within 24hrs</p>
                  <Button variant="outline" size="sm" className="text-gray-900">
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mt-12 bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Help Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <Package className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Order Tracking Guide</h3>
                <p className="text-gray-600 text-sm">Learn how to track your order and understand delivery statuses.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <RotateCcw className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Return Process</h3>
                <p className="text-gray-600 text-sm">Step-by-step guide to returning and exchanging items.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <CreditCard className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Payment Options</h3>
                <p className="text-gray-600 text-sm">Overview of all available payment methods and security.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}