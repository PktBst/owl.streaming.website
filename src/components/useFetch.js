import { useEffect,useState } from "react"
const fetch = require('node-fetch');
const token=process.env.REACT_APP_API_KEY || process.env.API_KEY;

const useFetch=(url,name)=>{
    const [data, setdata] = useState({})
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token,
        }
      }

    useEffect(()=>{
        fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setdata(json)
      })
      .catch(err => console.error('error:' + err))
      console.log(name+' useEffect')
    },[url])

    return data;

}

export default useFetch;