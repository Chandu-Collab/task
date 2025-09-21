'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  HeadphonesIcon,
  Users,
  Package
} from 'lucide-react';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About Our Store
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Your trusted destination for quality products and exceptional service since 2020.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Building Trust Through Quality
                </h3>
                <p className="text-gray-600 mb-4">
                  Founded in 2020, our store has been dedicated to bringing you the finest products 
                  from around the world. We believe that everyone deserves access to quality items 
                  that enhance their daily lives.
                </p>
                <p className="text-gray-600 mb-6">
                  What started as a small family business has grown into a trusted online destination 
                  for thousands of customers. Our commitment to excellence, customer satisfaction, 
                  and competitive pricing remains at the heart of everything we do.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="new">4+ Years Experience</Badge>
                  <Badge variant="hot">10K+ Happy Customers</Badge>
                  <Badge variant="sale">1000+ Products</Badge>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">10K+</h4>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Package className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">1000+</h4>
                    <p className="text-sm text-gray-600">Products</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <HeadphonesIcon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">24/7</h4>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Fast</h4>
                    <p className="text-sm text-gray-600">Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and help us deliver the best possible experience for our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We carefully curate every product to ensure it meets our high standards for quality and value.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Care</h3>
                <p className="text-gray-600">
                  Our dedicated support team is always ready to help you with any questions or concerns.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  We work with trusted shipping partners to get your orders to you as quickly as possible.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  We're more than a store - we're a community of people who love great products.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Here's how you can reach us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">support@store.com</p>
                <p className="text-gray-600 text-sm">info@store.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">123 Store Street</p>
                <p className="text-gray-600 text-sm">City, State 12345</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm">Available 24/7</p>
                <Button size="sm" className="mt-2">
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