import React, { useState } from 'react';
import ShowTile from './ShowTile';
import useFetch from './useFetch';

export default function Home() {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  var page=1
  const url = query
    ? `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`
    : 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

  const {results:shows}=useFetch(url,"Home Fetch")

  return (
    <div>
      <div className="search">
        <input type="text" placeholder='search' onChange={handleChange} />
      </div>
      {shows && <ShowTile shows={shows} />}
    </div>
  );
}
