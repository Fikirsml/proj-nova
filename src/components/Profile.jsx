import logo from "../assets/logo.png"
import user from '../assets/profile-pictures/user1.jpg'
import { useState } from "react"
import Modal from "./Modal"
import { LogOut } from "lucide-react"
const Profile = () => {
    const [open, setOpen] = useState(false)
    return(
      <>
        <div className="flex items-center flex-shrink-0 mr-auto" >
               <img src={user} alt='logo' className="h-10 w-10 mr-2 rounded-full  border-2 border-r-orange-500 cursor-pointer" onClick={() => setOpen(true)}/>
               
           </div>

<Modal open={open} onClose={() => setOpen(false)}>
<div className="text-center w-80">
<LogOut size={56} className='mx-auto' color="black"/>
<div className="mx-auto my-4 w-50">
<h3 className="text-xl font-black text-neutral-800 capitalize">we hate to see you leave</h3>
<p className="text-sm text-neutral-500">
              Are you sure you want to Log out?
</p>
</div>
<div className="flex gap-4">
<button className="btn btn-danger w-full">Delete</button>
<button
className="btn btn-light w-full"
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