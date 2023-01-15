import React from 'react';

function NotificationItem({type, html, value}) {
    return (
        <React.Fragment>
            {
                html !== undefined &&
                <li data-priority-type={type} dangerouslySetInnerHTML={html}/>
            }
            {
                html === undefined &&
                <li data-priority-type={type}>{value}</li>
            }
        </React.Fragment>
    );
}

export default NotificationItem;
