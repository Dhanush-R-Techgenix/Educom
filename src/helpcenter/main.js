import React from "react";
import "./main.css";

function HelpContact() {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p></p>
            </div>

            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="help-icons"><i class="fa fa-map-marker"></i></div>
                        <div className="text">
                            <h3 >Address</h3>
                            <p style={{color:'black'}}>4671 Sugar Camp Road,<br />Hanuman Nagar, Mumbai,<br />990001</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="help-icons"><i class="fa fa-phone"></i></div>
                        <div className="text">
                            <h3>Phone </h3>
                            <p style={{color:'black'}}>507-475-6095</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="help-icons"><i class="fa fa-envelope"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p style={{color:'black'}}>raashi@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Full Name</span>
                        </div>

                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Email</span>
                        </div>

                        <div className="inputBox">
                            <textarea required="required"></textarea>
                            <span>type your Message...</span>
                        </div>

                        <div className="inputBox">
                            <input type="submit" name="" value="Send"></input>
                        </div>

                    </form>
                </div>

            </div>

        </section>
    )
}
export default HelpContact;