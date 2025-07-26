import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getInitialTheme, applyTheme, toggleTheme } from '../utils/theme';

// Mock window and localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};

const mockMatchMedia = vi.fn();

beforeEach(() => {
  // Reset mocks
  mockLocalStorage.getItem.mockReset();
  mockLocalStorage.setItem.mockReset();
  mockLocalStorage.removeItem.mockReset();
  mockMatchMedia.mockReset();

  // Setup global mocks
  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
    writable: true,
  });

  Object.defineProperty(window, 'matchMedia', {
    value: mockMatchMedia,
    writable: true,
  });

  // Mock document.documentElement
  Object.defineProperty(document, 'documentElement', {
    value: {
      classList: {
        add: vi.fn(),
        remove: vi.fn(),
        contains: vi.fn(),
      },
    },
    writable: true,
  });
});

describe('Theme Utils', () => {
  describe('getInitialTheme', () => {
    it('should return stored theme from localStorage when available', () => {
      mockLocalStorage.getItem.mockReturnValue('dark');
      
      const theme = getInitialTheme();
      
      expect(theme).toBe('dark');
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('theme');
    });

    it('should return light theme from localStorage when stored', () => {
      mockLocalStorage.getItem.mockReturnValue('light');
      
      const theme = getInitialTheme();
      
      expect(theme).toBe('light');
    });

    it('should fallback to system preference when localStorage is empty', () => {
      mockLocalStorage.getItem.mockReturnValue(null);
      mockMatchMedia.mockReturnValue({ matches: true });
      
      const theme = getInitialTheme();
      
      expect(theme).toBe('dark');
      expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
    });

    it('should default to light when localStorage is empty and system prefers light', () => {
      mockLocalStorage.getItem.mockReturnValue(null);
      mockMatchMedia.mockReturnValue({ matches: false });
      
      const theme = getInitialTheme();
      
      expect(theme).toBe('light');
    });

    it('should handle invalid localStorage values', () => {
      mockLocalStorage.getItem.mockReturnValue('invalid-theme');
      mockMatchMedia.mockReturnValue({ matches: false });
      
      const theme = getInitialTheme();
      
      expect(theme).toBe('light');
    });
  });

  describe('applyTheme', () => {
    it('should add dark class and save to localStorage for dark theme', () => {
      const mockClassList = document.documentElement.classList;
      
      applyTheme('dark');
      
      expect(mockClassList.add).toHaveBeenCalledWith('dark');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    });

    it('should remove dark class and save to localStorage for light theme', () => {
      const mockClassList = document.documentElement.classList;
      
      applyTheme('light');
      
      expect(mockClassList.remove).toHaveBeenCalledWith('dark');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });
  });

  describe('toggleTheme', () => {
    it('should return dark when current theme is light', () => {
      const newTheme = toggleTheme('light');
      
      expect(newTheme).toBe('dark');
    });

    it('should return light when current theme is dark', () => {
      const newTheme = toggleTheme('dark');
      
      expect(newTheme).toBe('light');
    });

    it('should handle invalid current theme by defaulting to light', () => {
      const newTheme = toggleTheme('invalid' as any);
      
      expect(newTheme).toBe('light');
    });
  });
}); 