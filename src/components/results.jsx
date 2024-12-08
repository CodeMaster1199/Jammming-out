export default function Results() {
  return (
    <div className="results bg-purple-600 bg-opacity-60 w-1/2 absolute top-1/4 left-10">
      <h1 className="text-white text-2xl">Results</h1>
      <hr className="bg-white border-dashed"></hr>
      <div className="individual-result flex flex-row border-b-2 justify-between border-white">
        <div className="info text-white opacity-100 ">
          <h2>Track name</h2>
          <p>Artist | Album</p>
        </div>
        <button className="add-button self-end text-white active:text-gray-500">+</button>
      </div>
    </div>
  )
}