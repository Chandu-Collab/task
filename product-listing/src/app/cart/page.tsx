'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Minus, 
  Plus, 
  X, 
  ShoppingBag, 
  ArrowLeft,
  Truck,
  Shield,
  CreditCard,
  Gift
} from 'lucide-react';

// Mock cart data - in real app this would come from context/state
const mockCartItems = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    brand: 'AudioTech',
    price: 99.99,
    discountPrice: 79.99,
    quantity: 2,
    color: 'Black',
    size: 'One Size',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format'
  },
  {
    id: '2', 
    name: 'Premium Cotton T-Shirt',
    brand: 'ComfortWear',
    price: 29.99,
    quantity: 1,
    color: 'Navy Blue',
    size: 'M',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format'
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    brand: 'TechFit',
    price: 199.99,
    discountPrice: 149.99,
    quantity: 1,
    color: 'Space Gray',
    size: '42mm',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format'
  }
];

export default function CartPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    // Mock promo code validation
    if (promoCode.toLowerCase() === 'save10') {
      setAppliedPromo('SAVE10');
      setPromoCode('');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.discountPrice || item.price;
    return sum + (price * item.quantity);
  }, 0);

  const promoDiscount = appliedPromo === 'SAVE10' ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal - promoDiscount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar 
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-12">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
            <Link href="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
                <p className="text-gray-600 mt-1">{cartItems.length} items in your cart</p>
              </div>
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6">
                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-center space-x-4">
                          {/* Product Image */}
                          <div className="relative h-20 w-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                  <Link 
                                    href={`/product/${item.id}`}
                                    className="hover:text-blue-600"
                                  >
                                    {item.name}
                                  </Link>
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">{item.brand}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                  {item.color && (
                                    <span className="text-sm text-gray-600">
                                      Color: <span className="font-medium">{item.color}</span>
                                    </span>
                                  )}
                                  {item.size && (
                                    <span className="text-sm text-gray-600">
                                      Size: <span className="font-medium">{item.size}</span>
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              {/* Remove Button */}
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-gray-600 p-1"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>

                            {/* Price and Quantity */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center space-x-2">
                                {item.discountPrice ? (
                                  <>
                                    <span className="text-lg font-semibold text-gray-900">
                                      ${item.discountPrice}
                                    </span>
                                    <span className="text-sm text-gray-500 line-through">
                                      ${item.price}
                                    </span>
                                    <Badge variant="discount">
                                      Save ${(item.price - item.discountPrice).toFixed(2)}
                                    </Badge>
                                  </>
                                ) : (
                                  <span className="text-lg font-semibold text-gray-900">
                                    ${item.price}
                                  </span>
                                )}
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center border border-gray-200 rounded-md">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-2 hover:bg-gray-100"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4 py-2 font-medium">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-2 hover:bg-gray-100"
                                  disabled={item.quantity >= 10}
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {index < cartItems.length - 1 && (
                          <hr className="mt-6 border-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      {subtotal >= 50 ? 'Free shipping included!' : `Add $${(50 - subtotal).toFixed(2)} more for free shipping`}
                    </p>
                    <p className="text-xs text-blue-700">
                      Estimated delivery: 2-3 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm sticky top-4">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Promo Code
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Button 
                        onClick={applyPromoCode}
                        size="sm"
                        disabled={!promoCode}
                      >
                        Apply
                      </Button>
                    </div>
                    {appliedPromo && (
                      <div className="flex items-center justify-between mt-2 p-2 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex items-center space-x-2">
                          <Gift className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-800">
                            {appliedPromo} applied
                          </span>
                        </div>
                        <button
                          onClick={removePromoCode}
                          className="text-green-600 hover:text-green-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {appliedPromo && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">Promo discount ({appliedPromo})</span>
                        <span className="font-medium text-green-600">-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    
                    <hr className="border-gray-200" />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button className="w-full mb-4" size="lg">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Proceed to Checkout
                  </Button>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Need Help?</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Free returns within 30 days</p>
                  <p>• 24/7 customer support</p>
                  <p>• Price match guarantee</p>
                </div>
                <Link href="/contact" className="inline-block mt-3">
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}