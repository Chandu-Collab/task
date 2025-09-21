import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'hot' | 'discount' | 'new' | 'sale' | 'default' | 'outline';
  children: React.ReactNode;
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
        {
          'bg-red-100 text-red-800': variant === 'hot',
          'bg-green-100 text-green-800': variant === 'discount',
          'bg-blue-100 text-blue-800': variant === 'new',
          'bg-orange-100 text-orange-800': variant === 'sale',
          'bg-gray-100 text-gray-800': variant === 'default',
          'border border-gray-300 bg-background text-gray-700': variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}