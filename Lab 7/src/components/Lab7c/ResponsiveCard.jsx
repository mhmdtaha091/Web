import React from 'react';

function ResponsiveCard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Lab 7c: Task 1 - Responsive Card</h2>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden md:max-w-4xl transition-colors duration-200">
        <div className="relative md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:w-56"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070"
              alt="A laptop with code on the screen"
            />
          </div>

          <div className="p-6 flex-1">
            <div className="uppercase tracking-wide text-xs text-indigo-500 font-semibold">
              Web Development
            </div>

            <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Responsive Card with Tailwind
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              This card is built using Tailwind CSS utility classes. It's responsive, accessible and includes flexbox, padding, and soft shadow.
            </p>

            <div className="mt-5">
              <a
                href="#"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>

          <span className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
            New
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveCard;
