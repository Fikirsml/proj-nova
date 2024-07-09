import React, { useState } from "react";
import { CircleMinus,CirclePlus,ArrowUpNarrowWide,ArrowDownNarrowWide } from "lucide-react";


const AccMenu = ({ title,rank }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="px-4 py-4 border border-orange-500 rounded-xl mb-2 bg-neutral-800">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide  capitalize">{title}<span className='capitalize bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-1'>{rank}</span></span> 
        {accordionOpen ? <span><ArrowUpNarrowWide className="text-orange-500" /></span> : <span><ArrowDownNarrowWide className="text-orange-500" /></span>}
        
        {/* <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg> */}
      </button>
      <p className="max-w-4xl mt-3 text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quis, nisi sapiente expedita dignissimos voluptates, eaque perferendis ex atque mollitia aspernatur consequatur unde facere culpa tenetur dolore fugit labore corrupti.</p>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-neutral-300 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden w-1/3">
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="email">IP Address</label>
            <input type="text" id='email' className='border border-orange-500 rounded-lg p-1'/>
            <div>
                <input type="checkbox" name="" id="forget password" className='mr-1'/>
                <label htmlFor="forget password"> Doesn't Apply</label>
            </div>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="email">Domain</label>
            <input type="text" id='email' className='border border-orange-500 rounded-lg p-1' />
            <div>
                <input type="checkbox" name="" id="forget password" className='mr-1'/>
                <label htmlFor="forget password">Doesn't Apply</label>
            </div>
            <div className='mt-8 mb-2 flex items-center justify-center'>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-2/3 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl border'>
                Submit
            </button>

        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AccMenu;
