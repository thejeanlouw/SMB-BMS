import rcc, { deviceDetect, getUA} from 'react-device-detect'

import getUuid from 'uuid-by-string'

const device = async () => {


    var dev = await deviceDetect();

    const geoUpdate = (upd) => {
        dev.geolocation = JSON.stringify(upd);
    }
    
    var ua = getUA;
    try{
    dev.battery = await window.navigator.getBattery();
    dev.battery = JSON.stringify(dev.battery);
    dev.bluetooth = await window.navigator.bluetooth.getAvailability();
    debugger;
    await window.navigator.geolocation.getCurrentPosition(geoUpdate);
    } catch {}
    dev.Uuid = getUuid(ua);
    return {...dev,...rcc};
}



export default device;