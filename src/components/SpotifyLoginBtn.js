function SpotifyLoginBtn(props){
    return (
        <div className="col-md-3 spot-btn" onClick={() => { window.location = props.url} }>
            <div>
                <p>Login</p> 
                <div className="spot-logo"></div>
            </div>
        </div>
    )
}

export default SpotifyLoginBtn