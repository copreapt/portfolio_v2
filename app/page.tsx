import About from '@/components/About'
import Intro from '@/components/Intro'
import React from 'react'

const HomePage = () => {
  return (
    // intro
    <div className='flex flex-col'>
      <div>
        <Intro/>
      </div>
      <div>
        <About />
      </div>
    </div>
  )
}

export default HomePage