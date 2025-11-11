import React, { useState } from 'react';


import Login from './components/Lab7a/Login';
import './components/Lab7a/Login.css'; 


import ShoppingApp from './components/Lab7b/ShoppingApp';
import './components/Lab7b/Shopping.css';


import StickyNavbar from './components/Lab7c/StickyNavbar';
import ResponsiveCard from './components/Lab7c/ResponsiveCard';


import Counter from './components/Lab7d/Counter';
import ThemeSwitcher from './components/Lab7d/ThemeSwitcher';

function App() {
  
  const [appBg, setAppBg] = useState(() => {
    try {
      return localStorage.getItem('app_bg') || 'bg-gray-100';
    } catch (e) {
      return 'bg-gray-100';
    }
  });


  const [appBgHex, setAppBgHex] = React.useState(() => {
    try {
      return localStorage.getItem('app_bg_hex') || null;
    } catch (e) {
      return null;
    }
  });


  React.useEffect(() => {
    try {
      localStorage.setItem('app_bg', appBg);
    } catch (e) {
      
    }
  }, [appBg]);

  React.useEffect(() => {
    try {
      const hex = localStorage.getItem('app_bg_hex');
      setAppBgHex(hex);
      if (hex) document.documentElement.style.setProperty('--app-bg', hex);
    } catch (e) {}
  }, []);

  return (
    <div
      className={`min-h-screen ${appBg} dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      style={appBgHex ? { backgroundColor: `var(--app-bg)` } : undefined}
    >
      <StickyNavbar />

  <div className="app-container p-4">
        <h1 className="text-4xl font-bold text-center my-8">SEL-310: Lab 7 Solutions</h1>

        <section className="my-12">
          <Login />
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <section className="my-12">
          <ShoppingApp />
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <section className="my-12">
          <ResponsiveCard />
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <section className="my-12 space-y-8">
          <Counter />
          <ThemeSwitcher setAppBg={setAppBg} />
        </section>

      </div>
    </div>
  );
}

export default App;
