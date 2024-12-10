import React from 'react';
import Tracklist from './Tracklist.jsx'

export default function Results({searchResults, isRemoval=false, onAdd}) {

  //Creates an empty results section if no tracks are present. If they are there it add h-fraction and overflow-y-scroll classes
  const containerClassNames = `individual-result flex flex-row border-b-2 justify-between border-white
                              ${searchResults.length ? 'h-fraction overflow-y-scroll' : ''}`
                              
  return (
    <div className="results bg-purple-600 bg-opacity-60 w-1/2 absolute top-1/4 left-10
                    ">
      <h1 className="text-white text-2xl">Results</h1>
      <hr className="bg-white border-dashed"></hr>
      <div className={containerClassNames}>
      <Tracklist tracks={searchResults} isRemoval={false} onAdd={onAdd}/>
      </div>
    </div>
  )
}