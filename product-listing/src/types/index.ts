export interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  ratingValue: number;
  ratingCount: number;
  isHot: boolean;
  colors: Color[];
  category: string;
  subcategory?: string;
  imageUrl: string;
  images?: string[];
  description?: string;
  brand?: string;
  inStock: boolean;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
  imageUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  count: number;
}

export interface FilterState {
  categories: string[];
  colors: string[];
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  inStock: boolean;
  search: string;
}

export interface SortOption {
  id: string;
  name: string;
  field: keyof Product;
  direction: 'asc' | 'desc';
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export type SortDirection = 'asc' | 'desc';
export type SortField = 'name' | 'price' | 'ratingValue' | 'popularity';