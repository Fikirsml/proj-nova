import img1 from '../assets/profile-pictures/code1.jpg'
import img2 from '../assets/profile-pictures/code2.jpg'

export default function () {
    const date=new Date().toLocaleDateString();
  return (
    <div className="w-full flex flex-col items-start justify-center ">
        <p className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            Blog&nbsp;
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text capitalize'>post</span>
       
        </p>
     <h1 className='mt-4 text-4xl sm:text-6xl lg:text-4xl text-center tracking-wide capitalize text-neutral-500'>Today {date}</h1>

     <div className="mt-8 w-2/3 ">
        <img src={img1} alt="random pic" className=' object-cover  rounded-md ' />
        <div>
            <h2 className='mt-10 text-4xl capitalize text-orange-500 bg-neutral-900 rounded-full px-1 py-1 mb-4 text-center w-60' >
                Sometitle
            </h2>
            <p className='mt-2 text-base text-neutral-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quas eveniet mollitia tenetur, in asperiores magni, nam esse hic culpa, voluptatem qui eligendi perferendis animi impedit. Iure quod inventore sapiente!
                Maiores itaque et eos quidem iste perspiciatis sed deserunt doloremque aliquam, provident magnam nostrum cupiditate consectetur perferendis quos quasi praesentium doloribus, non voluptatum velit. Tempora doloribus earum ut natus nesciunt.
                Vel et cupiditate error odio amet excepturi sit dolor voluptatum sapiente possimus molestias eos soluta, quaerat ad atque obcaecati, recusandae, voluptatem ut ipsam dolore ab labore nihil. Nam, libero architecto.
            </p>
        </div>
     </div>

     <div className="mt-2 w-2/3 ">
        
        <div>
            <h2 className='mt-10 text-4xl capitalize text-orange-500 bg-neutral-900 rounded-full px-1 py-1 mb-4 text-center w-60' >
                Sometitle
            </h2>
            <p className='mt-2 text-base text-neutral-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quas eveniet mollitia tenetur, in asperiores magni, nam esse hic culpa, voluptatem qui eligendi perferendis animi impedit. Iure quod inventore sapiente!
                Maiores itaque et eos quidem iste perspiciatis sed deserunt doloremque aliquam, provident magnam nostrum cupiditate consectetur perferendis quos quasi praesentium doloribus, non voluptatum velit. Tempora doloribus earum ut natus nesciunt.
                Vel et cupiditate error odio amet excepturi sit dolor voluptatum sapiente possimus molestias eos soluta, quaerat ad atque obcaecati, recusandae, voluptatem ut ipsam dolore ab labore nihil. Nam, libero architecto.
            </p>
        </div>
     </div>
     <div className="mt-32 w-2/3 ">
        <img src={img1} alt="random pic" className=' object-cover  rounded-md ' />
        <div>
            <h2 className='mt-10 text-4xl capitalize text-orange-500 bg-neutral-900 rounded-full px-1 py-1 mb-4 text-center w-60' >
                Sometitle
            </h2>
            <p className='mt-2 text-base text-neutral-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quas eveniet mollitia tenetur, in asperiores magni, nam esse hic culpa, voluptatem qui eligendi perferendis animi impedit. Iure quod inventore sapiente!
                Maiores itaque et eos quidem iste perspiciatis sed deserunt doloremque aliquam, provident magnam nostrum cupiditate consectetur perferendis quos quasi praesentium doloribus, non voluptatum velit. Tempora doloribus earum ut natus nesciunt.
                Vel et cupiditate error odio amet excepturi sit dolor voluptatum sapiente possimus molestias eos soluta, quaerat ad atque obcaecati, recusandae, voluptatem ut ipsam dolore ab labore nihil. Nam, libero architecto.
            </p>
        </div>
     </div>

     <div className="mt-2 w-2/3 ">
        
        <div>
            <h2 className='mt-10 text-4xl capitalize text-orange-500 bg-neutral-900 rounded-full px-1 py-1 mb-4 text-center w-60' >
                Sometitle
            </h2>
            <p className='mt-2 text-base text-neutral-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quas eveniet mollitia tenetur, in asperiores magni, nam esse hic culpa, voluptatem qui eligendi perferendis animi impedit. Iure quod inventore sapiente!
                Maiores itaque et eos quidem iste perspiciatis sed deserunt doloremque aliquam, provident magnam nostrum cupiditate consectetur perferendis quos quasi praesentium doloribus, non voluptatum velit. Tempora doloribus earum ut natus nesciunt.
                Vel et cupiditate error odio amet excepturi sit dolor voluptatum sapiente possimus molestias eos soluta, quaerat ad atque obcaecati, recusandae, voluptatem ut ipsam dolore ab labore nihil. Nam, libero architecto.
            </p>
        </div>
     </div>
    
    </div>
  )
}
