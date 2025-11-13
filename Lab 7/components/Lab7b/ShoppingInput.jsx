"use client";

import React, { useState } from 'react';

function ShoppingInput({ onAddItem }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !category.trim()) return;
    onAddItem(name, category);
    setName('');
    setCategory('');
  };

  return (
    <div className="shopping-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ShoppingInput;
