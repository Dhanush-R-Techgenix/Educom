import React from "react";
import "./UserFooter.css";

function UserFooter() {
    return (
        <div className="adu-footer-container">
            <div className="edu-footer-main">
                <div className="edu-footer-sub">
                    <h1>Company</h1>
                    <ul>
                        <li><i class='fa fa-angle-right'></i>  About Us</li>
                        <li><i class='fa fa-angle-right'></i>  Contact Us</li>
                        <li><i class='fa fa-angle-right'></i>  Our Services</li>
                        <a style={{ textDecoration: 'none' }} href="PrivacyPolicy"><li><i class='fa fa-angle-right'></i>  Privecy policy</li></a>
                        <li><i class='fa fa-angle-right'></i>  Terms&condition</li>
                    </ul>
                </div>
                <div className="edu-footer-sub">
                    <h1>Quick links</h1>
                    <ul>
                        <li><i class='fa fa-angle-right'></i>  About Us</li>
                        <li><i class='fa fa-angle-right'></i>  Contact Us</li>
                        <li><i class='fa fa-angle-right'></i>  Our Services</li>
                        <a style={{ textDecoration: 'none' }} href="PrivacyPolicy"><li><i class='fa fa-angle-right'></i>  Privecy policy</li></a>
                        <li><i class='fa fa-angle-right'></i>  Terms&condition</li>
                    </ul>
                </div>
                <div style={{ width: '23%' }} className="edu-footer-sub">
                    <h1>Contact</h1>
                    <ul>
                        <li><i id="edu-loc" style={{ fontSize: '30px' }} class='fa fa-map-marker'></i>    Bangalore India</li>
                        <li><i id="edu-phone" style={{ fontSize: '25px' }} class='fa fa-phone-square'></i>     +919900602520</li>
                        <li><i id="edu-mail" class="fa fa-envelope"></i>     info@ajaykumar.com</li>
                    </ul>
                    <div className="edu-footer-icon">
                        <a href="https://twitter.com/"> <i id="edu-twit" class="fa fa-twitter"></i></a>
                        <a href="https://www.facebook.com/"> <i id="edu-face" class="fa fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/login"><i id="edu-lnkd" class="fa fa-linkedin"></i></a>
                        <a href="https://www.youtube.com/"><i id="edu-u-tube" class="fa fa-youtube-play"></i></a>
                    </div>
                </div>
                <div className="edu-footer-sub">
                    <h1>News letter</h1>
                    <p style={{ color: 'Black', fontSize: '20px' }}>Good Life Begins With A Good Company</p>
                </div>

            </div>
        </div>
    )
}
export default UserFooter;