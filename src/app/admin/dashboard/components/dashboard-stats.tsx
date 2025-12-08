import { BarChart3, Users, BookOpen, DollarSign } from 'lucide-react';

const stats = [
  {
    label: 'Total Courses',
    value: '24',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    label: 'Total Students',
    value: '1,234',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    label: 'Total Revenue',
    value: '$45,230',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    label: 'Active Webinars',
    value: '8',
    icon: BarChart3,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
              <div className={`rounded-xl ${stat.bgColor} p-3`}>
                <Icon className={`h-6 w-6 ${stat.color}`} strokeWidth={2} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
