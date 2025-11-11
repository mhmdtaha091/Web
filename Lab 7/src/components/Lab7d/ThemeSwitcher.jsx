import React, { useState, useEffect } from 'react';

function ThemeSwitcher({ setAppBg }) {
  const [activeColor, setActiveColor] = useState(() => {
    try {
      return localStorage.getItem('app_bg') || 'bg-gray-100';
    } catch (e) {
      return 'bg-gray-100';
    }
  });
  
  const colors = [
    { name: 'Red', class: 'bg-red-500', hex: '#ef4444' },
    { name: 'Green', class: 'bg-green-500', hex: '#22c55e' },
    { name: 'Blue', class: 'bg-blue-500', hex: '#3b82f6' },
    { name: 'Gray', class: 'bg-gray-500', hex: '#6b7280' },
    { name: 'Default', class: 'bg-gray-100', hex: '#f3f4f6' },
  ];

  const handleColorClick = (color) => {
    setAppBg(color.class);
    setActiveColor(color.class);
    try {
      localStorage.setItem('app_bg', color.class);
      
      localStorage.setItem('app_bg_hex', color.hex);
      
      document.documentElement.style.setProperty('--app-bg', color.hex);
    } catch (e) {
      
    }
  };

  
  useEffect(() => {
    try {
      const hex = localStorage.getItem('app_bg_hex');
      if (hex) document.documentElement.style.setProperty('--app-bg', hex);
    } catch (e) {}
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Lab 7d: Task 2 - Theme Switcher</h2>
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
        <p className="mb-4">Select a background color for the page:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorClick(color)}
              className={`
                w-20 p-2 rounded text-white font-medium 
                transition hover:opacity-80 
                ${color.class} 
                ${color.name === 'Default' ? '!text-black dark:!text-white' : ''}
                ${activeColor === color.class ? 'ring-4 ring-offset-2 ring-black dark:ring-white' : ''} 
              `}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
