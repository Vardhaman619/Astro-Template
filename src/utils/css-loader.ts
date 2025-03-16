export function loadDeferredStyles() {
  const deferredStyles = [
    '/styles/components.css',
    '/styles/utilities.css',
    '/styles/blog.css',
    '/styles/services.css'
  ];

  deferredStyles.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => { link.media = 'all'; };
    document.head.appendChild(link);
  });
}

export function preloadCriticalImages() {
  const criticalImages = [
    '/images/hero.jpg',
    '/images/logo.svg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}