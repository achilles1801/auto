import React, { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Cars for Buy', href: '#' },
    { name: 'Cars for Rent', href: '#' },
    { name: 'Our Services', href: '#' },
    { name: 'Tint', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'FAQs', href: '#' },
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
            <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
              <img src="/Logo.jpeg" alt="Logo" className="h-6 w-auto mr-2" /> 
              <span className="font-bold" style={{color:'black'}}>AMO 
                <span style={{color: '#a02820'}}> AUTO SALES</span>
              </span>
            </a>
          </div>

          {/* primary nav */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className={`py-5 px-3 ${activeNav === item.name.toLowerCase() ? activeTextColor : textColor} hover:text-gray-900 cursor-pointer ${activeNav === item.name.toLowerCase() ? activeBar : inactiveBar}`}
                onClick={() => setActiveNav(item.name.toLowerCase())}
              >
                {item.name}
              </a>
            ))}
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
