import React from 'react';
import Tracklist from './Tracklist.jsx'

export default function Results(props) {
  return (
    <div className="results bg-purple-600 bg-opacity-60 w-1/2 absolute top-1/4 left-10">
      <h1 className="text-white text-2xl">Results</h1>
      <hr className="bg-white border-dashed"></hr>
      <div className="individual-result flex flex-row border-b-2 justify-between border-white">
      <Tracklist tracks={props.searchResults}/>
        {/* <button className="add-button self-end text-white active:text-gray-500">+</button> */}
      </div>
    </div>
  )
}