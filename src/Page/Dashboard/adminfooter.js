import React from 'react'
import "./adminfooter.css"

function Adminfooter() {
  return (
    <div>
        <div className='edu-adm-home-footer-container'>
        <div className='edu-adm-home-footer'>
          <div className='edu-adm-home-footer-main'>
            <div style={{ position: 'relative', top: '10px', height: '30px' }} ><p>Home</p></div>
            <div style={{ position: 'relative', top: '10px', height: '20px' }} className='edu-adm-home-footer-border'></div>
            <div style={{ position: 'relative', top: '10px', height: '30px' }} ><p>Peivacy policy</p></div>

          </div><br></br><br></br>
        </div>

        <div className='edu-adm-home-footer-copyright'>
          <p>@ Copyright 2013-2014 Educom</p>
        </div>
        <div className='edu-adm-home-footer-icons'>
          <i style={{color:'#17bf9e'}} class="fa fa-twitter-square"></i>
          <i style={{color:'#17bf9e'}} class="fa fa-facebook-f"></i>
          <i style={{color:'#17bf9e'}} class="fa fa-instagram"></i>
          <i style={{color:'#17bf9e'}} class="fa fa-youtube-play"></i>
        </div>
      </div>
    </div>
  )
}

export default Adminfooter