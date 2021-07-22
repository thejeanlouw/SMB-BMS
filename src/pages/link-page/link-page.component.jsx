import React from 'react'
import {getDeviceLink} from '../../firebase/firebase.functions'
import './link-page.styles.scss'

export default class LinkPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            device: null
        }
    }

    getLinkFromFireStore = async () =>
    {
        const deviceData = await getDeviceLink(this.getChangeFromFireStore);
        this.setState({device: deviceData});
    }

    getChangeFromFireStore = async (change) =>
    {
        this.setState({device: {
            data: change.data(),
            id: change.id}});
    }

    componentDidMount= async () =>{
        this.getLinkFromFireStore();
    }

    render(){
        const {device} = this.state;
        let linkAddress = '';
        if((device!=null) && (device.data!=null) && (device.data.linkAddress!=null)) {
            linkAddress = device.data.linkAddress;
            console.log("link address: ", linkAddress, `${linkAddress}`)
            return (
                <div className='iframe'>
                    <iframe className='frame' id={device.id} url={linkAddress} src={linkAddress}
                    title=""
                    width="100%"
                    height="100%"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    /> 
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
