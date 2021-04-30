import React from 'react';
import "./Player.css"
import {useDataLayerValue} from "./DataLayer";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({spotify}) {

    const [{user},dispatch] = useDataLayerValue();

    return (

        <div className='player'>
            <div className="player__body">
                {/*sideBar*/}
                <Sidebar/>
                {/*Body*/}
                <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Player;