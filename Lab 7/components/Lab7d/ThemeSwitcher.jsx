"use client";

import React, { useEffect } from 'react';

export const DEFAULT_COLOR = { name: 'Default', class: 'bg-default', hex: '#f3f4f6' };

export const THEME_OPTIONS = [
  { name: 'Red', class: 'bg-red', hex: '#ef4444' },
  { name: 'Green', class: 'bg-green', hex: '#22c55e' },
  { name: 'Blue', class: 'bg-blue', hex: '#3b82f6' },
  { name: 'Gray', class: 'bg-gray', hex: '#6b7280' },
  DEFAULT_COLOR,
];

function ThemeSwitcher({ activeBg = DEFAULT_COLOR.class, onSelectTheme = () => {} }) {
  const resolvedActive = THEME_OPTIONS.some((theme) => theme.class === activeBg)
    ? activeBg
    : DEFAULT_COLOR.class;

  useEffect(() => {
    try {
      const storedHex = localStorage.getItem('app_bg_hex');
      if (storedHex) {
        document.documentElement.style.setProperty('--app-bg', storedHex);
      } else {
        document.documentElement.style.setProperty('--app-bg', DEFAULT_COLOR.hex);
      }
    } catch (error) {
      // ignore persistence errors
    }
  }, []);

  const handleColorClick = (theme) => {
    onSelectTheme(theme);
    try {
      localStorage.setItem('app_bg', theme.class);
      localStorage.setItem('app_bg_hex', theme.hex);
      document.documentElement.style.setProperty('--app-bg', theme.hex);
    } catch (error) {
      // ignore persistence errors
    }
  };

  return (
    <section className="theme-section">
      <h2 className="section-heading">Lab 7d: Task 2 - Theme Switcher</h2>
      <div className="theme-panel">
        <p className="theme-description">Select a background color for the page:</p>
        <div className="theme-grid">
          {THEME_OPTIONS.map((theme) => (
            <button
              key={theme.name}
              onClick={() => handleColorClick(theme)}
              className={`theme-chip ${theme.class} ${theme.name === 'Default' ? 'theme-chip--default' : ''} ${resolvedActive === theme.class ? 'theme-chip--active' : ''}`}
              type="button"
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThemeSwitcher;
