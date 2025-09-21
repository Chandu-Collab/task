import { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import Image from 'next/image';
import { Product, Color } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Rating } from '@/components/ui/Rating';
import { ColorSwatch } from '@/components/ui/ColorSwatch';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/utils/productUtils';
import { cn } from '@/utils/cn';

interface ProductCardProps {
  product: Product;
  selectedColor?: Color;
  onColorSelect?: (colorId: string) => void;
  className?: string;
}

export function ProductCard({ 
  product, 
  selectedColor, 
  onColorSelect,
  className 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const discountPrice = product.discountPrice || product.price;
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;

  return (
    <div
      className={cn(
        'group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {/* Color feedback background */}
        {selectedColor && (
          <div 
            className="absolute inset-0 opacity-10"
            style={{ backgroundColor: selectedColor.hex }}
          />
        )}

        {/* Product Image */}
        <div className="relative w-full h-full">
          {!imageError ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={cn(
                'object-cover transition-transform duration-300 group-hover:scale-105',
                imageLoading && 'animate-pulse bg-gray-200'
              )}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isHot && (
            <Badge variant="hot" className="font-semibold">
              HOT
            </Badge>
          )}
          {hasDiscount && (
            <Badge variant="discount" className="font-semibold">
              -{product.discountPercent}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className={cn(
            'absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300',
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          )}
        >
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-sm"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-sm"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart Overlay */}
        <div
          className={cn(
            'absolute bottom-3 left-3 right-3 transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <Button 
            className="w-full bg-black/80 hover:bg-black text-white"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Brand */}
        {product.brand && (
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {product.brand}
          </p>
        )}

        {/* Title */}
        <h3 className="font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
          <a 
            href={`/products/${product.id}`}
            className="hover:text-blue-600 transition-colors"
          >
            {product.name}
          </a>
        </h3>

        {/* Rating */}
        <Rating 
          rating={product.ratingValue}
          count={product.ratingCount}
          size="sm"
        />

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Colors:</span>
            <div className="flex gap-1">
              {product.colors.slice(0, 4).map((color) => (
                <ColorSwatch
                  key={color.id}
                  color={color}
                  selected={selectedColor?.id === color.id}
                  onClick={() => onColorSelect?.(color.id)}
                  size="sm"
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-400 ml-1">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            {formatCurrency(discountPrice)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              'text-xs font-medium',
              product.inStock 
                ? 'text-green-600' 
                : 'text-red-600'
            )}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          
          {/* Quick add to wishlist */}
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-red-500 p-1"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Loading skeleton component
export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('bg-white border border-gray-200 rounded-lg overflow-hidden', className)}>
      <div className="aspect-square bg-gray-200 animate-pulse" />
      <div className="p-4 space-y-3">
        <div className="h-3 bg-gray-200 rounded animate-pulse w-20" />
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="flex gap-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-4 w-4 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-20" />
          <div className="h-6 bg-gray-200 rounded animate-pulse w-16" />
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-4" />
        </div>
      </div>
    </div>
  );
}