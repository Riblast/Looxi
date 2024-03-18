import React from 'react'
import Image from 'next/image'
import { Arrow } from '@/ui/icons'
import Link from 'next/link'

const Home = () => {
  return (
    <section id='home' className='h-screen'>
      <div className="h-full w-full absolute -z-10 object-cover overflow-hidden pointer-events-none opacity-70 select-none">
        <Image
          alt=""
          src="/assets/portada.png"
          quality={100}
          fill={true}
          priority
        />
      </div>
      <div className='h-screen'>
        <div className='pt-[88px] pl-24 pr-44 grid grid-cols-2 grid-rows-3 gap-y-10'>
          <h2 className='font-extrabold text-8xl row-start-1'>New Simple</h2>
          <h2 className='flex justify-center font-extrabold text-8xl row-start-2 col-start-1 col-end-4'>{'"no te desvanezcas"'}</h2>
          <div className='flex row-start-3 justify-center'>
            <Link href='https://www.youtube.com/watch?v=26JvaAnXPsI' className=''><h2 className='font-extrabold text-7xl border-double border-b-4 hover:text-yellow-600 hover:border-white border-yellow-600 p-0'>Out Now</h2></Link>
          </div>
        </div>
        <div className='absolute bottom-10 left-1/2'><Link href='/#videos'><Arrow/></Link></div>
      </div>
    </section>
  )
}

export default Home
