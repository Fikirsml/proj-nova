import { Link } from "react-router-dom"
import {Menu,X} from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png"
import {navItems} from "../constants"
import {navItems2} from "../constants"
import Profile from "./Profile"
import NavSnip from "./NavSnip"

const Navbar = (props) => {
    const [mobileDrawerOpen, setMobileDrawerOpen]=useState(false);
    const handleDrawer=()=>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container mx-auto relative text-sm">
            <div className="flex items-center">
                <div className="flex items-center flex-shrink-0 mr-auto" >
                    <img src={logo} alt='logo' className="h-10 w-10 mr-2" />
                    <span className="text-xl tracking-tight">Nova</span>
                </div>
                <ul className="hidden lg:flex space-x-12 mr-auto">
            {props.type==='nav' &&    navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}

{props.type==='profile' &&    navItems2.map((item, index) => (
              <li key={index}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-5">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
                Sign-In
            </a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
                Create an account
            </a> */}

            {props.type==='nav'?<NavSnip/>:<Profile/>}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleDrawer}>
                {mobileDrawerOpen? <X/> : <Menu/>}
            </button>
          </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item,index)=>(
                            <li key={index} className="py-4 border-b">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 mt-5">
                    <a href="#" className="py-2 px-3 border rounded-md">
                Sign-In
            </a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
                Create an account
            </a>

                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar