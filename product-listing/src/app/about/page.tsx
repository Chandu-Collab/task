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
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/15 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-white/25 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                  ✨ Trusted Since 2020
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                About Our Store
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Your trusted destination for quality products and exceptional service, 
                <span className="text-white font-semibold"> building dreams since 2020.</span>
              </p>
              
              {/* Stats Preview */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="glass-card px-6 py-3">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-blue-200">Happy Customers</div>
                </div>
                <div className="glass-card px-6 py-3">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-blue-200">Products</div>
                </div>
                <div className="glass-card px-6 py-3">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Our Story */}
          <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 relative">
                  Building Trust Through Quality
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Founded in 2020, our store has been dedicated to bringing you the finest products 
                    from around the world. We believe that everyone deserves access to quality items 
                    that enhance their daily lives.
                  </p>
                  <p className="text-lg">
                    What started as a small family business has grown into a trusted online destination 
                    for thousands of customers. Our commitment to excellence, customer satisfaction, 
                    and competitive pricing remains at the heart of everything we do.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Badge variant="new" className="px-4 py-2 text-sm hover:scale-105 transition-transform">
                    4+ Years Experience
                  </Badge>
                  <Badge variant="hot" className="px-4 py-2 text-sm hover:scale-105 transition-transform">
                    10K+ Happy Customers
                  </Badge>
                  <Badge variant="sale" className="px-4 py-2 text-sm hover:scale-105 transition-transform">
                    1000+ Products
                  </Badge>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">10K+</h4>
                      <p className="text-gray-600 font-medium">Happy Customers</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Package className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">1000+</h4>
                      <p className="text-gray-600 font-medium">Products</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <HeadphonesIcon className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">24/7</h4>
                      <p className="text-gray-600 font-medium">Support</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Clock className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">Fast</h4>
                      <p className="text-gray-600 font-medium">Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20 animate-fade-in-up">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">
                  What Drives Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These core values guide everything we do and help us deliver the best possible experience for our customers.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Package className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Quality First
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We carefully curate every product to ensure it meets our high standards for quality and value.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </div>
              </div>
              
              <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <HeadphonesIcon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Customer Care
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our dedicated support team is always ready to help you with any questions or concerns.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </div>
              </div>
              
              <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Clock className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We work with trusted shipping partners to get your orders to you as quickly as possible.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </div>
              </div>
              
              <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    Community
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're more than a store - we're a community of people who love great products.
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <div className="glass-card p-10 hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 rounded-full text-sm font-medium">
                    We're Here to Help
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Have questions? We'd love to hear from you. Here's how you can reach us.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Mail className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      Email Us
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                        support@store.com
                      </p>
                      <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                        info@store.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Phone className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      Call Us
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      Visit Us
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
                        123 Store Street
                      </p>
                      <p className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <MessageCircle className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      Live Chat
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-500 text-sm">Available 24/7</p>
                      <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}