import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useAuth } from '../../context/AuthContext';
const MainPage = () => {
    const { login, register, user, logout } = useAuth();

  return (
    <div className="">
    <Navbar />
    <h1>HALLLOOOOO, {user.displayName}</h1>
  </div>
  )
}

export default MainPage