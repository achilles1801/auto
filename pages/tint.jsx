"use client"



export default function Home() {
  return (

<div className="flex min-h-screen">
  {/* Left side with image */}
  <div className="w-1/2">
    <img src="/Car4.jpg" alt="Car Image" className="object-cover w-full h-full" />
  </div>
      <section className="bg-gray-100 p-8 flex justify-center items-center" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-1 bg-red-600"></div>
            <span className="px-4 text-md mx-2 text-gray-700">tint</span>
            <div className="w-24 h-1 bg-red-600"></div>
          </div>
          <h2 className="text-3xl font-semibold mb-4 relative pt-2">
            <span className="bg-gray-100 text-[#AF1414] text-4xl">experience </span>
            <span className="bg-gray-100 text-4xl">excellence</span>
          </h2>
        </div>
      </section>

  {/* Right side with text */}
  <div className=" w-full p-6" style={{fontFamily: "'Poppins', cursive"}}>
    <div className="mt-10 px-8 py-8 w-full max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-xl " style={{fontFamily: "'Poppins', cursive"}}>
      <p className="mb-4">
        At Amo Auto, we extend our passion for cars beyond sales to providing top-notch tinting services. 
        Our state-of-the-art facility in Roswell, Georgia, is equipped to offer you the best in car tinting solutions. 
        Whether you're looking to enhance your vehicle's aesthetics, increase privacy, or reduce heat and glare, 
        our expert team is here to help.
      </p>
      </div>
      <div className="mt-10 px-8 py-8 w-full max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-xl " style={{fontFamily: "'Poppins', cursive"}}>
      <h3 className="text-xl font-semibold mb-2">WHY CHOOSE AMO AUTO FOR YOUR TINTING NEEDS?</h3>
      <ul className="list-disc ml-4">
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

  );
}
