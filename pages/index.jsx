"use client"

export default function Home() {
  return (
    <main className="bg-[#E4E4E4] min-h-screen w-full">
      <div className="container mx-auto pt-16 pb-4 flex flex-col lg:flex-row justify-center items-start">
        {/* Text container */}
        <div className="w-full p-4 flex flex-col justify-center pt-16 text-center lg:w-2/4 lg:text-left" style={{ fontFamily: "'Bebas Neue', cursive" }}>
          <span className="text-6xl text-black leading-tight">Drive <span className="text-[#AF1414]">Excellence</span></span>
          <span className="text-6xl text-black leading-tight">Buy, Rent, Tint</span>
        </div>

        {/* Image container - hidden on small screens */}
        <div className="w-2/4 hidden lg:flex justify-start gap-2">
          <img src="/Car1.jpg" alt="Car Image 1" className="object-cover rounded-lg shadow-lg" style={{ width: '354px', height: '443px' }} />
          <img src="/Car2.jpg" alt="Car Image 2" className="object-cover rounded-lg shadow-lg" style={{ width: '226px', height: '443px' }} />
          <img src="/Car3.jpg" alt="Car Image 3" className="object-cover rounded-lg shadow-lg" style={{ width: '121px', height: '443px' }} />
        </div>

      </div>

      {/* Cars section */}
      <div className="p-10" style={{ fontFamily: "'Bebas Neue', cursive" }}>
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
          <div className="flex justify-center gap-4">
            {/* Repeat this structure for each image */}
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 bg-white">
              <img src="/make1.png" alt="Make 1" className="object-contain h-20 w-60" />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 bg-white">
              <img src="/make2.png" alt="Make 2" className="object-contain h-20 w-60" />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 bg-white">
              <img src="/make3.png" alt="Make 3" className="object-contain h-20 w-60" />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 bg-white">
              <img src="/make4.png" alt="Make 4" className="object-contain h-20 w-60" />
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg flex justify-center items-center p-2 bg-white">
              <img src="/make5.png" alt="Make 5" className="object-contain h-20 w-60" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}