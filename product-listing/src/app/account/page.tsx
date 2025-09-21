'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  CreditCard,
  MapPin,
  Bell,
  Eye,
  EyeOff,
  Edit3,
  Save,
  X,
  Truck,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';

// Mock user data
const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&q=80',
  joinDate: '2023-01-15',
  totalOrders: 24,
  totalSpent: 2847.50,
  loyaltyPoints: 1250
};

// Mock orders data
const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-03-20',
    status: 'delivered',
    total: 159.99,
    items: 3,
    trackingNumber: 'TRK123456789',
    products: [
      { name: 'Wireless Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&auto=format' },
      { name: 'Phone Case', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop&auto=format' }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-03-15',
    status: 'shipped',
    total: 89.99,
    items: 1,
    trackingNumber: 'TRK987654321',
    products: [
      { name: 'Cotton T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop&auto=format' }
    ]
  },
  {
    id: 'ORD-003',
    date: '2024-03-10',
    status: 'processing',
    total: 249.99,
    items: 2,
    products: [
      { name: 'Smart Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&auto=format' }
    ]
  }
];

// Mock addresses
const mockAddresses = [
  {
    id: '1',
    type: 'home',
    name: 'Home',
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    isDefault: true
  },
  {
    id: '2',
    type: 'work',
    name: 'Work',
    street: '456 Business Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10002',
    country: 'United States',
    isDefault: false
  }
];

type TabType = 'profile' | 'orders' | 'addresses' | 'settings';

export default function AccountPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [addresses, setAddresses] = useState(mockAddresses);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(prev => ({
      ...prev,
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setIsEditing(false);
    setShowChangePassword(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-600" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'shipped':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'processing':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 bg-gray-100 rounded-full overflow-hidden">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">Member since {new Date(user.joinDate).getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Account Stats */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{user.totalOrders}</div>
                      <div className="text-sm text-blue-800">Total Orders</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">${user.totalSpent.toFixed(2)}</div>
                      <div className="text-sm text-green-800">Total Spent</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{user.loyaltyPoints}</div>
                      <div className="text-sm text-purple-800">Loyalty Points</div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as TabType)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-blue-50 text-blue-600 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Actions */}
                <div className="mt-6 pt-6 border-t">
                  <div className="space-y-2">
                    <Link href="/favorites" className="w-full">
                      <Button variant="outline" className="w-full justify-start">
                        <Heart className="h-4 w-4 mr-2" />
                        My Favorites
                      </Button>
                    </Link>
                    <Link href="/cart" className="w-full">
                      <Button variant="outline" className="w-full justify-start">
                        <Package className="h-4 w-4 mr-2" />
                        View Cart
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                      {!isEditing ? (
                        <Button onClick={() => setIsEditing(true)} variant="outline">
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      ) : (
                        <div className="space-x-2">
                          <Button onClick={handleSave}>
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button onClick={handleCancel} variant="outline">
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{user.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{user.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        {isEditing ? (
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{user.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Member Since
                        </label>
                        <p className="text-gray-900 py-2">
                          {new Date(user.joinDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Change Password Section */}
                    <div className="mt-8 pt-8 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Password</h3>
                        <Button
                          onClick={() => setShowChangePassword(!showChangePassword)}
                          variant="outline"
                        >
                          {showChangePassword ? (
                            <>
                              <EyeOff className="h-4 w-4 mr-2" />
                              Cancel
                            </>
                          ) : (
                            <>
                              <Eye className="h-4 w-4 mr-2" />
                              Change Password
                            </>
                          )}
                        </Button>
                      </div>

                      {showChangePassword && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Current Password
                            </label>
                            <input
                              type="password"
                              name="currentPassword"
                              value={formData.currentPassword}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              New Password
                            </label>
                            <input
                              type="password"
                              name="newPassword"
                              value={formData.newPassword}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Orders Tab */}
                {activeTab === 'orders' && (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Order History</h2>
                    
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div>
                                <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                                <p className="text-sm text-gray-600">
                                  Placed on {new Date(order.date).toLocaleDateString()}
                                </p>
                              </div>
                              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(order.status)}`}>
                                {getStatusIcon(order.status)}
                                <span className="capitalize">{order.status}</span>
                              </div>
                            </div>
                            
                            <div className="text-right mt-2 sm:mt-0">
                              <div className="font-semibold text-gray-900">${order.total}</div>
                              <div className="text-sm text-gray-600">{order.items} items</div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 mb-4">
                            {order.products.map((product, idx) => (
                              <div key={idx} className="relative h-12 w-12 bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                            {order.items > order.products.length && (
                              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-600">
                                +{order.items - order.products.length}
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                            <div>
                              {order.trackingNumber && (
                                <p className="text-sm text-gray-600">
                                  Tracking: <span className="font-mono">{order.trackingNumber}</span>
                                </p>
                              )}
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              {order.status === 'delivered' && (
                                <Button variant="outline" size="sm">
                                  Reorder
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Addresses Tab */}
                {activeTab === 'addresses' && (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-gray-900">Saved Addresses</h2>
                      <Button>
                        <MapPin className="h-4 w-4 mr-2" />
                        Add New Address
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {addresses.map((address) => (
                        <div key={address.id} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-gray-900">{address.name}</h3>
                              {address.isDefault && (
                                <Badge>Default</Badge>
                              )}
                            </div>
                            <Button variant="outline" size="sm">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="text-gray-600 space-y-1">
                            <p>{address.street}</p>
                            <p>{address.city}, {address.state} {address.zipCode}</p>
                            <p>{address.country}</p>
                          </div>

                          <div className="mt-4 flex space-x-2">
                            {!address.isDefault && (
                              <Button variant="outline" size="sm">
                                Set as Default
                              </Button>
                            )}
                            <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                    
                    <div className="space-y-6">
                      {/* Notifications */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Bell className="h-5 w-5 text-gray-600" />
                          <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Order Updates</p>
                              <p className="text-sm text-gray-600">Get notified about order status changes</p>
                            </div>
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Promotions & Deals</p>
                              <p className="text-sm text-gray-600">Receive emails about special offers</p>
                            </div>
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">New Products</p>
                              <p className="text-sm text-gray-600">Be the first to know about new arrivals</p>
                            </div>
                            <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                          </div>
                        </div>
                      </div>

                      {/* Payment Methods */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <CreditCard className="h-5 w-5 text-gray-600" />
                            <h3 className="text-lg font-medium text-gray-900">Payment Methods</h3>
                          </div>
                          <Button variant="outline" size="sm">
                            Add Payment Method
                          </Button>
                        </div>
                        
                        <p className="text-gray-600">No payment methods saved yet.</p>
                      </div>

                      {/* Privacy & Security */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy & Security</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Enable
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Data Download</p>
                              <p className="text-sm text-gray-600">Download a copy of your account data</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Request
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900 text-red-600">Delete Account</p>
                              <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
                            </div>
                            <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}