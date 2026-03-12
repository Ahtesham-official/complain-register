import React, { useState } from 'react'
import writecom from '../assets/register.png'
import readcom from '../assets/complaint.png'
import '../index.css'


const Home = () => {
  const [value, setvalue] = useState()
  const prevdef =(e) =>{
      e.preventDefault()
  }
  return (
    <div className='h-full w-full bg-[#8C1007] px-1 pt-[2vw] flex justify-between items-center '>
      <div className='complaint-box bg-[#FFF0C4] rounded-4xl mt-[6vw] p-1 w-[48vw]  h-96' >
        <div className='w-full flex justify-center items-center'>
        <h1 className=' font-bold text-[#3E0703] text-center text-2xl ' >REGISTER A COMPLAIN</h1>
      <img className='h-12 w-12 ' src={writecom} alt="" />
      </div>
      <form  onSubmit={(e) => prevdef(e)} className='w-full  h-[80%] flex flex-col items-center' action="/">
         <input type="text" placeholder='Enter Your Name' className='bg-[#8c1007ac] rounded-4xl h-10 text-center text-[#FFF0C4] mt-7 w-[34vw] ' ></input>
         <textarea name="" id="" placeholder='Enter your complaint' rows={7} className='bg-[#8c1007ac] mt-7 text-center text-[#FFF0C4] rounded-4xl no-resize-textarea  w-[34vw] no-resize ' ></textarea>
         <button type='submit'  className='bg-[#3E0703] text-[#FFF0C4] mt-3 w-24 rounded-4xl p-3 ' >SUBMIT</button>
      </form>
      </div>
      <div className='complaint-box bg-[#FFF0C4]  rounded-4xl mt-[6vw] w-[48vw] h-96 flex flex-col justify-center p-1 ' >
        <div className='w-full flex justify-center'>
          <h1 className=' font-bold text-[#3E0703] text-center text-2xl ' >TRACK YOUR COMPLAIN</h1>
          <img className='h-12 w-12 ' src={readcom} alt="" />
        </div>
        <form className='w-full h-[80%] flex flex-col items-center' action="">
           <input type="number" placeholder='Enter your complaint number' className='bg-[#8c1007ac] rounded-4xl h-10 text-center text-[#FFF0C4] mt-7 w-[34vw] ' ></input>
           <button type='submit' className='bg-[#3E0703] text-[#FFF0C4] mt-3 w-24 rounded-4xl p-3 ' >TRACK</button>
        </form>
      </div>
    </div>
  )
}

export default Home