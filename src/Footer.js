import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";



function Footer() {
    return (
        <div className="footer">

            <div className="footer__left">

                <img  className="footer__albumLogo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniCiUNrsNFWYp0WWfnyISmtFKyLu2up2oAQ&usqp=CAU"
                alt=""/>

                <div className="footer__songInfo">
                    <h4>Channa Mereya</h4>
                    <p>Arijit Singh</p>


                </div>
             
            
             </div>

            <div className="footer__center">
            <ShuffleIcon className="footer__green" />
            <SkipPreviousIcon  className="footer__icon" />
 
          <PauseCircleOutlineIcon
          
            className="footer__icon"
          />
    
          <PlayCircleOutlineIcon
            
          />
        
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
        
            </div>


            <div className="footer__right">
            <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            
           <Slider />
          </Grid>
        </Grid>


            </div>
            
        </div>
    )
}

export default Footer
