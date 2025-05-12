import React from 'react'
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/api/auth/signup',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(formData),
    }
  )
  const data = await res.json();
  console.log(data)
  }
  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' className='border p-3  rounded-lg' id='username'onChange={handleChange}></input>
        <input type="email" placeholder='email' className='border p-3  rounded-lg' id='email'onChange={handleChange}></input>
        <input type="password" placeholder='passwors' className='border p-3  rounded-lg' id='password'onChange={handleChange}></input>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:-80 disabled:opacity-95' >Sign UP</button>
      </form>
      <div className='flex gap-7 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign in"}></Link>
          <span className='text-blue-700'></span>
      </div>
    </div>
  )
}

export default SignUp;
