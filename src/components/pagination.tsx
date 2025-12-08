import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  children: React.ReactNode;
}

export function Pagination({ children }: PaginationProps) {
  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      {children}
    </nav>
  );
}

interface PaginationButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export function PaginationPrevious({ onClick, disabled = false }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
      aria-label="Previous page"
    >
      <ChevronLeft className="h-4 w-4" strokeWidth={2} />
      Previous
    </button>
  );
}

export function PaginationNext({ onClick, disabled = false }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
      aria-label="Next page"
    >
      Next
      <ChevronRight className="h-4 w-4" strokeWidth={2} />
    </button>
  );
}

interface PaginationPageProps {
  page: number;
  isActive?: boolean;
  onClick?: () => void;
}

export function PaginationPage({ page, isActive = false, onClick }: PaginationPageProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
        isActive
          ? 'bg-emerald-600 text-white shadow-md'
          : 'border border-slate-100 bg-white text-slate-600 hover:bg-slate-50'
      }`}
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {page}
    </button>
  );
}
