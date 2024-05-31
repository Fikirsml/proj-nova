import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-10 tracking-wide">
        <h2 className="capitalize text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20 text-center">
            what people are saying
        </h2>

        <div className="flex flex-wrap justify-center">
            {testimonials.map((item,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 font-thin text-md border border-neutral-800">
                        <p>{item.text}</p>
                        <div className="flex items-start mt-8">
                            <img src={item.image} alt="profile pic"  className="w-12 h-12 rounded-full mr-6 border border-neutral-300"/>
                            <div>
                                <p>{item.user}</p>
                                <span className="text-sm font-normal text-neutral-600 italic">{item.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Testimonials