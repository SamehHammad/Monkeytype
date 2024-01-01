import React from 'react'

const Ad = ({text,style}) => {
  return (
      <div className={`flex justify-center items-center ${style} bg-[#2C2E31] mb-14 mt-5`}>
          <p className='bg-softText px-1 font-mono rounded-md font-bold text-[#2C2E31]'>{text}</p>
    </div>
  )
}

export default Ad