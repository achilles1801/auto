
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function CardDisplay({onClose}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/Car5.jpg', '/Car6.jpg', '/Car7.jpg', '/Car8.jpg']; 

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="bg-[#00000016] max-w-4xl mx-auto my-8 p-8 rounded-xl text-white relative">
      <button onClick={onClose} className="absolute top-2 right-2 bg-white text-[#bd1e59] rounded-full p-2">
        <CloseIcon className="w-6 h-6" />
      </button>
      <h2 className="text-3xl font-bold mb-6">Toyota Camry XL Premium</h2>
      <div className="relative">
  <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#bd1e59] rounded-full p-2">
    <ChevronLeftIcon className="w-6 h-6" />
  </button>
  <div className="flex gap-4 overflow-hidden justify-center">
    <div className=" pt-2 pb-2 rounded-lg shadow-lg flex items-center justify-center">
      <img
        alt={`Car Image ${currentIndex + 1}`}
        className="object-cover rounded-lg"
        height={300}
        src={images[currentIndex]}
        style={{
          aspectRatio: "400/300",
          objectFit: "contain",
        }}
        width={400} />
    </div>
  </div>
  <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-[#bd1e59] rounded-full p-2">
    <ChevronRightIcon className="w-6 h-6" />
  </button>
</div>

    <div className="mt-8 flex flex-col items-center">
      <p className="text-lg text-white mb-4">
        Information about the car - jskdjksasaksfnajkfjhjahsahdjksajkahfjahjfjahjdsahfjhjkfhdjkfhkdj jk hfdh fjhjfjhjfhjfhjfhj jhhjh asjfhjkfhk.
      </p>
      <a href="https://calendly.com/your_username" target="_blank" rel="noopener noreferrer">
      <Button  className="bg-white text-[#AF1414] hover:bg-[#efc1c1] w-32 items-center justify-center py-6 rounded-full">Schedule Appointment</Button>
      </a>
    </div>

    </div>);
}
function CloseIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
  return (
    (<svg
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
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}


function ChevronRightIcon(props) {
  return (
    (<svg
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
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}
