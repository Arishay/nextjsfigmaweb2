import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Tracks from './components/Tracks'
import Story from './components/Story'
import Footer from './components/Footer'



export default function app() {
  return (
    <div className='bg-white min-h-screen'>
<Navbar/>
<Banner/>
<Tracks/>
<Story/>
<Footer/>
    </div>
  )
}
