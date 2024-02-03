import React, { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './ui/mode-toggle';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Cars for Buy', href: '/cars-for-buy' },
    { name: 'Cars for Rent', href: '/cars-for-rent' },
    { name: 'Our Services', href: '/services' },
    { name: 'Tint', href: '/tint' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact Us', href: '/contact'}
  ];

  const textColor = 'text-gray-400';
  const activeTextColor = 'text-black font-bold';
  const inactiveBar = 'border-b-2 border-transparent';
  const activeBar = 'border-b-2 border-red-600';

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* logo */}
          <div className="flex items-center space-x-4">
          <Link href="/" legacyBehavior>
              <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <img src="/Logo.jpeg" alt="Logo" className="h-6 w-auto mr-2" /> 
                <span className="font-bold" style={{color:'black'}}>AMO 
                  <span style={{color: '#a02820'}}> AUTO SALES</span>
                </span>
              </a>
            </Link>
          </div>

          {/* primary nav */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name} legacyBehavior>
                <a
                  className={`py-5 px-3 ${activeNav === item.name.toLowerCase() ? activeTextColor : textColor} hover:text-gray-900 cursor-pointer ${activeNav === item.name.toLowerCase() ? activeBar : inactiveBar}`}
                  onClick={() => setActiveNav(item.name.toLowerCase())}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
            {/* mode toggle */}
            <div className="flex items-center">
            <ModeToggle />
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
