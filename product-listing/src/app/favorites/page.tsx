'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Rating } from '@/components/ui/Rating';
import { 
  Heart, 
  ShoppingCart, 
  X, 
  ArrowLeft,
  Star,
  Eye,
  Share2,
  Filter
} from 'lucide-react';

// Mock favorites data - in real app this would come from context/state
const mockFavorites = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    brand: 'AudioTech',
    price: 99.99,
    discountPrice: 79.99,
    discountPercent: 20,
    ratingValue: 4.5,
    ratingCount: 128,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format',
    dateAdded: '2024-03-15',
    inStock: true,
    isHot: true
  },
  {
    id: '2',
    name: 'Premium Cotton T-Shirt',
    brand: 'ComfortWear',
    price: 29.99,
    ratingValue: 4.2,
    ratingCount: 89,
    category: 'Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format',
    dateAdded: '2024-03-12',
    inStock: true,
    isHot: false
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    brand: 'TechFit',
    price: 199.99,
    discountPrice: 149.99,
    discountPercent: 25,
    ratingValue: 4.7,
    ratingCount: 256,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format',
    dateAdded: '2024-03-10',
    inStock: false,
    isHot: false
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    brand: 'StyleCraft',
    price: 89.99,
    ratingValue: 4.4,
    ratingCount: 67,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format',
    dateAdded: '2024-03-08',
    inStock: true,
    isHot: false
  }
];

type SortOption = 'recent' | 'price-low' | 'price-high' | 'name' | 'rating';
type FilterOption = 'all' | 'in-stock' | 'on-sale';

export default function FavoritesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState(mockFavorites);
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
    setSelectedItems(prev => prev.filter(itemId => itemId !== id));
  };

  const removeSelectedFavorites = () => {
    setFavorites(prev => prev.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const toggleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const selectAllItems = () => {
    const allIds = filteredAndSortedFavorites.map(item => item.id);
    setSelectedItems(prev => prev.length === allIds.length ? [] : allIds);
  };

  const addToCart = (id: string) => {
    // In real app, this would add to cart context
    console.log('Adding to cart:', id);
  };

  const addAllToCart = () => {
    // In real app, this would add all favorites to cart context
    console.log('Adding all to cart:', favorites.map(f => f.id));
  };

  // Filter favorites
  const filteredFavorites = favorites.filter(item => {
    if (filterBy === 'in-stock') return item.inStock;
    if (filterBy === 'on-sale') return item.discountPrice;
    return true;
  });

  // Sort favorites
  const filteredAndSortedFavorites = [...filteredFavorites].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      case 'price-low':
        return (a.discountPrice || a.price) - (b.discountPrice || b.price);
      case 'price-high':
        return (b.discountPrice || b.price) - (a.discountPrice || a.price);
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.ratingValue - a.ratingValue;
      default:
        return 0;
    }
  });

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar 
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-12">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No favorites yet</h2>
            <p className="text-gray-600 mb-8">Start browsing and save items you love</p>
            <Link href="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Start Shopping
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-red-500 fill-current" />
                  My Favorites
                </h1>
                <p className="text-gray-600 mt-1">{favorites.length} saved items</p>
              </div>
              
              <div className="flex items-center space-x-3">
                {selectedItems.length > 0 && (
                  <Button 
                    onClick={removeSelectedFavorites}
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Remove Selected ({selectedItems.length})
                  </Button>
                )}
                <Button onClick={addAllToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add All to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter:</span>
                <select 
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value as FilterOption)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Items</option>
                  <option value="in-stock">In Stock</option>
                  <option value="on-sale">On Sale</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Sort:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="recent">Recently Added</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {filteredAndSortedFavorites.length > 0 && (
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="select-all"
                  checked={selectedItems.length === filteredAndSortedFavorites.length}
                  onChange={selectAllItems}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="select-all" className="text-sm text-gray-700">
                  Select All
                </label>
              </div>
            )}
          </div>

          {/* Favorites Grid */}
          {filteredAndSortedFavorites.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No items match your current filters.</p>
              <Button 
                onClick={() => setFilterBy('all')}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedFavorites.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    {/* Selection Checkbox */}
                    <div className="absolute top-3 left-3 z-10">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleSelectItem(item.id)}
                        className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 bg-white"
                      />
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFavorite(item.id)}
                      className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 hover:bg-white rounded-full shadow-sm"
                    >
                      <X className="h-4 w-4 text-gray-600" />
                    </button>

                    {/* Product Image */}
                    <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden group">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-12 space-y-1">
                        {item.isHot && <Badge variant="hot">🔥 HOT</Badge>}
                        {item.discountPercent && (
                          <Badge variant="discount">-{item.discountPercent}%</Badge>
                        )}
                        {!item.inStock && (
                          <Badge className="bg-gray-500 text-white">Out of Stock</Badge>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-2">
                          <Link href={`/product/${item.id}`}>
                            <Button size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button size="sm" className="h-8 w-8 p-0" variant="outline">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <div className="mb-2">
                        <Badge variant="outline">{item.brand}</Badge>
                      </div>
                      
                      <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                        <Link 
                          href={`/product/${item.id}`}
                          className="hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      </h3>

                      <div className="flex items-center mb-2">
                        <Rating 
                          rating={item.ratingValue} 
                          count={item.ratingCount}
                          size="sm"
                        />
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {item.discountPrice ? (
                            <>
                              <span className="font-bold text-gray-900">
                                ${item.discountPrice}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                ${item.price}
                              </span>
                            </>
                          ) : (
                            <span className="font-bold text-gray-900">
                              ${item.price}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          Added {new Date(item.dateAdded).toLocaleDateString()}
                        </span>
                      </div>

                      <Button
                        onClick={() => addToCart(item.id)}
                        className="w-full"
                        size="sm"
                        disabled={!item.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Continue Shopping */}
          <div className="mt-12 text-center">
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 mb-4">Looking for more great products?</p>
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
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