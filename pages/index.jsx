import React from 'react';
import { useRouter } from 'next/router';
import Inputfield from "@/components/ui/inputfield"


export default function Home() {
  const router = useRouter();

  // Function to navigate to the cars for buy page
  const navigateToBuyPage = () => {
    router.push('/cars-for-buy');
  };

  const models = [
    { src: '/COUPE.png', name: 'COUPE', available: '10 Cars Available' },
    { src: '/SEDAN.png', name: 'SEDAN', available: '20 Cars Available' },
    { src: '/SUV.png', name: 'SUV', available: '15 Cars Available' },
    { src: '/TRUCK.png', name: 'TRUCK', available: '5 Cars Available' },
    { src: '/CONVERTIBLE.png', name: 'CONVERTIBLE', available: '8 Cars Available' },
  ];

  return (
    <main className="bg-[#E4E4E4] min-h-screen w-full">
      <Inputfield />
      <div className="container mx-auto pt-16 pb-4 flex flex-col lg:flex-row justify-between items-start">
        {/* Image section kept as is per request */}
        <div className="flex flex-col flex-grow lg:flex-row justify-start gap-2 order-2 w-full">
          <img src="/Car1.jpg" alt="Car Image 1" className="object-cover rounded-xl shadow-lg lg:w-[354px] h-32 lg:h-[443px] lg:flex-grow" onClick={navigateToBuyPage} />
          <img src="/Car2.jpg" alt="Car Image 2" className="object-cover rounded-xl shadow-lg lg:w-[226px] h-32 lg:h-[443px] lg:flex-grow" onClick={navigateToBuyPage} />
          <img src="/Car3.jpg" alt="Car Image 3" className="object-cover rounded-xl shadow-lg lg:w-[121px] h-32 lg:h-[443px] lg:flex-grow-0" onClick={navigateToBuyPage} />
        </div>

        {/* Text container */}
        <div className="w-full p-4 flex flex-col justify-center pt-3 sm:pt-5 lg:pt-32 text-center lg:w-2/4 lg:text-left order-1" style={{ fontFamily: "'Bebas Neue', cursive" }}>
          <span className="text-5xl text-black leading-tight">Drive <span className="text-[#AF1414]">Excellence</span></span>
          <span className="text-5xl text-black leading-tight">Buy, Rent, Tint</span>
        </div>
      </div>

      {/* Makes section */}
      <div className="p-2 lg:mt-32" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        <div className="container mx-auto">
          {/* Makes header */}
          <div className="flex items-center justify-center my-8">
            <div className="w-24 h-1 bg-red-600"></div>
            <span className="px-4 text-md mx-2 text-gray-700">Makes</span>
            <div className="w-24 h-1 bg-red-600"></div>
          </div>
          
          <h2 className="text-3xl text-center mb-4 relative pt-0 pb-5" style={{ fontFamily: "'Bebas Neue', cursive" }}>
            <span className="text-4xl">DISCOVER BY </span>
            <span className="text-[#AF1414] text-4xl">MAKES</span>
          </h2>

          {/* Image containers for car makes and models */}
          <div className="flex flex-wrap justify-center gap-4">
            {['/make1.png', '/make2.png', '/make3.png', '/make4.png', '/make5.png'].map((src, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2 cursor-pointer" onClick={navigateToBuyPage}>
                <img src={src} alt={`Make ${index + 1}`} className="object-contain h-20 w-60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Models section */}
      <div className="p-5" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        <div className="container mx-auto">
          {/* Models header */}
          <div className="flex items-center justify-center my-8">
            <div className="w-24 h-1 bg-red-600"></div>
            <span className="px-4 text-md mx-2 text-gray-700">Models</span>
            <div className="w-24 h-1 bg-red-600"></div>
          </div>
          
          <h2 className="text-3xl text-center mb-4 relative pt-0 pb-5" style={{ fontFamily: "'Bebas Neue', cursive" }}>
            <span className="text-4xl">DISCOVER BY </span>
            <span className="text-[#AF1414] text-4xl">Models</span>
          </h2>

          {/* Image containers for car models */}
          <div className="flex flex-wrap justify-center gap-4">
            {models.map((model, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center p-2 w-40 h-26 lg:w-1/6 lg:h-36 bg-white m-2 cursor-pointer" onClick={navigateToBuyPage}>
                <img src={model.src} alt={`${model.name} Model`} className="object-contain h-20 w-60" />
                <span className="text-sm font-semibold mt-2">{model.name}</span>
                <span className="text-xs">{model.available}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
