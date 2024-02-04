import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import Image from 'next/image'
import { useSheet } from '@/components/ui/sheet';
import { useRouter } from 'next/router';
import { FaHome, FaCar, FaQuestion, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { MdCarRental } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
export default function Nav() {
  const [activeNav, setActiveNav] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isBuyPage = router.pathname === '/cars-for-buy';

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Buy', href: '/cars-for-buy', icon: <FaCar /> },
    { name: 'Rent', href: '/cars-for-rent', icon: <MdCarRental /> },
    { name: 'Tint', href: '/tint', icon: <RiFilePaper2Line /> },
    { name: 'About', href: '/about', icon: <BsInfoCircleFill /> },
    { name: 'FAQs', href: '/faq', icon: <FaFileCircleQuestion />},
    { name: 'Contact', href: '/contact', icon: <FaPhoneVolume />}
  ];

  const textColor = 'text-gray-400';
  const activeTextColor = 'text-black font-bold';
  const inactiveBar = 'border-b-2 border-transparent';
  const activeBar = 'border-b-2 border-red-600';

  return (
    <nav className="bg-white shadow-lg flex justify-between items-center w-full md:w-full sm:w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* logo */}
          <div className="hidden sm:flex items-center space-x-4 pr-8">
    <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
    <Image src="/Logo.jpeg" alt="Logo" width={50} height={50} />
      <span className="font-bold hidden sm:block" style={{color:'black'}}>AMO 
        <span style={{color: '#a02820'}}> AUTO SALES</span>
      </span>
    </a>
</div>

          {/* primary nav */}
          <div className="hidden sm:flex items-center space-x-1 lg:gap-8">
          {navItems.map((item) => (
  <Link href={item.href} key={item.name} legacyBehavior>
    <a
      className={`py-5 px-3 ${router.pathname === item.href ? activeTextColor + ' ' + activeBar : textColor + ' ' + inactiveBar} hover:text-gray-900 cursor-pointer`}
      onClick={() => setActiveNav(item.name.toLowerCase())}
    >
      {item.name}
    </a>
  </Link>
))}
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
          <div className="sm:hidden cursor-pointer py-4">
  <Image src="/Logo.jpeg" alt="Hamburger Icon" width={50} height={50} />
</div>
            </SheetTrigger>
            <SheetContent side="top" className="min-w-[250px] bg-[#AF1414]">
            {navItems.map((item) => (
  <Link href={item.href} key={item.name} legacyBehavior>
    <a 
      className={`flex items-center  block p-4 text-lg rounded ${activeNav === item.name.toLowerCase() ? 'bg-white text-black' : 'bg-[#AF1414] text-black'}`} 
      onClick={() =>{
        setActiveNav(item.name.toLowerCase());
        handleLinkClick();
      }}
    >
      <span className="mr-2">{item.icon}</span>
      {item.name}
    </a>
  </Link>
))}
</SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}