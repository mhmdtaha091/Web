'use client';

import React, { useState, useEffect, useRef } from 'react';


const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20" height="20">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25A2.25 2.25 0 0012 16.5a2.25 2.25 0 002.25-2.25A2.25 2.25 0 0012 12z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20" height="20">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

function StickyNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const storedValue = localStorage.getItem('dark_mode');
      if (storedValue !== null) {
        setIsDarkMode(storedValue === 'true');
        return;
      }

      setIsDarkMode(document.documentElement.classList.contains('dark'));
    } catch (error) {
      // ignore persistence errors
    }
  }, []);

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
    <nav className="navbar">
      <div className="app-container navbar-inner">
        <div className="navbar-brand">
          <div className="brand-mark">M</div>
          <span className="brand-name">Muhammad Taha Khan</span>
        </div>

        <div className="navbar-links" role="menubar" aria-label="Main navigation">
          <a href="#" className="nav-link" role="menuitem">Home</a>
          <a href="#" className="nav-link" role="menuitem">About</a>
          <a href="#" className="nav-link" role="menuitem">Contact</a>
        </div>

        <div className="navbar-actions">
          <button
            onClick={toggleDarkMode}
            className={`theme-toggle ${isDarkMode ? 'theme-toggle--dark' : ''}`}
            aria-pressed={isDarkMode}
            aria-label="Toggle dark mode"
          >
            <span className="sr-only">Toggle dark mode</span>
            <span className="theme-toggle__thumb">
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </span>
          </button>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
          <div
            id="mobile-menu"
            className="mobile-sheet"
            role="dialog"
            aria-modal="true"
          >
            <div className="app-container mobile-sheet__content">
              <a
                ref={firstMobileLinkRef}
                href="#"
                className="mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#"
                className="mobile-link"
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
