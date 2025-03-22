export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

export function setupDynamicImports() {
  const triggers = document.querySelectorAll('[data-dynamic-import]');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', async () => {
      const module = trigger.getAttribute('data-dynamic-import');
      if (module) {
        const component = await import(`../../components/${module}.ts`);
        component.default();
      }
    });
  });
}