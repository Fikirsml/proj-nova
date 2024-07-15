import user from '../assets/profile-pictures/user1.jpg'

const SideProfile = () => {
  return (
    <div className='border-2 border-orange-400 py-1 rounded-xl bg-neutral-800'>

<div class="flex items-center gap-5 p-1 ">
    <img class="w-10 h-10 border rounded-full" src={user} alt="" />
    <div class="text-xs text-neutral-300 space-y-1">
        <div className='ml-2'>Jese Leos</div>
        <div class="text-xs text-gray-500 dark:text-gray-400"><span class="bg-orange-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded ">Free User</span></div>
    </div>
</div>

    </div>
  )
}

export default SideProfile