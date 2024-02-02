import React from 'react';
import useFetch from './useFetch';
import ShowTile from './ShowTile';

export default function Similar(props) {
  const id = props.id;
  const media_type = props.media_type;

  const { results: shows } = useFetch(`https://api.themoviedb.org/3/${media_type}/${id}/similar?language=en-US&page=1`, "similarShows");

  if (!shows) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <ShowTile shows={shows} media_type={props.media_type}/>
    </div>
  );
}
