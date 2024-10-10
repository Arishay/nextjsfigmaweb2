import React from 'react'

export default function footer() {
  return (
    <div>
      <div className='bg-fuchsia-950 w-3/5 h-52 ml-52 my-11 rounded-md'>
      <h1 className='text-white font-bold text-2xl text-center pt-5 pb-0 mt-11'>Subscribe to Our Newsletter</h1>
      <p className='text-white font-thin text-center'>lorem epsum idiva tiwoji idum</p>
      <div>
        <input type="text" id='searchbar' name='searchbar' placeholder='Email Address ' className='w-80 rounded-3xl h-12 mr-3 mt-14 p-3 ml-40' />
        <button className='bg-orange-400 text-white w-24 h-10 rounded-3xl text-center -ml-28'>Send</button>
      </div>
      </div>

      <div className='flex bg-yellow-100 justify-around p-5'>
        <div className='w-1/5 p-6'>
          <h1 className='text-purple-950 font-bold text-xl'>BookStore</h1>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem optio sit.. </p>
        </div>
        <div className='w-1/6'>
          <h1 className='font-bold hover:animate-bounce duration-500'>Company</h1>
          <ul className=' py-3 font-normal'>
          <li className='hover:text-purple-950 hover:transition duration-700 ease-out hover:text-lg font-medium'>Limited</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out hover:text-lg font-medium'>Address</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out hover:text-lg font-medium'>street 2A</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>+0087654209</li>
          </ul>
        </div>


        <div className='w-1/6'>
          <h1 className='font-bold hover:transition duration-700 ease-in-out hover:text-yellow-500 '>Courses</h1>
          <ul className=' py-3 font-normal'>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>UI/UX Design</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>Animation</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>Metaverse</li>
          
          </ul>
        </div>

        <div className='w-1/6'>
          <h1 className='font-bold hover:animate-bounce duration-500'>Support</h1>
          <ul className=' py-3 font-normal'>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>Call</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>FAQ'S</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>street 2A</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>+0087654209</li>
          </ul>
        </div>

        <div className='w-1/6'>
          <h1 className='font-bold hover:animate-bounce duration-500'>Contact Info</h1>
          <ul className=' py-3 font-normal'>
          <li className='hover:text-purple-950 hover:transition duration-700 ease-out hover:text-lg font-medium'>Limited</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out hover:text-lg font-medium'>Address</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out hover:text-lg font-medium'>street 2A</li>
            <li className='hover:text-purple-950 hover:transition duration-700 ease-out  font-medium'>+0087654209</li>
          </ul>
        </div>
      </div>

      <div className='bg-yellow-100 text-gray-600 font-semibold text-center p-4'><p>@All rights reserved...</p></div>


    </div>
  )
}
