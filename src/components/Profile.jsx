import logo from "../assets/logo.png"
import user from '../assets/profile-pictures/user1.jpg'
const Profile = () => {
    return(
      
        <div className="flex items-center flex-shrink-0 mr-auto" >
               <img src={user} alt='logo' className="h-10 w-10 mr-2 rounded-full  border-2 border-r-orange-500 cursor-pointer" />
               
           </div>
 
)
}

export default Profile