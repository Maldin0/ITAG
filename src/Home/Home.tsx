import React from 'react';
import logo from '/logo.svg';
import Homestyle from './HomeStyle.module.css';

function Home() {
  const combinedClassName = [Homestyle.stroked, Homestyle.myDiv].join(' '); //ใช้กับตัวอักษรที่ใช้ Stroke กับ font เหมือนกัน

  return (
    <div className={Homestyle.scroll}> {/*ปรับให้หน้า Home มี scroll bar ให้ทำโค้ดภายใน div นี้*/}
      <div className={Homestyle.villageImageOne}> {/*ใส่รูป*/}

        <div style={{display: 'flex' ,textAlign: 'center'}}> 
            <h1 className={Homestyle.myfont} style={{ marginTop: '0%',marginLeft: '-6%'}}>
              IT<br/>
              ADVENTURER<br/>
              GUILD
            </h1>
        </div>

        <div style={{display: 'flex'}}>
          <h1 className={Homestyle.myfont} style={{ marginLeft: '46%',marginTop: '-20%',color: 'white' ,whiteSpace: 'nowrap'}}>Roll your Dice</h1>
        </div>

      </div>
    </div>  
  );
}

export default Home;
