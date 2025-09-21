'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { categories } from '@/data/mockData';
import { ChevronRight, Grid, Package, TrendingUp } from 'lucide-react';

export default function CategoriesPage() {
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
                Shop by Categories
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Discover amazing products across all our categories. From the latest electronics to trendy fashion.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/?categories=${encodeURIComponent(category.name)}`}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      {category.name === 'Electronics' && <Grid className="h-6 w-6 text-blue-600" />}
                      {category.name === 'Fashion' && <TrendingUp className="h-6 w-6 text-blue-600" />}
                      {category.name === 'Home & Garden' && <Package className="h-6 w-6 text-blue-600" />}
                      {category.name === 'Sports & Outdoors' && <TrendingUp className="h-6 w-6 text-blue-600" />}
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {category.count} products
                    </Badge>
                  </div>
                  
                  {/* Subcategories */}
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 mb-2">Popular:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.subcategories.slice(0, 3).map((sub) => (
                          <span
                            key={sub.id}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                          >
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Shop with Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer the best selection, competitive prices, and excellent customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                <p className="text-gray-600">Carefully curated selection from trusted brands</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-gray-600">Competitive pricing with regular deals and discounts</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Grid className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Shopping</h3>
                <p className="text-gray-600">Intuitive interface with powerful filters and search</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}