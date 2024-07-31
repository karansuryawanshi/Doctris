// src/components/Layout.js
import React from 'react';
import DoctrisAiLogo from './DoctrisAiLogo';

const Layout = ({ children }) => {
  return (
    <div>
      <DoctrisAiLogo/>
      {children}
    </div>
  );
};

export default Layout;
