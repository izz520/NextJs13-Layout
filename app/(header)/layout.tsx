import React from 'react'

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='flex-[70px_0_0] bg-gray-500 text-white'>Header</div>
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default HeaderLayout