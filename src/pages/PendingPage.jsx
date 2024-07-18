import { useEffect, useState } from "react"
import axios from "axios"


function PendingPage () {
  const[data, setData]=useState([])
  const [id, setId] = useState({
    U_id: `${localStorage.getItem('U_id')}`,
  });
  const jsonData = JSON.stringify(id);
  console.log(typeof(jsonData));
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
/*
const handleFetch=async()=>{
setLoading(true)
	try{
	const response= await axios.get('http://127.0.0.1:5000/view_pending', {U_id: "abebe@123"})
	setData(response.data)
	console.log(data)
	setError(null)
	}catch(err){
		setError(err.message)
	}finally{
		setLoading(false)
	}

}*/

 // const [id, setId] = useState({localStorage.getItem('U_id')})
  useEffect(()=>{
	const fetchData = async () => {
	  try {
		console.log(id, typeof(id))
		const response = await axios.post('http://127.0.0.1:5000/view_pending', id);
		console.log(response)
		setData(response.data);	
	  } catch(error) {
		  console.error('Error in fetching data:', error);
	  }
	};
	fetchData();
  },[]);

  console.log(data)

  return (

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Pending Id
                </th>
                <th scope="col" class="px-6 py-3">
	            Service Id
                </th>
                <th scope="col" class="px-6 py-3"> 
                    Request data
                </th>
                <th scope="col" class="px-6 py-3"> 
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {/* map */}
	  {data.map((item) =>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
		  {item.P_id}
                </th>
                <td class="px-6 py-4">
                  {item.S_id}
                </td>
                <td class="px-6 py-4">
                  {item.s_data}
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
            </tr>
	  )}
            {/* map */}
        </tbody>
    </table>
</div>

  )
}

export default PendingPage
