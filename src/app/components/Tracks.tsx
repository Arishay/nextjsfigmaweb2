import React from 'react'
import Image from 'next/image'
import girl from '../components/public/OBJECTS (1).png'
import obj from '../components/public/hearts 1.png'
import jigsaw from '../components/public/jigsaw 1.png'
import working from '../components/public/working2.jpg'
import working2 from '../components/public/workinglady.jpg'
import working3 from '../components/public/workingldy2.jpeg'


export default function tracks() {
  return (
    <div>
      <h1 className='font-bold text-4xl text-center pt-16'>Our Tracks</h1>
      <p className='pb-16 pt-2 text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div className='flex items-center justify-center '>


        <div className=' w-72 h-56 rounded-lg shadow shadow-slate-400 ml-4 '>
          <Image
          src={working}
          alt=''
          width={700}
          height={700}
          className='h-36 p-3'
          />
          <h1 className='font-bold p-3 text-black'>UI/UX Designer<br /><span className='font-bold text-orange-500'>$96</span></h1>
          <button className='bg-orange-500 rounded-3xl px-6 py-2 -mt-52 ml-20 text-white font-medium hover:bg-yellow-200 transition duration-700 ease-in-out hover:text-black'>Join Course</button>
        </div>

        <div className=' w-72 h-56 rounded-lg shadow shadow-slate-400 ml-4'>
          <Image
          src={working2}
          alt='work'
          width={700}
          height={700}
          className='h-36 p-3'
          />
          <h1 className='font-bold p-3 text-black'>UI/UX Designer<br /><span className='font-bold text-orange-500'>$96</span></h1>
          <button className='bg-orange-500 rounded-3xl px-6 py-2 -mt-52 ml-20 text-white font-medium hover:bg-yellow-200 transition duration-700 ease-in-out hover:text-black'>Join Course</button>
        </div>

        <div className=' w-72 h-56 rounded-lg shadow shadow-slate-400 ml-4 '>
          <Image
          src={working3}
          alt='lady'
          width={700}
          height={700}
          className='h-36 p-3'
          />
          <h1 className='font-bold p-3 text-black'>UI/UX Designer<br /><span className='font-bold text-orange-500'>$96</span></h1>
          <button className='bg-orange-500 rounded-3xl px-6 py-2 -mt-52 ml-20 text-white font-medium hover:bg-yellow-200 transition duration-700 ease-in-out hover:text-black'>Join Course</button>
        </div>

      </div>

      <div className='bg-yellow-100 h-full flex gap-24 my-16 pt-7'>
        <div>
          <Image
         src={girl}
         alt='girl'
         width={700}
         height={700}
         className='h-80 w-auto pl-24 py-3'
          
          />
        </div>
        <div>
          <h1 className='text-black font-bold text-5xl py-3 p-5  '>Premium <span className='text-orange-500'>Learning</span> <br /> Experience</h1>

          <div className='flex gap-4 p-5'>
            <div className=' '>{/*image */}
<Image
src={obj}
alt='obj'
width={700}
height={700}
className='w-10 h-10  '
/>
            </div>


            <div>
              <h1 className='font-semibold'>Easily Accessible</h1>
              <p>We are giving easy aaccessiblity.</p>
            </div>
          </div>


          <div className='flex gap-4 pl-5'>
            <div className=' '>{/*image */}
<Image
src={jigsaw}
alt='obj'
width={700}
height={700}
className='w-10 h-10  '
/>
            </div>
            <div>
              <h1 className='font-semibold'>Fun Learning Experience</h1>
              <p>Learning will feel very comfortable with courselab.</p>
            </div>
          </div>





        </div>
      </div>
    </div>
  )
}
