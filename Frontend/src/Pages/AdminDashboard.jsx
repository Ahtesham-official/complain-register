import React, { useEffect } from 'react'
import { useState } from 'react'
const AdminDashboard = () => {
   const [complaints, setComplaints] = useState([])
  useEffect( () => {
 const loaddashboard = async () => {
  const token = localStorage.getItem('token')
  if(!token){
    window.location.href = "/Admin"
  }
  await fetch('/fetch/dashboard' , {
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
  
}
const fetchcomplaints = async () => {
    console.log("auth response recieved")
  fetch('/api/complaints')
  .then(res => res.json())
  .then(data=> {
    setComplaints(data.complaints)
    console.log(data)
  })
  .catch(err => {
    console.log(err);   })
}

 loaddashboard();
 fetchcomplaints();
}, [])
const changestatus = async ( id , status) => {
const token = localStorage.getItem('token')
const response = await fetch(`/api/update/${id}`, {
  method:'PUT',
  headers:{
    "Content-Type":"application/json",
    authorization : "Bearer " + token
},
body: JSON.stringify({status:status})
})
const data = await response.json();
console.log(data)
}
  return (
    <div className='w-full h-full pt-[6vw] bg-[#660B05] flex items-center   justify-center text-[#FFF0C4]'>
      <div className='bg-[#FFF0C4]  w-[80%] h-[80%] rounded-4xl' >
          <h1 className='text-[#3E0703] font-bold text-[2vw] text-center' >ADMIN DASHBOARD</h1>
          <div className='h-[80%] w-full flex shrink-0 justify-between items-center overflow-x-hidden flex-col overflow-y-auto' >
            {complaints.map((comp) => {
                return(
                <div className='bg-[#8C1007] w-[90%] rounded-3xl  overflow-y-visible px-5 mt-5' key={comp._id} >
                  <p className='text-[#FFF0C4] font-bold text-[15px]' >Name: {comp.name}</p><br />
                  <p className='text-[#FFF0C4] font-bold text-[15px]' >Complaint Id: {comp._id}</p><br />
                  <p className='text-[#FFF0C4] font-bold text-[15px]' >Status: {comp.status}</p> <br />
                  <p className='text-[#FFF0C4]  font-bold text-[15px]' >Complaint: {comp.complain}</p>
                  <select onChange={(e) => changestatus(comp._id , e.target.value )} defaultValue={comp.status}>
                    <option className='text-[#8C1007]  ' value="requested">requested</option>
                    <option className='text-[#8C1007]  ' value="processing">processing</option>
                    <option className='text-[#8C1007]  ' value="resolved">resolved</option>
                  </select>
                </div>)
})
            }
            
          </div>
      </div>
    </div>
  )
}

export default AdminDashboard