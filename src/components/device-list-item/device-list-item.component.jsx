import React from 'react'
import './device-list-item.styles.scss'

const DeviceListItem = ({device, index}) => {
    const mainDisplayText = `Device ${idx}`;
    if()
    return (
        <div className='device-list-item' key={device.id}>
            <h2 className='display-name'>
            {device.displayName ? device.displayName : device.id }
            </h2>
        </div>
    )
}

export default DeviceListItem;
