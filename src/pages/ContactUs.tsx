import React from 'react'
import ContactForm from '@/components/homePage/ContactForm'
const ContactUs = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-5'>
        <div className='md:w-1/2 w-full mx-auto flex flex-col gap-6'>
          <div>
            <h2 className='text-center text-4xl'>Contact Us</h2>
          </div>
          <div>
            <ContactForm/>
          </div>
        </div>
    </div>
  )
}

export default ContactUs