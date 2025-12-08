import { TrendingUp, Users, Clock } from 'lucide-react';

export function CourseAnalytics() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Enrollments</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">234</p>
              <p className="mt-1 text-xs text-emerald-600">+12 this month</p>
            </div>
            <div className="rounded-lg bg-blue-100 p-3">
              <Users className="h-6 w-6 text-blue-600" strokeWidth={2} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Avg. Completion Time</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">12h 30m</p>
              <p className="mt-1 text-xs text-slate-600">per student</p>
            </div>
            <div className="rounded-lg bg-purple-100 p-3">
              <Clock className="h-6 w-6 text-purple-600" strokeWidth={2} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">Completion Rate</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">78%</p>
              <p className="mt-1 text-xs text-emerald-600">+5% from last month</p>
            </div>
            <div className="rounded-lg bg-emerald-100 p-3">
              <TrendingUp className="h-6 w-6 text-emerald-600" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Engagement */}
      <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Student Engagement</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-slate-900">Video Completion</p>
              <p className="text-sm text-slate-600">85%</p>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-full w-[85%] rounded-full bg-emerald-600" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-slate-900">Quiz Participation</p>
              <p className="text-sm text-slate-600">72%</p>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-full w-[72%] rounded-full bg-blue-600" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-slate-900">Discussion Participation</p>
              <p className="text-sm text-slate-600">45%</p>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-full w-[45%] rounded-full bg-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Popular Lessons */}
      <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Most Popular Lessons</h3>
        <div className="space-y-3">
          {[
            { title: 'Introduction to React', views: 234 },
            { title: 'useState Hook Tutorial', views: 198 },
            { title: 'useEffect Deep Dive', views: 156 },
          ].map((lesson, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
              <p className="text-sm text-slate-900">{lesson.title}</p>
              <p className="text-sm font-medium text-slate-600">{lesson.views} views</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
