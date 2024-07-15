import { Rss, Gauge,HandPlatter,CircleDashed,BotMessageSquare} from 'lucide-react'
import { Link } from "react-router-dom"

const SideMenu = () => {
  return (
    <div className='mb-5'>
        <div className=' py-3 px-2 rounded-xl  bg-neutral-800 text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer '>
          <div className="flex items-center justify-start text-md  w-full ">
                <Link to='/dash'>
                   <span><Gauge size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100'>Dashboard</span>
                </Link>
          </div>
          
        </div>

        <div className=' mt-5 py-3 px-2 rounded-xl  bg-neutral-800 text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer'>
          <div className="flex items-center justify-start text-md  w-full ">
                <Link to='/blog'>
                   <span><Rss size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100'>Blog</span>
                </Link>
          </div>
          
        </div>

        <div className='mt-5 py-3 px-2 rounded-xl  bg-neutral-800 text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer'>
          <div className="flex items-center justify-start text-md  w-full ">
                <Link to='/services'>
                   <span><HandPlatter size={20} className="flex justify-start items-center mr-1"/></span>
                   <span className='text-neutral-100'>Services</span>
                </Link>
          </div>
          
        </div>
        <div className='mt-5 py-3 px-2 rounded-xl bg-neutral-800   text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer'>
          <div className="flex items-center justify-start text-sm  w-full ">
                <Link to='/pending'>
                   <span><CircleDashed size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100'>Pending</span>
                </Link>
          </div>
          
        </div>
        <div className='mt-5 bg-neutral-800 py-3 px-2 rounded-xl   text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer '>
          <div className="flex items-center justify-start text-sm  w-full  ">
                <Link to='/chatbot'>
                   <span ><BotMessageSquare size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100' >Chatbot</span>
                   
                </Link>
                <div class="ml-auto text-xs text-gray-500 dark:text-gray-400"><span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</span></div>
          </div>
          
        </div>
    </div>
  )
}

export default SideMenu