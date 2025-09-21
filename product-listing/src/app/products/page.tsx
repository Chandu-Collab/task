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

function ProductsPageContent() {
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
          {/* Page Header */}
          <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
                <p className="text-gray-600">
                  Discover our complete collection of quality products across all categories
                </p>
              </div>
            </div>
          </div>

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

                <span className="text-sm text-gray-600">
                  Showing {products.length} of {totalItems} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <SortDropdown
                  options={sortOptions}
                  selectedId={sortId}
                  onSelect={updateSort}
                />

                {/* View Mode Toggle */}
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none border-r"
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
          </div>

          {/* Products Grid */}
          <div className="flex-1 p-4">
            <div className={cn(
              "grid gap-6",
              viewMode === 'grid' 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            )}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {/* No results */}
            {products.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search terms.</p>
                {activeFilterCount > 0 && (
                  <Button variant="outline" onClick={clearFilters}>
                    Clear all filters
                  </Button>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={totalItems}
                  itemsPerPage={12}
                  onPageChange={goToPage}
                  onPreviousPage={goToPreviousPage}
                  onNextPage={goToNextPage}
                />
              </div>
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProductsPageContent />
    </Suspense>
  );
}