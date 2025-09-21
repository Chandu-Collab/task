import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface SortOption {
  id: string;
  name: string;
  field: string;
  direction: 'asc' | 'desc';
}

interface SortDropdownProps {
  options: SortOption[];
  selectedId: string;
  onSelect: (sortId: string) => void;
  className?: string;
}

export function SortDropdown({ options, selectedId, onSelect, className }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.id === selectedId);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (optionId: string) => {
    onSelect(optionId);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto justify-between min-w-[200px] font-semibold text-gray-900"
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Sort options"
      >
        <span className="truncate">
          {selectedOption ? selectedOption.name : 'Sort by'}
        </span>
        <ChevronDown 
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </Button>

      {isOpen && (
        <>
          {/* Mobile/tablet overlay */}
          <div 
            className="fixed inset-0 z-40 sm:hidden" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown menu */}
          <div
            className={cn(
              'absolute right-0 mt-2 w-full sm:w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50',
              'sm:right-0', // Desktop: align to right
              'max-h-60 overflow-auto' // Limit height and scroll if needed
            )}
            role="listbox"
            aria-label="Sort options"
          >
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className={cn(
                    'flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors',
                    selectedId === option.id ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-900'
                  )}
                  role="option"
                  aria-selected={selectedId === option.id}
                >
                  <span className="truncate">{option.name}</span>
                  {selectedId === option.id && (
                    <Check className="h-4 w-4 text-blue-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}