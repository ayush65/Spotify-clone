import React, { useEffect  } from "react";
import './App.css';
import SpotifyWebApi from "spotify-web-api-js";
import Login from './Login';
import Player from "./Player";
import { UseDataLayerValue } from "./DataLayer";

import { getTokenFromResponse } from "./spotify";


const spotify = new SpotifyWebApi();

function App() {

  

 
  const [{token }, dispatch] = UseDataLayerValue();


  
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash ="";

    const _token = hash.access_token;


    if(_token){
     

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });




      spotify.setAccessToken(_token);

      spotify.getMe().then ( (user) => {
        
        dispatch ({

          type:'SET_USER',
          user: user,



        });
      });

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists,
          });
        });

   
    }


    

   // console.log('i have a token>>>>',token);
}, );



  return (
    <div className="App">
      
       

        {

          token ? (
            <Player  spotify={spotify} />
          ) :
          (
            <Login />
          )

          }</div>
  );
}

export default App;
