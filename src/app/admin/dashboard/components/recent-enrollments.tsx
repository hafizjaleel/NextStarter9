import { ArrowRight } from 'lucide-react';

const enrollments = [
  {
    id: 1,
    studentName: 'Sarah Johnson',
    courseName: 'Advanced React Development',
    date: '2 hours ago',
    status: 'Active',
  },
  {
    id: 2,
    studentName: 'Michael Chen',
    courseName: 'UI/UX Design Fundamentals',
    date: '5 hours ago',
    status: 'Active',
  },
  {
    id: 3,
    studentName: 'Emma Davis',
    courseName: 'Full Stack Web Development',
    date: '1 day ago',
    status: 'In Progress',
  },
  {
    id: 4,
    studentName: 'Alex Martinez',
    courseName: 'JavaScript Mastery',
    date: '2 days ago',
    status: 'In Progress',
  },
  {
    id: 5,
    studentName: 'Jessica Lee',
    courseName: 'Python for Data Science',
    date: '3 days ago',
    status: 'Active',
  },
];

export function RecentEnrollments() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Recent Enrollments</h3>
          <p className="mt-1 text-sm text-slate-600">Latest student registrations</p>
        </div>
        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition flex items-center gap-1">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Enrollments Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Student
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Course
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr
                key={enrollment.id}
                className="border-b border-slate-50 hover:bg-slate-50 transition"
              >
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-slate-900">
                    {enrollment.studentName}
                  </p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-600">{enrollment.courseName}</p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-500">{enrollment.date}</p>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    {enrollment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
