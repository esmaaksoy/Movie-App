import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContextProvider'

const PrivateRouter = () => {
    const {currentUser} = useAuthContext()
  return (
    currentUser ? <Outlet/> : <Navigate to="/login" replace/>
  )
}

export default PrivateRouter