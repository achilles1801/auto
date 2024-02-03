"use client"


export default function Home() {
  return (

    <section className="bg-gray-100 min-h-screen p-8" style={{ fontFamily: "'Bebas Neue', cursive" }}>
    <main>
      <div className="flex items-center justify-center mb-4">
  <div className="w-24 h-1 bg-red-600"></div>
  <span className="px-4 text-md mx-2 text-gray-700">Cars</span>
  <div className="w-24 h-1 bg-red-600"></div>
</div>
<h2 className="text-3xl font-semibold text-center mb-4 relative pt-2">
  <span className="bg-gray-100 text-4xl">CARS </span>
  <span className="bg-gray-100 text-[#AF1414] text-4xl">FOR RENT</span>
</h2>

    </main>
    </section>

  );
}
