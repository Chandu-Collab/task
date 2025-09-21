'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  RotateCcw, 
  Package, 
  CheckCircle, 
  AlertCircle, 
  Calendar, 
  Truck,
  CreditCard,
  Mail,
  Phone,
  FileText,
  Clock,
  Shield
} from 'lucide-react';

const returnReasons = [
  'Defective or damaged item',
  'Wrong item received',
  'Item doesn\'t fit',
  'Item doesn\'t match description',
  'Changed my mind',
  'Found better price elsewhere',
  'Ordered by mistake',
  'Other'
];

const returnPolicyPoints = [
  {
    title: '30-Day Return Window',
    description: 'Items can be returned within 30 days of delivery',
    icon: Calendar
  },
  {
    title: 'Original Condition',
    description: 'Items must be unused, unworn, and in original packaging',
    icon: Package
  },
  {
    title: 'Free Return Shipping',
    description: 'We provide prepaid return labels for eligible items',
    icon: Truck
  },
  {
    title: 'Quick Refunds',
    description: 'Refunds processed within 5-7 business days',
    icon: CreditCard
  }
];

const returnProcess = [
  {
    step: 1,
    title: 'Initiate Return',
    description: 'Fill out the return form with your order details'
  },
  {
    step: 2,
    title: 'Print Label',
    description: 'Download and print the prepaid return shipping label'
  },
  {
    step: 3,
    title: 'Package Item',
    description: 'Pack item securely in original packaging if possible'
  },
  {
    step: 4,
    title: 'Ship Back',
    description: 'Drop off package at any authorized shipping location'
  },
  {
    step: 5,
    title: 'Get Refund',
    description: 'Receive refund once item is received and processed'
  }
];

export default function ReturnsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [returnForm, setReturnForm] = useState({
    orderNumber: '',
    email: '',
    itemId: '',
    reason: '',
    description: '',
    refundMethod: 'original'
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setReturnForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitReturn = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Return request submitted! You will receive an email with return instructions within 24 hours.');
    setReturnForm({
      orderNumber: '',
      email: '',
      itemId: '',
      reason: '',
      description: '',
      refundMethod: 'original'
    });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <RotateCcw className="h-16 w-16 mx-auto mb-4 text-green-200" />
              <h1 className="text-4xl font-bold mb-4">Returns & Exchanges</h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Not completely satisfied? No problem! We offer easy returns and exchanges 
                to ensure you're happy with your purchase.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Quick Actions */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                <RotateCcw className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start a Return</h3>
                <p className="text-gray-600 mb-4">
                  Return an item you're not satisfied with
                </p>
                <Button 
                  onClick={() => setShowForm(true)}
                  className="w-full"
                >
                  Start Return Process
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                <Package className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Track Return Status</h3>
                <p className="text-gray-600 mb-4">
                  Check the status of your existing return
                </p>
                <Button variant="outline" className="w-full">
                  Track Return
                </Button>
              </div>
            </div>
          </div>

          {/* Return Form */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Start Return Process</h2>
                    <button 
                      onClick={() => setShowForm(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleSubmitReturn} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Order Number *
                        </label>
                        <input
                          type="text"
                          value={returnForm.orderNumber}
                          onChange={(e) => handleInputChange('orderNumber', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="ORD-123456789"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={returnForm.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Item to Return
                      </label>
                      <input
                        type="text"
                        value={returnForm.itemId}
                        onChange={(e) => handleInputChange('itemId', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Product name or SKU"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Reason for Return *
                      </label>
                      <select
                        value={returnForm.reason}
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">Select a reason</option>
                        {returnReasons.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        value={returnForm.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Please provide any additional details about the return..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Refund Method
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="original"
                            checked={returnForm.refundMethod === 'original'}
                            onChange={(e) => handleInputChange('refundMethod', e.target.value)}
                            className="mr-2"
                          />
                          <span>Refund to original payment method</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="store-credit"
                            checked={returnForm.refundMethod === 'store-credit'}
                            onChange={(e) => handleInputChange('refundMethod', e.target.value)}
                            className="mr-2"
                          />
                          <span>Store credit (get 10% bonus)</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1">
                        Submit Return Request
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Return Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Return Policy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {returnPolicyPoints.map((point, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <point.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Return Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Returns Work</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {returnProcess.map((step, index) => (
                  <div key={step.step} className="text-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Return Conditions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* What Can Be Returned */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                What Can Be Returned
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items in original, unused condition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items with original tags and packaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items returned within 30 days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items with proof of purchase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Defective or damaged items</span>
                </li>
              </ul>
            </div>

            {/* What Cannot Be Returned */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                What Cannot Be Returned
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personalized or customized items</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Perishable goods</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items returned after 30 days</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items without original packaging</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Gift cards and digital products</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How long do I have to return an item?</h4>
                <p className="text-gray-600">You have 30 days from the delivery date to initiate a return. After 30 days, we cannot accept returns unless the item is defective.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How much does return shipping cost?</h4>
                <p className="text-gray-600">Return shipping is free for defective items or our errors. For other returns, we provide prepaid labels and deduct $5.99 from your refund.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">When will I receive my refund?</h4>
                <p className="text-gray-600">Refunds are processed within 5-7 business days after we receive your returned item. It may take additional time for your bank to process the refund.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I exchange an item instead of returning it?</h4>
                <p className="text-gray-600">Yes! You can request an exchange for a different size or color. Processing time is typically faster than a return and repurchase.</p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help with Your Return?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our customer service team is here to help with any questions about returns or exchanges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Button variant="outline" className="text-gray-900">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline" className="text-gray-900">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
                <Button variant="outline" className="text-gray-900">
                  <FileText className="h-4 w-4 mr-2" />
                  Return Policy
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