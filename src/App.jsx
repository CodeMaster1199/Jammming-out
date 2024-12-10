import { useState, useEffect} from 'react'
import Searchbar from './components/SearchBar.jsx'
import Results from './components/Results.jsx'
import Playlist from './components/Playlist.jsx'
import spotify from './util/Spotify/Spotify.js'

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState("")
  const [playlistTracks, setPlaylistTracks] = useState([])

  useEffect(() => {
    spotify.getAccessToken();
  }, [])

  const addTrack = async (track) => {
    console.log("Addtrack called", track)
    await setPlaylistTracks((prevTracks) => {
      console.log("running setPlaylistTracks", track)
      if (prevTracks.find(savedTrack => savedTrack.id === track.id)) {
        console.log("if chosen")
        return prevTracks
      } else {
        console.log("else chosen")
        return [...prevTracks, track]
      }
    })
    console.log("playlist Tracks:", playlistTracks)
  }
  

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack !== track)) /*returns a new array without the savedTrack*/
  }

  const updatePlaylistName = (name) => {
    console.log(playlistName)
    setPlaylistName(name)
    
  }

  let isRemoval = true /*Defined here but not interactive this way! */

  const savePlaylist = async () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    await spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]); /*These last two opearations are for cleanup */
    })
  }
  
  const search = (term) => {
    spotify.search(term).then(results => {
      setSearchResults(results)
      // console.log(results)
    })
  }

  useEffect(() => {
    console.log("playlistTracks updated:", playlistTracks);
  }, [playlistTracks]);


  return (
    <div className="flex flex-col h-screen">
      <Searchbar onSearch={search}/>
      <Results searchResults={searchResults} onAdd={addTrack} isRemoval={isRemoval}/>
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} 
                isRemoval={isRemoval} onRemove={removeTrack} onNameChange={updatePlaylistName}
                onSave={savePlaylist}/>
    </div>
  )
}

export default App
