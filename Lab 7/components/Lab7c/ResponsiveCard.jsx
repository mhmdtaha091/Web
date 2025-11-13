"use client";

import React from 'react';
import Image from 'next/image';

function ResponsiveCard() {
  return (
    <section className="card-section">
      <h2 className="section-heading">Lab 7c: Task 1 - Responsive Card</h2>
      <div className="card-wrapper">
        <div className="card-content">
          <div className="card-media">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
              alt="A laptop with code on the screen"
              width={830}
              height={622}
              className="card-media__image"
              priority
            />
          </div>

          <div className="card-body">
            <div className="card-label">Web Development</div>
            <h3 className="card-title">Responsive Card with Custom Styles</h3>
            <p className="card-text">
              This example demonstrates a flexible layout composed with plain CSS. It remains responsive across breakpoints and pairs media with descriptive content using simple utility classes.
            </p>
            <div className="card-action">
              <a href="#" className="card-button" role="button">
                Learn More
              </a>
            </div>
          </div>

          <span className="card-badge">New</span>
        </div>
      </div>
    </section>
  );
}

export default ResponsiveCard;
