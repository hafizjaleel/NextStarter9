'use client';

import { TrendingUp } from 'lucide-react';

export function SalesChart() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Revenue Analytics</h3>
          <p className="mt-1 text-sm text-slate-600">Last 30 days</p>
        </div>
        <div className="rounded-lg bg-emerald-100 p-3">
          <TrendingUp className="h-6 w-6 text-emerald-600" strokeWidth={2} />
        </div>
      </div>

      {/* Placeholder Chart Area */}
      <div className="mt-6 h-72 rounded-xl bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-slate-900">+28%</div>
          <p className="text-sm text-slate-600">Revenue growth this month</p>
        </div>
      </div>

      {/* Chart Legend */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-600">This Month</p>
          <p className="mt-1 text-lg font-bold text-slate-900">$12,450</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-600">Last Month</p>
          <p className="mt-1 text-lg font-bold text-slate-900">$9,720</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-600">Avg Daily</p>
          <p className="mt-1 text-lg font-bold text-slate-900">$415</p>
        </div>
      </div>
    </div>
  );
}
