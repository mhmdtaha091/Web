import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Lab 7d: Task 1 - Counter</h2>
      <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
        <p className="text-5xl font-bold mb-4">{count}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleIncrement}
            className="bg-blue-500 text-white px-4 py-2 rounded font-medium hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded font-medium hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
