import Tracklist from './tracklist.jsx'

export default function Playlist() {
  return(
    <div className="Playlist bg-purple-600  w-1/3 absolute top-1/4 bg-opacity-60 right-20
                    flex flex-col">
      <input placeholder="Name your playlist" className="playlist-name placeholder-gray-400
                        text-white bg-purple-500 bg-opacity-80 text-left"></input>
                        <Tracklist/>
      <button className="playlist-button rounded-xl self-center bg-blue-800
                        text-white px-4 py-2 opacity-1
                        cursor-pointer hover:bg-blue-900
                        ">SAVE TO SPOTIFY</button>
    </div>
  )
}