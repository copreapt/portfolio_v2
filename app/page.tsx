import About from '@/components/About'
import Intro from '@/components/Intro'
import React from 'react'

const HomePage = () => {
  return (
    // intro
    <div className='flex flex-col lg:max-w-5xl xl:max-w-7xl mx-auto'>
      <div className='mb-40'>
        <Intro/>
      </div>
      <div>
        <About />
      </div>
    </div>
  )
}

export default HomePage