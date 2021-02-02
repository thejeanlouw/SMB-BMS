import rcc, { deviceDetect, getUA} from 'react-device-detect'

import getUuid from 'uuid-by-string'

const device = async (callback) => {


    var dev = await deviceDetect();

    const geoUpdate = (upd) => {
        dev.geolocation = upd;
    }
    
    var ua = getUA;
    const battery = await window.navigator.getBattery();
    dev.battery = {
        isCharging: battery?.charging,
        timeUntilCharged: battery?.chargingTime,
        batteryLevel: battery?.level,
        timeUntilEmpty: battery?.dischargingTime,
    }
    dev.bluetooth = await window.navigator.bluetooth.getAvailability();
    await window.navigator.geolocation.getCurrentPosition(geoUpdate);
    dev.Uuid = getUuid(ua);
    return {...dev,...rcc};
}



export default device;