"use client"
import Inputfield from "@/components/ui/inputfield"

export default function Home() {
  return (
<main className="bg-[#E4E4E4] min-h-screen w-full  ">
<Inputfield />
  <div className="container mx-auto pt-16 pb-4 flex flex-col lg:flex-row justify-between items-start">

    <div className="flex flex-col flex-grow lg:flex-row justify-start gap-2 order-2 w-full">
    <img src="/Car1.jpg" alt="Car Image 1" className="object-cover rounded-xl shadow-lg lg:w-[354px] h-32 lg:h-[443px] lg:flex-grow" />
    <img src="/Car2.jpg" alt="Car Image 2" className="object-cover rounded-xl shadow-lg lg:w-[226px] h-32 lg:h-[443px] lg:flex-grow" />
    <img src="/Car3.jpg" alt="Car Image 3" className="object-cover rounded-xl shadow-lg lg:w-[121px] h-32 lg:h-[443px] lg:flex-grow-0" />
    </div>

    {/* Text container */}
    <div className="w-full p-4 flex flex-col justify-center pt-3 sm:pt-5 lg:pt-32   text-center lg:w-2/4 lg:text-left order-1" style={{ fontFamily: "'Bebas Neue', cursive" }}>
      <span className="text-5xl text-black leading-tight">Drive <span className="text-[#AF1414]">Excellence</span></span>
      <span className="text-5xl text-black leading-tight">Buy, Rent, Tint</span>
    </div>

  </div>

      {/* Makes section */}
      <div className="p-2 lg:mt-32 " style={{ fontFamily: "'Bebas Neue', cursive" }}>
        <div className="container mx-auto ">
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
            {/* Repeat this structure for each image */}
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/make1.png" alt="Make 1" className="object-contain h-20 w-60" />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/make2.png" alt="Make 2" className="object-contain h-20 w-60" />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/make3.png" alt="Make 3" className="object-contain h-20 w-60" />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/make4.png" alt="Make 4" className="object-contain h-20 w-60" />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/make5.png" alt="Make 5" className="object-contain h-20 w-60" />
            </div>
          </div>
        </div>
        
        
      </div>
      {/* Models section */}
      <div className="p-5" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        <div className="container mx-auto">
          {/* Makes header */}
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
            {/* Repeat this structure for each image */}
            <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/COUPE.png" alt="Coupe" className="object-contain h-20 w-60" />
              <span className="text-sm font-semibold">COUPE</span>
              <span className="text-xs">10 Cars Available</span>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/SEDAN.png" alt="Convertible" className="object-contain h-20 w-60" />
              <span className="text-sm font-semibold">SEDAN</span>
              <span className="text-xs">20 Cars Available</span>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/SUV.png" alt="SUV" className="object-contain h-20 w-60" />
              <span className="text-sm font-semibold">SUV</span>
              <span className="text-xs">15 Cars Available</span>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/TRUCK.png" alt="Truck" className="object-contain h-20 w-60" />
              <span className="text-sm font-semibold">TRUCK</span>
              <span className="text-xs">15 Cars Available</span>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center p-2 w-40 h-24 lg:w-1/6 bg-white m-2">
              <img src="/CONVERTIBLE.png" alt="Coupe" className="object-contain h-20 w-60" />
              <span className="text-sm font-semibold">CONVERTIBLE</span>
              <span className="text-xs">5 Cars Available</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}