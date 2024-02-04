"use client"

import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Tint title at the top */}
      <section className="bg-gray-100 p-4 pt-9 flex justify-center items-center w-full" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-24 h-1 bg-red-600"></div>
            <span className="px-4 text-md mx-2 text-gray-700">tint</span>
            <div className="w-24 h-1 bg-red-600"></div>
          </div>
          <h2 className="text-3xl font-semibold mb-2 relative">
            <span className="bg-gray-100 text-[#AF1414] text-4xl">experience </span>
            <span className="bg-gray-100 text-4xl">excellence</span>
          </h2>
        </div>
      </section>

       {/* Main content below the title */}
       <div className="flex-grow w-full flex flex-col lg:flex-row items-stretch bg-gray-100">
        {/* Left side with image, hidden on phones and tablets, visible on computers */}
        <div className="hidden lg:block w-1/2 p-6"> {/* Changed from sm:block to lg:block */}
          <img src="/Car4.jpg" alt="Car Image" className="object-cover w-full h-1/2 rounded-xl" /> {/* Adjusted to remove specific height, allowing it to be flexible */}
        </div>

        {/* Right side with text, centered on phones and tablets */}
        <div className="w-full lg:w-1/2 p-6 mx-auto" style={{ fontFamily: "'Poppins', cursive" }}>
          <div className="mt-6 px-6 py-6 w-full max-w-2xl mx-auto bg-white rounded-xl shadow-xl text-center sm:text-left lg:text-left">
            <p className="mb-4">
              At Amo Auto, we extend our passion for cars beyond sales to providing top-notch tinting services. Our state-of-the-art facility in Roswell, Georgia, is equipped to offer you the best in car tinting solutions. Whether you're looking to enhance your vehicle's aesthetics, increase privacy, or reduce heat and glare, our expert team is here to help.
            </p>
          </div>
          <div className="mt-10 px-8 py-8 w-full max-w-2xl mx-auto bg-white rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">WHY CHOOSE AMO AUTO FOR YOUR TINTING NEEDS?</h3>
            <ul className="list-disc ml-4 text-left">
              <li>Expert Installation: Our skilled technicians are trained in the latest tinting techniques, ensuring a flawless finish every time.</li>
              <li>Quality Materials: We use only the highest quality tints that are durable, scratch-resistant, and offer superior UV protection.</li>
              <li>Customization: From light to dark shades, we offer a range of tint options to suit your style and needs.</li>
              <li>Legal Compliance: We ensure that all tints comply with Georgia's tinting laws, providing you with peace of mind.</li>
              <li>Protection And Comfort: Our tints not only enhance your car’s appearance but also protect its interior from sun damage and keep it cooler.</li>
              <li>Warranty: We stand behind our work with a comprehensive warranty, assuring you of our commitment to quality and service.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

