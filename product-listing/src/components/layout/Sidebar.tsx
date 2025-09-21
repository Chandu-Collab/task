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
        <h3 className="font-medium text-gray-900">Categories</h3>
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
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-500">
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
                          <span className="text-sm text-gray-600 group-hover:text-gray-800">
                            {subcategory.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({subcategory.count})
                          </span>
                        </label>
                      );
                    })}
                    {category.subcategories.length > 6 && (
                      <Button variant="link" size="sm" className="ml-6 p-0 h-auto text-blue-600">
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
        <h3 className="font-medium text-gray-900">Price Range</h3>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            onBlur={handlePriceChange}
            className="text-sm"
            min="0"
          />
          <Input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            onBlur={handlePriceChange}
            className="text-sm"
            min="0"
          />
        </div>
        <div className="text-xs text-gray-500">
          ${filters.priceRange.min} - ${filters.priceRange.max}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Colors</h3>
        <div className="space-y-3">
          {/* Color Selection for Visual Feedback */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Select Color (Preview)</p>
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
            <p className="text-sm text-gray-600 mb-2">Filter by Color</p>
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
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {color.name}
                    </span>
                  </div>
                </label>
              ))}
              {colors.length > 8 && (
                <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                  View all colors ({colors.length})
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Rating</h3>
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
                <span className="text-sm text-gray-700">& up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Stock Status */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Availability</h3>
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={() => onFilterChange({ inStock: !filters.inStock })}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
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