import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite';
import "swiper/swiper-bundle.css";


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-background dark:bg-dark-background'>
    <App />
    </div>
  </StrictMode>,
)
