import { Video, FileText, Plus, Edit2, Trash2, Lock } from 'lucide-react';

const lessons = [
  {
    id: 1,
    title: 'Introduction to React',
    type: 'video',
    duration: '15m',
    module: 'Getting Started with React',
    published: true,
  },
  {
    id: 2,
    title: 'Setting Up Your Environment',
    type: 'video',
    duration: '20m',
    module: 'Getting Started with React',
    published: true,
  },
  {
    id: 3,
    title: 'React Basics Quiz',
    type: 'document',
    duration: '10m',
    module: 'Getting Started with React',
    published: false,
  },
  {
    id: 4,
    title: 'useState Hook Tutorial',
    type: 'video',
    duration: '25m',
    module: 'React Hooks Deep Dive',
    published: true,
  },
];

export function CourseLessons() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700">
          <Plus className="h-4 w-4" strokeWidth={2} />
          Add Lesson
        </button>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                {lesson.type === 'video' ? (
                  <Video className="h-5 w-5 text-blue-600 flex-shrink-0" strokeWidth={2} />
                ) : (
                  <FileText className="h-5 w-5 text-orange-600 flex-shrink-0" strokeWidth={2} />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">{lesson.title}</h4>
                    {!lesson.published && (
                      <Lock className="h-3.5 w-3.5 text-slate-400" strokeWidth={2} />
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span>{lesson.module}</span>
                    <span>•</span>
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    lesson.published
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {lesson.published ? 'Published' : 'Draft'}
                </span>
                <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600">
                  <Edit2 className="h-4 w-4" strokeWidth={2} />
                </button>
                <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-red-600">
                  <Trash2 className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
