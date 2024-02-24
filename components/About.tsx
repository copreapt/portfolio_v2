import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div id="about_me">
        <h1 className='text-4xl mb-20'>About Me</h1>
        <div className='max-w-2xl mx-auto'>
          {/* description */}
          <div className='text-xl font-extralight leading-8 space-y-5 mb-10'>
            <p className='tracking-wide '>My Name is <span className='text-2xl font-semibold text-base-content'>Catalin Oprea</span>, I have grown up in Romania and lived a big part of my life in Madrid,Spain.</p>
            <p className='tracking-wide'>I enjoy playing football and reading books in my free time.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About