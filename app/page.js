import Home from './pages/Home'
import Music from './pages/Music'
import Videos from './pages/Videos'
export default function Page () {
  return (
    <main className="h-screen">
      <Home/>
      <Videos/>
      <Music/>
    </main>
  )
}
