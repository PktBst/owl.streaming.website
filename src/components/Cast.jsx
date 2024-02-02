import React from 'react'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'
import './styles/casts.css'
import default_profile from './media/default_profile.png'

export default function Cast(props) {
  
  const id=props.id
  const media_type=props.media_type
  const url=`https://api.themoviedb.org/3/${media_type}/${id}/credits`
  const { cast: data } = useFetch(url, "credits");
  // const res = Array.isArray(data) ? data.slice(0, 10) : [];

  console.log(data)
  // https://api.themoviedb.org/3/tv/{series_id}/aggregate_credits
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className='casts'>
  Cast
  {data.map((cast) => {
    const imagePath = cast.profile_path ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : default_profile;
    return (
      <Link to={`/person/${cast.id}`} key={cast.id}>
        <div className="cast">
          <img src={imagePath} alt="" />
          <div className="nameinfo">
            <div className="character">{cast.character}</div>
            <div className="name">{cast.name}</div>
          </div>
        </div>
      </Link>
    );
  })}
</div>

);

}
