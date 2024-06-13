import Signin from "../components/Signin"

const SigninPage = () => {
  return (
    <div className="flex w-full h-screen">
        <div className="hidden relative lg:flex justify-center items-center h-full w-1/2 ">
            <div className="w-60 h-60 bg-gradient-to-tr from-red-800 to-orange-500 rounded-full animate-bounce"/>
            <div className="w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0 rounded-lg"/>
        </div>
        <div className="w-full flex items-center justify-center lg:w-1/2 ">
            <Signin/>
        </div>
    </div>
  )
}

export default SigninPage