import React from 'react'

const Signin = () => {
  return (
    <div className='max-w-[700px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-7 rounded-lg shadow-lg'>
        <div className='flex flex-col items-center'>
            <h1 className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl '>Welcome Back</h1>
            <p className='mt-2 text-lg capitalize text-neutral-400'>welcome back! please enter your details.</p>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-2'>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' className='border border-orange-500 rounded-lg p-1'/>
        </div>
        <div className='grid grid-cols-1 gap-2 mt-8'>
            <label htmlFor="email">Password</label>
            <input type="password" id='password' className='border border-orange-500 rounded-lg p-1'/>
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
        <div className='mt-8 flex items-center justify-center'>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-xl border'>
                Sign in
            </button>

        </div>
        <div className='mt-8 flex justify-center'>
            <p>
                Don't have an account ? &nbsp; <span className='text-orange-500'>Sign Up</span>
            </p>
        </div>

    </div>
  )
}

export default Signin