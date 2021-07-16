import React from 'react';
import "./SideBar.css";
import SideBarOptions from './SideBarOptions';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { UseDataLayerValue } from './DataLayer';


function SideBar() {
    const [{ playlists }] = UseDataLayerValue();

    console.log(playlists);
  
    return (
        <div className="sidebar">
           <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
         <SideBarOptions Icon={HomeIcon}   option="Home" />
      <SideBarOptions Icon={SearchIcon} option="Search" />
      <SideBarOptions  Icon={LibraryMusicIcon} option="Your Library" />
     
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
     
      <SideBarOptions option ="Hip Hop"/>

      <SideBarOptions option ="Pop"/>

      <SideBarOptions option ="Classical"/>

      <SideBarOptions option ="Indi Pop"/>

      <SideBarOptions option ="Rock"/>


      <SideBarOptions option ="Jazz"/>

      <SideBarOptions option ="My Favourite"/>

      <SideBarOptions option ="old songs"/>

      <SideBarOptions option ="Folk Music"/>


      <SideBarOptions option ="Disco"/>

      <SideBarOptions option ="Pop Rock"/>


      <SideBarOptions option ="Raggae"/>

      <SideBarOptions option ="Dance Playlist"/>


      <SideBarOptions option ="Romantic Hits"/>


      <SideBarOptions option ="Arijit Singh Songs"/>

      <SideBarOptions option ="Atif Alam Hits"/>


      <SideBarOptions option ="Shreya GHoshal Hits"/>

      <SideBarOptions option ="k.k hits"/>


      <SideBarOptions option ="Jagjit Singh Gazals "/>


      <SideBarOptions option ="Alka Yagnig Hits"/>

      <SideBarOptions option ="90's hits"/>


      <SideBarOptions option ="Akshay kumar Hits"/>

      <SideBarOptions option ="Salman Khan Hits"/>

      <SideBarOptions option ="Amitabh hits"/>

      <SideBarOptions option ="Marriage song playlist"/>

  
      
     
    </div>
       





    )
}

export default SideBar;
