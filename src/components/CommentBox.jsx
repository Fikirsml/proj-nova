import user from '../assets/profile-pictures/user1.jpg'

export default function CommentBox() {
  return (
    <div className="grid grid-cols-1 gap-4 bg-white/10 backdrop-blur-lg max-w-[720px] px-4 py-3 pb-10 rounded-lg">
        <h1 className='text-center text-3xl tracking-wide text-neutral-400 capitalize'>Add a comment</h1>
       <div className='flex items-center'>
        <img src={user} alt="" className='h-20 rounded-full border-2 border-orange-500 ml-2 mr-4'/>
        <span className='text-neutral-300'>John Doe</span>
       </div>
      <div>
        <textarea name="" id="" cols={45} rows={10} className='rounded-lg border border-orange-500 text-neutral-500 p-3 resize-none'></textarea>
      </div>
      <button className="w-40 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md ">Submit</button>
    </div>
  )
}
