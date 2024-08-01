import { Link,NavLink, useNavigate } from "react-router-dom"
import {useState} from 'react'
import axios from "axios"

const Signup = () => {
    const [input,setInput]=useState({
        email:"",
        password:"",
	username:"",
    })
    const navigate = useNavigate()
    const[error,setError]=useState("")
    const [link,setLink]=useState("")

    const handleInp=(e)=>{ setInput({ ...input, [e.target.name]: e.target.value, })
    }

    const handleSignUp = async () => {
        const response= await axios.post('http://127.0.0.1:5000/signup', input)
        const res=response.data
	console.log(response.data)
        if(res && input.email!=="" && input.password!=="" || res["status"] == true ){
            setLink('/dash')
	    alert('Success!! Welcome to Nova, Your id is: ', res["id"])
	    localStorage.removeItem('U_id')
	    localStorage.setItem('U_id', res["id"])
	    navigate('/dash')
        }

    }

  return (
    <div className='max-w-[700px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-20 rounded-lg shadow-lg'>
        <div className='flex flex-col items-center'>
            <h1 className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl '>Welcome Back</h1>
            <p className='mt-2 text-lg capitalize text-neutral-400'>welcome back! please enter your details.</p>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="email">Email</label>
            <input 
	  type="text" 
	  name="email" 
	  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} 
	  className='text-blue-500 border border-orange-500 rounded-lg p-1'/>
        </div>
        <div className='grid grid-cols-1 gap-2 mt-8'>
            <label htmlFor="password">Username</label>
            <input 
	  type="text" 
	  name='username' 
	  onChange={(e) => setInput({...input, [e.target.name]: e.target.value, })} 
	  className='text-blue-500 border border-orange-500 rounded-lg p-1'/>
        </div>
        <div className='grid grid-cols-1 gap-2 mt-8'>
            <label htmlFor="password">Password</label>
            <input 
	  type="password"
	  id='password'
	  onChange={(e) => setInput({...input, [e.target.name]: e.target.value, })}
	  className='text-blue-500 border border-orange-500 rounded-lg p-1'/>
        </div>
        <div className='mt-8 flex items-center justify-between'>
            <div>
                <input type="checkbox" name="" id="forget password" className='mr-1'/>
                <label htmlFor="forget password"> Rememeber Me</label>
            </div>
        
        </div>
        <div className='mt-8 flex items-center justify-center' onClick={handleSignUp}>
	  <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl border text-center'>
            Sign Up
            </button>
            {/* <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl border'>
                Sign in
            </button> */}

        </div>
        <div className='mt-8 flex justify-center'>
            <p>
                have an account ? &nbsp; <span className='text-orange-500'>
                    <Link to='/signin'>
                    Sign In
                    </Link>
                </span>
            </p>
        </div>

    </div>
  )
}

export default Signup
