"use client"
import Navbar from "../components/navbar";


export default function Home() {
  return (

    <main>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">

          {/* Text container */}
          <div className="md:w-1/2 p-4">
            <p className="text - lg">
              Drive Excellence Buy, Rent, Tint
            </p>
          </div>

          {/* Image container */}
          <div className="md:w-1/2 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 p-4">
          <div className="flex-1">
            {/* Replace with your actual image */}
            <img src="/path-to-your-image-1.jpg" alt="Image 1" className="w-full h-auto" />
          </div>
          <div className="flex-1">
            {/* Replace with your actual image */}
            <img src="/path-to-your-image-2.jpg" alt="Image 2" className="w-full h-auto" />
          </div>
          <div className="flex-1">
            {/* Replace with your actual image */}
            <img src="/path-to-your-image-3.jpg" alt="Image 3" className="w-full h-auto" />
          </div>
        </div>
        </div>
      </div>

    </main>

  );
}
