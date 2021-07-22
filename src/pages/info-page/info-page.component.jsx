import React, { Component } from 'react'
import {getUserDeviceList, getDeviceLink, updateDeviceLinkAddress, updateDeviceDisplayName} from '../../firebase/firebase.functions'
import {withRouter, Link} from 'react-router-dom'
import DeviceListItem from '../../components/device-list-item/device-list-item.component';
import DeviceDetails from '../../components/device-details/device-details.component';
import device from '../../data/static/device.data';
import './info-page.styles.scss';

class InfoPage extends Component {

    state = {
        devices: null,
        selectedDevice: null
    }

    componentDidMount(){
        getUserDeviceList(null).then((val)=>{
            const deviceList = val;
            if(!deviceList){
                this.props.history.push('signin');
            } else {
            this.setState({devices: deviceList});
            }
        });

        getDeviceLink().then((devdeets)=>{
            this.setState({selectedDevice: devdeets});
        });

    }

    onListChange = async (newList) =>{
        if(newList){
        this.setState({devices:newList});}
    }

    onItemSelected = async (deviceId) => {
        const deviceDetails = await getDeviceLink(null, deviceId);
        this.setState({selectedDevice: deviceDetails});
    }

    handleInfoChange = async (deviceInfo) => {
        await updateDeviceLinkAddress(deviceInfo.id, deviceInfo.data.linkAddress);
        await updateDeviceDisplayName(deviceInfo.id, deviceInfo.data.displayName);
        getUserDeviceList(null).then((val)=>{
            const deviceList = val;
            if(!deviceList){
                this.props.history.push('signin');
            } else {
            this.setState({devices: deviceList});
            }
        });
    }

    render() {
        return (
            <div className='info-page'>
                <div className='device-list'>
                    <div className='device-list-header'>Device List</div>
                    <div className='all-devices'>
                    {this.state.devices ? this.state.devices.map((device)=>(
                        <DeviceListItem device={device} clickHandler={this.onItemSelected} key={device.id} />
                    )) : null}
                    </div>
                    <div className='link-page'>
                        <Link to='link'>
                        LINK PAGE
                        </Link>
                    </div>
                </div>
                <div className='details'>
                    {this.state.selectedDevice? 
                    <DeviceDetails device={this.state.selectedDevice} submitHandler={this.handleInfoChange} key={this.state.selectedDevice.id} />
                    :null}
                </div>
            </div>
        )
    }
}

export default withRouter(InfoPage);