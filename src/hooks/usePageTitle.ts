import { useEffect } from 'react';

/**
 * Hook to set the document title for SEO
 * @param title - The page title (will be appended with " | Simple Road")
 */
export const usePageTitle = (title: string) => {
  useEffect(() => {
    const fullTitle = `${title} | Simple Road`;
    document.title = fullTitle;
    return () => {
      // Reset to default title when component unmounts
      document.title = 'Simple Road: Ethiopian Student Learning Platform';
    };
  }, [title]);
};

/**
 * Hook to set the document title without appending brand name
 * @param title - The full page title
 */
export const useFullPageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
    return () => {
      // Reset to default title when component unmounts
      document.title = 'Simple Road: Ethiopian Student Learning Platform';
    };
  }, [title]);
};
