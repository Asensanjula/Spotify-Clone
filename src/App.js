import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Login";
import {getTokenFromResponse} from "./Spotify";

function App() {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const hash = getTokenFromResponse();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token ){
            setToken(_token)
        }

        console.log("I HAVE TOKEN >>> " , token);

    },[])

  return (
    <div className="App">
        {
            token ? <h1>I am Logged in</h1> : <Login/>
        }
    </div>
  );
}

export default App;
