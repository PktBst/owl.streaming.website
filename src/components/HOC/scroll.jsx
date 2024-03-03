import React, { useEffect, useState } from 'react';
import ShowTile from '../ShowTile';
import useFetch from '../useFetch';

export default function Scroll({url,media_type,query}){
    const [shows, setShows] = useState([]);
    const [page, setPage] = useState(1);
    const neo_url=url+`&page=${page}`
    const { results: fetchedShows } = useFetch(neo_url, 'Home Fetch');
    const handlePageChange = () => {
        setPage(prev => prev + 1);
        console.log("page fetched")
      };
    useEffect(() => {
        if (fetchedShows && fetchedShows.length > 0) {
          setShows(prev => [...prev, ...fetchedShows]);
        }
      }, [fetchedShows]);

    useEffect(() => {
        // setQuery(e.target.value);
        setShows([]);
        setPage(1);
    }, [query,url])
    

    
    
      useEffect(() => {
        function handleScroll() {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          if (documentHeight - scrollTop - windowHeight < 50) {
            handlePageChange();
          }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return ( 
        <div>
            {shows && <ShowTile shows={shows} media_type={media_type}/>}
            Loading...
        </div>
     );
}
 