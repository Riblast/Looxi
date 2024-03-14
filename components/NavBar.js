const NavBar = () => {
  return (
    <div className="fixed flex justify-between w-full p-5">
      <h2 className="text-[32px]">Looxi</h2>
        <ul className="flex justify-between w-2/5 font-light text-2xl">
          <li><a href="">Videos</a></li>
          <li><a href="">Music</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Spotify</a></li>
        </ul>
      </div>
  )
}

export default NavBar
