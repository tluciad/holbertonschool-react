import React from 'react';
import './Notifications.css';
import CloseIcon from '../assets/CloseIcon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications() {
    return (
        <div className='Notifications'>
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
            <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
        </div>
    );
}

export default Notifications;