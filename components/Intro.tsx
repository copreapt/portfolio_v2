import React from 'react'
import Image from 'next/image';

const Intro = () => {
  return (
    <>
    {/* container */}
    <div className='flex flex-col'>
      {/* Navbar */}
      <div className="w-full flex justify-between py-4 items-center  cursor-pointer text-[##656464] pb-[7.5rem]">
      {/* logo */}
      <div>
        <h1 className="text-3xl">Logo</h1>
      </div>
      {/* nav links */}
      <div className="flex gap-10 text-xl cursor-pointer">
        <a>Home</a>
        <a>About Me</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
    </div>
    {/* intro text and image */}
      <div className='flex justify-evenly items-center bg-[#232121] pb-20'>
        {/* left column */}
      <div className='flex flex-col space-y-10 text-center break-all max-w-[40rem]'>
        <h3 className='text-right text-2xl rounded-lg bg-[#656464] text-white w-fit px-3 py-1 border border-[#CDCBCB] self-end'>JUNIOR</h3>
        <h1 className='text-7xl'>Web Developer</h1>
        <h2 className='text-3xl'>Building Better Software<br />
Writing Better Code</h2>
      </div>
      {/* right column */}
      <div className='rounded-xl flex items-center justify-center overflow-hidden h-[450px] w-[450px]'>
          <Image src="/assets/me.jpg" alt='picture of myself' width={400} height={300} className='min-w-full min-h-full' />
      </div>
      </div>
    </div>
    </>
  )
}

export default Intro