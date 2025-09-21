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
  colorVariants?: { [colorId: string]: string[] }; // Maps color ID to array of images
  sizes?: ProductSize[]; // Available sizes for this product
  priceModifiers?: { // Price changes based on color/size combinations
    colors?: { [colorId: string]: number }; // Price modifier per color
    sizes?: { [sizeId: string]: number }; // Price modifier per size
  };
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

export interface ProductSize {
  id: string;
  name: string;
  label: string; // Display label like "Small", "Medium", "128GB", "256GB"
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
  subcategories: string[];
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