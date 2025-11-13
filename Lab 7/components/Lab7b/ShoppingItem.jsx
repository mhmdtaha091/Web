"use client";

import React from 'react';

function ShoppingItem({ item, onTogglePurchase, onRemoveItem }) {
  return (
    <li className={`shopping-item ${item.purchased ? 'purchased' : ''}`}>
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-category">{item.category}</span>
      </div>
      <div className="item-actions">
        <button
          className="btn-toggle"
          onClick={() => onTogglePurchase(item.id)}
        >
          {item.purchased ? 'Undo' : 'Purchase'}
        </button>
        <button className="btn-delete" onClick={() => onRemoveItem(item.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ShoppingItem;
