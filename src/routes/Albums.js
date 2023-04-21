import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Card from '../components/Card';
import config from '../config';

function handleAlbums(albums){

    // <Card  primary="Fallen" secondary="Evanscence" tracks={63} date="2018-09-28" cover={img_url}/>
    return albums.map( (item) => {
     
     const cover = item.images.length === 0 ? null : item.images[1].url
 
     return <Card type="album" 
                   primary={item.name} 
                   secondary={item.artists[0].name} 
                   tracks={item.total_tracks}
                   date={item.release_date}
                   cover={cover}
                   onClick= { () => {
                     window.open(item.external_urls.spotify, '_blank')
                   }}
             />
   })
 }
 
 function Albums(){
   const { artist } = useParams()
   const [albums, setAlbums] = useState([])
   const [artistName, setArtistName] = useState('')
   const [error, setError] = useState(false)
 
   useEffect( () => {
     fetch(config.get_albums_endpoint.replace('{0}', artist) , {
       headers: {
         'Authorization' : `Bearer ${localStorage.getItem('access_token')}`
       }})
         .then(response => {
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
 
           setAlbums(handleAlbums(data.items))
           setArtistName(data.items[0].artists[0].name)
          })
 
          .catch( () => { setError(true)})
 
   }, [artist])
 
 
   return ( 
     <div className="container-fluid" style={{marginTop:'2em', marginBottom:'2em'}}>
       <div className="row">
         <div className="col-md-12 artist-info-section">
           <p class="primary">{artistName}</p>
           <p className="secondary">Albums</p>
         </div>
 
         <div className="col-md-12 cards-container" style={error ? {display: 'none'} : {} }>
           {albums}
         </div>
         <div className="center-of-screen alert alert-danger col-md-3" style={{display: error ? 'block' : 'none'}}>{config.error_msg}</div>
       </div>
     </div>
   )
   
}

export default Albums