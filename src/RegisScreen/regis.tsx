import React from 'react';
import regisStyle from './regisStyle.module.css'  ;
import line from './images/line.png';
import {log} from "util";

function regis() {
    return (

        <div className={regisStyle.myImages}>
            <div className={regisStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <img src={line} style={{width: '120em', height: ' 5em'}}></img>
                    <h1 className={regisStyle.topfont}
                        style={{position: 'absolute', top: '20%', left: '3%', color: 'White'}}>ITAG</h1>

                </div>

                <div className={regisStyle.box} style={{display:'flex', flexDirection:'column'}}>

                    <div className={regisStyle.font}>
                        <h1>Sign up</h1>
                    </div>

                    <div className={regisStyle.line} style={{marginTop:'0%'}} ></div>

                    <div className={regisStyle.inputBox}>
                        <input placeholder='E-mail' type='input' className={regisStyle.font}></input>
                    </div>

                    <div className={regisStyle.inputBox} style={{paddingTop: '4%' }}>
                        <input placeholder='Username' type='input' className={regisStyle.font}></input>
                    </div>

                    <div className={regisStyle.inputBox} style={{paddingTop: '4%' }}>
                        <input placeholder='Password' type='input' className={regisStyle.font}></input>
                    </div>

                    <div className={regisStyle.submit} style={{ marginTop:'-5%'}}>
                        <button type={'submit'}><a href='#' >Next</a></button>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default regis;
