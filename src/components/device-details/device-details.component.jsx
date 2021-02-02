import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './device-details.styles.scss'

export default class DeviceDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            deviceInfo: this.props.device
        }
    }   

    handleChange = async event =>{
        const {name, value} = event.target;
        const deviceInfoChange = this.state.deviceInfo;
        deviceInfoChange.data[name] = value;
        this.setState({deviceInfo:deviceInfoChange});
    }

    handleSubmit = async event =>{
        event.preventDefault();
        if (this.props.submitHandler){
            this.props.submitHandler(this.state.deviceInfo);
        }
    }

    render() {
        const {linkAddress, displayName} = this.state.deviceInfo.data;
        if(this.state.deviceInfo?.data?.deviceInfo)
        {
            const {vendor, os, osVersion, model} = this.state.deviceInfo.data.deviceInfo;
            return (
                <div className='device-info'>
                    <span className='header'>Device Info:</span>
                    <div className='all-details'>
                        <div className='details-group'>
                            <span className='detailName'>Vendor</span>
                            <span className='detail-value'>{vendor}</span>
                        </div>
                        <div className='details-group'>
                            <span className='detailName'>OS</span>
                            <span className='detail-value'>{os}</span>
                        </div>
                        <div className='details-group'>
                            <span className='detailName'>OS Version</span>
                            <span className='detail-value'>{osVersion}</span>
                        </div>
                        <div className='details-group'>
                            <span className='detailName'>Model</span>
                            <span className='detail-value'>{model}</span>
                        </div>
                    </div>
                    <form className='device-changes' onSubmit={this.handleSubmit}>
                        <FormInput value={displayName} name='displayName' handleChange={this.handleChange} label='Display Name' />
                        <FormInput value={linkAddress} name='linkAddress' handleChange={this.handleChange} label='Link Address' />
                        <CustomButton type='submit'>Submit</CustomButton>
                    </form>
                </div>
            )
        } else return null;
    }
}
