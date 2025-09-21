'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Gift, Heart, Calendar, Mail, Smartphone, CreditCard, Check, Star } from 'lucide-react';

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [deliveryMethod, setDeliveryMethod] = useState('email');
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    personalMessage: '',
    deliveryDate: ''
  });

  const giftAmounts = [25, 50, 100, 150, 200, 500];
  
  const themes = [
    {
      id: 'birthday',
      name: 'Birthday',
      color: 'bg-pink-100',
      textColor: 'text-pink-800',
      icon: '🎂'
    },
    {
      id: 'anniversary',
      name: 'Anniversary',
      color: 'bg-red-100',
      textColor: 'text-red-800',
      icon: '💕'
    },
    {
      id: 'graduation',
      name: 'Graduation',
      color: 'bg-blue-100',
      textColor: 'text-blue-800',
      icon: '🎓'
    },
    {
      id: 'holiday',
      name: 'Holiday',
      color: 'bg-green-100',
      textColor: 'text-green-800',
      icon: '🎄'
    },
    {
      id: 'thankyou',
      name: 'Thank You',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      icon: '🙏'
    },
    {
      id: 'general',
      name: 'General',
      color: 'bg-purple-100',
      textColor: 'text-purple-800',
      icon: '🎁'
    }
  ];

  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const features = [
    {
      icon: Gift,
      title: "No Expiration Date",
      description: "Our gift cards never expire, giving recipients plenty of time to find the perfect items."
    },
    {
      icon: Heart,
      title: "Perfect for Anyone",
      description: "From fashion lovers to home decorators, gift cards work for all our product categories."
    },
    {
      icon: Calendar,
      title: "Flexible Delivery",
      description: "Send instantly via email or schedule delivery for a special date."
    },
    {
      icon: CreditCard,
      title: "Easy to Use",
      description: "Recipients can use gift cards online or combine with other payment methods."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePurchase = () => {
    // Handle gift card purchase
    console.log('Gift card purchase:', {
      amount: selectedAmount,
      theme: selectedTheme,
      delivery: deliveryMethod,
      ...formData
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMobileMenuToggle={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-purple-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <Gift className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">
              Give the Perfect Gift
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
              StyleHub Gift Cards are the perfect way to show you care. 
              Let your loved ones choose exactly what they want from our entire collection.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>No Expiration Date</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Any Amount</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Purchase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Purchase Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Create Your Gift Card
                </h2>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {giftAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`p-4 rounded-lg border-2 font-semibold transition-colors ${
                          selectedAmount === amount
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label htmlFor="customAmount" className="block text-sm text-gray-600 mb-2">
                      Or enter custom amount ($10 - $1000)
                    </label>
                    <input
                      type="number"
                      id="customAmount"
                      min="10"
                      max="1000"
                      placeholder="Enter amount"
                      onChange={(e) => setSelectedAmount(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Theme Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Choose Theme
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => setSelectedTheme(theme)}
                        className={`p-4 rounded-lg border-2 text-center transition-colors ${
                          selectedTheme.id === theme.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-1">{theme.icon}</div>
                        <div className="text-sm font-medium">{theme.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Method */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Delivery Method
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="delivery"
                        value="email"
                        checked={deliveryMethod === 'email'}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="mr-3"
                      />
                      <Mail className="h-5 w-5 mr-2" />
                      <span>Email (Instant delivery)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="delivery"
                        value="sms"
                        checked={deliveryMethod === 'sms'}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="mr-3"
                      />
                      <Smartphone className="h-5 w-5 mr-2" />
                      <span>Text Message</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="delivery"
                        value="print"
                        checked={deliveryMethod === 'print'}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="mr-3"
                      />
                      <Gift className="h-5 w-5 mr-2" />
                      <span>Print at Home</span>
                    </label>
                  </div>
                </div>

                {/* Recipient Information */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-2">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {deliveryMethod !== 'print' && (
                    <div>
                      <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        {deliveryMethod === 'email' ? 'Recipient Email' : 'Recipient Phone'}
                      </label>
                      <input
                        type={deliveryMethod === 'email' ? 'email' : 'tel'}
                        id="recipientEmail"
                        name="recipientEmail"
                        value={formData.recipientEmail}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="senderName"
                      name="senderName"
                      value={formData.senderName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="personalMessage" className="block text-sm font-medium text-gray-700 mb-2">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      id="personalMessage"
                      name="personalMessage"
                      rows={4}
                      value={formData.personalMessage}
                      onChange={handleInputChange}
                      placeholder="Add a personal touch to your gift..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Card */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Gift Card Preview
                </h3>
                
                <div className={`${selectedTheme.color} rounded-lg p-6 mb-6`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4">{selectedTheme.icon}</div>
                    <h4 className={`text-xl font-bold ${selectedTheme.textColor} mb-2`}>
                      StyleHub Gift Card
                    </h4>
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      ${selectedAmount}
                    </div>
                    {formData.recipientName && (
                      <p className="text-gray-600 mb-2">
                        For: {formData.recipientName}
                      </p>
                    )}
                    {formData.senderName && (
                      <p className="text-gray-600 mb-2">
                        From: {formData.senderName}
                      </p>
                    )}
                    {formData.personalMessage && (
                      <p className="text-gray-600 text-sm italic">
                        "{formData.personalMessage}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gift Card Value:</span>
                    <span className="font-semibold">${selectedAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Fee:</span>
                    <span className="font-semibold">FREE</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>${selectedAmount}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handlePurchase}
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Purchase Gift Card
                </Button>

                <p className="text-gray-500 text-sm text-center mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose StyleHub Gift Cards?
            </h2>
            <p className="text-lg text-gray-600">
              The perfect gift for any occasion
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Occasions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for Any Occasion
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { occasion: "Birthday", description: "Celebrate another year of style", popular: "$75" },
              { occasion: "Anniversary", description: "Mark special milestones together", popular: "$150" },
              { occasion: "Graduation", description: "Congratulate their achievements", popular: "$100" },
              { occasion: "Wedding", description: "Perfect for happy couples", popular: "$200" },
              { occasion: "Holiday", description: "Spread joy during the season", popular: "$100" },
              { occasion: "Thank You", description: "Show your appreciation", popular: "$50" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.occasion}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-3 py-1 shadow-sm">
                  Most popular: {item.popular}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                rating: 5,
                review: "Perfect gift for my sister! She loved being able to choose exactly what she wanted.",
                occasion: "Birthday"
              },
              {
                name: "Mike D.",
                rating: 5,
                review: "Super easy to purchase and send. The personalized message was a nice touch.",
                occasion: "Anniversary"
              },
              {
                name: "Emily R.",
                rating: 5,
                review: "Great selection of themes and the instant delivery was perfect for a last-minute gift.",
                occasion: "Thank You"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">({review.rating}.0)</span>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{review.review}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{review.name}</span>
                  <Badge variant="outline">{review.occasion}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}