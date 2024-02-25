import Image from 'next/image'
import React from 'react'
import {stack} from '../utils/stack';

const Stack = () => {
  return (
    <div className='text-center px-40 mb-20'>
      {/* title */}
      <h1 className='text-5xl mb-20'>My Skills</h1>
      {/* stack cards */}
      <div className='grid grid-cols-4 gap-6'>
        {/* card */}
        {stack?.map((item) => {
          return <div className={`${item.label === 'Javascript' ? 'bg-gray-500' : null } bg-[#434040] flex items-center py-12 rounded-md flex-col space-y-5 text-white text-lg font-semibold justify-self-auto`} key={item.label}>
          <Image src={item.icon} alt='icon' width={60} height={60} />
          <h3 className='font-sans font-semibold'>{item.label}</h3>
        </div>
        })}
      </div>
    </div>
  )
}

export default Stack