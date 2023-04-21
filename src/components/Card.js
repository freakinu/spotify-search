import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


/**
 * artist card usage
 *   <Card type="artist" primary="Evanscence" secondary="1,000 followers" stars={4} cover={img_url} />
 * album card usage
 *   <Card  primary="Fallen" secondary="Evanscence" tracks={63} date="2018-09-28" cover={img_url}/>
 */
function Card(props){

    const stars = []

    if(props.type === "artist"){
        const max = props.stars
        
        for(let i = 1; i <= 5; i++){
            let color = '#ff7b00' // orange

            if(i > max)
                color = '#a8a8a8' // grey

            stars.push(<FontAwesomeIcon key={i} icon={faStar} color={color} fontSize={20}/>)
        }
    }

    return (

        <div className="col-md-2 info-card" onClick={props.onClick}>

            {props.cover === null ? <div className="empty-cover"></div> : <img src={props.cover} className="img-fluid" alt="test"/> }

            <div className="info-section">
                <p className="primary-text">{props.primary}</p>
                <p className="secondary-text">{props.secondary}</p>
            </div>

           
            <div className="album-info" style={{display: props.type === 'artist' ? 'none' : 'block'}}>
                <p data-for="date">{props.date}</p>
                <p data-for="tracks">{props.tracks} tracks</p>
            </div>

            <div className="stars" style={{display: props.type === 'artist' ? 'block' : 'none'}}>
               {stars}
            </div>

            <div className="preview" style={{display: props.type === 'artist' ? 'none' : 'block'}}>
                <p>Preview on Spotify</p>
            </div>
        </div>
    )
}



export default Card