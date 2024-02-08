
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { useEffect, useState } from "react";
import Filter from "@/components/filter";

export default function Carseach() {
  const handleCardClick = () => {
    // Replace the URL with your actual Calendly link
    window.location.href = "https://calendly.com/your-username/15min";
  };
  const [carsData, setCarsData] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const carTypes = ['Economy', 'SUV', 'Luxury'];

  useEffect(() => {
    // Fetch your car data here and set it in the carsData state
    // For example:
    // setCarsData(fetchCarData());
    // Then set the filteredCars state to the full car data initially
    setFilteredCars(carsData);
  }, []);

  const handleFilterClick = () => {
    setShowFilters(!showFilters);

  };
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    applyFilters();
  };

  const applyFilters = () => {
    const filtered = carsData.filter(car => {
      return selectedFilter === 'All' || car.type === selectedFilter;
    });
    setFilteredCars(filtered);
  };
  
  

  return (
    (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
      <CarIcon className="text-gray-600 m-2" />
      <Filter/>
        <div className="flex space-x-2">
          <div className="flex items-center bg-gray-100 rounded overflow-hidden">
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      <Card className="cursor-pointer hover:shadow-lg" onClick={handleCardClick}>
        <CardContent>
          <div className="flex">
            <div>
              <p className="text-sm pt-4">Toyota Corolla</p>
              <img
                alt="Toyota Corolla"
                className="h-20 w-36"
                height="100"
                src="/suv.png"
                style={{
                  objectFit: "contain",
                }}
                width="150" />
            </div>
            <div className="ml-2 pt-4">
              <p className="text-sm font-semibold">Economy</p>
              <p className="text-sm">Toyota Corolla</p>
              <p className="text-xs">5 people</p>
              <p className="text-xs">Roswell, Georgia, USA</p>
            </div>  
          </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-lg" onClick={handleCardClick}>
        <CardContent>
          <div className="flex">
            <div>
              <p className="text-sm pt-4">Toyota Corolla</p>
              <img
                alt="Toyota Corolla"
                className="h-20 w-36"
                height="100"
                src="/truck.png"
                style={{
                  objectFit: "contain",
                }}
                width="150" />
            </div>
            <div className="ml-2 pt-4">
              <p className="text-sm font-semibold">Economy</p>
              <p className="text-sm">Toyota Corolla</p>
              <p className="text-xs">5 people</p>
              <p className="text-xs">Roswell, Georgia, USA</p>
            </div>  
          </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-lg" onClick={handleCardClick}>
        <CardContent>
          <div className="flex">
            <div>
              <p className="text-sm pt-4">Toyota Corolla</p>
              <img
                alt="Toyota Corolla"
                className="h-20 w-36"
                height="100"
                src="/sedan.png"
                style={{
                  objectFit: "contain",
                }}
                width="150" />
            </div>
            <div className="ml-2 pt-4">
              <p className="text-sm font-semibold">Economy</p>
              <p className="text-sm">Toyota Corolla</p>
              <p className="text-xs">5 people</p>
              <p className="text-xs">Roswell, Georgia, USA</p>
            </div>  
          </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-lg" onClick={handleCardClick}>
        <CardContent>
          <div className="flex">
            <div>
              <p className="text-sm pt-4">Toyota Corolla</p>
              <img
                alt="Toyota Corolla"
                className="h-20 w-36"
                height="100"
                src="/sedan.png"
                style={{
                  objectFit: "contain",
                }}
                width="150" />
            </div>
            <div className="ml-2 pt-4">
              <p className="text-sm font-semibold">Economy</p>
              <p className="text-sm">Toyota Corolla</p>
              <p className="text-xs">5 people</p>
              <p className="text-xs">Roswell, Georgia, USA</p>
            </div>  
          </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-lg" onClick={handleCardClick}>
        <CardContent>
          <div className="flex">
            <div>
              <p className="text-sm pt-4">Toyota Corolla</p>
              <img
                alt="Toyota Corolla"
                className="h-20 w-36"
                height="100"
                src="/sedan.png"
                style={{
                  objectFit: "contain",
                }}
                width="150" />
            </div>
            <div className="ml-2 pt-4">
              <p className="text-sm font-semibold">Economy</p>
              <p className="text-sm">Toyota Corolla</p>
              <p className="text-xs">5 people</p>
              <p className="text-xs">Roswell, Georgia, USA</p>
            </div>  
          </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-lg" onClick={handleCardClick}>
        <CardContent>
          <div className="flex">
            <div>
              <p className="text-sm pt-4">Toyota Corolla</p>
              <img
                alt="Toyota Corolla"
                className="h-20 w-36"
                height="100"
                src="/sedan.png"
                style={{
                  objectFit: "contain",
                }}
                width="150" />
            </div>
            <div className="ml-2 pt-4">
              <p className="text-sm font-semibold">Economy</p>
              <p className="text-sm">Toyota Corolla</p>
              <p className="text-xs">5 people</p>
              <p className="text-xs">Roswell, Georgia, USA</p>
            </div>  
          </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-lg" onClick={handleCardClick}>
        <CardContent>
          <div className="flex">
            <div>
              <p className="text-sm pt-4">Toyota Corolla</p>
              <img
                alt="Toyota Corolla"
                className="h-20 w-36"
                height="100"
                src="/sedan.png"
                style={{
                  objectFit: "contain",
                }}
                width="150" />
            </div>
            <div className="ml-2 pt-4">
              <p className="text-sm font-semibold">Economy</p>
              <p className="text-sm">Toyota Corolla</p>
              <p className="text-xs">5 people</p>
              <p className="text-xs">Roswell, Georgia, USA</p>
            </div>  
          </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-lg" onClick={handleCardClick}>
        <CardContent>
          <div className="flex">
            <div>
              <p className="text-sm pt-4">Toyota Corolla</p>
              <img
                alt="Toyota Corolla"
                className="h-20 w-36"
                height="100"
                src="/sedan.png"
                style={{
                  objectFit: "contain",
                }}
                width="150" />
            </div>
            <div className="ml-2 pt-4">
              <p className="text-sm font-semibold">Economy</p>
              <p className="text-sm">Toyota Corolla</p>
              <p className="text-xs">5 people</p>
              <p className="text-xs">Roswell, Georgia, USA</p>
            </div>  
          </div>
        </CardContent>
      </Card>
      </div>
    </div>)
  );
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function CarIcon(props) {
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
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>)
  );
}


function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>)
  );
}
