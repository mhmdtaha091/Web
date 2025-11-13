"use client";

import { useEffect, useState } from 'react';
import Login from "../components/Lab7a/Login";
import ShoppingApp from "../components/Lab7b/ShoppingApp";
import StickyNavbar from "../components/Lab7c/StickyNavbar";
import ResponsiveCard from "../components/Lab7c/ResponsiveCard";
import Counter from "../components/Lab7d/Counter";
import ThemeSwitcher, { DEFAULT_COLOR, THEME_OPTIONS } from "../components/Lab7d/ThemeSwitcher";

const themeByClass = new Map(THEME_OPTIONS.map((theme) => [theme.class, theme]));

export default function HomePage() {
  const [appBg, setAppBg] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_COLOR.class;
    }
    try {
      const storedClass = localStorage.getItem("app_bg");
      if (storedClass && themeByClass.has(storedClass)) {
        return storedClass;
      }
      return DEFAULT_COLOR.class;
    } catch (error) {
      return DEFAULT_COLOR.class;
    }
  });

  const [appBgHex, setAppBgHex] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_COLOR.hex;
    }
    try {
      const storedHex = localStorage.getItem("app_bg_hex");
      if (storedHex) {
        return storedHex;
      }
      const storedClass = localStorage.getItem("app_bg");
      const theme = storedClass ? themeByClass.get(storedClass) : null;
      return theme?.hex || DEFAULT_COLOR.hex;
    } catch (error) {
      return DEFAULT_COLOR.hex;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("app_bg", appBg);
    } catch (error) {
      // ignore persistence errors
    }
  }, [appBg]);

  useEffect(() => {
    try {
      if (appBgHex) {
        localStorage.setItem("app_bg_hex", appBgHex);
        document.documentElement.style.setProperty("--app-bg", appBgHex);
      }
    } catch (error) {
      // ignore persistence errors
    }
  }, [appBgHex]);

  const handleThemeSelect = (theme) => {
    setAppBg(theme.class);
    setAppBgHex(theme.hex);
  };

  return (
    <div className={`app-shell ${appBg}`} style={{ backgroundColor: appBgHex || DEFAULT_COLOR.hex }}>
      <StickyNavbar />
      <main className="app-wrapper">
        <div className="app-container">
          <h1 className="page-title">SEL-310: Lab 7 Solutions</h1>

          <section className="section-block" id="lab-7a">
            <Login />
          </section>

          <hr className="section-divider" />

          <section className="section-block" id="lab-7b">
            <ShoppingApp />
          </section>

          <hr className="section-divider" />

          <section className="section-block" id="lab-7c">
            <ResponsiveCard />
          </section>

          <hr className="section-divider" />

          <section className="section-block" id="lab-7d">
            <Counter />
            <ThemeSwitcher activeBg={appBg} onSelectTheme={handleThemeSelect} />
          </section>
        </div>
      </main>
    </div>
  );
}
