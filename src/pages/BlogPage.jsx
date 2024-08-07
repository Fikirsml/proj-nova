import BlogAbout from "../components/BlogAbout"
import BlogPost from "../components/BlogPost"
import CommentBox from "../components/CommentBox"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Github,Instagram,Twitter,CodeXml } from "lucide-react"

export default function BlogPage() {
  return (
    <>
      <Navbar type="profile"/>
    <div className="">

      <div className="flex max-w-7xl mx-auto pt-10 px-6  ">
    <div className="w-2/3 grid grid-cols-1 border-r border-neutral-600 ">
      <BlogPost/>

      <div className="mt-20">
      <h2 className=' w-40 text-3xl tracking-wide text-orange-500 bg-neutral-900 rounded-full px-5 py-1 text-center'>Related</h2>
      <ul className="mt-4 px-7 space-y-5  text-neutral-300 cursor-pointer">
        <li className="hover:text-white">something 1</li>
        <li className="hover:text-white">something 2</li>
        <li className="hover:text-white">something 3</li>
        <li className="hover:text-white">something 4</li>

      </ul>

      </div>

<div className="mt-40">

      <CommentBox/>
</div>

</div>

    <div className="mt-5 ">
        <BlogAbout/>
    </div>

      </div>
      <div className="mt-30  max-w-7xl mx-auto pt-20 px-6  ">
        
    <Footer/>
      </div>

    </div>
    </>
  )
}
