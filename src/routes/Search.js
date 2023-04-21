import { useNavigate } from "react-router-dom";
import config from '../config'
import SearchBar from '../components/SearchBar';
import {useEffect, useState} from 'react'
import Card from '../components/Card';

function convertToRating(popularity){
    return parseInt(5 * (parseInt(popularity) / 100))
  }
  
  function handleArtists(artists, navigate){
  
    // <Card type="artist" primary="Evanscence" secondary="1,000 followers" stars={4} cover={img_url}/>
    return artists.map( (item) => {
      
      const cover = item.images.length === 0 ? null : item.images[1].url
  
      return <Card  type="artist" 
                    primary={item.name} 
                    secondary={`${item.followers.total} followers`} 
                    stars={convertToRating(item.popularity)} 
                    cover={cover}
                    onClick={ () => {
                      navigate(`/albums/${item.id}`, {state: { artist: item.id } })
                    }}
              />
    })
  }
  
  function Search(){
  
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [artists, setArtists] = useState([])
    const [error, setError] = useState(false)
  
    useEffect( () => {
     
      if(localStorage.getItem('access_token') == null)
          navigate("/")
  
    }, [navigate])
  
  
    useEffect ( () => {
  
      if(query === '' || query.length < 3){
        setArtists([])
        return 
      }
        
        
      fetch(config.get_artists_endpoint.replace('{0}', query) , {
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('access_token')}`
        }}).then(response => {
          if(!response.ok){
            setError(true)
            return 
          }
  
          return response.json()
       })
      .then(data => {
        if('error' in data){
          setError(true)
          return 
        }
        
        setArtists(handleArtists(data.artists.items, navigate))
       })
  
       .catch( () => { setError(true)})
  
    }, [query, navigate])
  
    
    return ( 
      <div className="container-fluid">
        <div className="row">
          <SearchBar onChange={(e) => { setQuery(e.target.value)}} />
          <div className="col-md-12 cards-container" style={error ? {display: 'none'} : {} } >
            {artists}
          </div>
          <div className="center-of-screen alert alert-danger col-md-3" style={{display: error ? 'block' : 'none'}}>{config.error_msg}</div>
        </div>
        
      </div>
    )
}

export default Search