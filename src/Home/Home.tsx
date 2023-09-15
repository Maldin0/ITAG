import React from 'react';
import Homestyle from './HomeStyle.module.css';
import rollnow from './Images/RollNowBorder.png'
import featured01 from './Images/featured01.png';
import featured02 from './Images/featured02.png';
import featured03 from './Images/featured03.png';
import featured04 from './Images/featured04.png';
import featured05 from './Images/featured05.png';
import bell from './friends_image/bell.png';
import boss from './friends_image/boss.png';
import cho from './friends_image/cho.png';
import gong from './friends_image/gong.png';
import mew from './friends_image/mew.png';
import pupha from './friends_image/pupha.png';
import email from './Images/email.png';

function Home() {

  return (
    <div className={Homestyle.scroll}> {/*ปรับให้หน้า Home มี scroll bar ให้ทำโค้ดภายใน div นี้*/}
      <div className={Homestyle.villageImageOne}> {/*ใส่รูป*/}

          <h1 className={Homestyle.mainfont} style={{textAlign:'center',marginLeft: '-15%',marginTop: '0vh'}}>
              IT<br/>
              ADVENTURER<br/>
              GUILD
          </h1>

          <h1 className={Homestyle.mainfont} style={{ paddingLeft:'60vw',paddingTop: '20vh',color: 'white' ,whiteSpace: 'nowrap'}}>
              Roll your Dice
          </h1>

          <div style={{paddingLeft: '65vw',paddingTop: '40vh', zIndex: 0, position:'relative',display:'flex'}}>

            <img src={rollnow} ></img>

            <div style={{ marginTop: '-9vh',marginLeft: '-19vw'}}>
              <h1 className={Homestyle.mainfont} style={{ color: '#F6AA17' ,whiteSpace: 'nowrap',fontSize: '8rem' }}>NOW</h1>
            </div>
            
          </div>

      </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <p> 
          <div className={Homestyle.flexContainer}>
            <div><h1 className={Homestyle.myfont} style={{color: 'white',paddingLeft: '40vw', display: 'flex',flexWrap: 'nowrap' }}>F e a t u r e d&nbsp; &nbsp; W e b s i t e</h1> </div>
          </div>
        </p>

        <p>

          <div className={Homestyle.flexColumn} style={{ display: 'inline-block' }}>
            <div><img src={featured01} style={{paddingLeft: '20vw'}} alt={"Design Character with your head"}></img></div>
            <div className={Homestyle.myfont} style={{ paddingLeft: '20vw', color: 'white' }}>Design character with your hand</div>
          </div>
          <div className={Homestyle.flexColumn} style={{ display: 'inline-block' }}>
            <div><img src={featured02} style={{paddingLeft: '15vw'}} alt={"Design Character with your head"}></img></div>
            <div className={Homestyle.myfont} style={{ paddingLeft: '15.5vw', color: 'white' }}>Create your journey</div>
          </div>

          <div className={Homestyle.flexColumn} style={{ display: 'inline-block' }}>
            <div><img src={featured03} style={{paddingLeft: '15vw'}} alt={"Design Character with your head"}></img></div>
            <div className={Homestyle.myfont} style={{ paddingLeft: '15.5vw', color: 'white' }}>Doing or Create quest</div>
          </div>
        </p>
        <p>
          <div className={Homestyle.flexColumn} style={{ display: 'inline-block' }}>
            <div><img src={featured04} style={{paddingLeft: '35vw'}} alt={"Design Character with your head"}></img></div>
            <div className={Homestyle.myfont} style={{ paddingLeft: '35vw', color: 'white' }}>Role play with another people</div>
          </div>

          <div className={Homestyle.flexColumn} style={{ display: 'inline-block' }}>
            <div><img src={featured05} style={{paddingLeft: '15vw'}} alt={"Design Character with your head"}></img></div>
            <div className={Homestyle.myfont} style={{ paddingLeft: '15vw', color: 'white' }}>Roll your destiny dice!!</div>
          </div>
        </p>
        
        <div className={Homestyle.villageImageTwo}>
            <p className={Homestyle.myfont} style={{color: 'white', fontSize: '3rem' ,paddingLeft: '40vw',transform: 'translateY(50vh)' }}>Start your journey</p>
        </div>
       

        <p>&nbsp;</p>

        <p style={{paddingLeft: '42vw'}}>
          <h1 className={Homestyle.myfont} style={{color:'white',fontSize: '3rem'}}> Hall of Fame</h1>
        </p>

        <p>&nbsp;</p>

        <div className={Homestyle.villageImageThree}>
          <p>
            <div className={Homestyle.flexContainer} style={{paddingLeft:'25%',paddingTop:'5%'}}>
              <div style={{display: 'inline-block'}}> <img src={cho} ></img> </div>
              <div style={{display: 'inline-block',marginLeft:'-0%',marginTop:'3%',position: 'absolute'}}> <h1 className={Homestyle.mainfont} style={{ textAlign:'center',color:'white'}}>65070051<br></br>Guild master Croissant</h1></div>
            </div>
          </p>

          <p>
            <div className={Homestyle.flexColumn} style={{ display: 'inline-block',paddingLeft: '10%',paddingTop:'5%'}}>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'2%',marginTop:'1vh',whiteSpace: 'nowrap',position:'absolute'}}>65070056</h1></div>
              <div><img src={mew} style={{zIndex:'-1'}}></img></div>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'10%',marginTop:'-4.5vh',whiteSpace: 'nowrap'}}>Plant corn</h1></div>
            </div>

            <div className={Homestyle.flexColumn} style={{ display: 'inline-block',paddingLeft: '7%' }}>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'2%',marginTop:'1vh',whiteSpace: 'nowrap',position:'absolute'}}>65070015</h1></div>
              <div><img src={gong} style={{zIndex:'-1'}}></img></div>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'0vw',marginTop:'-4.5vh',whiteSpace: 'nowrap'}}>Sir Baguette 3rd</h1></div>
            </div>

            <div className={Homestyle.flexColumn} style={{ display: 'inline-block',paddingLeft: '7%' }}>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'2%',marginTop:'1vh',whiteSpace: 'nowrap',position:'absolute'}}>65070011</h1></div>
              <div><img src={bell} style={{zIndex:'-1'}}></img></div>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'2vw',marginTop:'-4.5vh',whiteSpace: 'nowrap'}}>Inwza007</h1></div>
            </div>

            <div className={Homestyle.flexColumn} style={{ display: 'inline-block',paddingLeft: '7%' }}>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'2%',marginTop:'1vh',whiteSpace: 'nowrap',position:'absolute'}}>65070014</h1></div>
              <div><img src={boss} style={{zIndex:'-1'}}></img></div>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'1vw',marginTop:'-4.5vh',whiteSpace: 'nowrap'}}>Valorant Player</h1></div>
            </div>

            <div className={Homestyle.flexColumn} style={{ display: 'inline-block',paddingLeft: '7%' }}>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'2%',marginTop:'1vh',whiteSpace: 'nowrap',position:'absolute'}}>65070002</h1></div>
              <div><img src={pupha} style={{zIndex:'-1'}}></img></div>
              <div><h1 className={Homestyle.myfont} style={{fontSize:'1.5rem',paddingLeft:'3vw',marginTop:'-4.5vh',whiteSpace: 'nowrap'}}>ชาวบ้าน P</h1></div>
            </div>

          </p>      
        </div>
        <p>
          <div className={Homestyle.flexColumn} style={{color:'white',textAlign:'right',paddingRight:'5%'}}>
            <div>contact us</div>

            <div className={Homestyle.flexContainer}>
              <div style={{ display: 'inline-block'}}><img src={email}></img></div>
              <div style={{ display: 'inline-block'}}>65070___@kmitl.ac.th</div>
            </div>

          </div>
          
        </p>


    </div>
  );
}

export default Home;