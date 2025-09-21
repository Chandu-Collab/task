'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Package, 
  Search, 
  Truck, 
  CheckCircle, 
  Clock, 
  MapPin,
  Calendar,
  User,
  Phone,
  Mail,
  AlertCircle,
  PackageCheck,
  MessageCircle
} from 'lucide-react';

// Mock order data
const mockOrder = {
  orderNumber: 'ORD-123456789',
  status: 'In Transit',
  estimatedDelivery: '2024-01-25',
  carrier: 'FedEx',
  trackingNumber: '1234567890123456',
  orderDate: '2024-01-20',
  items: [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      quantity: 1,
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center&auto=format'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      quantity: 1,
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center&auto=format'
    }
  ],
  shippingAddress: {
    name: 'John Doe',
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    phone: '+1 (555) 123-4567'
  },
  timeline: [
    {
      status: 'Order Placed',
      date: '2024-01-20',
      time: '10:30 AM',
      completed: true,
      description: 'Your order has been received and is being processed'
    },
    {
      status: 'Order Confirmed',
      date: '2024-01-20',
      time: '11:15 AM',
      completed: true,
      description: 'Payment confirmed and order approved'
    },
    {
      status: 'Preparing for Shipment',
      date: '2024-01-21',
      time: '2:00 PM',
      completed: true,
      description: 'Items are being picked and packed'
    },
    {
      status: 'Shipped',
      date: '2024-01-22',
      time: '9:00 AM',
      completed: true,
      description: 'Package has been dispatched'
    },
    {
      status: 'In Transit',
      date: '2024-01-23',
      time: '3:45 PM',
      completed: true,
      description: 'Package is on its way to you',
      current: true
    },
    {
      status: 'Out for Delivery',
      date: '2024-01-25',
      time: 'Expected',
      completed: false,
      description: 'Package is out for delivery'
    },
    {
      status: 'Delivered',
      date: '2024-01-25',
      time: 'Expected',
      completed: false,
      description: 'Package has been delivered'
    }
  ]
};

export default function TrackOrderPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderData, setOrderData] = useState<typeof mockOrder | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      setSearchError('Please enter an order number');
      return;
    }

    setIsSearching(true);
    setSearchError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (orderNumber === 'ORD-123456789') {
      setOrderData(mockOrder);
    } else {
      setSearchError('Order not found. Please check your order number and try again.');
      setOrderData(null);
    }

    setIsSearching(false);
  };

  const getStatusIcon = (status: string, completed: boolean, current?: boolean) => {
    if (current) {
      return <Truck className="h-5 w-5 text-blue-600" />;
    }
    if (completed) {
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    }
    return <Clock className="h-5 w-5 text-gray-400" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500';
      case 'In Transit':
      case 'Out for Delivery':
        return 'bg-blue-500';
      case 'Shipped':
        return 'bg-yellow-500';
      case 'Processing':
        return 'bg-orange-500';
      case 'Cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
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
              <Package className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Enter your order details to get real-time updates on your shipment
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Track Order Form */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Your Order</h2>
              
              <form onSubmit={handleTrackOrder} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Number *
                  </label>
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ORD-123456789"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address (optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                {searchError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center text-red-700">
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{searchError}</span>
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSearching}
                >
                  {isSearching ? (
                    'Searching...'
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Track Order
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> You can find your order number in your confirmation email or account dashboard.
                  Try order number <code className="bg-blue-200 px-2 py-1 rounded">ORD-123456789</code> for demo.
                </p>
              </div>
            </div>
          </div>

          {/* Order Details */}
          {orderData && (
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Order {orderData.orderNumber}</h2>
                    <p className="text-gray-600">Placed on {orderData.orderDate}</p>
                  </div>
                  <Badge 
                    className={`${getStatusColor(orderData.status)} text-white px-4 py-2`}
                  >
                    {orderData.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Estimated Delivery</div>
                      <div className="font-semibold">{orderData.estimatedDelivery}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Carrier</div>
                      <div className="font-semibold">{orderData.carrier}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Tracking Number</div>
                      <div className="font-semibold font-mono text-sm">{orderData.trackingNumber}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tracking Information</h3>
                
                <div className="relative">
                  {orderData.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4 pb-8 last:pb-0">
                      {/* Timeline Line */}
                      {index < orderData.timeline.length - 1 && (
                        <div className={`absolute left-2.5 top-6 w-0.5 h-16 ${
                          event.completed ? 'bg-green-200' : 'bg-gray-200'
                        }`} />
                      )}
                      
                      {/* Status Icon */}
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        event.current 
                          ? 'border-blue-500 bg-blue-50' 
                          : event.completed 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-300 bg-gray-50'
                      }`}>
                        {getStatusIcon(event.status, event.completed, event.current)}
                      </div>
                      
                      {/* Event Details */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${
                            event.current ? 'text-blue-900' : event.completed ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {event.status}
                          </h4>
                          <div className={`text-sm ${
                            event.completed ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {event.date} {event.time !== 'Expected' && `at ${event.time}`}
                          </div>
                        </div>
                        <p className={`text-sm mt-1 ${
                          event.completed ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Order Items */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Items in this Order</h3>
                  
                  <div className="space-y-4">
                    {orderData.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0">
                          {/* Item image placeholder */}
                          <PackageCheck className="h-12 w-12 text-gray-400 p-2" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${item.price.toFixed(2)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Delivery Address
                  </h3>
                  
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{orderData.shippingAddress.name}</span>
                    </div>
                    <div className="ml-6">
                      <div>{orderData.shippingAddress.street}</div>
                      <div>
                        {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{orderData.shippingAddress.phone}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Need help with your order?</h4>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Support
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Package className="h-4 w-4 mr-2" />
                        Manage Delivery
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help with Your Order?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find your order or have questions about delivery? We're here to help.
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
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Live Chat
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