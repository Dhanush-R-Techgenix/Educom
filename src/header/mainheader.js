import React from 'react';
import "./headeruser.css"




function MainHead() {
  return (
    <div className='edu-head-main'>
      <div className='edu-header-container'>
        <div className='edu-head-user'><a href='UserHeader'><img src='logo.png'></img></a></div>


        <a style={{ textDecoration: 'none', }} href='Courses'> <div className='edu-head-cources'><h4>My cources</h4></div></a>
        <a style={{ textDecoration: 'none' }} href='Quizhome'><div className='edu-head-quiz'><h4>Quiz</h4></div></a>
        <a style={{ textDecoration: 'none' }} href='Community'><div className='edu-head-comunity'><h4>Community</h4></div></a>
      

        <div class="edu-dropdown">
          <button class="edu-dropbtn"><i style={{ color: '#17bf9e' }} class="fa fa-user-circle-o"></i><i style={{ position: 'relative', color: "#17bf9e", top: '2px', left: '2px', fontSize: '30px' }} class='fa fa-angle-down'></i></button>
          <div class="edu-dropdown-content">
            <a href="Login">Logout</a>
            <a href="Helpcenter">Help</a>

          </div>
        </div>

      </div>


    </div>
  )
}

export default MainHead;