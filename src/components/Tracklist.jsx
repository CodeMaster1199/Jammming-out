
import React from 'react';
import Track from './Track.jsx'

export default function Tracklist({tracks=[], isRemoval, onAdd, onRemove}) {
  console.log(tracks) //works
  console.log("in tracklist")

  return (
    <div className="Tracklist w-full">
      {tracks.map((track, index) => (
        <Track 
        key={track.id}
        track={track}
        onAdd={onAdd} 
        isRemoval={isRemoval} 
        onRemove={onRemove} 
        trackNumber={index +1} 
        />
      ))}
    </div>
  )
}

