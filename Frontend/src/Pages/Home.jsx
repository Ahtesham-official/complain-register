import React, { useState } from 'react'
import writecom from '../assets/register.png'
import readcom from '../assets/complaint.png'
import '../index.css'


const Home = () => {
  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);
  const [newcomplaint, setNewcomplaint] = useState({
    name:"",
    complain:""
  })
  const [fetchcomplaint, setFetchcomplaint] = useState({
    _id:""
  })
  const handlechange1 = (e) => {
    setNewcomplaint({
      ...newcomplaint,
      [e.target.name]: e.target.value
    })
  }
  const handlechange2 = (e) => {
    setFetchcomplaint({
      ...fetchcomplaint,
      [e.target.name]: e.target.value
    })
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(newcomplaint);
    fetch('/api/complaint', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newcomplaint)  
    })
    .then(response => response.json())
    .then(data => {
      setResult2(data);
    })
    .catch(err => {
      console.log(err);
    })
  }
  const handlefetch = async (e) =>{
    e.preventDefault();
    const complaint = fetchcomplaint._id;
   const response = await fetch(`api/complaint/${complaint}`)
    const data = await response.json();
    alert(data.message);
    setResult(data.complaint);
    
}
  return (
    <div className='h-full w-full bg-[#8C1007] px-1 pt-[2vw] flex justify-between items-center '>
      <div className='complaint-box bg-[#FFF0C4] rounded-4xl flex items-center flex-col justify-between  overflow-hidden mt-[6vw] p-1 w-[48vw]  h-96' >
       <div className=' h-full w-full overflow-auto flex flex-col items-center justify-between' >
         <div className='w-full flex justify-center items-center'>
        <h1 className=' font-bold text-[#3E0703] text-center text-2xl ' >REGISTER A COMPLAIN</h1>
      <img className='h-12 w-12 ' src={writecom} alt="" />
      </div>
      <form  onSubmit={(e) => handlesubmit(e)} className='w-full  h-[80%] flex flex-col items-center' action="/">
         <input type="text" placeholder='Enter Your Name' name="name" onChange={handlechange1}  className='bg-[#8c1007ac] rounded-4xl h-10 text-center text-[#FFF0C4] mt-7 w-[34vw] ' ></input>
         <textarea name="complain" placeholder='Enter your complaint' onChange={handlechange1} rows={7} className='bg-[#8c1007ac] mt-7 text-center text-[#FFF0C4] rounded-4xl no-resize-textarea  w-[34vw] no-resize ' ></textarea>
         <button type='submit'  className='bg-[#3E0703] text-[#FFF0C4] mt-3 w-24 rounded-4xl p-3 ' >SUBMIT</button>
      </form>{ result2 && (
        <div className="mt-5 bg-[#8c1007ac] text-[#FFF0C4] p-4 rounded-3xl w-[34vw]">
          <h1>{result2.message}</h1>
          <p><b>Complaint ID:</b> {result2.id}</p>
        </div>
      )}
       </div>
      </div>
      <div className='complaint-box bg-[#FFF0C4] overflow-hidden rounded-4xl items-center mt-[6vw] w-[48vw] h-96 flex flex-col justify-center p-1 ' >
        <div className='w-full h-full overflow-auto flex flex-col items-center justify-between' >
          <div className='w-full  flex justify-center'>
          <h1 className=' font-bold text-[#3E0703] text-center text-2xl ' >TRACK YOUR COMPLAIN</h1>
          <img className='h-12 w-12 ' src={readcom} alt="" />
        </div>
        <form onSubmit={handlefetch} className='w-full h-[80%] flex flex-col items-center' action="">
           <input type="text" name='_id'  placeholder='Enter your complaint number' onChange={handlechange2} className='bg-[#8c1007ac] rounded-4xl h-10 text-center text-[#FFF0C4] mt-7 w-[34vw] ' ></input>
           <button type='submit' className='bg-[#3E0703] text-[#FFF0C4] mt-3 w-24 rounded-4xl p-3 ' >TRACK</button>
        </form>
           {result && (
  <div className="mt-5 ml-5 bg-[#8c1007ac] text-[#FFF0C4] p-4 rounded-3xl w-[34vw]">
    <h1>Complaint Found</h1>
    <p><b>Name:</b> {result.name}</p>
    <p><b>Complaint:</b> {result.complain}</p>
    <p><b>Status:</b> {result.status}</p>
    <p><b>ID:</b> {result._id}</p>
  </div>
)}
        </div>
      </div>
    </div>
  )
}

export default Home