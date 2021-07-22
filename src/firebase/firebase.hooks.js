
import firebase, {auth, firestore} from './firebase.utils'
import { useDocumentData } from 'react-firebase-hooks/firestore';
import device from '../data/static/device.data'




export const DeviceDataHook = () => {
    const dev = await device();
    const userDeviceRef = firestore.doc(`smb-devices/${dev.Uuid}`);
    const refData = useDocumentData(
        userDeviceRef,
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    return refData;
}