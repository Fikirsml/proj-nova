import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Crypto() {

    const [input, setInput] = useState({
        msg: "",
        password: "",
	email: "",
        txt: "",
    })
    // const handleInputChange = (e) => {setMsg({...humanMsg, [e.target.name]: e.target.value, })};

    const handleEncrypt = async () => {
            try{
                const response = await axios.post('http://127.0.0.1:5000/encrypt', input);
                setInput({ ...input, txt: response.data["cypher_txt"], })
                console.log(response.data)
		alert("Encryption complete!! Email Sent", response.data["cypher_txt"])
            } catch (error) {
                console.log("Error on fetch", error)
            }

    };

    const handleDecrypt = async () => {
        try{
            const response = await axios.post('http://127.0.0.1:5000/decrypt', input)
            setInput({ ...input, txt: response.data["normal_txt"], msg:"", password:""})
            console.log(response.data)
	    lert("Decryption successfull, Email Sent!!!")
        } catch (error) {
            console.log("Error on fetch", error)
        }
    }

    return (
        <>
        
<form>
   <div class=" place-content-center max-w-4xl mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea 
           id="comment" 
	   name="response_txt"
           rows="4" 
           class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
           placeholder="Your processed message will appear here..." 
           required>{ input.txt }</textarea>
       </div>
       <label for="chat" class="sr-only">Your message</label>
    <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <textarea 
        name='msg'
        onChange={(e) => setInput({ ...input, msg: e.target.value })}
        class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        <textarea 
        name='email'
        onChange={(e) => setInput({ ...input, email: e.target.value })}
        class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email"></textarea>
      <textarea 
        name='password'
        onChange={(e) => setInput({ ...input, password: e.target.value })}
        class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"></textarea>
      <button onClick={handleEncrypt} type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            Encrypt
	    <span class="sr-only">Send message</span>
        </button>
        <button onClick={handleDecrypt} type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            Decrypt
	    <span class="sr-only">Send message</span>
        </button>
    </div>
       
   </div>
</form>

        </>
    )

}
