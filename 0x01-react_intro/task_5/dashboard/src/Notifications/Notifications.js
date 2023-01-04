import React from 'react';
import './Notifications.css';
import CloseIcon from '../assets/CloseIcon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority ='default'>New course available</li>
                <li data-priority ='urgent'>New resume available</li>
                <li data-priority ='urgent'>
                   <div dangerouslySetInnerHTML={{__html: getLatestNotification()}}/> 
                </li>
            </ul>
            <button style={{
                position: 'absolute',                
                height:'10px',
                width:'10px',
                border: 'none',
                background: 'transparent',
                cursor:'pointer',
                alignContent: 'center',
                right: '35px',
                top:'20px',

            }}
                aria-label="Close"
                onClick={() => {
                    console.log("Close button has been clicked");
                }}>
                <img src={CloseIcon} alt='CloseIcon'
                    style={{               
                        height: '15px',
                        width: 'auto',
                    }} />
            </button>
        </div>
    );
}

export default Notifications;