import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onPreviousPage,
  onNextPage,
  className,
}: PaginationProps) {
  // Calculate displayed items range
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if total pages <= 7
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 4) {
        // Near the beginning
        for (let i = 2; i <= Math.min(5, totalPages - 1); i++) {
          pages.push(i);
        }
        if (totalPages > 5) {
          pages.push('ellipsis');
        }
      } else if (currentPage >= totalPages - 3) {
        // Near the end
        if (totalPages > 5) {
          pages.push('ellipsis');
        }
        for (let i = Math.max(totalPages - 4, 2); i < totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
      }

      // Always show last page (if more than 1 page)
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  const pages = getPageNumbers();

  return (
    <div className={cn('flex flex-col sm:flex-row items-center justify-between gap-4', className)}>
      {/* Items info */}
      <div className="text-sm text-gray-700">
        Showing <span className="font-medium">{startItem}</span> to{' '}
        <span className="font-medium">{endItem}</span> of{' '}
        <span className="font-medium">{totalItems}</span> results
      </div>

      {/* Pagination controls */}
      <nav className="flex items-center gap-1" aria-label="Pagination">
        {/* Previous button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          className="flex items-center gap-1"
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {pages.map((page, index) => (
            <div key={index}>
              {page === 'ellipsis' ? (
                <div className="flex items-center justify-center w-10 h-10">
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </div>
              ) : (
                <Button
                  variant={currentPage === page ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => onPageChange(page)}
                  className={cn(
                    'w-10 h-10 p-0',
                    currentPage === page 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'hover:bg-gray-100'
                  )}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Next button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1"
          aria-label="Go to next page"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </nav>
    </div>
  );
}

// Simplified pagination for mobile
export function MobilePagination({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  className,
}: Pick<PaginationProps, 'currentPage' | 'totalPages' | 'onPreviousPage' | 'onNextPage' | 'className'>) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className="flex items-center gap-2"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      <span className="text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}