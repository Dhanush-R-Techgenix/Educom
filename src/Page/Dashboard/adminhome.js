import React from 'react';
import "./adminhome.css";
import Adminfooter from './adminfooter';

function Adminhome() {
  return (
    <div className='edu-hd-container'>

      {/* header */}
      <div className='edu-hd-head'>
        <div className='edu-adm-head-logo'>
          <a href='Adminhome'><img src='logo.png'></img></a>
        </div>



        <div className='edu-adm-home-head-button'>
          <div className='edu-adm-home-head-dashboard'>
            <a href='Dashboard'><i style={{ fontSize: '25px', color: '#17bf9e' }} class="fa fa-bar-chart"></i></a><br></br>
            <a style={{textDecoration:"none"}} href='Dashboard'><p style={{ position: 'relative', top: '5px', color: 'black', fontSize: '20px', width: '150px', border: 'none' }}>Dashboard</p></a>
          </div>
          <div className='edu-adm-home-head-logout'>
          <a href='AdminLogin'> <i style={{ fontSize: '30px',color:'#17bf9e' }} class='fa fa-power-off'></i><br /></a> 
          <a style={{textDecoration:"none"}} href='AdminLogin'>   <p style={{ position: 'relative', fontSize: '20px', width: '150px', border: 'none',color:'black' }}>Logout</p></a> 
          </div>
        </div>
      </div>

      {/* banner */}

      <div className='edu-adm-home-banner'>

<div className='edu-adm-banner-para'>
<h1 style={{fontSize:'70px'}} >Welcome Admin</h1>
<p style={{fontSize:'30px'}}>India Foundation aims to impact the quality of education in India at scale by leveraging the power of digital technology. We have developed several new-age tools, innovative solutions and state-of-the-art frameworks to empower teachers and to improve the overall "teaching-learning" process in the classroom.</p>
</div>
        {/* <div className='adm-home-user-conatiner'>
        <a href='Dashboard'> <i style={{fontSize:'50px',color:'#17bf9e',}} class='fa fa-user-circle'></i>
        <p style={{fontSize:'30px',color:'black'}}>Users</p></a>
        </div>

        <div className='adm-home-stats-conatiner'>
        <a href='Adminstats'> <i style={{fontSize:'50px',color:'#17bf9e',}} class="fa fa-bar-chart"></i>
        <p style={{fontSize:'30px',color:'black'}}>Stats</p></a>
        </div> */}

      </div>
<Adminfooter/>






      {/* footer */}

      

    </div>
  )
}

export default Adminhome;