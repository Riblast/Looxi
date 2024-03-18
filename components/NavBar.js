import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="fixed flex justify-between w-full p-5">
      <Link href='/#home'><h2 className="text-[32px]">Looxi</h2></Link>
      <ul className="flex justify-between w-2/5 font-light text-2xl">
        <li><Link href="/#videos">Videos</Link></li>
        <li><Link href="/#music">Music</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
        <li><Link href="">Instagram</Link></li>
        <li><Link href="">Spotify</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
