import React from 'react';
import './styles/showtile.css';
import { Link } from 'react-router-dom';
import default_poster from './media/nullposter.png'
import star_icon from './media/star.svg'

export default function ShowTile(props) {
  const shows = props.shows;
  var media_type=props.media_type
  console.log(shows);
  var photo = "";

  return (
    <div className="showtile-menu">
      {shows.map((show) => {
        media_type=props.media_type
        photo = show.media_type === 'person' ? show.profile_path : show.poster_path;
        photo=(photo!==null)?`https://image.tmdb.org/t/p/w500/${photo}`:default_poster
        return (
          <div key={show.id} className="tile">
            <Link to={`/${media_type || show.media_type}/${show.id}`}>
              <img className='thumbnail-img'src={photo} alt={`${show.id}_img`} />
              {/* {show.name} */}
              <div className="thumbnail-info">
                <div className="postertitle">{show.orignal_title || show.name ||show.title}</div>
                <div className="rating">
                  <img src={star_icon} className='star_icon' alt="" />
                  {show.vote_average && show.vote_average.toString().substring(0, 3)}
                  {/* {show.vote_average} */}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
