import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from './theme-provider';
import Nav from './Nav';
import Footer from './Footer';

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
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;