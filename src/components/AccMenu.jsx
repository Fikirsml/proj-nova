import React, { useState } from "react";
import { CircleMinus,CirclePlus,ArrowUpNarrowWide,ArrowDownNarrowWide } from "lucide-react";
import axios from "../axios"


const AccMenu = ({ title,rank }) => {

  const [accordionOpen, setAccordionOpen] = useState(false);
  const [input,setInput]=useState({
    ip:"",
    domain:"",
})

const handleInp=(e)=>{
  const{name,value}=e.target
  setInput({
    ...prev, [name]:value,
  })

}

const handleRequest= async()=>{
  const response= await axios.post('/request',{input})
  const res=response.data
  alert(res)
}

  return (
    <div className="px-4 py-4 border border-orange-500 rounded-xl mb-2 bg-neutral-800">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-4xl sm:text-6xl lg:text-3xl text-center text-white tracking-wide  capitalize">{title}<span className='capitalize bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-1'>{rank}</span></span> 
        {accordionOpen ? <span><ArrowUpNarrowWide className="text-orange-500" /></span> : <span><ArrowDownNarrowWide className="text-orange-500" /></span>}
      
      </button>
      <p className="max-w-4xl mt-3 text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quis, nisi sapiente expedita dignissimos voluptates, eaque perferendis ex atque mollitia aspernatur consequatur unde facere culpa tenetur dolore fugit labore corrupti.</p>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-neutral-300 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden w-1/3 ">
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="ip">IP Address</label>
            <input type="text" id='ip' name='ip' value={input.ip} onChange={handleInp} className='border border-orange-500 rounded-lg p-1 '/>
            <div>
                <input type="checkbox" name="" id="doesnt apply" className='mr-1'/>
                <label htmlFor="doesnt apply"> Doesn't Apply</label>
            </div>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="domain">Domain</label>
            <input type="text" id='domain' name='domain' value={input.domain} onChange={handleInp} className='border border-orange-500 rounded-lg p-1' />
            <div>
                <input type="checkbox" name="" id="doesnt apply" className='mr-1'/>
                <label htmlFor="doesnt apply">Doesn't Apply</label>
            </div>
            <div className='mt-8 mb-2 flex items-center justify-center'>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-2/3 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl border' onClick={handleRequest}>
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
