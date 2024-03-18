import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Card = ({ song = '/', songURL = '/' }) => {
  console.log(song)
  return (
    <div className='flex flex-col justify-around w-[400px] h-[488px]'>
      <Image
        alt=""
        src="/assets/lastSymphonies.png"
        quality={100}
        width={400}
        height={400}
      />
      <p className='font-light text-sm'>Last Symphonies(2022)</p>
      <div className='flex w-full'>
        <Link className='mr-1' href={`${songURL}`}>
          <Button className='mx-1'>Listen Now</Button>
        </Link>
        <Link className='ml-1' href={`/details/${song}`}>
          <Button>More...</Button>
        </Link>
      </div>
    </div>
  )
}

export default Card
