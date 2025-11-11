import React, { useState, useEffect, useRef } from 'react';


const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25A2.25 2.25 0 0012 16.5a2.25 2.25 0 002.25-2.25A2.25 2.25 0 0012 12z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);


const MenuIcon = ({ isOpen }) => (
  <div className="w-6 h-5 flex flex-col justify-center space-y-1.5">
    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
  </div>
);

function StickyNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem('dark_mode');
      if (stored !== null) return stored === 'true';
    } catch (e) {}
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try { localStorage.setItem('dark_mode', String(isDarkMode)); } catch (e) {}
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((v) => !v);

 
  const firstMobileLinkRef = useRef(null);

  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
      
      setTimeout(() => firstMobileLinkRef.current && firstMobileLinkRef.current.focus(), 50);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200/70 dark:border-gray-800/70">
      <div className="app-container flex h-16 items-center justify-between">
        {}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-sm font-semibold text-white dark:bg-indigo-500">
            
          </div>
          <span className="text-base font-semibold text-gray-900 dark:text-white">Muhammad Taha Khan</span>
        </div>

        {}
        <div className="hidden items-center gap-1 md:flex" role="menubar" aria-label="Main navigation">
          <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800" role="menuitem">
            Home
          </a>
          <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800" role="menuitem">
            About
          </a>
          <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800" role="menuitem">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          {}
          <button
            onClick={toggleDarkMode}
            className="relative flex h-7 w-12 items-center rounded-full bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700"
            aria-pressed={isDarkMode}
            aria-label="Toggle dark mode"
          >
            <span className="sr-only">Toggle dark mode</span>
            <span
              className={`absolute left-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`}
            >
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </span>
          </button>

          {}
          <button
            className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </div>

      {}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setIsMobileMenuOpen(false)} />

          <div
            id="mobile-menu"
            className="fixed top-16 inset-x-0 z-50 border-t border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
            role="dialog"
            aria-modal="true"
          >
            <div className="app-container flex flex-col gap-1 py-4">
              <a
                ref={firstMobileLinkRef}
                href="#"
                className="rounded-md px-3 py-2 text-base font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-base font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-base font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default StickyNavbar;
