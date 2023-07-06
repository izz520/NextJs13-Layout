import React, { ReactNode } from 'react'

const Provider = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <h1>Provider</h1>
      {children}
    </div>
  )
}

export default Provider