'use client';

import { useState } from 'react';
import { Suspense } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/ui/ProductCard';
import { SortDropdown } from '@/components/ui/SortDropdown';
import { Pagination } from '@/components/ui/Pagination';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { LoadingSpinner } from '@/components/ui/Loading';
import { useProductFilters } from '@/hooks/useProductFilters';
import { categories, colors, sortOptions } from '@/data/mockData';
import { cn } from '@/utils/cn';

function ProductListingContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const {
    products,
    totalItems,
    totalPages,
    currentPage,
    filters,
    sortId,
    selectedColors,
    activeFilterCount,
    updateFilters,
    clearFilters,
    toggleCategory,
    toggleSubcategory,
    toggleColor,
    selectColor,
    updateSort,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  } = useProductFilters();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <Sidebar
          categories={categories}
          colors={colors}
          filters={filters}
          selectedColors={selectedColors}
          activeFilterCount={activeFilterCount}
          onFilterChange={updateFilters}
          onCategoryToggle={toggleCategory}
          onSubcategoryToggle={toggleSubcategory}
          onColorToggle={toggleColor}
          onColorSelect={selectColor}
          onClearFilters={clearFilters}
          isMobile={false}
        />

        {/* Mobile Sidebar */}
        <Sidebar
          categories={categories}
          colors={colors}
          filters={filters}
          selectedColors={selectedColors}
          activeFilterCount={activeFilterCount}
          onFilterChange={updateFilters}
          onCategoryToggle={toggleCategory}
          onSubcategoryToggle={toggleSubcategory}
          onColorToggle={toggleColor}
          onColorSelect={selectColor}
          onClearFilters={clearFilters}
          isMobile={true}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Content Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge variant="default" className="ml-2">
                      {activeFilterCount}
                    </Badge>
                  )}
                </Button>

                {/* Results count */}
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">{totalItems}</span> products found
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* View mode toggle */}
                <div className="flex items-center border border-gray-300 rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none border-0"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none border-0"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Sort dropdown */}
                <SortDropdown
                  options={sortOptions}
                  selectedId={sortId}
                  onSelect={updateSort}
                />
              </div>
            </div>

            {/* Active filters */}
            {activeFilterCount > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                
                {filters.categories.map(category => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => toggleCategory(category)}
                  >
                    {category} ×
                  </Badge>
                ))}
                
                {filters.colors.length > 0 && (
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => updateFilters({ colors: [] })}
                  >
                    Colors ({filters.colors.length}) ×
                  </Badge>
                )}
                
                {(filters.priceRange.min > 0 || filters.priceRange.max < 10000) && (
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => updateFilters({ priceRange: { min: 0, max: 10000 } })}
                  >
                    ${filters.priceRange.min} - ${filters.priceRange.max} ×
                  </Badge>
                )}
                
                {filters.rating > 0 && (
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => updateFilters({ rating: 0 })}
                  >
                    {filters.rating}+ stars ×
                  </Badge>
                )}
                
                {filters.inStock && (
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => updateFilters({ inStock: false })}
                  >
                    In Stock ×
                  </Badge>
                )}
                
                <Button
                  variant="link"
                  size="sm"
                  onClick={clearFilters}
                  className="p-0 h-auto text-blue-600"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex-1 p-4">
            {totalItems === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found</p>
                <p className="text-gray-400 mb-6">Try adjusting your filters to see more results</p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            ) : (
              <>
                {/* Products grid */}
                <div className={cn(
                  'grid gap-6 mb-8',
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1'
                )}>
                  {products.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      selectedColor={selectedColors.length > 0 
                        ? product.colors.find(c => selectedColors.includes(c.id))
                        : undefined
                      }
                      onColorSelect={selectColor}
                      className={viewMode === 'list' ? 'flex-row' : undefined}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={12}
                    onPageChange={goToPage}
                    onNextPage={goToNextPage}
                    onPreviousPage={goToPreviousPage}
                  />
                )}
              </>
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner text="Loading products..." />}>
      <ProductListingContent />
    </Suspense>
  );
}
