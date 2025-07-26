export type Theme = 'light' | 'dark';

/**
 * Gets the initial theme based on localStorage or system preference
 */
export function getInitialTheme(): Theme {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return 'light';
  }

  // First check localStorage
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  // Fallback to system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

/**
 * Applies the theme to the document and saves to localStorage
 */
export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') {
    return;
  }

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  localStorage.setItem('theme', theme);
}

/**
 * Toggles between light and dark theme
 */
export function toggleTheme(currentTheme: Theme): Theme {
  return currentTheme === 'light' ? 'dark' : 'light';
} 