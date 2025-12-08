'use client';

import { ReactNode, useState } from 'react';

export interface TabItem {
  label: string;
  value: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
}

export function Tabs({ items, defaultValue }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0]?.value || '');

  const activeTabContent = items.find((item) => item.value === activeTab);

  return (
    <div className="space-y-6">
      {/* Tab List */}
      <div className="border-b border-slate-200">
        <div className="flex gap-8">
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveTab(item.value)}
              className={`relative px-1 py-3 text-sm font-medium transition ${
                activeTab === item.value
                  ? 'text-emerald-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
              {activeTab === item.value && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>{activeTabContent?.content}</div>
    </div>
  );
}
