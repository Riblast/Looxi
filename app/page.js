import Image from 'next/image'

export default function Home () {
  return (
    <main className="">
      <div className="h-screen w-screen absolute -z-10 object-cover overflow-hidden pointer-events-none opacity-70">
          <Image
              alt=""
              src="/assets/portada.png"
              quality={100}
              fill={true}
          />
      </div>
    </main>
  )
}
