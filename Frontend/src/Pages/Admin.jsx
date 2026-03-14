import React from 'react'
import Nav from '../Components/Nav'
import { useState } from 'react'

const Admin = () => {
  const [formdata, setformdata] = useState({
    username : "",
    password : ""
  });
  function changevalue(e) {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };
  const prevdef = async (e) =>{
      e.preventDefault();
      const response =  await fetch('/admin/login',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body : JSON.stringify({username: formdata.username, password: formdata.password})
  })
  const data  = await response.json();
  if(data.token){
    localStorage.setItem('token' , data.token);
    window.location.href = '/AdminDashboard';
  }
  else{
    alert("Login failed")
  }
  }
  return (
    <div className='bg-[#8C1007] w-full h-full flex items-center justify-center ' >
        <div className='bg-[#FFF0C4] h-1/2 w-1/2 rounded-4xl'>
          <h1 className='text-[#3E0703] font-bold text-[1.5vw] text-center ' >ENTER LOGIN CREDENTIALS</h1>
          <div>
            <form onSubmit={(e) => prevdef(e)}  className='flex items-center flex-col justify-center' action="">
              <input className='bg-[#8c1007d2] text-[#FFF0C4] rounded-4xl w-[80%] mt-7.5 h-[2.5vw] text-center' name='username' onChange={changevalue}  type="text" placeholder='Username' ></input>
              <input className='bg-[#8c1007d2] text-[#FFF0C4] rounded-4xl w-[80%] mt-7.5 h-[2.5vw] text-center' name='password' onChange={changevalue} type="password" placeholder='Password' />
              <button className='bg-[#3E0703] text-[#FFF0C4] py-[0.6vw] px-[1.5vw] mt-8 rounded-3xl '  type='submit' >Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Admin