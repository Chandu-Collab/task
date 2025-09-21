import { Product, FilterState, SortOption } from '@/types';

// Filter products based on filter state
export function filterProducts(products: Product[], filters: FilterState): Product[] {
  return products.filter(product => {
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }

    // Color filter
    if (filters.colors.length > 0) {
      const hasMatchingColor = product.colors.some(color => 
        filters.colors.includes(color.id)
      );
      if (!hasMatchingColor) return false;
    }

    // Price range filter
    const price = product.discountPrice || product.price;
    if (price < filters.priceRange.min || price > filters.priceRange.max) {
      return false;
    }

    // Rating filter
    if (product.ratingValue < filters.rating) {
      return false;
    }

    // Stock filter
    if (filters.inStock && !product.inStock) {
      return false;
    }

    return true;
  });
}

// Sort products based on sort option
export function sortProducts(products: Product[], sortOption: SortOption): Product[] {
  const sorted = [...products].sort((a, b) => {
    const { field, direction } = sortOption;
    
    const aValue = a[field];
    const bValue = b[field];

    // Handle different field types
    let compareA: string | number;
    let compareB: string | number;

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      compareA = aValue.toLowerCase();
      compareB = bValue.toLowerCase();
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      compareA = aValue;
      compareB = bValue;
    } else {
      // Fallback to string comparison
      compareA = String(aValue || '').toLowerCase();
      compareB = String(bValue || '').toLowerCase();
    }

    if (direction === 'asc') {
      return compareA < compareB ? -1 : compareA > compareB ? 1 : 0;
    } else {
      return compareA > compareB ? -1 : compareA < compareB ? 1 : 0;
    }
  });

  return sorted;
}

// Paginate products
export function paginateProducts(
  products: Product[], 
  currentPage: number, 
  itemsPerPage: number
): { paginatedProducts: Product[]; totalPages: number } {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  return {
    paginatedProducts: products.slice(startIndex, endIndex),
    totalPages
  };
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

// Calculate discount percentage
export function calculateDiscountPercent(originalPrice: number, discountPrice: number): number {
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

// Generate URL query params for filters
export function filtersToQueryParams(filters: FilterState, sortId: string, page: number): URLSearchParams {
  const params = new URLSearchParams();
  
  if (filters.categories.length > 0) {
    params.set('categories', filters.categories.join(','));
  }
  
  if (filters.colors.length > 0) {
    params.set('colors', filters.colors.join(','));
  }
  
  if (filters.priceRange.min > 0) {
    params.set('minPrice', filters.priceRange.min.toString());
  }
  
  if (filters.priceRange.max < 10000) {
    params.set('maxPrice', filters.priceRange.max.toString());
  }
  
  if (filters.rating > 0) {
    params.set('rating', filters.rating.toString());
  }
  
  if (filters.inStock) {
    params.set('inStock', 'true');
  }
  
  if (sortId) {
    params.set('sort', sortId);
  }
  
  if (page > 1) {
    params.set('page', page.toString());
  }
  
  return params;
}

// Parse query params to filters
export function queryParamsToFilters(searchParams: URLSearchParams): {
  filters: FilterState;
  sortId: string;
  page: number;
} {
  const categories = searchParams.get('categories')?.split(',').filter(Boolean) || [];
  const colors = searchParams.get('colors')?.split(',').filter(Boolean) || [];
  const minPrice = Number(searchParams.get('minPrice')) || 0;
  const maxPrice = Number(searchParams.get('maxPrice')) || 10000;
  const rating = Number(searchParams.get('rating')) || 0;
  const inStock = searchParams.get('inStock') === 'true';
  const sortId = searchParams.get('sort') || 'popularity-desc';
  const page = Number(searchParams.get('page')) || 1;

  return {
    filters: {
      categories,
      colors,
      priceRange: { min: minPrice, max: maxPrice },
      rating,
      inStock,
    },
    sortId,
    page,
  };
}

// Debounce function for search/filter inputs
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Check if two filter states are equal
export function areFiltersEqual(filters1: FilterState, filters2: FilterState): boolean {
  return (
    JSON.stringify(filters1.categories.sort()) === JSON.stringify(filters2.categories.sort()) &&
    JSON.stringify(filters1.colors.sort()) === JSON.stringify(filters2.colors.sort()) &&
    filters1.priceRange.min === filters2.priceRange.min &&
    filters1.priceRange.max === filters2.priceRange.max &&
    filters1.rating === filters2.rating &&
    filters1.inStock === filters2.inStock
  );
}