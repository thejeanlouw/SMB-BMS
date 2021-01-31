import React from 'react'
import IFrame from 'react-iframe'
import {deviceDetect} from 'react-device-detect'
import {getDeviceLink} from '../../firebase/firebase.functions'
import './link-page.styles.scss'

export default class LinkPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            device: null
        }
    }

    componentDidMount= async () =>{
        const device = deviceDetect();
        const deviceData = await getDeviceLink(device);
        this.setState({device: deviceData}, () => {debugger; console.log(this.state)});
    }

    render(){
        const {device} = this.state;
        debugger;
        let linkAddress = '';
        if((device!=null) && (device.data!=null) && (device.data.linkAddress!=null)) {
            linkAddress = device.data.linkAddress;
            return (
                <div className='iframe'>
                    <IFrame className='frame' id={device.id} url={`${linkAddress}`} 
                    width="100%"
                    height="100%"/> 
                </div>
            );
        } else {
            return (
                <div>
                    <span>NO LINK</span>
                </div>
            )
        }
    }
}
