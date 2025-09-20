// SEO Audit Component for monitoring technical health
"use client";
import { useEffect } from 'react';

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

export default function SEOAudit() {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined') {
      // Monitor Largest Contentful Paint (LCP)
      try {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          // Send to analytics or logging service
          if (process.env.NODE_ENV === 'development') {
            console.log('LCP:', lastEntry.startTime);
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Gracefully handle unsupported browsers
      }

      // Monitor Cumulative Layout Shift (CLS)
      try {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          let clsValue = 0;
          entries.forEach((entry) => {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
          if (process.env.NODE_ENV === 'development') {
            console.log('CLS:', clsValue);
          }
        }).observe({ entryTypes: ['layout-shift'] });
      } catch {
        // Gracefully handle unsupported browsers
      }

      // Monitor First Input Delay (FID)
      try {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as FirstInputEntry;
            if (process.env.NODE_ENV === 'development') {
              console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
            }
          });
        }).observe({ entryTypes: ['first-input'] });
      } catch {
        // Gracefully handle unsupported browsers
      }
    }
  }, []);

  return (
    <div style={{ display: 'none' }}>
      {/* SEO Monitoring Meta Tags */}
      <meta name="seo-audit-version" content="2025.1" />
      <meta name="last-seo-update" content="2025-09-21" />
      <meta name="seo-status" content="optimized" />
      <meta name="performance-monitoring" content="enabled" />
      <meta name="core-web-vitals" content="monitored" />
    </div>
  );
}
