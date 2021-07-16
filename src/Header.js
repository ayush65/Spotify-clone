
import './Header.css';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";



function Header({ spotify }) {

    
    return (
        <div className="header">


<div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar className="__logo" alt="Ayush Prakash" src="https://instagram.fpat3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/210817754_241858227475243_916157226951408384_n.jpg?_nc_ht=instagram.fpat3-2.fna.fbcdn.net&_nc_ohc=gwAhQ_vFFkAAX--yQIQ&edm=ABfd0MgBAAAA&ccb=7-4&oh=feff5afd79782fda1731aa21494b5ef6&oe=60F69FE3&_nc_sid=7bff83" />
        
       
        <h4>Ayush Prakash</h4>
      </div>
            
        </div>
    )
}

export default Header
