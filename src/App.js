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

        if (_token ){
            setToken(_token);
            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                console.table( user)
                dispatch({
                    type:'SET_USER',
                    user:user
                })
            })
        }

        console.log("I HAVE TOKEN >>> " , token);

    },[])

  return (
    <div className="App">
        {
            token ?
                <Player/>
                :
                <Login/>
        }
    </div>
  );
}

export default App;
