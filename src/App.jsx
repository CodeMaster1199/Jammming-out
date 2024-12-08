import { useState, useEffect} from 'react'
import Searchbar from './components/SearchBar.jsx'
import Results from './components/Results.jsx'
import Playlist from './components/Playlist.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [searchResults, setSearchResults] = useState([])


  return (
    <div className="flex flex-col">
      <Searchbar />
      <Results searchResults={searchResults}/>
      <Playlist />
    </div>
  )
}

export default App
