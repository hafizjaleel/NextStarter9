'use client';

import { Users } from 'lucide-react';

export function WebinarAnalytics() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Webinar Registrations</h3>
          <p className="mt-1 text-sm text-slate-600">Last 7 days</p>
        </div>
        <div className="rounded-lg bg-purple-100 p-3">
          <Users className="h-6 w-6 text-purple-600" strokeWidth={2} />
        </div>
      </div>

      {/* Placeholder Chart Area */}
      <div className="mt-6 h-72 rounded-xl bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-slate-900">342</div>
          <p className="text-sm text-slate-600">Total registrations</p>
        </div>
      </div>

      {/* Webinar Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-600">Upcoming</p>
          <p className="mt-1 text-lg font-bold text-slate-900">5</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-600">Live</p>
          <p className="mt-1 text-lg font-bold text-slate-900">2</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-600">Completed</p>
          <p className="mt-1 text-lg font-bold text-slate-900">18</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-600">Avg Attendance</p>
          <p className="mt-1 text-lg font-bold text-slate-900">89%</p>
        </div>
      </div>
    </div>
  );
}
