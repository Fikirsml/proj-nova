import { resourcesLinks,communityLinks,platformLinks } from "../constants"
import { Copyright } from "lucide-react"
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
    <footer className="mt-20 border-t py-10 border-neutral-700" >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="flex items-center flex-shrink-0 mr-auto" >
                    <img src={logo} alt='logo' className="h-10 w-10 mr-2" />
                    <span className="text-xl tracking-tight">Nova</span>
                </div>

            <div >
                <h3 className="text-md font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((item,index)=>(
                        <li key={index}>
                            <a  className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div >
                <h3 className="text-md font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((item,index)=>(
                        <li key={index}>
                            <a  className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div >
                <h3 className="text-md font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((item,index)=>(
                        <li key={index}>
                            <a  className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


    </footer>
        <div className="mt-5 flex items-center justify-center text-xs ">
           <span>noVa 2024</span> &nbsp; <Copyright className="text-orange-500"/> &nbsp; <span> All Rights Reserved.</span>
        </div>
        </>
  )
}

export default Footer