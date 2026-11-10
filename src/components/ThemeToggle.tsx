import { useEffect, useState } from 'react';
import type { Theme } from '../utils/types/theme';

interface ThemeToggleLabels {
  switchToLight: string;
  switchToDark: string;
}

function readSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle({ labels }: { labels: ThemeToggleLabels }) {
  const [systemTheme, setSystemTheme] = useState<Theme>(readSystemTheme);
  const [manualTheme, setManualTheme] = useState<Theme | null>(null);
  const theme = manualTheme ?? systemTheme;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => setSystemTheme(preference.matches ? 'dark' : 'light');

    preference.addEventListener('change', updateTheme);
    return () => preference.removeEventListener('change', updateTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111229' : '#f7f8fc');
  }, [theme]);

  function toggleTheme() {
    setManualTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-pressed={theme === 'dark'}
      aria-label={theme === 'light' ? labels.switchToDark : labels.switchToLight}
      title={theme === 'light' ? labels.switchToDark : labels.switchToLight}
    >
      {theme === 'light' ? (
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16.8 12.2A7.1 7.1 0 0 1 7.8 3.1a7.2 7.2 0 1 0 9 9.1Z" /></svg>
      ) : (
        <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.2" /><path d="M10 1.8v2m0 12.4v2M1.8 10h2m12.4 0h2M4.2 4.2l1.4 1.4m8.8 8.8 1.4 1.4m0-11.6-1.4 1.4m-8.8 8.8-1.4 1.4" /></svg>
      )}
    </button>
  );
}
