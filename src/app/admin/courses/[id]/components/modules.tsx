import { ChevronRight, Plus, Edit2, Trash2 } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: 'Getting Started with React',
    lessons: 3,
    duration: '2h 15m',
  },
  {
    id: 2,
    title: 'React Hooks Deep Dive',
    lessons: 5,
    duration: '4h 30m',
  },
  {
    id: 3,
    title: 'State Management',
    lessons: 4,
    duration: '3h 45m',
  },
];

export function CourseModules() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700">
          <Plus className="h-4 w-4" strokeWidth={2} />
          Add Module
        </button>
      </div>

      <div className="space-y-3">
        {modules.map((module) => (
          <div
            key={module.id}
            className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-base font-bold text-slate-900">{module.title}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                  <span>{module.lessons} lessons</span>
                  <span>{module.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600">
                  <Edit2 className="h-4 w-4" strokeWidth={2} />
                </button>
                <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-red-600">
                  <Trash2 className="h-4 w-4" strokeWidth={2} />
                </button>
                <ChevronRight className="h-5 w-5 text-slate-400" strokeWidth={2} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
