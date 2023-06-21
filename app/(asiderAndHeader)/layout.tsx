import React, { memo } from 'react'

const AsiderAndHeaderLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='w-full h-[60px] bg-green-500'>Header</div>
      <div className='w-full h-[calc(100vh-60px)] flex'>
        <div className='flex-[320px_0_0] bg-orange-300'>Aside</div>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  )
}

export default memo(AsiderAndHeaderLayout)