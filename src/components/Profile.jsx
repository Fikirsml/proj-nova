import logo from "../assets/logo.png"
import user from '../assets/profile-pictures/user1.jpg'
import { useState } from "react"
import Modal from "./Modal"
import { LogOut } from "lucide-react"
import { Link } from "react-router-dom"
const Profile = () => {
    const [open, setOpen] = useState(false)
    return(
      <>
        <div className="flex items-center flex-shrink-0 mr-auto" >
               <img src={user} alt='logo' className="h-10 w-10 mr-2 rounded-full  border-2 border-r-orange-500 cursor-pointer" onClick={() => setOpen(true)}/>
               
           </div>

<Modal open={open} onClose={() => setOpen(false)}>
<div className="text-center w-80">
<LogOut size={56} className='mx-auto' color="orange"/>
<div className="mx-auto my-4 w-50">
<h3 className="text-xl font-black text-neutral-200 capitalize">we hate to see you leave</h3>
<p className="text-sm text-neutral-500">
              Are you sure you want to Log Out?
</p>
</div>
<div className="flex gap-4">
    <Link to='/' className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 border rounded-md mr-auto">
    Log Out
    </Link>

    {/* <Link className="py-3 px-6 border rounded-md text-neutral-500" onClick={() => setOpen(false)}>Cancel</Link> */}
{/* <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 border rounded-md mr-auto">Log Out</button> */}
<button
className="py-3 px-6 border rounded-md text-neutral-500"
onClick={() => setOpen(false)}
>
              Cancel
</button>
</div>
</div>
</Modal>


           </>
)
}

export default Profile