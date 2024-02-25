import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div id="about_me" className='mb-20'>
        <h1 className='text-4xl mb-10'>About</h1>
        <div className='flex gap-4'>
          {/* horizontal line */}
          <div className='w-20 h-[2px] bg-white mt-2'></div>
          {/* about me */}
          <div>
            <p className='descriptive'>I'm a passionate Junior Web Developer, based in Romania.
As a Junior Full Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React js, Tailwind CSS, Express js, Mongodb, Firebase, Next js and Node js. <span className='text-white'>I'm a pro active person, I like to take initiative in all my projects.</span> Also, I'm a very competitive person and I'm always trying to improve my skills and outgrow myself everyday.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About