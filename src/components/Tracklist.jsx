
import React from 'react';
import Track from './Track.jsx'

export default function Tracklist({tracks=[], isRemoval, onAdd, onRemove, playlistTracks}) {
  console.log("playlist tracks in tracklist", playlistTracks)
  console.log(tracks) //works


  return (
    <div className="Tracklist w-full">
      {tracks.map((track, index) => (
        <Track 
        key={track.id}
        track={track}
        playlistTracks={playlistTracks}
        onAdd={onAdd} 
        isRemoval={isRemoval} 
        onRemove={onRemove} 
        trackNumber={index +1} 
        />
      ))}
    </div>
  )
}

