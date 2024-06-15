import blogAbout from '../assets/profile-pictures/blogAbout2.jpg'
import { CircleDot } from 'lucide-react'

export default function BlogAbout() {
  return (
    <div className=' flex flex-col items-start justify-center  px-3 '>
        
      <div className='flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg max-w-[425px] px-4 py-3 rounded-lg' >
      <h4 className='text-3xl tracking-wide text-neutral-400'>About Me</h4>
        <img src={blogAbout} alt="random person" className='h-60 w-full object-cover rounded-md mt-2'  />
        <p
        className='mt-8 text-sm text-neutral-400 leading-7'
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quidem sit dicta aut, aliquid asperiores obcaecati illo maiores, harum consequuntur excepturi ea perferendis eveniet, totam rerum dolorum nostrum ipsum ex?
        </p>
      </div>
      <div className='mt-10'>
        <h4 className='text-3xl tracking-wide  text-orange-500 bg-white/10 backdrop-blur-lg rounded-full px-2 py-1'>For You </h4>
        <ul className='mt-2 space-y-2 text-neutral-300 cursor-pointer px-3 '>
            <li className='hover:text-white'> something 1 </li>
            <li className='hover:text-white'>something 2</li>
            <li className='hover:text-white'>something 3</li>
            <li className='hover:text-white'>something 4</li>
        </ul>
      </div>
      <div className='mt-10 '>
        <h4 className='text-3xl tracking-wide text-orange-500 bg-white/10 backdrop-blur-lg rounded-full px-2 py-1'>Latest</h4>
        <ul className='mt-2 space-y-2 text-neutral-300 cursor-pointer px-3'>
             <li className='hover:text-white'>something 1 </li>
            <li className='hover:text-white'>something 2</li>
            <li className='hover:text-white'>something 3</li>
            <li className='hover:text-white'>something 4</li>
        </ul>
      </div>
      <div className='mt-10 '>
        <h4 className='text-3xl tracking-wide text-orange-500 bg-white/10 backdrop-blur-lg rounded-full px-2 py-1'>Popular</h4>
        <ul className='mt-2 space-y-2 text-neutral-300 cursor-pointer px-3'>
             <li className='hover:text-white'>something 1 </li>
            <li className='hover:text-white'>something 2</li>
            <li className='hover:text-white'>something 3</li>
            <li className='hover:text-white'>something 4</li>
        </ul>
      </div>
    </div>
  )
}
