'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Scale, X, Plus, ShoppingCart, Star, ArrowLeft, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/mockData';

// Mock compare items (in a real app, this would come from context/state management)
const mockCompareItems = [
  products[0], // Premium Wireless Headphones
  products[4], // Smart Fitness Watch
  products[8]  // Cotton T-Shirt
].filter(Boolean);

const comparisonFeatures = [
  'Price',
  'Rating',
  'Brand',
  'Category',
  'Availability',
  'Discount',
  'Color Options',
  'Size Options',
  'Material',
  'Warranty'
];

export default function ComparePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [compareItems, setCompareItems] = useState(mockCompareItems);

  const removeFromCompare = (productId: string) => {
    setCompareItems(items => items.filter(item => item.id !== productId));
  };

  const addToCompare = () => {
    // In a real app, this would open a product selector
    alert('Product selector would open to add more items to compare');
  };

  const clearAll = () => {
    setCompareItems([]);
  };

  const getFeatureValue = (product: any, feature: string) => {
    switch (feature) {
      case 'Price':
        return product.discountPrice 
          ? `$${product.discountPrice.toFixed(2)} (was $${product.price.toFixed(2)})` 
          : `$${product.price.toFixed(2)}`;
      case 'Rating':
        return (
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
          </div>
        );
      case 'Brand':
        return product.brand || 'N/A';
      case 'Category':
        return product.category || 'N/A';
      case 'Availability':
        return product.inStock ? (
          <span className="text-green-600 flex items-center">
            <Check className="h-4 w-4 mr-1" />
            In Stock
          </span>
        ) : (
          <span className="text-red-600">Out of Stock</span>
        );
      case 'Discount':
        return product.discountPercent ? (
          <Badge variant="discount">{product.discountPercent}% OFF</Badge>
        ) : (
          'No Discount'
        );
      case 'Color Options':
        return product.colorVariants?.length || 1;
      case 'Size Options':
        return product.sizes?.length || 1;
      case 'Material':
        return product.material || 'N/A';
      case 'Warranty':
        return product.warranty || '1 Year';
      default:
        return 'N/A';
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
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/products">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Products
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Scale className="h-6 w-6 mr-2" />
                    Compare Products
                  </h1>
                  <p className="text-gray-600">
                    {compareItems.length} {compareItems.length === 1 ? 'product' : 'products'} selected for comparison
                  </p>
                </div>
              </div>

              {compareItems.length > 0 && (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={addToCompare}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                  <Button variant="outline" size="sm" onClick={clearAll}>
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {compareItems.length === 0 ? (
            /* Empty Compare */
            <div className="text-center py-16">
              <Scale className="h-24 w-24 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No products to compare</h2>
              <p className="text-gray-600 mb-6">
                Add products to compare their features, prices, and specifications side by side.
              </p>
              <div className="space-x-4">
                <Link href="/products">
                  <Button size="lg">
                    Browse Products
                  </Button>
                </Link>
                <Button variant="outline" size="lg" onClick={addToCompare}>
                  Add Products
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Comparison Table */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Product Headers */}
                <div className="grid grid-cols-4 gap-0 border-b">
                  <div className="p-4 bg-gray-50 font-medium text-gray-900">
                    Features
                  </div>
                  {compareItems.map((product) => (
                    <div key={product.id} className="p-4 bg-gray-50 relative group">
                      <button
                        onClick={() => removeFromCompare(product.id)}
                        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      
                      <div className="space-y-3">
                        <div className="relative w-full h-32 rounded-lg overflow-hidden">
                          <Image
                            src={product.images?.[0] || '/placeholder-image.jpg'}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm leading-tight">
                            {product.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add Product Slot */}
                  {compareItems.length < 3 && (
                    <div className="p-4 bg-gray-50">
                      <button
                        onClick={addToCompare}
                        className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Plus className="h-8 w-8 mb-2" />
                        <span className="text-sm font-medium">Add Product</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Feature Rows */}
                {comparisonFeatures.map((feature, index) => (
                  <div key={feature} className={`grid grid-cols-4 gap-0 border-b last:border-b-0 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="p-4 font-medium text-gray-900 border-r">
                      {feature}
                    </div>
                    {compareItems.map((product) => (
                      <div key={`${product.id}-${feature}`} className="p-4 border-r">
                        {getFeatureValue(product, feature)}
                      </div>
                    ))}
                    
                    {/* Empty slots */}
                    {compareItems.length < 3 && (
                      <div className="p-4 text-gray-400">
                        -
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 grid grid-cols-4 gap-4">
                <div></div> {/* Empty space for feature column */}
                {compareItems.map((product) => (
                  <div key={`action-${product.id}`} className="space-y-2">
                    <Button className="w-full" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Link href={`/product/${product.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                ))}
                
                {/* Empty action slot */}
                {compareItems.length < 3 && <div></div>}
              </div>

              {/* Comparison Tips */}
              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Comparison Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
                  <div>
                    <h4 className="font-medium mb-1">Compare Similar Items</h4>
                    <p>Get the most value by comparing products in the same category.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Check Key Features</h4>
                    <p>Focus on the features that matter most to your needs.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Consider Value</h4>
                    <p>Look beyond price - consider features, quality, and reviews.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Compare Benefits */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Make Informed Decisions</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Compare products side by side to find the perfect match for your needs and budget.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <Scale className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="text-lg font-semibold mb-2">Side by Side</h3>
                  <p className="text-blue-100">
                    See all product details in one convenient view.
                  </p>
                </div>
                
                <div className="text-center">
                  <Star className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <p className="text-blue-100">
                    Compare the features that matter most to you.
                  </p>
                </div>
                
                <div className="text-center">
                  <ShoppingCart className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="text-lg font-semibold mb-2">Easy Purchase</h3>
                  <p className="text-blue-100">
                    Add your chosen product to cart with one click.
                  </p>
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