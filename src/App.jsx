import { useState, useEffect} from 'react'
import Searchbar from './components/search-bar.jsx'
import Results from './components/results.jsx'
import Playlist from './components/playlist.jsx'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="flex flex-col">
      <Searchbar />
      <Results />
      <Playlist />
    </div>
  )
}

export default App
