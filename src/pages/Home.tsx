import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Button from '../components/Button'

const Home: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated') === 'true' ? true : false)

  if (!authenticated) {
    return <Navigate replace to='/login' />
  }

  const logOutHandler = () => {
    localStorage.clear()
    setAuthenticated(false)
  }

  return (
    <>
      <div className='px-5 py-3 flex justify-between items-center bg-emerald-400 text-white fixed w-full z-50'>
        <div className='font-medium'>Welcome</div>
        <Button
          className='bg-white text-emerald-400 border-emerald-400 hover:border-white hover:bg-emerald-400 hover:text-white '
          title='Logout'
          type='button'
          onClick={logOutHandler}
        ></Button>
      </div>

      <div className='flex justify-center w-full px-5 pt-[100px] pb-[50px]'>
        <div className='w-full lg:w-10/12'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home
