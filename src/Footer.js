import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function Footer(props) {
    return (
        <div className="footer">

            <div className="div footer__left">
                <img className="footer__albumLogo" src="https://i.scdn.co/image/ab67616d0000b2739ade6f2e5b017be63562e23b" alt=""/>
                <div className="div footer__songInfo">
                    <h4>Love not War</h4>
                    <p>Jason Dreulo</p>
                </div>
            </div>

            <div className="div footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>

            </div>

            <div className="div footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;