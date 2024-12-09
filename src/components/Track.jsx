function Track(track) {

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
    <div className="Track flex justify-between" >
      <div className="Track-information
                      text-white flex flex-col">
        <h3>{track.name}</h3>
        <p>{track.artistname} | track.albumname</p>
      </div>
      {renderAction()}
    </div>
  )
}

export default Track;