// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from './theme-provider';

const Layout = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;