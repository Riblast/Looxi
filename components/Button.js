import React from 'react'

const Button = ({ children }) => {
  return (
    <button className='text-sm font-normal  text-[#ffffff5e] border-2 p-1'>
      {children}
    </button>
  )
}

export default Button
