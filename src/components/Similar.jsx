import React from 'react';
import Scroll from './HOC/scroll';

export default function Similar({id,media_type}) {

  const url = `https://api.themoviedb.org/3/${media_type}/${id}/similar?language=en-US`

  return (
    <div>
      <Scroll url={url} media_type={media_type}/>
    </div>
  );
}
