import React from "react";
import "./helpcenter.css";
function Helpcenter(){
    return(
        <div>
            <div className="helpcenter-main">
            <div className="helpcenter-background">
                <img src="https://i.pinimg.com/736x/5f/68/24/5f682422c49e903e6ed1acd500050dd7.jpg"/>
            
            </div>
            <div className="helpcenter-title">
                <h2>Help and Support</h2>

            </div>
            <div className="helpcenter-para">
                <p >To be able to quickly ask us a question you have to Login or</p>
                <p>create an account if you don't have one yet.No matter what,you can still</p>
                <p>try sending us your enquiry on  our <a href="HelpContact"><b>help centre</b></a></p>

            </div>
            </div>
        </div>
    )
}

export default Helpcenter;