import React from 'react'
import Nav from '../Components/Nav'

const Admin = () => {
  const prevdef = (e) =>{
      e.preventDefault();
  }
  return (
    <div className='bg-[#8C1007] w-full h-full flex items-center justify-center ' >
        <div className='bg-[#FFF0C4] h-1/2 w-1/2 rounded-4xl'>
          <h1 className='text-[#3E0703] font-bold text-[1.5vw] text-center ' >ENTER LOGIN CREDENTIALS</h1>
          <div>
            <form onSubmit={(e) => prevdef(e)}  className='flex items-center flex-col justify-center' action="">
              <input className='bg-[#8C1007] text-[#FFF0C4] rounded-4xl w-[80%] mt-7.5 h-[2.5vw] text-center' type="text" placeholder='Username' />
              <input className='bg-[#8C1007] text-[#FFF0C4] rounded-4xl w-[80%] mt-7.5 h-[2.5vw] text-center' type="password" placeholder='Password' />
              <button className='bg-[#3E0703] text-[#FFF0C4] py-[0.6vw] px-[1.5vw] mt-8 rounded-3xl '  type='submit' >Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Admin