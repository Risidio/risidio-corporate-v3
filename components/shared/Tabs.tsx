import React from 'react'

interface TabsProps {
   items: unknown[],
   currentCategory: string;
   onCategoryChange: (category: string) => void;
}


const Tabs = ({
     items,
     currentCategory,
     onCategoryChange}: TabsProps) => {
      
  return (
        <div className="w-full flex justify-around flex-wrap items-center text-[0.9rem] sm:space-y-0 space-y-2 font-medium text-center text-gray-500">
          <button
                onClick={() => onCategoryChange("All")}
                className={`
                            ${currentCategory === "All" ? "font-semibold bg-white/80 shadow-md text-black " : "font-normal text-risidio-yellow "}
                            bg-black inline-block px-4 py-3 rounded-lg hover:bg-gray-200 hover:text-black
                         `}
                >
               All
          </button>
      
         {items.map((item) => (
            <button 
                   key={item as string} 
                   onClick={() => onCategoryChange(item as string)}
                   className={`${currentCategory === item ? "font-semibold bg-white/80 shadow-md text-black " : "font-normal text-risidio-yellow "}
                              bg-black inline-block px-4 py-3 rounded-lg hover:bg-gray-200 hover:text-black
                              `}
                             >
                  {item as string}
            </button>
           ))}
      </div>  
  )
}

export default Tabs
