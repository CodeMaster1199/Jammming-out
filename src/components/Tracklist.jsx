
import React from 'react';
import Track from './Track.jsx'

export default function Tracklist({tracks=[], isRemoval, onAdd, onRemoval }) {

  console.log(tracks) //works


  return (
    <div className="Tracklist w-full">
      {tracks.map((track, index) => (
        <Track 
        key={track.id} 
        track={track} 
        onAdd={onAdd} 
        isRemoval={isRemoval} 
        onRemoval={onRemoval} 
        trackNumber={index +1} 
        />
      ))}
    </div>
  )
}