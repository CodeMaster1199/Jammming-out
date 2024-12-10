import React from 'react';
import {useState} from 'react';

export default function Searchbar({onSearch}) {

  const [term, setTerm] = useState('')

  const passTerm = () => {
    onSearch(term);
    // console.log(term);
  }
  const handleTermChange = (e) => {
    setTerm(e.target.value)
    // console.log(term);
  }

  return (
    <div className="SearchBar text-center relative top-20">
    <input className="bg-purple-600 text-white py-2 px-6 w-1/2 rounded-l-lg border-none"
            placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
    <button className="SearchButton bg-purple-600 hover:bg-purple-800 hover:shadow-lg 
                    active:text-black
                    text-white font-bold py-2 px-4 cursor-pointer
                      rounded-r-lg shadow-lg" onClick={passTerm}>
      SEARCH
    </button>
    </div>
  );
}