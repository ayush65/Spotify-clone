import React from 'react';

import './Player.css';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';

function Player( { spotify } ) {
    return (
        <div  className="player">
            
            <div className="PLayer_body">




            <SideBar/>

            <Body   spotify={spotify}/>

            <Footer />

            </div>
            
            
        </div>
    )
}

export default Player
