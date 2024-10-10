import React from 'react'
import Image from 'next/image'
import emp from '../components/public/images.jpeg'
import save from '../components/public/save.jpg'
import man from '../components/public/man.jpg'
import working from '../components/public/workinglady.jpg'
import working2 from '../components/public/workingldy2.jpeg'
import working3 from '../components/public/working2.jpg'


export default function story() {
  return (
    <main>
       <h1 className='font-bold text-4xl text-center pt-16'>What Our Student's Say</h1>
      <p className='pb-16 pt-2 text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>


{/*student say */}
      <div className=' animate-pulse duration-100 flex mx-11 bg-gradient-to-tl bg-stone-100 p-6 rounded-3xl'>


      <div className=' w-72 h-48 rounded-lg shadow shadow-gray-300 pl-4 pt-4 mx-5 bg-white'>
          <p>"Better than a thousand days of diligent study is one day with a great teacher."</p>
          
          <div className='flex gap-4 pt-8'>


            <div className=' '>{/*image */}
<Image
src={man}
alt='obj'
width={700}
height={700}
className='w-9 h-9 rounded-full'
/>
            </div>

            <div className=' text-sm'>
              <h1 className='font-semibold'>Dannte.P</h1>
              <p>Web Designer.</p>
            </div>
        </div>
        </div>

        <div className=' w-72 h-48 rounded-lg shadow shadow-gray-300 pl-3 pt-3 mx-5 bg-white'>
          <p>"I've learned that people will forget what you said, people will forget what you did."</p>
          
          <div className='flex gap-4 pt-8'>


            <div className=' '>{/*image */}
<Image
src={emp}
alt='obj'
width={700}
height={700}
className='w-9 h-9 rounded-full'
/>
            </div>

            <div className=' text-sm'>
              <h1 className='font-semibold'>Clara R.Altman</h1>
              <p>App Developer.</p>
            </div>
        </div>
        </div>

        <div className=' w-72 h-48 rounded-lg shadow shadow-gray-300 pl-3 pt-3 mx-5 bg-white'>
          <p>"It is not what is poured into the student, but what is planted, that counts."</p>
          
          <div className='flex gap-4 pt-8'>


            <div className=' '>{/*image */}
<Image
src={save}
alt='obj'
width={700}
height={700}
className='w-9 h-9 rounded-full'
/>
            </div>

            <div className=' text-sm'>
              <h1 className='font-semibold'>Finlay Kirk</h1>
              <p>Web Developer.</p>
            </div>
        </div>
        </div>
      </div>



{/*Our Tracks */}
      <div>
      <h1 className='font-bold text-4xl text-center pt-16'>Our Tracks</h1>
      <p className='pb-16 pt-2 text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

      <div className='flex items-center justify-center '>

      <div className=' w-72 h-56 rounded-lg shadow shadow-slate-400 ml-4 hover:animate-pulse'>
          <Image
          src={working}
          alt='work'
          width={700}
          height={700}
          className='h-36 p-3'
          />
          <hr/>
          <h1 className='font-semibold pl-3 text-black'>Mathew E.</h1>
          <p className='text-sm text-gray-500 pl-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id possimus corrupti est.</p>
        </div>

        <div className=' w-72 h-56 rounded-lg shadow shadow-slate-400 ml-4 hover:animate-pulse'>
          <Image
          src={working2}
          alt='work'
          width={700}
          height={700}
          className='h-36 p-3'
          />
          <hr/>
          <h1 className='font-semibold pl-3 text-black'>Tracy D.</h1>
          <p className='text-sm text-gray-500 pl-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id possimus corrupti est.</p>
        </div>

        <div className=' w-72 h-56 rounded-lg shadow shadow-slate-400 ml-4 hover:animate-pulse'>
          <Image
          src={working3}
          alt='work'
          width={700}
          height={700}
          className='h-36 p-3'
          />
          <hr/>
          <h1 className='font-semibold pl-3 text-black'>Cynthia A.</h1>
          <p className='text-sm text-gray-500 pl-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id possimus corrupti est.</p>
        </div>

      </div>
    </div>
    </main>
  )
}
