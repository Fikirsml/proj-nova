import user from '../assets/profile-pictures/user1.jpg'
import {useState, useEffect} from 'react'
import axios from 'axios'


const SideProfile = () => {
	const [name, setName] = useState('John do')
	const [id, setId] = useState({id: localStorage.getItem('U_id')})
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://127.0.0.1:5000/get_profile', id)
				setName(response.data["name"])
				console.log(response.data)
			} catch (error) {
				console.log('Error fetching Profile name: ', error)
			}
		};
		fetchData();
	}, []);

  return (
    <div className='border-2 border-orange-400 py-1 rounded-xl bg-neutral-800'>

<div class="flex items-center gap-5 p-1 ">
    <img class="w-10 h-10 border rounded-full" src={user} alt="" />
    <div class="text-xs text-neutral-300 space-y-1">
        <div className='ml-2'>{ name }</div>
        <div class="text-xs text-gray-500 dark:text-gray-400"><span class="bg-orange-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded ">Free User</span></div>
    </div>
</div>

    </div>
  )
}

export default SideProfile
