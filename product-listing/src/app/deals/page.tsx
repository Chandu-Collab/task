'use client';

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/ui/ProductCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { products } from '@/data/mockData';
import { Tag, TrendingDown, Clock, Flame } from 'lucide-react';

export default function DealsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter products that have discounts
  const discountedProducts = useMemo(() => {
    return products.filter(product => product.discountPrice && product.discountPrice < product.price)
      .sort((a, b) => {
        const discountA = a.discountPercent || 0;
        const discountB = b.discountPercent || 0;
        return discountB - discountA; // Sort by highest discount first
      });
  }, []);

  const hotProducts = useMemo(() => {
    return products.filter(product => product.isHot);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Flame className="h-8 w-8 mr-2" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Hot Deals & Offers
                </h1>
              </div>
              <p className="text-xl text-red-100 max-w-2xl mx-auto">
                Don't miss out on these amazing deals! Limited time offers on your favorite products.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Badge variant="hot" className="text-base px-4 py-2">
                  Up to 50% OFF
                </Badge>
                <div className="flex items-center text-red-100">
                  <Clock className="h-4 w-4 mr-1" />
                  Limited time only
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Deal Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <TrendingDown className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold">Biggest Discounts</h3>
              </div>
              <p className="text-gray-600 mb-4">Save big with our highest discount items</p>
              <Badge variant="discount">{discountedProducts.length} products</Badge>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Flame className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold">Hot Items</h3>
              </div>
              <p className="text-gray-600 mb-4">Trending products everyone's buying</p>
              <Badge variant="hot">{hotProducts.length} products</Badge>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Tag className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Flash Sales</h3>
              </div>
              <p className="text-gray-600 mb-4">Limited time flash deals</p>
              <Badge variant="sale">Coming Soon</Badge>
            </div>
          </div>

          {/* Discounted Products */}
          {discountedProducts.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Biggest Discounts
                </h2>
                <Button variant="outline" size="sm">
                  View All Deals
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {discountedProducts.slice(0, 8).map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Hot Products */}
          {hotProducts.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  🔥 Hot Products
                </h2>
                <Button variant="outline" size="sm">
                  View All Hot Items
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {hotProducts.slice(0, 8).map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Never Miss a Deal!</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive deals, flash sales, and new arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}