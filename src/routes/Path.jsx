import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserProfile from '../components/UserProfile'
import ProfileEdit from '../components/ProfileEdit'

const Path = () => {
  return (
    <Routes>
        <Route element={<UserProfile/>} path='/'/>
        <Route element={<ProfileEdit/>} path='/proFileEdit'/>
    </Routes>
  )
}

export default Path