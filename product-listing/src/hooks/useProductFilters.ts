import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterState } from '@/types';
import { products, sortOptions } from '@/data/mockData';
import { 
  filterProducts, 
  sortProducts, 
  paginateProducts, 
  filtersToQueryParams,
  queryParamsToFilters 
} from '@/utils/productUtils';

const ITEMS_PER_PAGE = 12;

const initialFilters: FilterState = {
  categories: [],
  subcategories: [],
  colors: [],
  priceRange: { min: 0, max: 10000 },
  rating: 0,
  inStock: false,
  search: '',
};

export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Parse initial state from URL
  const { filters: urlFilters, sortId: urlSortId, page: urlPage } = useMemo(() => 
    queryParamsToFilters(searchParams), [searchParams]
  );

  const [filters, setFilters] = useState<FilterState>(urlFilters);
  const [sortId, setSortId] = useState(urlSortId);
  const [currentPage, setCurrentPage] = useState(urlPage);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  // Update URL when filters change
  useEffect(() => {
    const params = filtersToQueryParams(filters, sortId, currentPage);
    const newUrl = params.toString() ? `?${params.toString()}` : '/';
    router.push(newUrl, { scroll: false });
  }, [filters, sortId, currentPage, router]);

  // Process products
  const processedProducts = useMemo(() => {
    const sortOption = sortOptions.find(option => option.id === sortId) || sortOptions[0];
    
    // Apply filters
    let filtered = filterProducts(products, filters);
    
    // Apply sorting
    const sorted = sortProducts(filtered, sortOption);
    
    // Apply pagination
    const { paginatedProducts, totalPages } = paginateProducts(
      sorted,
      currentPage,
      ITEMS_PER_PAGE
    );

    return {
      allProducts: sorted,
      products: paginatedProducts,
      totalItems: sorted.length,
      totalPages,
      currentPage,
      itemsPerPage: ITEMS_PER_PAGE,
    };
  }, [filters, sortId, currentPage]);

  // Filter actions
  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    setSortId('popularity-desc');
    setCurrentPage(1);
    setSelectedColors([]);
  };

  const toggleCategory = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
    setCurrentPage(1);
  };

  const toggleSubcategory = (subcategoryId: string) => {
    setFilters(prev => ({
      ...prev,
      subcategories: prev.subcategories.includes(subcategoryId)
        ? prev.subcategories.filter(id => id !== subcategoryId)
        : [...prev.subcategories, subcategoryId]
    }));
    setCurrentPage(1);
  };

  const toggleColor = (colorId: string) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(colorId)
        ? prev.colors.filter(id => id !== colorId)
        : [...prev.colors, colorId]
    }));
    setCurrentPage(1);
  };

  const selectColor = (colorId: string) => {
    setSelectedColors(prev => 
      prev.includes(colorId) 
        ? prev.filter(id => id !== colorId)
        : [colorId] // Only allow one color selection for visual feedback
    );
  };

  const updatePriceRange = (min: number, max: number) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { min, max }
    }));
    setCurrentPage(1);
  };

  const updateRating = (rating: number) => {
    setFilters(prev => ({ ...prev, rating }));
    setCurrentPage(1);
  };

  const toggleInStock = () => {
    setFilters(prev => ({ ...prev, inStock: !prev.inStock }));
    setCurrentPage(1);
  };

  // Sorting actions
  const updateSort = (newSortId: string) => {
    setSortId(newSortId);
    setCurrentPage(1);
  };

  // Pagination actions
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextPage = () => {
    if (currentPage < processedProducts.totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Active filter count for badge
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.categories.length > 0) count++;
    if (filters.colors.length > 0) count++;
    if (filters.priceRange.min > 0 || filters.priceRange.max < 10000) count++;
    if (filters.rating > 0) count++;
    if (filters.inStock) count++;
    return count;
  }, [filters]);

  return {
    // Data
    products: processedProducts.products,
    totalItems: processedProducts.totalItems,
    totalPages: processedProducts.totalPages,
    currentPage,
    
    // State
    filters,
    sortId,
    selectedColors,
    activeFilterCount,
    
    // Actions
    updateFilters,
    clearFilters,
    toggleCategory,
    toggleSubcategory,
    toggleColor,
    selectColor,
    updatePriceRange,
    updateRating,
    toggleInStock,
    updateSort,
    goToPage,
    goToNextPage,
    goToPreviousPage,
  };
}