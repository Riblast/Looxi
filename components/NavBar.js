import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="fixed flex justify-between w-full p-5">
      <Link href='/#home'><h2 className="text-[32px]">Looxi</h2></Link>
      <ul className="flex justify-between w-2/5 font-light text-2xl">
        <li><Link href="/#videos">Videos</Link></li>
        <li><a href="/#music">Music</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a href="">Instagram</a></li>
        <li><a href="">Spotify</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
