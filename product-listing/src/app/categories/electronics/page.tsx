'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/ui/ProductCard';
import { SortDropdown } from '@/components/ui/SortDropdown';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Filter, Grid, List, Smartphone, Laptop, Headphones } from 'lucide-react';
import { products, sortOptions } from '@/data/mockData';
import { sortProducts } from '@/utils/productUtils';

export default function ElectronicsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sortId, setSortId] = useState('popularity-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter products for Electronics category
  const electronicsProducts = products.filter(product => 
    product.category === 'Electronics'
  );

  // Apply sorting
  const sortOption = sortOptions.find(option => option.id === sortId) || sortOptions[0];
  const sortedProducts = sortProducts(electronicsProducts, sortOption);

  const subcategories = [
    { id: 'smartphones', name: 'Smartphones', icon: Smartphone, count: sortedProducts.filter(p => p.subcategory === 'Smartphones').length },
    { id: 'laptops', name: 'Laptops', icon: Laptop, count: sortedProducts.filter(p => p.subcategory === 'Laptops').length },
    { id: 'headphones', name: 'Headphones', icon: Headphones, count: sortedProducts.filter(p => p.subcategory === 'Headphones').length },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Electronics</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the latest in technology with our curated selection of electronics. 
                From cutting-edge smartphones to powerful laptops and premium audio gear.
              </p>
            </div>
          </div>
        </div>

        {/* Subcategories */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {subcategories.map((subcategory) => (
                <div
                  key={subcategory.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <subcategory.icon className="h-6 w-6 text-blue-600" />
                    <span className="font-medium text-gray-900">{subcategory.name}</span>
                  </div>
                  <Badge variant="outline">{subcategory.count}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="container mx-auto px-4 py-8">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {sortedProducts.length} Products
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <SortDropdown
                options={sortOptions}
                selectedId={sortId}
                onSelect={setSortId}
              />

              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-200 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or check back later.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}