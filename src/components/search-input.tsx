import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export function SearchInput({
  placeholder = 'Search...',
  onChange,
  value,
}: SearchInputProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={2} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-full bg-slate-50 border border-slate-200 pl-10 pr-5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
      />
    </div>
  );
}
