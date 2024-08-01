import { useState, useEffect, memo } from "react";
import { CircleMinus,CirclePlus,ArrowUpNarrowWide,ArrowDownNarrowWide } from "lucide-react";
import axios from "axios"


function AccMenu () {

  const [serviceInfo, setServiceInfo] = useState([])
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [input,setInput]=useState({
	  ip:"",
    	  domain:"",
	  S_id: "",
	  U_id: localStorage.getItem('U_id'),
    
});

  useEffect (() => {
	  const fetchData = async () => {
		  try {
			  const response = await axios.get('http://127.0.0.1:5000/get_services')
			  setServiceInfo(response.data)
			  console.log(response.data)
		  } catch (error) {
			  console.log('Error in fetching data: ', error)
		  }
	  };
	  fetchData();
  }, []);

const handleInp=(e)=>{
  setInput({...input, [e.target.name]:e.target.value, })

}

const handleRequest= async()=>{
  const response= await axios.post('http://127.0.0.1:5000/request', input)
  const res=response.data
  alert("Success!! your pending Id: ",res['P_id'])
}
const [rank, setRank] = useState('Pro');

  return (
<>
	  { serviceInfo.map((item) => (
    <div key={item.S_id} className="px-4 py-4 border border-orange-500 rounded-xl mb-2 bg-neutral-800">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-4xl sm:text-6xl lg:text-3xl text-center text-white tracking-wide  capitalize">{item.s_name}<span className='capitalize bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-1'>{rank}</span></span> 
        {accordionOpen ? <span><ArrowUpNarrowWide className="text-orange-500" /></span> : <span><ArrowDownNarrowWide className="text-orange-500" /></span>}
      
      </button>
      <p className="max-w-4xl mt-3 text-neutral-500">{item.S_id}: {item.s_desc}</p>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-neutral-300 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden w-1/3 ">
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="ip">Service ID</label>
            <input type="text" id='ip' name='S_id' value={input.S_id} onChange={handleInp} className='text-blue-600 border border-orange-500 rounded-lg p-1 '/>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="ip">IP Address</label>
            <input type="text" id='ip' name='ip' value={input.ip} onChange={handleInp} className='text-blue-600 border border-orange-500 rounded-lg p-1 '/>
            <div>
                <input type="checkbox" name="" id="doesnt apply" className='mr-1'/>
                <label htmlFor="doesnt apply"> Doesn't Apply</label>
            </div>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="domain">Domain</label>
            <input type="text" id='domain' name='domain' value={input.domain} onChange={handleInp} className='text-blue-600 border border-orange-500 rounded-lg p-1' />
            <div>
                <input type="checkbox" name="" id="doesnt apply" className='mr-1'/>
                <label htmlFor="doesnt apply">Doesn't Apply</label>
            </div>
            <div className='mt-8 mb-2 flex items-center justify-center'>
            <button 
	    className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-2/3 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl border'
	    onClick={handleRequest}>
                Submit
            </button>

        </div>
        </div>
        </div>
      </div>
    </div>
    ))};
	  </>
  );
}


export default AccMenu;
