import Sidebar from '@/components/commonCompo/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex sidebar gap-5'>
        <div className='hidden md:flex md:w-60  border border-dark-card dark:border-card'>
            <Sidebar/>
        </div>
        <div className='border border-red-600 w-[100%]'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard