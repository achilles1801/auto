// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from './theme-provider';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Nav />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;