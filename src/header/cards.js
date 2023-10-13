import React from 'react';
import "./cards.css";


function Cards() {
  return (
    <div className='edu-card-main-container'>
  <h1>Software Developement</h1>

        <div className='edu-card-container'>
        <div
        
         className='edu-card-main'>
                <div className='edu-card-image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXskHC3Yi1JGUuhfV0wTpnLTO0qJX4olw5LQ&usqp=CAU'></img>
                </div>
                <div className='edu-card-para'>
                    <h3>Block chain Developer</h3>
                    <div className='edu-card-star'>
                        <span style={{color:'#17bf9e'}} class="fa fa-star checked"></span>
                        <span style={{color:'#17bf9e'}} class="fa fa-star checked">
                        </span><span style={{color:'#17bf9e'}} class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span><br></br>
                        <b text>Learners: 65k</b>
                        
                        
                        </div>
                </div>
                

                
            </div>





            <div
        
     className='edu-card-main'>
            <div className='edu-card-image'>
                    <img src='sales1.jpg'></img>
                </div>
                <div className='edu-card-para'>
                    <h3>Salesforce administrator </h3>
                    <div className='edu-card-star'>
                        <span style={{color:'#17bf9e'}} class="fa fa-star checked"></span>
                        <span style={{color:'#17bf9e'}} class="fa fa-star checked">
                        </span><span style={{color:'#17bf9e'}} class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span><br></br>
                        <b text>Learners: 65k</b>
                        
                        
                        </div>
                </div>
                
            </div>




            <div
        
         className='edu-card-main'>
            <div className='edu-card-image'>
                    <img src='iot.jpg'></img>
                </div>
                <div className='edu-card-para'>
                    <h3>Introduction to IoT</h3>
                    <div className='edu-card-star'>
                        <span style={{color:'#17bf9e'}} class="fa fa-star checked"></span>
                        <span style={{color:'#17bf9e'}} class="fa fa-star checked">
                        </span><span style={{color:'#17bf9e'}} class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span><br></br>
                        <b text>Learners: 65k</b>
                        
                        
                        </div>
                </div>
                
            </div>
          
            <div
        
       className='edu-card-main'>
                
            <div className='edu-card-image'>
                    <img src='https://miro.medium.com/v2/resize:fit:1080/0*BRwAoKDQMpVtGYMU.jpeg'></img>
                </div>
                <div className='edu-card-para'>
                    <h3>Introduction to cyber <br></br>security</h3>
                    <div className='edu-card-star'>
                        <span style={{color:'#17bf9e'}} class="fa fa-star checked"></span>
                        <span style={{color:'#17bf9e'}} class="fa fa-star checked">
                        </span><span style={{color:'#17bf9e'}} class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span><br></br>
                        <b text>Learners: 65k</b>
                        
                        
                        </div>
                </div>
                
            </div>
        </div>









    </div>
  )
}

export default Cards