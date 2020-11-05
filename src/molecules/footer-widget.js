import React from 'react';

export default function FooterWidget({ title, children }) {
  return (
    <div className="flex flex-col">
      <h4 className="mt-8 uppercase">{title}</h4>
      {children}
    </div>
  );
}
