"use client"
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="bg-[#E4E4E4] min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-16 pb-4 px-4 flex justify-between items-start"> {/* Increased padding-top here */}

        {/* Text container */}
        <div className="w-2/4 p-4 flex flex-col justify-center pt-16" style={{ fontFamily: "'Bebas Neue', cursive" }}>
          <span className="pt-16"> </span>
          <span className="text-6xl text-black leading-tight">Drive <span className="text-[#AF1414]">Excellence</span></span> {/* Increased font size and applied Bebas Neue */}
          <span className="text-6xl text-black leading-tight">Buy, Rent, Tint</span> {/* Increased font size */}
        </div>

        {/* Image container */}
        <div className="flex-grow flex justify-end gap-2">
          <div className="w-[354px] max-w-full" style={{ height: '443px' }}>
            <img src="/Car1.jpg" alt="Car Image 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-[226px] max-w-full" style={{ height: '443px' }}>
            <img src="/Car2.jpg" alt="Car Image 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-[121px] max-w-full" style={{ height: '443px' }}>
            <img src="/Car3.jpg" alt="Car Image 3" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>

      </div>
    </main>
  );
}





