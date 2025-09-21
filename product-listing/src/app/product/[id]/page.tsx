'use client';

import { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Rating } from '@/components/ui/Rating';
import { ColorSwatch } from '@/components/ui/ColorSwatch';
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/data/mockData';
import {
  ArrowLeft,
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Star,
  ThumbsUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'specs'>('description');
  const [isFavorited, setIsFavorited] = useState(false);

  const product = useMemo(() => {
    return products.find(p => p.id.toString() === params.id);
  }, [params.id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar 
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => router.push('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const productImages = [
    product.imageUrl,
    product.imageUrl, // Duplicate for demo - in real app would be different images
    product.imageUrl,
    product.imageUrl
  ];

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    console.log('Add to cart:', { product, quantity, selectedColor, selectedSize });
    // In real app, this would add to cart context/state
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button 
                onClick={() => router.push('/')}
                className="hover:text-gray-900 flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </button>
              <span>/</span>
              <span className="text-gray-400">{product.category}</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
                <Image
                  src={productImages[selectedImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.isHot && (
                  <Badge variant="hot" className="absolute top-4 left-4">
                    🔥 HOT
                  </Badge>
                )}
                {product.discountPercent && (
                  <Badge variant="discount" className="absolute top-4 right-4">
                    -{product.discountPercent}%
                  </Badge>
                )}
                
                {/* Image Navigation */}
                <button
                  onClick={() => setSelectedImageIndex(Math.max(0, selectedImageIndex - 1))}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                  disabled={selectedImageIndex === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setSelectedImageIndex(Math.min(productImages.length - 1, selectedImageIndex + 1))}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                  disabled={selectedImageIndex === productImages.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{product.brand}</Badge>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsFavorited(!isFavorited)}
                      className={`p-2 rounded-full border ${
                        isFavorited ? 'bg-red-50 border-red-200 text-red-600' : 'bg-white border-gray-200 text-gray-600'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 rounded-full border bg-white border-gray-200 text-gray-600">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <Rating rating={product.ratingValue} count={product.ratingCount} />
                </div>
                
                <div className="flex items-center space-x-4">
                  {product.discountPrice ? (
                    <>
                      <span className="text-3xl font-bold text-gray-900">${product.discountPrice}</span>
                      <span className="text-xl text-gray-500 line-through">${product.price}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  )}
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Color</h3>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <ColorSwatch
                        key={color.id}
                        color={color}
                        selected={selectedColor === color.name}
                        onClick={() => setSelectedColor(color.name)}
                        size="lg"
                      />
                    ))}
                  </div>
                  {selectedColor && (
                    <p className="text-sm text-gray-600 mt-2">Selected: {selectedColor}</p>
                  )}
                </div>
              )}

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 text-sm font-medium rounded-md border ${
                        selectedSize === size
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-gray-200 rounded-md">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100"
                      disabled={quantity >= 10}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">Max 10 items</span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3">
                <Button onClick={handleAddToCart} className="w-full" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ${((product.discountPrice || product.price) * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Buy Now
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span>Free shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <RotateCcw className="h-4 w-4 text-blue-600" />
                  <span>30-day returns</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span>2-year warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b">
              <nav className="flex space-x-8">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'reviews', label: 'Reviews' },
                  { id: 'specs', label: 'Specifications' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="max-w-3xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h3>
                  <div className="prose text-gray-600 space-y-4">
                    <p>
                      Experience premium quality with this exceptional {product.name}. Crafted with attention to detail
                      and designed for modern lifestyles, this product combines functionality with style.
                    </p>
                    <p>
                      Whether you're looking for everyday use or special occasions, this {product.category.toLowerCase()} 
                      delivers outstanding performance and reliability. The carefully selected materials ensure durability
                      while maintaining comfort and aesthetic appeal.
                    </p>
                    <ul className="space-y-2">
                      <li>• Premium materials for enhanced durability</li>
                      <li>• Ergonomic design for optimal comfort</li>
                      <li>• Versatile styling suitable for various occasions</li>
                      <li>• Easy maintenance and care</li>
                      <li>• Backed by manufacturer warranty</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="max-w-4xl">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <Rating rating={product.ratingValue} count={product.ratingCount} />
                      </div>
                    </div>
                    <Button variant="outline">Write a Review</Button>
                  </div>

                  <div className="space-y-6">
                    {/* Sample Reviews */}
                    {[
                      {
                        id: 1,
                        name: 'Sarah Johnson',
                        rating: 5,
                        date: 'March 15, 2024',
                        review: 'Absolutely love this product! The quality is outstanding and it exceeded my expectations. Highly recommended!',
                        helpful: 12
                      },
                      {
                        id: 2,
                        name: 'Mike Chen',
                        rating: 4,
                        date: 'March 10, 2024',
                        review: 'Great value for money. Good quality and fast shipping. Only minor issue was the packaging could be better.',
                        helpful: 8
                      },
                      {
                        id: 3,
                        name: 'Emma Davis',
                        rating: 5,
                        date: 'March 5, 2024',
                        review: 'Perfect! Exactly what I was looking for. The color is beautiful and the fit is just right.',
                        helpful: 15
                      }
                    ].map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{review.name}</span>
                              <Rating rating={review.rating} size="sm" showCount={false} />
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{review.review}</p>
                        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="h-4 w-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="max-w-3xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">General</h4>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Brand:</dt>
                          <dd className="text-gray-900">{product.brand}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Category:</dt>
                          <dd className="text-gray-900">{product.category}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Model:</dt>
                          <dd className="text-gray-900">{product.name}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">SKU:</dt>
                          <dd className="text-gray-900">SKU-{product.id}</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Colors:</dt>
                          <dd className="text-gray-900">{product.colors?.map(c => c.name).join(', ') || 'Multiple'}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Warranty:</dt>
                          <dd className="text-gray-900">2 Years</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Shipping:</dt>
                          <dd className="text-gray-900">Free Worldwide</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Returns:</dt>
                          <dd className="text-gray-900">30 Days</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}