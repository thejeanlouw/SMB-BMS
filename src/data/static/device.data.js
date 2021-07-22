import rcc, { deviceDetect, getUA} from 'react-device-detect'

import getUuid from 'uuid-by-string'

const device = async (callback) => {

    var dev = await deviceDetect();
    var ua = getUA;
    dev.ua = ua;
    try{
        const battery = await window.navigator.getBattery();

        dev.battery = {
            isCharging: battery?.charging,
            timeUntilCharged: battery?.chargingTime,
            batteryLevel: battery?.level,
            timeUntilEmpty: battery?.dischargingTime,
        }
    } catch {
        console.error('COULD NOT GET BATTERY INFO');
    }
    try{
        dev.bluetooth = await window.navigator.bluetooth.getAvailability();
    } catch {
        console.error('COULD NOT GET BLUETOOTH INFO');
    }
    dev.Uuid = getUuid(ua);
    return {...dev,...rcc};
}



export default device;