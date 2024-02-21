import React from 'react'
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { FaArrowDownLong } from "react-icons/fa6";

const HomePage = () => {
  return (
    // intro
    <div className='flex flex-col max-w-7xl mx-auto'>
      {/* intro text and image */}
      <div className='flex justify-evenly mb-20 items-center'>
        {/* left column */}
      <div className='flex flex-col space-y-10 text-center'>
        <h1 className='text-5xl font-extralight'>Full-Stack Web Developer</h1>
        <p className='font-extralight text-3xl'>Building Better Software <br />
Writing Better Code</p>
      </div>
      {/* right column */}
      <div className='rounded-full flex items-center justify-center overflow-hidden h-[400px] w-[400px] border-2 border-base-content'>
          <Image src="/assets/me.jpg" alt='picture of myself' width={400} height={300} className='min-w-full min-h-full' />
      </div>
      </div>
      {/* arrow */}
      <div className='mx-auto rounded-full border-2 border-base-content h-[60px] w-[60px] flex items-center justify-center'>
        <FaArrowDownLong className="text-3xl" />
      </div>
    </div>
  )
}

export default HomePage