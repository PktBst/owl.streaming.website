import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'
import ShowTile from './ShowTile'
import './styles/person.css'

export default function Person() {
    const {id} = useParams()
    const data =useFetch(`https://api.themoviedb.org/3/person/${id}`,"person")
    const {cast:shows}=useFetch(`https://api.themoviedb.org/3/person/${id}/combined_credits`)
    // const shows=useFetch(`https://api.themoviedb.org/3/person/${id}/tv_credits`)
  return (
    <div>
        {/* Person {id} */}
        <div className="intro">
            <div className="sub-intro">
              <div className="photo">
                <div className="image"><img src={'https://image.tmdb.org/t/p/w500/'+data.profile_path } alt="" /></div>
              </div>
              <div className="name">{data.name}</div>
            </div>
            <div className="biography">
              {data.biography}
            </div>
        </div>
        
        {shows && <ShowTile shows={shows}/>}
    </div>
  )
}
