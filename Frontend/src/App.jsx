import React from 'react'
import Nav from './Components/Nav'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Admin from './Pages/Admin'
import Home from './Pages/Home'
import AdminDashboard from './Pages/AdminDashboard'

const App = () => {
  return (
    <div id='main' className='h-screen w-full' >
      <Nav/>
       <Routes>
             <Route path='/Admin' element={<Admin/>} />
             <Route path='/' element={<Home/>} />
             <Route path='/AdminDashboard' element={<AdminDashboard/>} />
       </Routes>
    </div>
  )
}

export default App