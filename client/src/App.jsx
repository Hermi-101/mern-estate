import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/sign-in' element={<SignIn></SignIn>} />
        <Route path='/sign-up' element={<SignUp></SignUp>} />
        <Route path='/profile' element={<Profile></Profile>} />
        <Route path='/about' element={<About></About>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App