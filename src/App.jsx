import { useState, useEffect} from 'react'
import Searchbar from './components/SearchBar.jsx'
import Results from './components/Results.jsx'
import Playlist from './components/Playlist.jsx'
import Spotify from './util/Spotify/Spotify.js'

function App() {
  const [count, setCount] = useState(0)

  const [searchResults, setSearchResults] = useState(["track1, track2, track3"])
  const [playlistName, setPlaylistName] = useState("New Playlist")
  const [playlistTracks, setPlaylistTracks] = useState(["track1", "track2", "track3"])

  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      setPlaylistTracks([...playlistTracks, track])
    }
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack !== track))
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  let isRemoval = true

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(PlaylistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    })
  }
  
  const search = (term) => {
    Spotify.search(term).then(results => {
      setSearchResults(results)
    })
  }

  return (
    <div className="flex flex-col">
      <Searchbar onsearch={search}/>
      <Results searchResults={searchResults} onAdd={addTrack} isRemoval={isRemoval}/>
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} 
                isRemoval={isRemoval} onRemove={removeTrack} onNameChange={updatePlaylistName}
                onSave={savePlayList}/>
    </div>
  )
}

export default App
