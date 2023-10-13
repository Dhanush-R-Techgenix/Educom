import React from 'react'

function Adminmainheader() {
  return (
    <div>
        <div  className='edu-hd-head'>
        <div className='edu-adm-head-logo'>
          <a href='Adminhome'><img src='logo.png'></img></a>
        </div>



        <div className='edu-adm-home-head-button'>
          <div className='edu-adm-home-head-dashboard'>
            <a href='Dashboard'><i style={{ fontSize: '25px', color: '#17bf9e' }} class="fa fa-bar-chart"></i></a><br></br>
            <a style={{textDecoration:'none'}} href='Dashboard'><p style={{ position: 'relative', top: '5px', color: 'black', fontSize: '20px', width: '150px', border: 'none',right:"10px" }}>Dashboard</p></a>
          </div>
          <div className='edu-adm-home-head-logout'>
          <a href='Adminlogin'> <i style={{ fontSize: '30px',color:'#17bf9e' }} class='fa fa-power-off'></i><br /></a> 
          <a style={{textDecoration:'none'}} href='Adminlogin'><p style={{ position: 'relative', fontSize: '20px', width: '150px', border: 'none',color:'black',right:'10px' }}>Logout</p></a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminmainheader;