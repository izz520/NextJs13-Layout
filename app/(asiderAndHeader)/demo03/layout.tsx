import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <span>demo03页面下的Layouy</span>
      {children}
    </div>
  )
}

export default layout