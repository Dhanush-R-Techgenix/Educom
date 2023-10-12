import React from 'react'
import "./privacy.css";

function PrivacyPolicy() {
    return (
        <div>
            <div className='policy-main'>
                <div className='policy'>

                   
                    <h2> PRIVACY POLICY</h2>
                    <div>
                    <p style={{position:'relative',left:'30px'}}>Thank you for joining Educom. We at Educom (“Educom”, “we”, “us”) respect your privacy and want you to understand how we collect, use, and share data about you. This Privacy Policy covers our data collection practices and describes your rights regarding your personal data.

                        Unless we link to a different policy or state otherwise, this Privacy Policy applies when you visit or use Educom websites, mobile applications, APIs, or related services (the “Services”). It also applies to prospective customers of our business and enterprise products.

                        By using the Services, you agree to the terms of this Privacy Policy. You shouldn’t use the Services if you don’t agree with this Privacy Policy or any other agreement that governs your use of the Services.</p>
                        </div>
                        <h3> What Data We Get</h3>
                        {/* <b>Unless otherwise provided in this Privacy Policy, the terms capitalized in the Privacy Policy shall have the meaning as provided hereunder:</b>  */}
                        <div className='policy-add'>
                    <img src='https://img.freepik.com/free-vector/shield_78370-582.jpg?w=740&t=st=1697000427~exp=1697001027~hmac=c01aa9fae53a0bf723f5ce17df6730bef28cb48a80e993254f9b47554036fba0'/>
                    </div>
                        <ol type='a'>

                            <li>We collect certain data from you directly, like information you enter yourself, data about your consumption </li>

                            <li> of content, and data from third-party platforms you connect with Udemy. We also collect some data </li>

                            <li> automatically, like information about your device and what parts of our Services you interact with or spend </li>

                            <li>  time using. All data listed in this section is subject to the following processing activities: collecting,</li>

                            <li>recording, structuring, storing, altering, retrieving, encrypting, pseudonymizing, erasing, combining, and </li>

                            <li>transmitting.</li>

                            <h3> Data You Provide to Us </h3>
                            <li>We may collect different data from or about you depending on how you use the Services. Below are some </li>

                            <li>examples to help you better understand the data we collect.</li>

                        </ol>
                        <p id='change'><b>What We Use Your Data For</b></p>

                        <ol type='I'>
                            <li>Process payments to instructors and other third parties (Student Payment Data; Instructor Payment Data);</li>
                            <li>Verify the identity of instructors (Account Data; Instructor Payment Data); </li>
                            <li>Market Subscription Plans to prospective customers (Account Data; Learning Data; Cookie Data);</li>
                            <li>Improve our Services and develop new products, services, and features (all data categories);</li>
                        </ol> 

                        <p id='change'><b>Security</b></p>

                        <ol type='I'>
                            <li>We use appropriate security based on the type and sensitivity of data being stored. As with any internet-</li>
                            <li>enabled system, there is always a risk of unauthorized access, so it’s important to protect your password </li>
                            <li>and to contact us if you suspect any unauthorized access to your account.</li>
                           
                        </ol> 

               
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
