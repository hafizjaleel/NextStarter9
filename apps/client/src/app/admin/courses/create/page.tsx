'use client';

import { useState } from 'react';
import { Upload, X } from 'lucide-react';

export default function CreateCoursePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    level: '',
    price: '',
    status: 'draft',
  });
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
    }
  };

  const handleRemoveThumbnail = () => {
    setThumbnail(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, thumbnail });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Create Course</h1>
        <p className="mt-1 text-sm text-slate-600">Add a new course to your learning platform</p>
      </div>

      {/* Form Card */}
      <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-slate-900 mb-2">
              Course Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Advanced React Development"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what students will learn in this course"
              rows={4}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>

          {/* Two-Column Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Category Field */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-slate-900 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                required
              >
                <option value="">Select a category</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="programming">Programming</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>

            {/* Level Field */}
            <div>
              <label htmlFor="level" className="block text-sm font-semibold text-slate-900 mb-2">
                Level
              </label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                required
              >
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Price Field */}
            <div>
              <label htmlFor="price" className="block text-sm font-semibold text-slate-900 mb-2">
                Price ($)
              </label>
              <input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="e.g., 99.99"
                min="0"
                step="0.01"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Status Field */}
            <div>
              <label htmlFor="status" className="block text-sm font-semibold text-slate-900 mb-2">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Course Thumbnail</label>
            {thumbnail ? (
              <div className="relative rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <span className="text-xs text-slate-500">Preview</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{thumbnail.name}</p>
                      <p className="text-xs text-slate-500">
                        {(thumbnail.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveThumbnail}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                    aria-label="Remove thumbnail"
                  >
                    <X className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            ) : (
              <label className="cursor-pointer">
                <div className="rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-8 transition hover:border-emerald-300 hover:bg-emerald-50">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-slate-400 mb-2" strokeWidth={2} />
                    <p className="text-sm font-medium text-slate-900">Click to upload thumbnail</p>
                    <p className="text-xs text-slate-500 mt-1">PNG, JPG or WebP (max. 10MB)</p>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="hidden"
                  aria-label="Upload course thumbnail"
                />
              </label>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 border-t border-slate-100 pt-6">
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
