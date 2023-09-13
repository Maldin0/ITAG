import React from 'react';
import logo from '/logo.svg';
import Homestyle from './HomeStyle.module.css';

function Home() {

  return (
    <div className={Homestyle.scroll}> {/*ปรับให้หน้า Home มี scroll bar ให้ทำโค้ดภายใน div นี้*/}
      <div className={Homestyle.villageImageOne}> {/*ใส่รูป*/}

        <div style={{display: 'flex' ,textAlign: 'center'}}> 
            <h1 className={Homestyle.mainfont} style={{ marginTop: '0%',marginLeft: '-6%'}}>
              IT<br/>
              ADVENTURER<br/>
              GUILD
            </h1>
        </div>

        <div style={{display: 'flex'}}>
          <h1 className={Homestyle.mainfont} style={{ marginLeft: '47%',marginTop: '-23%',color: 'white' ,whiteSpace: 'nowrap'}}>Roll your Dice</h1>
        </div>

        <div className={Homestyle.Rollnow} style={{marginLeft: '65%',marginTop: '-15%'}}>
          <div style={{display: 'flex'}}>
            <h1 className={Homestyle.mainfont} style={{ marginLeft: '7%',marginTop: '5%',color: '#F6AA17' ,whiteSpace: 'nowrap',fontSize: '120px' }}>NOW</h1>
          </div>
        </div>

        <div style={{display: 'flex'}}>
          <h1 className={Homestyle.myfont} style={{ marginLeft: '25%',marginTop: '20%',color: 'white' ,whiteSpace: 'nowrap',fontSize: '70px',transform: 'scale(0.4)' }}>F e a t u r e d&nbsp; &nbsp; W e b s i t e</h1>
        </div>



      </div>
    </div>  
  );
}

export default Home;
