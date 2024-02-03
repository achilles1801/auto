/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YmF39GugJsw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react';


export default function InputField({ className,...props}) {
    const [isRentActive, setIsRentActive] = useState(true);
    const toggleActive = (isRent) => {
        setIsRentActive(isRent);
    };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-between items-center p-4" style={{ backgroundColor: isRentActive ? '#af1414' : 'white' }}>
            <Button 
                onClick={() => toggleActive(true)}
                style={{
                    backgroundColor: isRentActive ? 'red' : 'white',
                    color: isRentActive ? 'white' : '#af1414'
                }}
            >
                Cars For Rent
            </Button>
            <Button 
                onClick={() => toggleActive(false)}
                style={{
                    backgroundColor: isRentActive ? 'white' : 'red',
                    color: isRentActive ? '#af1414' : 'white'
                }}
            >
                Cars For Buy
            </Button>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="pickup-date">
              Pickup Date
            </label>
            <Input className={`border-gray-300 ${isRentActive ? 'bg-white' : 'bg-[#af1414]'}`} id="pickup-date" placeholder="01-01-2024" type="text" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium" htmlFor="dropoff-date">
              Dropoff Date
            </label>
            <Input className={`border-gray-300 ${isRentActive ? 'bg-white' : 'bg-[#af1414]'}`} id="dropoff-date" placeholder="01-07-2024" type="text" />
          </div>
          <Button className="bg-[#af1414] text-white hover:bg-[#af1414]">Search</Button>
        </div>
      </div>
    </div>
  )
}

