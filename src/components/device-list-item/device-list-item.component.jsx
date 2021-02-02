import React from 'react'
import './device-list-item.styles.scss'

const DeviceListItem = ({device, clickHandler}) => {
    let mainDisplayText = `Device`;
    if(device.displayName){
        mainDisplayText = device.displayName;
    } else if(device.id){
        mainDisplayText = device.id;
    }

    const internalClickHandler = () =>
    {
        clickHandler(device.id);
    }

    return (
        <div className='device-list-item' key={device.id} onClick={internalClickHandler}>
            <h3 className='display-name'>
                {mainDisplayText}
            </h3>
        </div>
    )
}

export default DeviceListItem;
