import React from 'react'
import './Body.css'
import Header from './Header';
import SongRow from './SongRow'

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";



function Body({spotify}) {
    return (
        <div className="BOdy">

            <Header spotify={spotify} />

            
      <div className="body__info">
        <img  className="body___img"
        src="https://storage.googleapis.com/rnd-atspotify/sites/3/2018/07/Discover-Weekly-thumb.png" alt="" /> 
        
        
        <div className="body__infoText">
         
    
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked by you.Updtes every Monday.</p>

        </div>
        </div>




        <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
          
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>


        <SongRow />

      
      </div>




    
            
            
        </div>
    )
}

export default Body
