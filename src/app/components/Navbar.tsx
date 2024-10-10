import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-around p-6 bg-yellow-50'>
      <div className='text-purple-950 font-bold text-xl'>BookStore</div>
      {/*nav icons */}
      <div>
        <ul className='flex space-x-7 font-semibold '>

          <li className='hover:bg-yellow-100 hover:p-2'>Home</li>
          <li className='hover:bg-yellow-100 hover:p-2'>About</li>
          <li className='hover:bg-yellow-100 hover:p-2'>Courses</li>
          <li className='hover:bg-yellow-100 hover:p-2'>Our Services</li>
          <li className='hover:bg-yellow-100 hover:p-2'>Contact Us</li>
          <li className='bg-fuchsia-950 text-orange-50 px-9 py-2  rounded-3xl hover:bg-yellow-100 hover:text-fuchsia-950'><button>Sign In</button></li>
          
        </ul>
      </div>
    </div>
  )
}
