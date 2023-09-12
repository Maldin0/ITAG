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


const ProjName = () => (
  
  <div style={{position: 'absolute',top: '17%', left: '21%'}}>
    <div style={{textAlign: 'center'}}>
      <h1 style={{ marginLeft: '-7%', fontSize: '70px'}}>
        IT<br/>
        ADVENTURER<br />
        guild
      </h1>
    </div>
  </div>
);

function Home() {
  /*const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, // ใช้รูปภาพเป็นพื้นหลัง
    backgroundSize: 'cover', // ปรับขนาดรูปให้ครอบคลุมพื้นที่
    backgroundPosition: 'center', // ตำแหน่งรูปภาพในหน้าเว็บ (ในกรณีนี้จะกลาง)
    width: '100%',
    height: '100vh', // ความสูงเต็มหน้าจอ
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   };*/


  return (
    <div style={containerStyle}>
      <ProjName/>
      <div style={{position: 'absolute',top: '35%', right:'18%'}}>
        <h1 style={{ marginLeft: '-7%',fontSize: '70px'}}>Roll Your Dice</h1>
      </div>

    </div>
  );
}

export default Home;
