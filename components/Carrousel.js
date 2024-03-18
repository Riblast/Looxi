import React from 'react'
import Card from './Card'
import { RightArrow, LeftArrow } from '@/ui/icons'

const Carrousel = () => {
  return (
    <div className='flex justify-center items-center'>
      <LeftArrow/>
      <div className='flex justify-between w-5/6'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <RightArrow/>
    </div>

  )
}

export default Carrousel
