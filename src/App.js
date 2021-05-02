import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Login";
import {getTokenFromResponse} from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);
    const [{} , dispatch] = useDataLayerValue();
    useEffect(() => {
        const hash = getTokenFromResponse();
        window.location.hash = "";
        const _token = hash.access_token;
        console.log("token >>> ", _token);

        if (_token ){
            setToken(_token);
            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                console.table( user)
                dispatch({
                    type:'SET_USER',
                    user:user
                })
            });

            spotify.getUserPlaylists().then(playlists => {
                dispatch({
                    type:'SET_PLAYLISTS',
                    playlists:playlists
                })
            })
            spotify.getPlaylist("4VRe4yh0lmpePKA2be2PPn").then(response => {
                dispatch({
                    type:'SET_DISCOVER_WEEKLY',
                    discover_weekly:response
                })
            })

        }

        console.log("I HAVE TOKEN >>> " , token);

    },[])

  return (
    <div className="App">
        {
            token ?
                <Player spotify={spotify}/>
                :
                <Login/>
        }
    </div>
  );
}

export default App;
