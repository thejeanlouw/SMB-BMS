import React, { Component } from 'react'
import {getUserDeviceList} from '../../firebase/firebase.functions'
import {withRouter} from 'react-router-dom'
import DeviceListItem from '../../components/device-list-item/device-list-item.component';

class InfoPage extends Component {

    state = {
        devices: null
    }

    componentDidMount(){
        getUserDeviceList(null).then((val)=>{
            const deviceList = val;
            if(!deviceList){
                this.props.history.push('sign-in');
            } else {
            this.setState({devices: deviceList});
            }
        });
    }

    onListChange = async (newList) =>{
        debugger;
        if(newList){
        this.setState({devices:newList});}
    }

    render() {
        return (
            <div className='info-page'>
                <div className='device-list'>
                    {this.state.devices ? this.state.devices.map((device)=>(
                        <DeviceListItem device={device}/>
                    )) : null}
                </div>
            </div>
        )
    }
}

export default withRouter(InfoPage);