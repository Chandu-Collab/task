'use client';

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Product } from '@/types';

// Types
interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface FavoritesState {
  items: Product[];
  count: number;
}

interface StoreState {
  cart: CartState;
  favorites: FavoritesState;
}

// Actions
type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; selectedColor?: string; selectedSize?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

type FavoritesAction =
  | { type: 'ADD_TO_FAVORITES'; payload: Product }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: { id: string } }
  | { type: 'CLEAR_FAVORITES' }
  | { type: 'LOAD_FAVORITES'; payload: Product[] };

type StoreAction = CartAction | FavoritesAction;

// Initial state
const initialState: StoreState = {
  cart: {
    items: [],
    total: 0,
    itemCount: 0,
  },
  favorites: {
    items: [],
    count: 0,
  },
};

// Helper functions
const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    const price = item.product.discountPrice || item.product.price;
    return total + (price * item.quantity);
  }, 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

// Reducers
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, selectedColor, selectedSize } = action.payload;
      const existingItem = state.items.find(
        item => 
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      let newItems: CartItem[];
      if (existingItem) {
        newItems = state.items.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${selectedColor || ''}-${selectedSize || ''}`,
          product,
          quantity,
          selectedColor,
          selectedSize,
        };
        newItems = [...state.items, newItem];
      }

      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }
    
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(item => item.id !== id);
        return {
          items: newItems,
          total: calculateCartTotal(newItems),
          itemCount: calculateItemCount(newItems),
        };
      }
      
      const newItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      return {
        items: newItems,
        total: calculateCartTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };
    
    case 'LOAD_CART': {
      const items = action.payload;
      return {
        items,
        total: calculateCartTotal(items),
        itemCount: calculateItemCount(items),
      };
    }
    
    default:
      return state;
  }
};

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const product = action.payload;
      const exists = state.items.some(item => item.id === product.id);
      if (exists) return state;
      
      const newItems = [...state.items, product];
      return {
        items: newItems,
        count: newItems.length,
      };
    }
    
    case 'REMOVE_FROM_FAVORITES': {
      const newItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        items: newItems,
        count: newItems.length,
      };
    }
    
    case 'CLEAR_FAVORITES':
      return {
        items: [],
        count: 0,
      };
    
    case 'LOAD_FAVORITES': {
      const items = action.payload;
      return {
        items,
        count: items.length,
      };
    }
    
    default:
      return state;
  }
};

// Main reducer
const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'ADD_TO_CART':
    case 'REMOVE_FROM_CART':
    case 'UPDATE_QUANTITY':
    case 'CLEAR_CART':
    case 'LOAD_CART':
      return {
        ...state,
        cart: cartReducer(state.cart, action),
      };
    
    case 'ADD_TO_FAVORITES':
    case 'REMOVE_FROM_FAVORITES':
    case 'CLEAR_FAVORITES':
    case 'LOAD_FAVORITES':
      return {
        ...state,
        favorites: favoritesReducer(state.favorites, action),
      };
    
    default:
      return state;
  }
};

// Context
interface StoreContextType {
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
  // Cart methods
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  // Favorites methods
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: string) => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Provider component
interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const cartItems: CartItem[] = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: cartItems });
      }

      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        const favoritesItems: Product[] = JSON.parse(savedFavorites);
        dispatch({ type: 'LOAD_FAVORITES', payload: favoritesItems });
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state.cart.items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state.cart.items]);

  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(state.favorites.items));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [state.favorites.items]);

  // Cart methods
  const addToCart = (product: Product, quantity = 1, selectedColor?: string, selectedSize?: string) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, quantity, selectedColor, selectedSize },
    });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Favorites methods
  const addToFavorites = (product: Product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  const removeFromFavorites = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: { id } });
  };

  const toggleFavorite = (product: Product) => {
    if (state.favorites.items.some(item => item.id === product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const isFavorite = (id: string): boolean => {
    return state.favorites.items.some(item => item.id === id);
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const value: StoreContextType = {
    state,
    dispatch,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}

// Hook to use the store context
export function useStore(): StoreContextType {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}

// Export types
export type { CartItem, StoreState };