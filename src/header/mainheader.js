import React from 'react';
import "./headeruser.css"




function MainHead() {
  return (
    <div className='edu-main-head-main'>
    <div className='edu-main-header-container'>
      <div className='edu-main-head-user'><a href='Header'><img src='logo.png'></img></a></div>
   
    
     <a style={{textDecoration:'none'}} href='Courses'> <div className='edu-main-head-cources'><h4>My cources</h4></div></a>
      <a style={{textDecoration:'none'}} href='Quizhome'><div className='edu-main-head-quiz'><h4>Quiz</h4></div></a>
      <a style={{textDecoration:'none'}} href='Community'><div className='edu-main-head-comunity'><h4>Community</h4></div></a>
     {/* <div className='search-bar'>
      <input id='search' type='searchbar' placeholder='search here'/>
     </div> */}
    
      <div class="dropdown">
  <button class="dropbtn"><i style={{color:'#17bf9e'}} class="fa fa-user-circle-o"></i><i style={{position:'relative', color:"#17bf9e", top:'2px', left:'2px',fontSize:'30px'}} class='fa fa-angle-down'></i></button>
  <div class="dropdown-content">
    {/* <a href="QuizHome">Quiz</a> */}
    <a href="Login">Logout</a>
    <a href="Helpcenter">Help</a>
  
  </div>
  </div>
     
    </div>
   
  
    </div>
  ) 
}

export default MainHead;