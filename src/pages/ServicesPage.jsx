import AccMenu from "../components/AccMenu"
import Navbar from "../components/Navbar"
import SmallFooter from "../components/SmallFooter"

export default function ServicesPage() {
  return (
    <>
    <Navbar />
   
    <div className="flex flex-col max-w-7xl mx-auto  pt-10 px-6  ">

      <div>
      <h4 className='w-60 mb-2 text-4xl tracking-wide text-orange-500 bg-neutral-800 rounded-full px-2 py-1 text-center'>Requests</h4>
      </div>

      <div className="p-20 px-40 rounded-lg w-full bg-white/10 backdrop-blur-lg">
      <AccMenu title="something" rank="(Free)" />
      <AccMenu title="something" rank="(popular)" />
      <AccMenu title="something" rank="(beta)" />
      <AccMenu title="something" rank="(pro)" />

      </div>

      <div className="flex flex-col justify-end h-full">
      <SmallFooter/>
      </div>

    </div>
    
    </>
  )
}
