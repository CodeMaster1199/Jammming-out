
import React from 'react';
import Track from './Track.jsx'

export default function Tracklist(props) {

  return (
    <div className="Tracklist w-full">
      {props.tracks.map(track => {
        return <Track key={Track.id} track={track} />
      })
      }
    </div>
  )
}