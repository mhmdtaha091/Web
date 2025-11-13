"use client";

import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList({ items, onTogglePurchase, onRemoveItem }) {
  return (
    <div className="shopping-list">
      <ul>
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onTogglePurchase={onTogglePurchase}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
