import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/complain.png'

const Nav = () => {
  return (
  <div className='fixed w-full'>
    <div className='w-full h-[6vw] bg-[#3E0703] flex justify-evenly items-center  ' >
      <div className="maintxt h-full text-[#FFF0C4] text-5xl font-bold w-3xl flex justify-evenly items-center " ><h1>COMPLAINT HUB</h1><img className='h-12 w-12 -ml-6 ' src={image} alt="" /></div >
        <div id='buttons' className='flex w-40 justify-between' > <div className='bg-[#FFF0C4] rounded-2xl p-2 w-16 font-bold  text-[#660B05]' ><Link to={"/"} >Home</Link></div><div className='bg-[#FFF0C4] rounded-2xl p-2 w-16 text-[#660B05] font-bold ' ><Link to={"/Admin"} >Admin</Link></div> </div>
    </div>
  </div>
  )
}

export default Nav