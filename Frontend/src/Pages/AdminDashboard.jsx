import React, { useEffect } from 'react'

const AdminDashboard = () => {
useEffect(() => {
  const token = localStorage.getItem('token')
  if(!token){
    window.location.href = "/Admin"
  }
  fetch('/fetch/dashboard' , {
    headers:{
      authorization : "Bearer " + token
    }
  })
  .then(res =>{
    if(res.status === 401){
      localStorage.removeItem('token')
      window.location.href = "/Admin"
    }
    return res.json()
  })
}, [])
  return (
    <div className='w-full h-full pt-[6vw] bg-[#660B05] flex items-center   justify-center text-[#FFF0C4]'>
      <div className='bg-[#FFF0C4]  w-[80%] h-[80%] rounded-4xl' >
          <h1 className='text-[#3E0703] font-bold text-[2vw] text-center' >ADMIN DASHBOARD</h1>
      </div>
    </div>
  )
}

export default AdminDashboard