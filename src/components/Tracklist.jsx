
import React from 'react';
import Track from './Track.jsx'

export default function Tracklist(props, isRemoval, onAdd ) {
  return (
    <div className="Tracklist w-full">
      {props.tracks.map(track => (
        <Track key={Track.id} track={track} onAdd={onAdd} isRemoval={isRemoval} onRemoval={props.onRemoval} />
      ))}
    </div>
  )
}