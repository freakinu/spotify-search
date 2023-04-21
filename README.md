# Spotify Search with react

![demo](https://media.giphy.com/media/bcvzXqT5RFywKRXag6/giphy.gif)

search for artists & artist albums using the spotify rest api

key api endpoints used:


- ```https://accounts.spotify.com/authorize``` to get an access token based on the authentication type, on this case the ```Implicit Grant``` flow
- ```https://api.spotify.com/v1/search?q={artist_name}&type=artist``` to search for artists based on a query
- ```https://api.spotify.com/v1/artists/{artist_id}/albums``` to get the albums of a specific artist

main libraries:

- bootstrap css framework for responsive design
- font awesome react library for the icons
- ```react-router-dom``` for routing
- express as a tiny production server

notes:
- a client_id key is provided and can be modified on ```src/config.js```
- allowed ```redirect_uri``` is ```http://localhost:3000/callback``` 

## building & running the project

first clone the repo & install the dependencies: 
```sh
user@user:~$ git clone https://github.com/freakinu/spotify-search
user@user:~$ cd spotify-search
user@user:~/spotify-search$ npm i 
```

once its done you're gonna build & run it by:
```sh
user@user:~/spotify-search$ npm run build
user@user:~/spotify-search$ node server.js
[!] server started at port 3000
```

the server should now be up and running


