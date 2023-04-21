import SpotifyLoginBtn from '../components/SpotifyLoginBtn'
import config from '../config';

function Home(){

    /**
     * we could make a check if the user is already logged in by checking 'access_token' on localStorage 
     * and redirect to /search route with useNavigate hook but for testing purpose we'll leave it
     * so we can log in as many times as we want in case we wanna change the access token for some reason
     */
  
    const client_id = encodeURIComponent(config.client_id)
    const redirect_uri = encodeURIComponent(config.redirect_uri)
    const login_req = `${config.endpoint}?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}`
  
    return (
      <SpotifyLoginBtn url={login_req} />
    )
}

export default Home