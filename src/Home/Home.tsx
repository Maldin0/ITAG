import React from 'react';
import logo from '/logo.svg';
import Homestyle from './HomeStyle.module.css';
import featured01 from '/workspaces/itag/src/Images/featured01.png';
import featured02 from '/workspaces/itag/src/Images/featured02.png';
import featured03 from '/workspaces/itag/src/Images/featured03.png';
import featured04 from '/workspaces/itag/src/Images/featured04.png';
import featured05 from '/workspaces/itag/src/Images/featured05.png';

function Home() {

  return (
    <div className={Homestyle.scroll}> {/*ปรับให้หน้า Home มี scroll bar ให้ทำโค้ดภายใน div นี้*/}
      <div className={Homestyle.villageImageOne}> {/*ใส่รูป*/}

          <h1 className={Homestyle.mainfont} style={{textAlign:'center',marginLeft: '-10vw',marginTop: '0vh'}}>
              IT<br/>
              ADVENTURER<br/>
              GUILD
          </h1>

          <h1 className={Homestyle.mainfont} style={{ marginLeft:'43vw',marginTop: '25vh',color: 'white' ,whiteSpace: 'nowrap'}}>
              Roll your Dice
          </h1>

          <div className={Homestyle.Rollnow}style={{marginLeft: '65vw',marginTop: '40vh',transform: 'scale(${scale})', zIndex: 0}}>

            <h1 className={Homestyle.mainfont} style={{ marginLeft: '-1.5vw',marginTop: '0vh',color: '#F6AA17' ,whiteSpace: 'nowrap',fontSize: '8rem' }}>NOW</h1>
          </div>
      </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <p> <h1 className={Homestyle.myfont} style={{color: 'white',paddingLeft: '40vw' }}>F e a t u r e d&nbsp; &nbsp; W e b s i t e</h1> </p>

        <p>
          <div>
            <img src={featured01} style={{paddingLeft: '20vw'}}></img>
            <img src={featured02} style={{paddingLeft: '15vw'}}></img>
            <img src={featured03} style={{paddingLeft: '15vw'}}></img>
          </div>
        </p>

        
        <p style={{ paddingLeft: '20vw', color: 'white' }}>
          <div>
            <span style={{paddingRight: '15vw' }}>Design character with your hand</span>
            <span style={{paddingRight: '19vw' }}>Create your journey</span>
            <span>Doing or Create quest</span>
          </div>
        </p>

        <p>
          <div>
            <img src={featured04} style={{paddingLeft: '30vw'}}></img>
            <img src={featured05} style={{paddingLeft: '20vw'}}></img>
          </div>
        </p>
        
        <p style={{ paddingLeft: '30vw', color: 'white' }}>
          <div>
            <span style={{paddingRight: '22vw' }}>Role play with another people</span>
            <span>roll your destiny dice !!</span>
          </div>
        </p>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <div className={Homestyle.villageImageTwo}>
            <p className={Homestyle.myfont} style={{color: 'white', fontSize: '3rem' ,paddingLeft: '40vw',marginTop: '0',transform: 'translateY(50vh)' }}>Start your journey</p>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <p style={{paddingLeft: '42vw'}}>
          <h1 className={Homestyle.myfont} style={{color:'white',fontSize: '3rem'}}> Hall of Fame</h1>
        </p>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        


    </div>
  );
}

export default Home;