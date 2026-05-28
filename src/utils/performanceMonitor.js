export const measurePerformance = () => {
    if (typeof window === 'undefined') return;
  
    window.addEventListener('load', () => {
      // Wait for all resources to load
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        const paintEntries = performance.getEntriesByType('paint');
  
        const metrics = {
          // Load times
          dns: Math.round(perfData.domainLookupEnd - perfData.domainLookupStart),
          tcp: Math.round(perfData.connectEnd - perfData.connectStart),
          ttfb: Math.round(perfData.responseStart - perfData.requestStart), // Time to First Byte
          download: Math.round(perfData.responseEnd - perfData.responseStart),
          domReady: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
          pageLoad: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          
          // Paint times
          fcp: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          
          // Resource counts
          resources: performance.getEntriesByType('resource').length,
        };
  
        // Log to console
        console.group('📊 Performance Metrics');
        console.log(`🌐 DNS Lookup: ${metrics.dns}ms`);
        console.log(`🔌 TCP Connection: ${metrics.tcp}ms`);
        console.log(`⚡ Time to First Byte: ${metrics.ttfb}ms`);
        console.log(`📥 Download Time: ${metrics.download}ms`);
        console.log(`📄 DOM Ready: ${metrics.domReady}ms`);
        console.log(`✅ Page Load: ${metrics.pageLoad}ms`);
        console.log(`🎨 First Contentful Paint: ${Math.round(metrics.fcp)}ms`);
        console.log(`📦 Resources Loaded: ${metrics.resources}`);
        console.groupEnd();
  
        // Performance scores
        const scores = {
          fcp: metrics.fcp < 1800 ? 'Good' : metrics.fcp < 3000 ? 'Needs Work' : 'Poor',
          ttfb: metrics.ttfb < 600 ? 'Good' : metrics.ttfb < 1000 ? 'Needs Work' : 'Poor',
          pageLoad: metrics.pageLoad < 3000 ? 'Good' : metrics.pageLoad < 5000 ? 'Needs Work' : 'Poor',
        };
  
        console.group('⭐ Performance Scores');
        console.log(`FCP: ${scores.fcp} (${Math.round(metrics.fcp)}ms)`);
        console.log(`TTFB: ${scores.ttfb} (${metrics.ttfb}ms)`);
        console.log(`Page Load: ${scores.pageLoad} (${metrics.pageLoad}ms)`);
        console.groupEnd();
  
        // Get bundle size estimate
        const resources = performance.getEntriesByType('resource');
        const totalSize = resources.reduce((sum, resource) => {
          return sum + (resource.transferSize || 0);
        }, 0);
        
        console.log(`📦 Total Page Size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  
        // Optional: Send to analytics
        if (import.meta.env.PROD) {
          // sendToAnalytics(metrics);
        }
  
        return metrics;
      }, 0);
    });
  };
  
  // Usage in main.jsx or App.jsx:
  // import { measurePerformance } from './utils/performanceMonitor';
  // measurePerformance();
  
  
  // ============================================
  // Advanced: Component Performance Tracker
  // ============================================
  
  export const useComponentPerformance = (componentName) => {
    if (import.meta.env.DEV) {
      const startTime = performance.now();
      
      return () => {
        const endTime = performance.now();
        const renderTime = endTime - startTime;
        
        if (renderTime > 16) { // Longer than 1 frame (60fps)
          console.warn(`⚠️ ${componentName} took ${renderTime.toFixed(2)}ms to render`);
        }
      };
    }
    return () => {};
  };
  
  // Usage in components:
  // import { useComponentPerformance } from '../utils/performanceMonitor';
  // 
  // const MyComponent = () => {
  //   const trackPerformance = useComponentPerformance('MyComponent');
  //   
  //   useEffect(() => {
  //     trackPerformance();
  //   });
  //   
  //   return <div>...</div>;
  // };
  
  
  // ============================================
  // Image Performance Tracker
  // ============================================
  
  export const trackImageLoading = () => {
    if (import.meta.env.DEV) {
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        if (!img.complete) {
          const startTime = performance.now();
          
          img.addEventListener('load', () => {
            const loadTime = performance.now() - startTime;
            
            if (loadTime > 1000) {
              console.warn(`🖼️ Slow image: ${img.src} took ${loadTime.toFixed(0)}ms`);
            }
          });
        }
      });
    }
  };
  
