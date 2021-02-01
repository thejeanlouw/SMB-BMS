import firebase, {auth, firestore} from './firebase.utils'
import device from '../data/static/device.data'

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addDeviceToUser = async () => {

    const dev = await device();
    const currentUser = auth.currentUser;
    if(!currentUser) return;
    if(dev==null || dev.ua == null) return;
    
    debugger;
    const userDeviceRef = firestore.doc(`smb-devices/${dev.Uuid}`);
    const deviceSnapshot = await userDeviceRef.get();

    const {email} = currentUser;
    const ownerId = currentUser.uid;
    const firstAccessedAt = new Date();
    const lastAccessedAt = new Date(); 
    const internalLink = false;
    const linkAddress = 'https://www.parangelmata.com/plans-pricing';
    const linkProperties = {};
    debugger;
    const deviceInfo = dev;

    if(!deviceSnapshot.exists)
    {
        try {
            await userDeviceRef.set({
                email,
                ownerId,
                firstAccessedAt,
                internalLink,
                linkAddress,
                linkProperties,
                deviceInfo
            });
        } catch (error) {
            console.log('ERROR CREATING DEVICE', error.message);
        } 
    } else {
        try {
            await userDeviceRef.update({
                email,
                ownerId,
                lastAccessedAt,
                deviceInfo
            });
        } catch (error) {
            console.log('ERROR UPDATING DEVICE', error.message);
        } 
    }
    return userDeviceRef; 
}

export const getDeviceLink = async (changeHandler) =>{
    const dev = await device();
    if(!dev.Uuid) return;
    const userDeviceRef = firestore.doc(`smb-devices/${dev.Uuid}`);

    const deviceSnapshot = await userDeviceRef.get();

    if(deviceSnapshot.exists){
        if(changeHandler){
            userDeviceRef.onSnapshot({includeMetadataChanges: true},changeHandler)
        }
        const dat = await deviceSnapshot.data();
        return {
            id: dev.Uuid,
            data: dat,
            ref: userDeviceRef}
    } else
    return {
        data: {
        id: 0,
        linkAddress: 'https://thejeanlouw.github.io/super-media-bros',
        linkProperties: {}
        }
    };
}

export const getUserDeviceList = async (changeHandler) => {
    const currentUser = auth.currentUser;
    const myAuth = auth;
    debugger;
    if(!currentUser) return null;
    debugger;
    const deviceListRef = firestore.collection('smb-devices').where('ownerId','==', currentUser.uid);
    const snapShot = await deviceListRef.get();
    const deviceList = [];
    if(!snapShot.empty)
    {
        snapShot.docs.forEach((doc)=>{
            deviceList.push({id:doc.id,uid:doc.uid,...doc.data()});
        });
        if(changeHandler)
        {
            deviceListRef.onSnapshot((change)=>{
                const changeList = [];
                change.docs.forEach((doc)=>{
                    deviceList.push({id:doc.id,uid:doc.uid,...doc.data()});
                });
                changeHandler(changeList);
            })
        }
    }
    return deviceList;
}


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;                                           
    const userRef = firestore.doc(`smb-users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email, phoneNumber} = userAuth;
        const createdAt= new Date();
        const signedAgreements = false;
        const onboardedComplete = false;

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                signedAgreements,
                onboardedComplete,
                ...additionalData
            });
        } catch (error) {
            console.log('ERROR CREATING USER', error.message);
        }
    }

    await addDeviceToUser();
    return userRef;

}