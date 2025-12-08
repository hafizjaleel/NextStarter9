'use client';

import { useState } from 'react';
import { CourseCard } from './components/course-card';
import { SearchInput } from '@/components/search-input';
import { FilterPanel } from '@/components/filter-panel';

const courses = [
  {
    id: 1,
    title: 'Advanced React Development',
    description: 'Master React hooks, state management, and performance optimization',
    category: 'Development',
    difficulty: 'Advanced' as const,
    students: 234,
    episodes: 12,
    badge: '12 lessons',
    updated: 'Updated 2 days ago',
  },
  {
    id: 2,
    title: 'UI/UX Design Fundamentals',
    description: 'Learn modern design principles and tools for creating stunning interfaces',
    category: 'Design',
    difficulty: 'Beginner' as const,
    students: 156,
    episodes: 8,
    badge: '8 lessons',
    updated: 'Updated 1 week ago',
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    description: 'Complete guide to building production-ready web applications',
    category: 'Development',
    difficulty: 'Advanced' as const,
    students: 412,
    episodes: 24,
    badge: '24 lessons',
    updated: 'Updated 3 days ago',
  },
  {
    id: 4,
    title: 'JavaScript Mastery',
    description: 'Deep dive into JavaScript fundamentals and advanced patterns',
    category: 'Programming',
    difficulty: 'Intermediate' as const,
    students: 189,
    episodes: 16,
    badge: '16 lessons',
    updated: 'Updated 5 days ago',
  },
];

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Courses</h1>
          <p className="mt-1 text-sm text-slate-600">Manage all courses and content</p>
        </div>
        <button className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700">
          + Create Course
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full rounded-lg bg-white border border-slate-100 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
          <Filter className="h-4 w-4" strokeWidth={2} />
          Filter
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            category={course.category}
            difficulty={course.difficulty}
            episodes={course.episodes}
            students={course.students}
            badge={course.badge}
            updated={course.updated}
          />
        ))}
      </div>
    </div>
  );
}
