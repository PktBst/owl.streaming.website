import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import Scroll from './HOC/scroll';

export default function Genres() {

  const location = useLocation();
  // const media_type = location.state ? location.state.media_type : null;
  useEffect(() => {
    console.log(location);
  }, [location]);
  const inputString = location.pathname;
const result = inputString.substring(inputString.lastIndexOf("/") + 1);

const [media_type,id] = result.split('-');



  const url=`https://api.themoviedb.org/3/discover/${media_type}?with_genres=${id}`
  return (
    <div>
      {media_type}-{id}
      {/* {console.log(location)} */}
      <Scroll url={url} media_type={media_type}/>
    </div>
  )
}
