import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-screen flex'>
      <div className='flex-[327px_0_0] bg-gray-500 text-white'>aside</div>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  )
}

export default layout