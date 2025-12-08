import { Badge } from 'lucide-react';

export function CourseOverview() {
  return (
    <div className="space-y-6">
      {/* Thumbnail & Header Card */}
      <div className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-sm">
        {/* Thumbnail */}
        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-slate-400">Course Thumbnail</span>
          </div>
        </div>

        {/* Header Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Advanced React Development</h2>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Development
                </span>
                <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                  Advanced
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex rounded-lg bg-emerald-100 px-3 py-1">
                <p className="text-sm font-semibold text-emerald-700">Published</p>
              </div>
            </div>
          </div>

          {/* Instructor Info */}
          <div className="pt-4 border-t border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Instructor</p>
            <p className="text-sm font-medium text-slate-900">John Smith</p>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column - Basic Info */}
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Course ID</p>
              <p className="text-sm font-medium text-slate-900 mt-1">COURSE-001</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Category</p>
              <p className="text-sm font-medium text-slate-900 mt-1">Development</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Level</p>
              <p className="text-sm font-medium text-slate-900 mt-1">Advanced</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Price</p>
              <p className="text-sm font-medium text-slate-900 mt-1">$99.99</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Created Date</p>
              <p className="text-sm font-medium text-slate-900 mt-1">Jan 15, 2024</p>
            </div>
          </div>
        </div>

        {/* Right Column - Course Stats */}
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Course Statistics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <p className="text-sm text-slate-600">Total Modules</p>
              <p className="text-2xl font-bold text-emerald-600">3</p>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <p className="text-sm text-slate-600">Total Lessons</p>
              <p className="text-2xl font-bold text-emerald-600">12</p>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <p className="text-sm text-slate-600">Total Students</p>
              <p className="text-2xl font-bold text-emerald-600">234</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600">Last Updated</p>
              <p className="text-sm font-medium text-slate-900">3 days ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-3">Course Description</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Master React hooks, state management, and performance optimization. This comprehensive course covers everything you need to become a professional React developer. Learn best practices, design patterns, and real-world applications. From beginner fundamentals to advanced techniques, you'll gain hands-on experience through practical projects and real-world scenarios.
        </p>
      </div>

      {/* Course Preview */}
      <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Course Preview Video</h3>
        <div className="aspect-video rounded-lg bg-slate-100 flex items-center justify-center border border-dashed border-slate-200">
          <div className="text-center">
            <div className="text-4xl text-slate-300 mb-2">▶</div>
            <p className="text-sm text-slate-500">Preview video (upload placeholder)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
