import React from 'react';
import loginStyle from './loginStyle.module.css'  ;
import line from './images/line.png';
import {log} from "util";

function login() {
    return (

        <div className={loginStyle.myImages}>
            <div className={loginStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <img src={line} style={{width: '120em', height: ' 5em'}}></img>
                    <h1 className={loginStyle.topfont}
                        style={{position: 'absolute', top: '20%', left: '3%', color: 'White'}}>ITAG</h1>

                </div>

                <div className={loginStyle.box} style={{display:'flex', flexDirection:'column'}}>

                    <div>
                        <h1 className={loginStyle.font} >IT ADVENTURERS<br/>GUILD</h1>
                    </div>

                    <div className={loginStyle.inputBox}>
                        <input placeholder='E-mail/Username' type='input' className={loginStyle.font}></input>
                    </div>

                    <div className={loginStyle.inputBox} style={{paddingTop: '4%' }}>
                        <input placeholder='Password' type='input' className={loginStyle.font}></input>
                    </div>

                    <div className={loginStyle.submit} style={{ marginTop:'-5%'}}>
                        <button type={'submit'}>Login</button>
                    </div>

                    <div className={loginStyle.line} style={{marginTop:'3%'}} ></div>

                    <div className={loginStyle.supButton} style={{marginTop:'10%'}} >
                        <button type={'submit'}>Are you new adventurer?</button>
                        <button type={'submit'}>Forgot password?</button>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default login;
