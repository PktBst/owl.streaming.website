import React from 'react'
import useFetch from './useFetch'
import { useLocation } from 'react-router-dom'
import ShowTile from './ShowTile';
import { useEffect } from 'react';

export default function Genres() {

  const location = useLocation();
  // const media_type = location.state ? location.state.media_type : null;
  useEffect(() => {
    console.log(location);
  }, [location]);
  const inputString = location.pathname;
const result = inputString.substring(inputString.lastIndexOf("/") + 1);

const [media_type,id] = result.split('-');



  const {results:data}=useFetch(`https://api.themoviedb.org/3/discover/${media_type}?with_genres=${id}`,"genre")
  return (
    <div>
      {media_type}-{id}
      {/* {console.log(location)} */}
        {data && <ShowTile media_type={media_type} shows={data}/>}
    </div>
  )
}
