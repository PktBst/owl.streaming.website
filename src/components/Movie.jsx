import { useParams } from 'react-router-dom'
import VideoEmbed from './VideoEmbed';
import Cast from './Cast';
import Similar from './Similar';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function Movie() {
  const {id}=useParams()
  const details=useFetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,'movie')
  useEffect(() => {window.scrollTo(0, 0);}, [id]);
  return (
    <div>
    {/* movie-{id} */}
    <div className="showinfo" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(255,255,255,0) 100%), url("https://image.tmdb.org/t/p/original${details.backdrop_path}")`}}>
      <div className="showdetails">
        <div className='title'>{details.title}</div>
        <div className="subinfo">
          <div className="date">{details.release_date}</div>
          <div className="duration">{details.runtime+" mins"}</div>
        </div>
        <div className='overview'>{details.overview}</div>
        {/* <Genres genres={details.genres}/> */}
        <div className='genres'>
          {details.genres && details.genres.map((genre) => (
            <Link  to={{ pathname: `/genres/movie-${genre.id}`, state: { media_type: 'movie' } }} key={genre.id}>
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
      <VideoEmbed media_type='movie' id={id}/>
      <Cast media_type='movie' id={id} />
    </div>
    <Similar media_type='movie' id={id}></Similar>
  </div>
)
}
