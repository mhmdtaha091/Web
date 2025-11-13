'use client';

import React, { useEffect, useState } from 'react';
import ShoppingInput from './ShoppingInput';
import ShoppingList from './ShoppingList';

function ShoppingApp() {
  // Initialize items from localStorage so list persists between reloads
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('shopping_items');
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore parse errors
    }
    return [
      { id: 1, name: 'Milk', category: 'Dairy', purchased: false },
      { id: 2, name: 'Bread', category: 'Bakery', purchased: true },
    ];
  });

  // Persist to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem('shopping_items', JSON.stringify(items));
    } catch (e) {
      // ignore
    }
  }, [items]);

  const handleAddItem = (name, category) => {
    const newItem = {
      id: Date.now(),
      name,
      category,
      purchased: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleTogglePurchase = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="shopping-app">
      <h2>Lab 7b: Shopping List</h2>
      <ShoppingInput onAddItem={handleAddItem} />
      <ShoppingList
        items={items}
        onTogglePurchase={handleTogglePurchase}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default ShoppingApp;
