import React from 'react';
import "./quizhome.css";


function Quizhome() {
  return (
    <div className='hd-container'>
      <div className='hd-head'>

        {/* <div class="dropdown">
          <button class="dropbtn"><i style={{ color: 'black' }} class="fa fa-bars"></i></button>
          <div class="dropdown-content"> */}
            {/* <a href="QuizHome">Quiz</a> */}
            {/* <a href="Dashboard">Dashbord</a>
            <a href="Jobdetails">Logout</a>
          </div> */}





{/* 
        </div> */}

        <div className='adm-home-head-button'>
         
          <div className='adm-home-head-logout'>
<a href='UserHeader'><i style={{fontSize:'30px',position:'relative',right:'60px',color:'black'}} class='fa fa-home'></i><br/></a>
<a href='UserHeader' style={{textDecoration:'none'}}><p style={{position:'relative',fontSize:'20px',left:'10vh',color:'black', width:'150px',border:'none'}}>Home</p></a>
</div>
        </div>
        
      </div>


      <div className='adm-home-banner'>
        <div className='quizcard'>
           <a href='Quizfile'> <img style={{width:'100%',height:'200px'}} src='https://www.devopsschool.com/blog/wp-content/uploads/2022/03/html.jpg'></img></a>
        </div>
        <div className='quizcard'>
        <a href='Quizfile'> <img style={{width:'100%',height:'200px'}} src='data:image/png;base64,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'></img></a>
        </div>
        <div className='quizcard'>
        <a href='Quizfile'> <img style={{width:'100%',height:'200px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ScOA4a8z---MOL1Mcpqtw0yZj0om1aUvRQS26e67ezyG2PfW6cefOsEupSdvXkVZ3H0&usqp=CAU'></img></a>
        </div>
        <div className='quizcard'>
        <a href='Quizfile'> <img style={{width:'100%',height:'200px'}} src='https://res.cloudinary.com/practicaldev/image/fetch/s--y2fF9U3x--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x8vfaqfibaay30pubk73.jpeg'></img></a>
        </div>

      </div>

      <div className='adm-home-footer-container'>
        <div className='adm-home-footer'>
          <div className='adm-home-footer-main'>
            <div style={{position:'relative',top:'10px',height: '30px'}} ><p>Home</p></div>
            <div style={{position:'relative',top:'10px',height: '20px'}} className='adm-home-footer-border'></div>
            <div style={{position:'relative',top:'10px',height: '30px'}} ><p>Peivacy policy</p></div>

          </div><br></br><br></br>
        </div>

        <div className='adm-home-footer-copyright'>
          <p>@ Copyright 2013-2014 Educom</p>
        </div>
        <div  className='adm-home-footer-icons'>
        <i class="fa fa-twitter-square"></i>
        <i class="fa fa-facebook-f"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-youtube-play"></i>
        </div>
      </div>

    </div>
  )
}

export default Quizhome;