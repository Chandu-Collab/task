'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { Heart, Grid, List, Share2, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/data/mockData';

// Mock wishlist items (in a real app, this would come from context/state management)
const mockWishlistItems = [
  products[0], // Premium Wireless Headphones
  products[4], // Smart Fitness Watch
  products[8], // Cotton T-Shirt
  products[12], // Running Shoes
  products[16] // Gaming Laptop
].filter(Boolean);

export default function WishlistPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(items => items.filter(item => item.id !== productId));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const shareWishlist = () => {
    // In a real app, this would generate a shareable link
    if (navigator.share) {
      navigator.share({
        title: 'My Wishlist',
        text: 'Check out my wishlist!',
        url: window.location.href
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Wishlist link copied to clipboard!');
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
                    Continue Shopping
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-red-500" />
                    My Wishlist
                  </h1>
                  <p className="text-gray-600">
                    {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
                  </p>
                </div>
              </div>

              {wishlistItems.length > 0 && (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={shareWishlist}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" onClick={clearWishlist}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {wishlistItems.length === 0 ? (
            /* Empty Wishlist */
            <div className="text-center py-16">
              <Heart className="h-24 w-24 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-6">
                Save items you love by clicking the heart icon on any product.
              </p>
              <Link href="/products">
                <Button size="lg">
                  Explore Products
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {wishlistItems.length} Saved Items
                  </h2>
                </div>

                <div className="flex items-center gap-4">
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

                  <Button onClick={() => {
                    // Add all to cart functionality
                    alert('All items would be added to cart!');
                  }}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add All to Cart
                  </Button>
                </div>
              </div>

              {/* Products Grid/List */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {wishlistItems.map((product) => (
                  <div key={product.id} className="relative group">
                    <ProductCard
                      product={product}
                    />
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Wishlist Actions */}
              <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Wishlist Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      // Move all to cart
                      alert('All items would be moved to cart!');
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Move All to Cart
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={shareWishlist}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Wishlist
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      // Create registry/list
                      alert('Create a gift registry feature would open!');
                    }}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Create Gift List
                  </Button>
                </div>
              </div>

              {/* Recommendations */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  You might also like
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Show products not in wishlist */}
                  {products
                    .filter(product => !wishlistItems.some(item => item.id === product.id))
                    .slice(0, 4)
                    .map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Wishlist Benefits */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Save More with Wishlists</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Keep track of items you love, get notified of price drops, and share your favorites with friends and family.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <Heart className="h-8 w-8 mx-auto mb-3 text-pink-200" />
                  <h3 className="text-lg font-semibold mb-2">Save Favorites</h3>
                  <p className="text-pink-100">
                    Never lose track of products you love with our wishlist feature.
                  </p>
                </div>
                
                <div className="text-center">
                  <Share2 className="h-8 w-8 mx-auto mb-3 text-pink-200" />
                  <h3 className="text-lg font-semibold mb-2">Share & Gift</h3>
                  <p className="text-pink-100">
                    Share your wishlist with friends and family for gift ideas.
                  </p>
                </div>
                
                <div className="text-center">
                  <ShoppingCart className="h-8 w-8 mx-auto mb-3 text-pink-200" />
                  <h3 className="text-lg font-semibold mb-2">Quick Purchase</h3>
                  <p className="text-pink-100">
                    Move items to cart instantly when you're ready to buy.
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