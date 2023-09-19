import React from 'react';
import profileStyle from './profileStyle.module.css'  ;
import line from './images/line.png';
import {log} from "util";

function profile() {
    return (
        <div className={profileStyle.myImages}>
            <div className={profileStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <img src={line} style={{width: '120em', height: ' 5em',color:'#C8B6A1'}}></img>
                    <h1 className={profileStyle.topfont}
                        style={{position: 'absolute', top: '20%', left: '3%', color: 'White'}}>ITAG</h1>
                </div>

                <div className={profileStyle.profile} style={{display:'flex', flexDirection:'column'}}>
                    <div className={profileStyle.circle}>
                    </div>
                    <div className={profileStyle.username}>Username :</div>
                    <div className={profileStyle.email}>Email :</div>
                </div>

                <div className={profileStyle.line} >

                </div>

                <div className={profileStyle.char}>Your character</div>

                <div className={profileStyle.button} style={{marginTop: '10%'}}>
                    <button type={'submit'}><a href='#'>create</a></button>
                </div>

            </div>
        </div>
    );
}

export default profile;
