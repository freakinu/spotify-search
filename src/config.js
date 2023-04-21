const config = {
    endpoint: "https://accounts.spotify.com/authorize",
    client_id :"212cd736580242209db9a167d83c299c",
    redirect_uri : "http://localhost:3000/callback",
    get_artists_endpoint: "https://api.spotify.com/v1/search?q={0}&type=artist",
    get_albums_endpoint: "https://api.spotify.com/v1/artists/{0}/albums",
    get_ablum_info_endpoint: "https://api.spotify.com/v1/albums/{0}",
    error_msg: "there was an error loggin in."

}

export default config

