import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
        <div className='max-w-screen-xl mx-auto flex justify-between'>
        <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-foreground dark:text-dark-foreground">
              BookStore
            </span>
          </Link>
          <div>
            <p className=' text-foreground rounded bg-primary lg:bg-transparent lg:text-primary lg:p-0 dark:text-dark-foreground dark:bg-dark-primary lg:dark:bg-transparent'>Copywrite 2024 </p>
          </div>
        </div>

    </div>
  )
}

export default Footer