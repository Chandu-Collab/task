import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Color } from '@/types';

interface ColorSwatchProps {
  color: Color;
  selected?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ColorSwatch({ 
  color, 
  selected = false, 
  onClick, 
  size = 'md',
  className 
}: ColorSwatchProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };

  const checkSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        sizeClasses[size],
        selected 
          ? 'border-gray-800 shadow-md scale-110' 
          : 'border-gray-300 hover:border-gray-400 hover:scale-105',
        className
      )}
      style={{ backgroundColor: color.hex }}
      title={color.name}
      aria-label={`Select ${color.name} color`}
    >
      {selected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Check 
            className={cn(
              checkSizes[size],
              // Use white check for dark colors, dark check for light colors
              isLightColor(color.hex) ? 'text-gray-800' : 'text-white'
            )}
            strokeWidth={3}
          />
        </div>
      )}
    </button>
  );
}

// Helper function to determine if a color is light or dark
function isLightColor(hex: string): boolean {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5;
}