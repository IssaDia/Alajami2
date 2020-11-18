import React from 'react';

export default function HomepageWrapperLink({ children }) {
  return (
    <ul className="text-xs lg:inline-flex lg:flex-grow lg:ml-auto">
      {children}
    </ul>
  );
}
