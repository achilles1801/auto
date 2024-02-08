
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuCheckboxItem, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function Filter() {
  return (
    (<section className="container px-4 md:px-6 grid gap-10 items-start">
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input className="pl-8" placeholder="Search products..." type="search" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Filter
              <FilterIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
          <DropdownMenuLabel>Make</DropdownMenuLabel>
          <DropdownMenuRadioGroup value="sedan">
              <DropdownMenuRadioItem value="sedan">Sedan</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="truck">Truck</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="suv">SUV</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="coupe">Coupe</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="convertible" >Convertible</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Model</DropdownMenuLabel>
            <DropdownMenuRadioGroup value="toyota">
              <DropdownMenuRadioItem value="toyota">Toyota</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="chevy">Chevy</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bmw">BMW</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>)
  );
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
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
