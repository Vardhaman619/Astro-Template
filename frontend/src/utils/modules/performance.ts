export function measurePerformance() {
  if ('performance' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
}

export function deferThirdPartyScripts() {
  const scripts = document.querySelectorAll('script[data-defer]');
  
  scripts.forEach(script => {
    const src = script.getAttribute('src');
    if (src) {
      setTimeout(() => {
        const newScript = document.createElement('script');
        newScript.src = src;
        document.body.appendChild(newScript);
      }, 3000);
    }
  });
}