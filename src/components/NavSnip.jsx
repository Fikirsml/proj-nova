import { Link } from "react-router-dom"

const NavSnip = () => {
  return (
    <div className='space-x-2'>
        <Link to='/signin' className="py-2 px-3 border rounded-md">
        Sign-in
        </Link>
        <Link to='/signup' className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
        Create an account
        </Link>
         {/* <a href="#" className="py-2 px-3 border rounded-md">
                Sign-In
            </a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
                Create an account
            </a> */}
    </div>
  )
}


export default NavSnip