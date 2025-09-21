import { useState } from 'react';
import { ChevronDown, ChevronUp, X, Filter } from 'lucide-react';
import { Category, Color, FilterState } from '@/types';
import { Button } from '@/components/ui/Button';
import { ColorSwatch } from '@/components/ui/ColorSwatch';
import { Badge } from '@/components/ui/Badge';
import { Rating } from '@/components/ui/Rating';
import { Input } from '@/components/ui/Input';
import { cn } from '@/utils/cn';

interface SidebarProps {
  categories: Category[];
  colors: Color[];
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onCategoryToggle: (categoryId: string) => void;
  onSubcategoryToggle: (subcategoryId: string) => void;
  onColorToggle: (colorId: string) => void;
  onColorSelect: (colorId: string) => void;
  onClearFilters: () => void;
  selectedColors: string[];
  activeFilterCount: number;
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
  className?: string;
}

export function Sidebar({
  categories,
  colors,
  filters,
  onFilterChange,
  onCategoryToggle,
  onSubcategoryToggle,
  onColorToggle,
  onColorSelect,
  onClearFilters,
  selectedColors,
  activeFilterCount,
  isOpen = true,
  onClose,
  isMobile = false,
  className,
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['1', '2']);
  const [priceMin, setPriceMin] = useState(filters.priceRange.min.toString());
  const [priceMax, setPriceMax] = useState(filters.priceRange.max.toString());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handlePriceChange = () => {
    const min = Math.max(0, parseInt(priceMin) || 0);
    const max = Math.min(10000, parseInt(priceMax) || 10000);
    onFilterChange({
      priceRange: { min, max }
    });
  };

  const handleRatingChange = (rating: number) => {
    onFilterChange({ rating: rating === filters.rating ? 0 : rating });
  };

  const sidebarContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Filters</h2>
          {activeFilterCount > 0 && (
            <Badge variant="default">{activeFilterCount}</Badge>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {activeFilterCount > 0 && (
            <Button
              variant="link"
              size="sm"
              onClick={onClearFilters}
              className="text-blue-600 hover:text-blue-800 p-0"
            >
              Clear all
            </Button>
          )}
          {isMobile && onClose && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              aria-label="Close filters"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            const isSelected = filters.categories.includes(category.name);

            return (
              <div key={category.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onCategoryToggle(category.name)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </span>
                    <span className="text-xs font-medium text-gray-600">
                      ({category.count})
                    </span>
                  </label>
                  
                  {category.subcategories && category.subcategories.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCategory(category.id)}
                      className="h-6 w-6 p-0"
                    >
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </div>

                {/* Subcategories */}
                {isExpanded && category.subcategories && (
                  <div className="ml-6 space-y-2">
                    {category.subcategories.slice(0, 6).map((subcategory) => {
                      const isSubcategorySelected = filters.subcategories.includes(subcategory.name);
                      
                      return (
                        <label 
                          key={subcategory.id}
                          className="flex items-center space-x-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={isSubcategorySelected}
                            onChange={() => onSubcategoryToggle(subcategory.name)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                            {subcategory.name}
                          </span>
                          <span className="text-xs font-medium text-gray-600">
                            ({subcategory.count})
                          </span>
                        </label>
                      );
                    })}
                    {category.subcategories.length > 6 && (
                      <Button variant="link" size="sm" className="ml-6 p-0 h-auto text-blue-600 font-semibold hover:text-blue-800">
                        View more ({category.subcategories.length - 6})
                      </Button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Price Range</h3>
        
        {/* Price Input Fields */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">Min Price</label>
            <Input
              type="number"
              placeholder="0"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              onBlur={handlePriceChange}
              className="text-sm font-medium text-gray-900 bg-white border-gray-300 focus:border-blue-500"
              min="0"
              max="10000"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">Max Price</label>
            <Input
              type="number"
              placeholder="10000"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              onBlur={handlePriceChange}
              className="text-sm font-medium text-gray-900 bg-white border-gray-300 focus:border-blue-500"
              min="0"
              max="10000"
            />
          </div>
        </div>

        {/* Current Range Display */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
          <div className="text-center">
            <div className="text-xl font-bold text-blue-900 mb-1">
              ${filters.priceRange.min.toLocaleString()} - ${filters.priceRange.max.toLocaleString()}
            </div>
            <div className="text-sm font-medium text-blue-700">Selected price range</div>
            {activeFilterCount > 0 && (
              <div className="text-xs text-blue-600 mt-1">
                {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} applied
              </div>
            )}
          </div>
        </div>

        {/* Price Range Slider */}
        <div className="space-y-4 bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-semibold text-gray-800 text-center">
            Drag sliders to adjust range
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Minimum: ${filters.priceRange.min.toLocaleString()}
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="50"
                  value={filters.priceRange.min}
                  onChange={(e) => {
                    const newMin = parseInt(e.target.value);
                    if (newMin <= filters.priceRange.max) {
                      setPriceMin(newMin.toString());
                      onFilterChange({
                        priceRange: { min: newMin, max: filters.priceRange.max }
                      });
                    }
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(filters.priceRange.min / 10000) * 100}%, #E5E7EB ${(filters.priceRange.min / 10000) * 100}%, #E5E7EB 100%)`
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Maximum: ${filters.priceRange.max.toLocaleString()}
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="50"
                  value={filters.priceRange.max}
                  onChange={(e) => {
                    const newMax = parseInt(e.target.value);
                    if (newMax >= filters.priceRange.min) {
                      setPriceMax(newMax.toString());
                      onFilterChange({
                        priceRange: { min: filters.priceRange.min, max: newMax }
                      });
                    }
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #E5E7EB 0%, #E5E7EB ${(filters.priceRange.max / 10000) * 100}%, #3B82F6 ${(filters.priceRange.max / 10000) * 100}%, #3B82F6 100%)`
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-between text-xs font-medium text-gray-600 pt-2 border-t border-gray-200">
            <span className="bg-white px-2 py-1 rounded">$0</span>
            <span className="bg-white px-2 py-1 rounded">$10,000</span>
          </div>
        </div>

        {/* Quick Price Buttons */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Quick Select:</span>
            <Button
              variant="link"
              size="sm"
              onClick={() => {
                setPriceMin('0');
                setPriceMax('10000');
                onFilterChange({ priceRange: { min: 0, max: 10000 } });
              }}
              className="text-xs text-blue-600 hover:text-blue-800 p-0 h-auto"
            >
              Reset Range
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setPriceMin('0');
                setPriceMax('100');
                onFilterChange({ priceRange: { min: 0, max: 100 } });
              }}
              className="text-xs font-medium text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50"
            >
              Under $100
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setPriceMin('100');
                setPriceMax('500');
                onFilterChange({ priceRange: { min: 100, max: 500 } });
              }}
              className="text-xs font-medium text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50"
            >
              $100 - $500
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setPriceMin('500');
                setPriceMax('1000');
                onFilterChange({ priceRange: { min: 500, max: 1000 } });
              }}
              className="text-xs font-medium text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50"
            >
              $500 - $1K
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setPriceMin('1000');
                setPriceMax('10000');
                onFilterChange({ priceRange: { min: 1000, max: 10000 } });
              }}
              className="text-xs font-medium text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50"
            >
              Over $1K
            </Button>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Colors</h3>
        <div className="space-y-3">
          {/* Color Selection for Visual Feedback */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-2">Select Color (Preview)</p>
            <div className="flex flex-wrap gap-2">
              {colors.slice(0, 12).map((color) => (
                <ColorSwatch
                  key={color.id}
                  color={color}
                  selected={selectedColors.includes(color.id)}
                  onClick={() => onColorSelect(color.id)}
                  size="md"
                />
              ))}
            </div>
          </div>

          {/* Color Filtering */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-2">Filter by Color</p>
            <div className="space-y-2">
              {colors.slice(0, 8).map((color) => (
                <label 
                  key={color.id}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color.id)}
                    onChange={() => onColorToggle(color.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex items-center space-x-2">
                    <div
                      className="h-4 w-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {color.name}
                    </span>
                  </div>
                </label>
              ))}
              {colors.length > 8 && (
                <Button variant="link" size="sm" className="p-0 h-auto text-blue-600 font-semibold hover:text-blue-800">
                  View all colors ({colors.length})
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label 
              key={rating}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => handleRatingChange(rating)}
                className="border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex items-center space-x-2">
                <Rating 
                  rating={rating} 
                  showCount={false} 
                  size="sm" 
                />
                <span className="text-sm font-medium text-gray-800">& up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Stock Status */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Availability</h3>
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={() => onFilterChange({ inStock: !filters.inStock })}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
            In Stock Only
          </span>
        </label>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
        )}
        
        {/* Mobile Drawer */}
        <div
          className={cn(
            'fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden',
            isOpen ? 'translate-x-0' : '-translate-x-full',
            className
          )}
        >
          <div className="h-full overflow-y-auto p-6">
            {sidebarContent}
          </div>
        </div>
      </>
    );
  }

  // Desktop Sidebar
  return (
    <aside
      className={cn(
        'hidden lg:block w-80 bg-white border-r border-gray-200 overflow-y-auto',
        className
      )}
    >
      <div className="sticky top-0 p-6">
        {sidebarContent}
      </div>
    </aside>
  );
}