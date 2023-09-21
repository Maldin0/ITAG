import React from 'react';
import profileStyle from './profileStyle.module.css'  ;
import line from './images/line.png';
import {log} from "util";

function profile() {
    return (
        <div style={{position:'fixed',width:'100%',height:'100%', backgroundSize: 'cover',backgroundRepeat: 'repeat',backgroundPosition: 'center'}}>
            <div className={profileStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <div className={profileStyle.topline}></div>
                    <h1 className={profileStyle.topfont}
                        style={{position: 'absolute', top: '20%', left: '3%', color: 'White'}}>ITAG</h1>
                </div>

                <div className={profileStyle.box}  style={{display:'flex', flexDirection:'column'}}>
                    <div className={profileStyle.profile} style={{display:'flex', flexDirection:'column'}}>
                        
                    </div>
                    <div className={profileStyle.box2}>
                        <div style={{alignSelf:'flex-start',paddingLeft:'15%',paddingTop:'5%'}}>
                            <h1 className={profileStyle.font}>Customize</h1>
                        </div>
                        <div className={profileStyle.line} ></div>

                        <div className={profileStyle.inputbox} style={{paddingTop:'10%',alignSelf:'flex-start',paddingLeft:'20%'}}>
                        <input placeholder='Name' type='input' className={profileStyle.font}></input>
                        </div>

                        <div className={profileStyle.inputbox} style={{paddingTop:'3%',alignSelf:'flex-start',paddingLeft:'20%'}}>
                        <input placeholder='Race' type='input' className={profileStyle.font}></input>
                        </div>

                        <div className={profileStyle.inputbox} style={{paddingTop:'3%',alignSelf:'flex-start',paddingLeft:'20%'}}>
                        <input placeholder='Class' type='input' className={profileStyle.font}></input>
                        </div>

                        <div className={profileStyle.supButton} style={{marginTop:'10%'}} >
                            <button type={'submit'}><a href='#' >Create Character</a></button>
                            
                        </div>

                    </div>
                   

                    

                </div>
            </div>
        </div>
    );
}

export default profile;
