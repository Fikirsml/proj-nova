import { useState } from "react"
import { Link,NavLink, useNavigate } from "react-router-dom"
import axios from "axios"

const Signin = () => {
    const [input,setInput]=useState({
        email:"",
	username: "",
        password:"",
    })
    const[error,setError]=useState("")
    const [link,setLink]=useState("")
    const navigate = useNavigate()

    const handleInp=(e)=>{
    setInput({...input, [e.target.name]: e.target.value});
    };

    const handleSignIn=async(e)=>{
        e.preventDefault()
        const response= await axios.post('http://127.0.0.1:5000/client_signin', input)
        const res=response.data
	localStorage.setItem('U_id', res["U_id"]);
        if((res && input.email!=="" && input.password!=="") || res["status"] == true){
            setLink('/dash')
	    navigate('/dash')
        } else{
            setError("SignIn Unsuccessful!! Incorrect Username or Password")
            alert(error)
        }     
    }



  return (
    <div className='max-w-[700px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-20 rounded-lg shadow-lg'>
        <div className='flex flex-col items-center'>
            <h1 className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl '>Welcome Back</h1>
            <p className='mt-2 text-lg capitalize text-neutral-400'>welcome back! please enter your details.</p>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="email">Username</label>
            <input type="text" name="username" value={input.username} onChange={handleInp} className='text-gray-700 focus:text-blue-600 border border-orange-500 rounded-lg p-1'/>
        </div>
        <div className='grid grid-cols-1 gap-2 mt-8'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={input.password} onChange={handleInp} className='text-gray-700 focus:text-blue-600 border border-orange-500 rounded-lg p-1'/>
        </div>
        <div className='mt-8 flex items-center justify-between'>
            <div>
                <input type="checkbox" name="" id="forget password" className='mr-1'/>
                <label htmlFor="forget password"> Rememeber Me</label>
            </div>
            <div>
                <a href="#" className='text-orange-500'>Forgot Password</a>
            </div>
        </div>
        <div className='mt-8 flex items-center justify-center' onClick={handleSignIn} >
            <Link to={`${link}`}  className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl border text-center'>
            Sign in
            </Link>
            {/* <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl border'>
                Sign in
            </button> */}

        </div>
        <div className='mt-8 flex justify-center'>
            <p>
                Don't have an account ? &nbsp; <span className='text-orange-500'>
                    <Link to='/signup'>
                    Sign Up
                    </Link>
                </span>
            </p>
        </div>

    </div>
  )
}

export default Signin
