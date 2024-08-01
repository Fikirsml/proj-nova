import { Link, useNavigate } from 'react-router-dom'
import SideProfile from '../components/SideProfile'
import SideMenu from '../components/SideMenu'
import SearchBar from '../components/SearchBar'
import DashCard from '../components/DashCard'
import DashChartCard from '../components/DashChartCard'
import DashChartLine from '../components/DashChartLine'
import DashChartBar from '../components/DashChartBar'
import DashSearch from '../components/DashSearch'
import DashMain from '../components/DashMain'
import logo from "../assets/logo.png"
import { useState } from 'react'
import ServicesLayout from './ServicesLayout'
import PendingPage from './PendingPage'
import { Rss, Gauge,HandPlatter,CircleDashed,BotMessageSquare} from 'lucide-react'
import ChatBot from '../components/ChatBot'
import Crypto from '../components/Crypto'
import { GlobeLock, LogOut } from 'lucide-react';




const Dash = () => {
  const [currentComp,setCurrentComp]=useState('dash')

const renderComp=()=>{
  switch(currentComp){
    case 'dash':
      return <DashMain/>
    case 'services':
      return <ServicesLayout/>
    case 'pending':
      return <PendingPage/>
    case 'chatbot':
      return <ChatBot/>
    case 'crypto':
      return <Crypto/>
    default:
      return <DashMain/>
  }
}
const navigate = useNavigate()
const handleLogout = () => {
	localStorage.removeItem('U_id');
	navigate('/home')
}


  return (
    <div>
        <div class="flex min-h-screen flex-row  text-gray-800">
  <aside class="sidebar w-48 -translate-x-full transform bg-neutral-800 p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md rounded-r-3xl">
    <div class="my-4 w-full border-b border-neutral-500 text-center">
      <span class=" text-xl "> 
        <Link to='/' className="flex items-center justify-center flex-shrink-0 mr-auto">
                    <img src={logo} alt='logo' className="h-10 w-10 mr-2" />
                    <span className="text-xl text-white tracking-tight">Nova</span>
                    </Link> </span>
      
       
    </div>
    <div>
    <SideProfile/>
    </div>

    <div className='mt-12'>
    <div className='mb-5'>
        <div className=' py-3 px-2 rounded-xl  bg-neutral-800 text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer ' onClick={()=>setCurrentComp('dash')}>
          <div className="flex items-center justify-start text-md  w-full">
                <span>
                   <span><Gauge size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100'>Dashboard</span>
                </span>
          </div>
          
        </div>

        <div className=' mt-5 py-3 px-2 rounded-xl  bg-neutral-800 text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer'>
          <Link to='/blog' className="flex items-center justify-start text-md  w-full ">
                <span>
                   <span><Rss size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100'>Blog</span>
                </span>
          </Link>
          
        </div>

        <div className='mt-5 py-3 px-2 rounded-xl  bg-neutral-800 text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer'onClick={()=>setCurrentComp('services')}>
          <div className="flex items-center justify-start text-md  w-full ">
                <span>
                   <span><HandPlatter size={20} className="flex justify-start items-center mr-1"/></span>
                   <span className='text-neutral-100'>Services</span>
                </span>
          </div>
          
        </div>
        <div className='mt-5 py-3 px-2 rounded-xl bg-neutral-800   text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer'onClick={()=>setCurrentComp('pending')}>
          <div className="flex items-center justify-start text-sm  w-full ">
                <span>
                   <span><CircleDashed size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100'>Pending</span>
                </span>
          </div>
          
        </div>
        <div className='mt-5 bg-neutral-800 py-3 px-2 rounded-xl   text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer 'onClick={()=>setCurrentComp('chatbot')}>
          <div className="flex items-center justify-start text-sm  w-full  ">
                <span >
                   <span ><BotMessageSquare size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100' >Chatbot</span>
                   
                </span>
                <div class="ml-auto text-xs text-gray-500 dark:text-gray-400"><span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</span></div>
          </div>
	  </div>
        <div className='mt-5 bg-neutral-800 py-3 px-2 rounded-xl   text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer 'onClick={()=>setCurrentComp('crypto')}>
          <div className="flex items-center justify-start text-sm  w-full  ">
                <span >
                   <span ><GlobeLock size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100' >Cryptography</span>
                   
                </span>
                <div class="ml-auto text-xs text-gray-500 dark:text-gray-400"><span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">New</span></div>
        </div>
	  </div>
        <div 
	  className='mt-5 bg-neutral-800 py-3 px-2 rounded-xl   text-orange-500 space-x-2 hover:border hover:border-orange-500 cursor-pointer '
	  onClick={handleLogout}>
          <div className="flex items-center justify-start text-sm  w-full  ">
                <span >
                   <span ><LogOut size={20} className="flex justify-start items-center mr-1 "/></span>
                   <span className='text-neutral-100' >Logout</span> 
                </span>
    	</div>
	  </div>
    </div>
	  </div>
    <div class="my-4"></div>
  </aside>
  <main class="main-ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0 ">
   
    <div class="flex flex-col h-full  bg-neutral-800 text-center   rounded-2xl p-6">
    {renderComp()}
    
       </div>
  </main>
</div>
    </div>
  )
}

export default Dash
