import React from 'react';
import logo from './logo.svg';
import Homestyle from './HomeStyle.module.css';
import backgroundImage from './Images/village01.png';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // ความสูงเต็มหน้าจอ
  borderLeft: '250px solid black', // ขอบด้านซ้ายสีดำ
  borderRight: '250px solid black', // ขอบด้านขวาสีดำ
};

const BgStyle = {
  backgroundImage: `url(${backgroundImage})`, // ใช้รูปภาพเป็นพื้นหลัง
  backgroundSize: 'cover', // ปรับขนาดรูปให้ครอบคลุมพื้นที่
  backgroundPosition: 'center', // ตำแหน่งรูปภาพในหน้าเว็บ (ในกรณีนี้จะกลาง)
  width: '100%',
  height: '100vh', // ความสูงเต็มหน้าจอ
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};


function Home() {
  const combinedClassName = [Homestyle.stroked, Homestyle.myfont].join(' '); //ใช้กับตัวอักษรที่ใช้ Stroke กับ font เหมือนกัน

  return (

      <div style={BgStyle}>
        <div style={{position: 'absolute',top: '0%', left: '20%'}}>
          <div className={Homestyle.myDiv} style={{textAlign: 'center'}}>
            <h1 className={combinedClassName} style={{ marginLeft: '-110%',color: 'white'}}>
              IT<br/>
              ADVENTURER<br />
              GUILD
            </h1>
         </div>
        </div>

        <div className={Homestyle.myDiv} style={{position: 'absolute',top: '25%', right:'1%'}}>
          <h1 className={combinedClassName} style={{ marginLeft: '-7%',color: 'white'}}>Roll Your Dice</h1>
        </div>
      </div>
  );
}

export default Home;
