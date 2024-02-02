import React from 'react'
import { useParams } from 'react-router-dom'
import VideoEmbed from './VideoEmbed';
import './styles/showstyle.css'
import Similar from './Similar';
import useFetch from './useFetch';
import Cast from './Cast';
import { Link } from 'react-router-dom';

export default function Tv() {
    const {id}=useParams()
    const details=useFetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`,"TV-series")
  return (
    <div>
      {/* tv-{id} */}
      <div className="showinfo" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(255,255,255,0) 100%), url("https://image.tmdb.org/t/p/original${details.backdrop_path}")`}}>
        <div className="showdetails">
          <div className='title'>{details.name}</div>
          <div className="subinfo">
            <div className="date">{details.first_air_date}</div>
            <div className="duration">{details.number_of_episodes+" Episodes"}</div>
          </div>
          <div className='overview'>{details.overview}</div>
          <div className='genres'>
            {details.genres && details.genres.map((genre) => (
              <Link to={{ pathname: `/genres/tv-${genre.id}`, state: { media_type: 'tv' } }} key={genre.id}>
                <div className="genre" >
                  {genre.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* <img src={"https://image.tmdb.org/t/p/original"+details.backdrop_path} alt="" /> */}
      </div>
      <div className="show-cast">
        <VideoEmbed media_type='tv' id={id}/>
        <Cast media_type='tv' id={id} />
      </div>
      <Similar media_type='tv' id={id}/>
    </div>

  )
}
