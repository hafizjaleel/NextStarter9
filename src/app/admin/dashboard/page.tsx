import { DashboardStats } from './components/dashboard-stats';
import { SalesChart } from './components/sales-chart';
import { WebinarAnalytics } from './components/webinar-analytics';
import { RecentEnrollments } from './components/recent-enrollments';

export const metadata = {
  title: 'Dashboard | LMS Admin',
  description: 'LMS Dashboard with analytics and recent enrollments',
};

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <DashboardStats />

      {/* Charts Section */}
      <div className="grid gap-8 lg:grid-cols-2">
        <SalesChart />
        <WebinarAnalytics />
      </div>

      {/* Recent Enrollments */}
      <RecentEnrollments />
    </div>
  );
}
