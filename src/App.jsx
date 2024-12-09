import { useState, useEffect} from 'react'
import Searchbar from './components/SearchBar.jsx'
import Results from './components/Results.jsx'
import Playlist from './components/Playlist.jsx'
import spotify from './util/Spotify/Spotify.js'

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState("")
  const [playlistTracks, setPlaylistTracks] = useState([])

  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)){ {/*if the track is not in the playlist return true*/}
      setPlaylistTracks([...playlistTracks, track])
    }
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack !== track)) /*returns a new array without the savedTrack*/
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  let isRemoval = true /*Defined here but not interactive this way! */

  const savePlaylist =  () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    spotify.savePlaylist(PlaylistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]); /*These last two opearations are for cleanup */
    })
  }
  
  const search = (term) => {
    spotify.search(term).then(results => {
      setSearchResults(results)
    })
  }

  return (
    <div className="flex flex-col">
      <Searchbar onSearch={search}/>
      <Results searchResults={searchResults} onAdd={addTrack} isRemoval={isRemoval}/>
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} 
                isRemoval={isRemoval} onRemove={removeTrack} onNameChange={updatePlaylistName}
                onSave={savePlaylist}/>
    </div>
  )
}

export default App
