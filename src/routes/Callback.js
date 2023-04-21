import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import config from '../config';

function Callback(){
    const navigate = useNavigate()
    const [error, setError] = useState(false)
  
    useEffect( () => {
      let hash_fragment = window.location.hash !== null ? window.location.hash.substring(1) : null;
  
      if(hash_fragment == null)
          navigate('/')
  
      let hash_fragment_obj = {}
    
      for(let item of hash_fragment.split('&')){
        item = item.split('=')
        hash_fragment_obj[item[0]] = item[1]
      }
  
      if('error' in hash_fragment_obj){
          const timer = setTimeout( () => {navigate('/') }, 5000)
          localStorage.removeItem('access_token')
          setError(true)
          return () => clearInterval(timer)
      }
     
      const access_token = hash_fragment_obj.access_token
  
      if(access_token !== undefined)
        localStorage.setItem('access_token', access_token)
  
      navigate('/search')
  
    }, [navigate])
  
    return ( 
      <div className='container-fluid'>
        <div className="center-of-screen alert alert-danger col-md-3" style={{display: error ? 'block' : 'none'}}>{config.error_msg}</div>
      </div>
    )
  
}

export default Callback