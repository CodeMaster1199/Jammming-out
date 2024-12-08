function Track() {

  const isRemoval = true;
  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action text-white">-</button>
    }
    else {
      return <button className="Track-action text-white">+</button>
    }
  }

  return (
    <div className="Track flex justify-between" >
      <div className="Track-information
                      text-white flex flex-col">
        <h3 >track name</h3>
        <p>artist name | album name</p>
      </div>
      {renderAction()}
    </div>
  )
}

export default Track;