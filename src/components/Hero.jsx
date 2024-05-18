import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide capitalize">
        nova penTest solutions <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> for everyone</span>
            
        </h1>
        <p className="text-center text-lg mt-10 text-neutral-500 max-w-4xl">
        Enhance your security posture and protect your digital assets with our expert penetration testing services. Begin now and safeguard your business against evolving cyber threats.







        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"> Start for free</a>
            <a href="#" className="py-3 px-3 border mx-3 rounded-md">
                Documentation
            </a>

        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video1} type="video/mp4"/>
                your browser doesnt support the video.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video2} type="video/mp4"/>
                your browser doesnt support the video.
            </video>
        </div>
    </div>
  )
}

export default Hero