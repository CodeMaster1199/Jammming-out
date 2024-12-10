function Track({track, key, onAdd, isRemoval, onRemove}) {
// console.log(track)
  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action text-white" onClick={passTrackToRemove}>-</button>
    }
    else {
      return <button className="Track-action text-white" onClick={passTrack}>+</button>
    }
  }

  const passTrack = () => {
    onAdd(track)
  }

  const passTrackToRemove = () => {
    onRemove(track)
  }

  return (
    <div className="Track flex justify-between mb-4 border-b" >
      <div className="Track-information
                      text-white flex flex-col">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {renderAction()}
    </div>
  )
}

export default Track;
