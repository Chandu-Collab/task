import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';

interface RatingProps {
  rating: number;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  className?: string;
}

export function Rating({ 
  rating, 
  count, 
  size = 'md', 
  showCount = true, 
  className 
}: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= Math.floor(rating);
    const isPartial = starNumber === Math.ceil(rating) && rating % 1 !== 0;
    
    return {
      id: starNumber,
      filled: isFilled,
      partial: isPartial,
      percentage: isPartial ? (rating % 1) * 100 : 0,
    };
  });

  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {stars.map((star) => (
          <div key={star.id} className="relative">
            {star.partial ? (
              <div className="relative">
                {/* Background star (empty) */}
                <Star 
                  className={cn(sizeClasses[size], 'text-gray-300')}
                  fill="currentColor"
                />
                {/* Foreground star (filled) with clip-path for partial fill */}
                <Star
                  className={cn(
                    sizeClasses[size], 
                    'absolute inset-0 text-yellow-400'
                  )}
                  fill="currentColor"
                  style={{
                    clipPath: `inset(0 ${100 - star.percentage}% 0 0)`,
                  }}
                />
              </div>
            ) : (
              <Star
                className={cn(
                  sizeClasses[size],
                  star.filled ? 'text-yellow-400' : 'text-gray-300'
                )}
                fill="currentColor"
              />
            )}
          </div>
        ))}
      </div>
      
      <div className={cn('flex items-center gap-1', textSizeClasses[size])}>
        <span className="font-medium text-gray-900">
          {rating.toFixed(1)}
        </span>
        {showCount && count && (
          <span className="text-gray-500">
            ({count.toLocaleString()})
          </span>
        )}
      </div>
    </div>
  );
}