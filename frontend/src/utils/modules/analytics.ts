export function initializeAnalytics() {
  // Only load analytics in production
  if (import.meta.env.PROD) {
    return import('./analytics-loader').then(module => module.default());
  }
}

export function trackEvent(category: string, action: string, label?: string) {
  if (import.meta.env.PROD) {
    window.dataLayer?.push({
      event: 'custom_event',
      category,
      action,
      label
    });
  }
}