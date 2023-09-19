import React from 'react';
import RegisStyle from './RegisStyle.module.css'  ;
import line from './images/line.png';
import LoginStyle from "../LoginScreen/LoginStyle.module.css";
import {Link} from "react-router-dom";

function Regis() {
    return (

        <div className={RegisStyle.myImages}>
            <div className={RegisStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <img src={line} style={{width: '120em', height: ' 5em'}}></img>
                    <h1 className={RegisStyle.topfont} style={{ position: 'absolute', top: '20%', left: '3%', color: 'white' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }} className={RegisStyle.topfont}>ITAG</Link>
                    </h1>
                </div>

                <div className={RegisStyle.box} style={{display:'flex', flexDirection:'column'}}>

                    <div className={RegisStyle.font}>
                        <h1>Sign up</h1>
                    </div>

                    <div className={RegisStyle.line} style={{marginTop:'0%'}} ></div>

                    <div className={RegisStyle.inputBox}>
                        <input placeholder='E-mail' type='input' className={RegisStyle.font}></input>
                    </div>

                    <div className={RegisStyle.inputBox} style={{paddingTop: '4%' }}>
                        <input placeholder='Username' type='input' className={RegisStyle.font}></input>
                    </div>

                    <div className={RegisStyle.inputBox} style={{paddingTop: '4%' }}>
                        <input placeholder='Password' type='input' className={RegisStyle.font}></input>
                    </div>

                    <div className={RegisStyle.submit} style={{ marginTop:'-5%'}}>
                        <button type={'submit'}><a href='#' >Next</a></button>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Regis;
