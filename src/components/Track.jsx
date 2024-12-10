function Track({track, onAdd, isRemoval, onRemove, trackNumber}) {
// console.log(track)

  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action text-white mr-5 p-5" onClick={passTrackToRemove}>-</button>
    }
    else {
      return <button className="Track-action text-white mr-5 p-5" onClick={passTrack}>+</button>
    }
  }

  const passTrack = () => {
    console.log("passtrack called", track)
    onAdd(track)
  }

  const passTrackToRemove = () => {
    onRemove(track)
  }

  return (
    <div className="Track flex justify-between mb-4 border-b" >
      <div className="Track-information
                      text-white flex flex-col">
        <h3> {trackNumber} {track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {renderAction()}
    </div>
  )
}

export default Track;
