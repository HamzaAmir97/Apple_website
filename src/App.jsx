import React from 'react'
import Navbar from './components/Navbar'
import Hero from '../src/components/Hero'
import { Highlights } from '../src/components/Highlights';

export const App = () => {
  return (
    < main className='bg-black'>
 

      <Navbar />
      <Hero />
      <Highlights />
   
   
    </main>
  )
}

export default App;
