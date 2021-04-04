import React from 'react';
import {useDataLayerValue} from "./DataLayer";

function Player(props) {

    const [{user},dispatch] = useDataLayerValue();
    return (
        <div className='player'>
            <h1>Welcome {user.display_name} to Spotify</h1>
        </div>
    );
}

export default Player;