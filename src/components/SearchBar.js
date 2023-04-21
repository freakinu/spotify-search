import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar(props){

    return (
        <div className="col-md-12 text-center" style={{marginTop:'8em', marginBottom:'2em'}}>
                <div>
                    <input id="search-bar" className="col-md-5" placeholder="Search for an artist..."  onChange={props.onChange} />
                    <FontAwesomeIcon icon={faSearch} color='#000' size='2x' id='search-icon' />
                </div>
        </div>
    )
}


export default SearchBar