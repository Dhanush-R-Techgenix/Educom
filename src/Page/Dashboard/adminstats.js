import React from 'react'
import "./adminstats.css"

function Adminstats() {
  return (
    <div className='adm-stats-main-container'>
 <div className='hd-head'>
        <div className='edu-adm-head-logo'>
          <a href='Admhm'><img src='logo.png'></img></a>
        </div>



        <div className='adm-home-head-button'>
          <div className='adm-home-head-dashboard'>
            <a href='Dashboard'><i style={{ fontSize: '25px', color: '#17bf9e' }} class="fa fa-bar-chart"></i></a><br></br>
            <a href='Dashboard'><p style={{ position: 'relative', top: '5px', color: 'black', fontSize: '20px', width: '150px', border: 'none' }}>Dashboard</p></a>
          </div>
          <div className='adm-home-head-logout'>
            <i style={{ fontSize: '30px',color:'#17bf9e' }} class='fa fa-power-off'></i><br />
            <p style={{ position: 'relative', fontSize: '20px', width: '150px', border: 'none' }}>Logout</p>
          </div>
        </div>
      </div>
      <div className='adm-stats-image'>
<img style={{width:'50%',height:'400px'}} src='stats2.png'></img>
      </div>

    </div>
  )
}

export default Adminstats;