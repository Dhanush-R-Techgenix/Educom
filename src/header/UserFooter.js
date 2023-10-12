import React from "react";
import "./UserFooter.css";

function UserFooter (){
return(
    <div className="edu-user-footer-container">
        <div className="edu-user-footer-main">
<div className="edu-user-footer-sub">
    <h1>Company</h1>
    <ul>
    <li><i class='fa fa-angle-right'></i>  About Us</li>
    <li><i class='fa fa-angle-right'></i>  Contact Us</li>
    <li><i class='fa fa-angle-right'></i>  Our Services</li>
    <li><i class='fa fa-angle-right'></i>  Privecy policy</li>
    <li><i class='fa fa-angle-right'></i>  Terms&condition</li>
    </ul>
</div>
<div className="edu-user-footer-sub">
    <h1>Quick links</h1>
    <ul>
    <li><i class='fa fa-angle-right'></i>  About Us</li>
    <li><i class='fa fa-angle-right'></i>  Contact Us</li>
    <li><i class='fa fa-angle-right'></i>  Our Services</li>
    <li><i class='fa fa-angle-right'></i>  Privecy policy</li>
    <li><i class='fa fa-angle-right'></i>  Terms&condition</li>
    </ul>
</div>
<div className="edu-user-footer-sub">
    <h1>Contact</h1>
    <ul >
        <li><i id="edu-user-loc" style={{fontSize:'30px'}} class='fa fa-map-marker'></i>    Bangalore India</li>
        <li><i id="edu-user-phone" style={{fontSize:'25px'}} class='fa fa-phone-square'></i>     +919900602520</li>
        <li><i id="edu-user-mail" class="fa fa-envelope"></i>     info@ajaykumar.com</li>
    </ul>
    <div className="edu-user-footer-icon">
   <a href="https://twitter.com/"> <i id="edu-user-twit" class="fa fa-twitter"></i></a>
   <a href="https://www.facebook.com/"> <i id="edu-user-face" class="fa fa-facebook-f"></i></a>
    <a href="https://www.linkedin.com/login"><i id="edu-user-lnkd" class="fa fa-linkedin"></i></a>
    <a href="https://www.youtube.com/"><i id="edu-user-u-tube" class="fa fa-youtube-play"></i></a>
    </div>
</div>
<div className="edu-user-footer-sub">
    <h1>News letter</h1>
    <p style={{color:'Black', fontSize:'20px'}}>Good Life Begins With A Good Company</p>
</div>

    </div>
    </div>
)
}
export default UserFooter;