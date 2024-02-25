import About from '@/components/About'
import Intro from '@/components/Intro'
import Stack from '@/components/Stack'
import React from 'react'

const HomePage = () => {
  return (
    // intro
    <div className='flex flex-col bg-[#232121]'>
      <div>
        <Intro/>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Stack />
      </div>
    </div>
  )
}

export default HomePage