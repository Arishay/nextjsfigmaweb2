import React from 'react'
import Image from 'next/image'
import objects from '../components/public/OBJECTS.png'
import test from '../components/public/online-test 1.png'
import exam from '../components/public/exam 1.png'
import certificate from '../components/public/certification 1.png'

export default function banner() {
  return (
    <main >
  <div className='flex  bg-yellow-50'>
      <div className=' min-h-screen'>

      <h1 className='text-black font-bold text-5xl pl-28 pt-32 animate-bounce duration-75'>The <span className='text-orange-500'>Smart</span> <br />Choice For <span className='text-orange-500'>Future</span> </h1>
      <p className='px-28 text-slate-600 p-9'>Elearn is a global training provider based across the UK that specialises in aecredibed and bespollie courses.We crush the...</p>
      </div>

      {/*Image */}
      <div className=''>
<Image
src={objects}
alt='object'
width={700}
height={700}
className=' h-96  '
/>

      </div>
  </div>
  {/*Next div */}
      <div className=' bg-fuchsia-950 flex items-center text-white  rounded-3xl px-4 mx-3 -mt-24  h-48 animate-pulse '>

                  <div className='flex gap-4'>
            <div className=' '>{/*image */}
<Image
src={test}
alt='obj'
width={700}
height={700}
className='w-10 h-10 bg-slate-50 m-2 bg-opacity-15 rounded-lg p-1'
/>
            </div>
            <div>
              <h1 className='font-bold'>Learn The Latest Skills</h1>
              <p className='text-sm text-slate-200'>Contarary to popular lorem ipsum is not simply random text.has rootsin Bc..</p>
            </div>
          </div>


          <div className='flex gap-4'>
            <div className=' '>{/*image */}
<Image
src={exam}
alt='obj'
width={700}
height={700}
className='w-10 h-10  bg-slate-50 m-2 bg-opacity-15 rounded-lg p-1 '
/>
            </div>
            <div>
              <h1 className='font-bold'>Get Ready For a Career</h1>
              <p className='text-sm text-slate-200'>Contarary to popular lorem ipsum is not simply random text.has rootsin Bc..</p>
            </div>
          </div>


          <div className='flex gap-4'>
            <div className=' '>{/*image */}
<Image
src={certificate}
alt='obj'
width={700}
height={700}
className='w-10 h-10  bg-slate-50 m-2 bg-opacity-15 rounded-lg p-1'
/>
            </div>
            <div>
              <h1 className='font-bold'>Earn a Certificate</h1>
              <p className='text-sm text-slate-200'>Contarary to popular lorem ipsum is not simply random text.has rootsin Bc.</p>
            </div>
          </div>
      </div>
    </main>
   
    
  )
}
