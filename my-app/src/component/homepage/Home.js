import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
export default function Home({user}) {
  const navigate = useNavigate()
  return (
    <div className='homepage'>
      <h1>Hello {user.name}</h1>
      <div className='button' onClick={() => navigate("/login")}>Logout</div>
    </div>
  )
}
