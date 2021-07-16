import React from 'react'
import './Login.css';
import { accessUrl } from './spotify';


function Login() {
    return (
        <div className="login">

           

            

            <img src="https://images-na.ssl-images-amazon.com/images/I/41wt6Iyg37L._SL1280_.jpg" alt="" />
            
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
