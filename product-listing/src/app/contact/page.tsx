'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  HeadphonesIcon,
  Star
} from 'lucide-react';

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-600 via-blue-600 to-teal-700 text-white py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-16 w-24 h-24 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-24 w-16 h-16 bg-white/15 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-white/25 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                  💬 We're Here to Help
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                We'd love to hear from you. Send us a message and we'll respond 
                <span className="text-white font-semibold"> as soon as possible.</span>
              </p>
              
              {/* Quick Contact Options */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="glass-card px-4 py-2 flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">Call Now</span>
                </div>
                <div className="glass-card px-4 py-2 flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">Email Us</span>
                </div>
                <div className="glass-card px-4 py-2 flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">Live Chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="glass-card p-10 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-medium">
                      📝 Send Message
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md group-hover:border-blue-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md group-hover:border-blue-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md group-hover:border-blue-300"
                      placeholder="What is this about?"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 hover:shadow-md group-hover:border-blue-300"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {/* Contact Details */}
              <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium">
                      📞 Contact Info
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-600">Multiple ways to reach our friendly support team</p>
                </div>
                
                <div className="space-y-8">
                  <div className="group flex items-start hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Email Us</h3>
                      <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-lg">support@store.com</p>
                      <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">info@store.com</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Call Us</h3>
                      <p className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer text-lg font-medium">+1 (555) 123-4567</p>
                      <p className="text-gray-500">Monday - Friday, 9AM - 6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Visit Us</h3>
                      <div className="text-gray-600 space-y-1">
                        <p className="hover:text-purple-600 transition-colors cursor-pointer">123 Store Street</p>
                        <p className="hover:text-purple-600 transition-colors cursor-pointer">Business District</p>
                        <p className="hover:text-purple-600 transition-colors cursor-pointer">City, State 12345</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group flex items-start hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9AM - 6PM</p>
                        <p>Saturday: 10AM - 4PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Support */}
              <div className="glass-card bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 text-white hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <HeadphonesIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Need Quick Help?</h3>
                </div>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Our support team is available 24/7 to help you with any questions or issues.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 py-3"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Start Live Chat
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 py-3"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Support
                  </Button>
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 rounded-full text-sm font-medium">
                      ⭐ Testimonials
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
                  <p className="text-gray-600">Real feedback from our valued customers</p>
                </div>
                
                <div className="space-y-6">
                  <div className="group glass-card p-6 border-l-4 border-blue-600 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current group-hover:scale-110 transition-transform" style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                      </div>
                      <span className="text-lg font-bold text-gray-900">5.0</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                      "Excellent customer service! They resolved my issue within minutes. The support team is incredibly helpful and professional."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        S
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Sarah M.</p>
                        <p className="text-sm text-gray-500">Verified Customer</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group glass-card p-6 border-l-4 border-green-600 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current group-hover:scale-110 transition-transform" style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                      </div>
                      <span className="text-lg font-bold text-gray-900">5.0</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                      "Very responsive team. Got answers to all my questions quickly and they went above and beyond to help me out."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        J
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">John D.</p>
                        <p className="text-sm text-gray-500">Verified Customer</p>
                      </div>
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