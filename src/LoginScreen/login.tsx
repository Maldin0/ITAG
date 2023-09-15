import React from 'react';
import loginStyle from './loginStyle.module.css'  ;
import line from './images/line.png';

function login() {
  return (
    
      <div className={loginStyle.myImages}>
      <div className={loginStyle.scroll}>
        <div  style={{position: 'relative', display:'flex'}}> 
          <img src={line} style={{width: '120em', height: ' 5em'}}></img>
          <h1 className={loginStyle.topfont} style={{position:'absolute',top: '20%',left: '3%', color: 'White'}}>ITAG</h1>
        </div>

        <div style={{height: '100%' ,position: 'relative',display: 'block'} }>
          <input placeholder='dawd' type='input'>
         </input>
        </div>
        
      </div>  
    </div>

  );
}

export default login;
