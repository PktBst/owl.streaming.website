import React, { useEffect, useState } from 'react';
import searchSymbol from '././media/search-icon.svg'
import Scroll from './HOC/scroll';

export default function Home() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  // const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query, page]);

  const handleChange = e => {
    setQuery(e.target.value);
    // setShows([]);
    setPage(1);
  };

  const url = debouncedQuery
    ? `https://api.themoviedb.org/3/search/multi?query=${debouncedQuery}&include_adult=false&language=en-US`
    : `https://api.themoviedb.org/3/trending/all/day?language=en-US`;

  return (
    <div>
      <div className="search">
        <span><img className='search-icon'src={searchSymbol} alt="" /></span>
        <input type="text" placeholder="Movies, show and more" onChange={handleChange} />
      </div>
      <Scroll url={url} query={query}/>
      {/* {shows && <ShowTile shows={shows} />} */}
    </div>
  );
}
