"use client";

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  return (
    <section className="counter-section">
      <h2 className="section-heading">Lab 7d: Task 1 - Counter</h2>
      <div className="counter-card">
        <p className="counter-value" aria-live="polite">{count}</p>
        <div className="counter-actions">
          <button onClick={handleIncrement} className="btn-primary" type="button">
            Increment
          </button>
          <button onClick={handleReset} className="btn-secondary" type="button">
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
