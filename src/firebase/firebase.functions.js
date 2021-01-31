import firebase, {auth, firestore} from './firebase.utils'
const getUuid = require('uuid-by-string')


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const getDeviceLink = async (deviceInfo) =>{
    if(!deviceInfo) return;
    const deviceId = getUuid(`${(deviceInfo.ua)}`);
    debugger;
    const userDeviceRef = firestore.doc(`smb-devices/${deviceId}`);
    const deviceSnapshot = await userDeviceRef.get();
    if(deviceSnapshot.exists){
        debugger;
        const dat = await deviceSnapshot.data();
        return {
            id: deviceId,
            data: dat,
            reg: userDeviceRef}
    }
    return {
        data: {
        id: 0,
        linkAddress: 'https://blog.logrocket.com/react-hooks-with-firebase-firestore/',
        linkProperties: {}
        }
    };
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

    if(additionalData==null || 
       additionalData.ua == null) return userRef;
    const deviceId = getUuid(`${(additionalData.ua)}`);
    
    const userDeviceRef = firestore.doc(`smb-devices/${deviceId}`);
    const deviceSnapshot = await userDeviceRef.get();
    if(!deviceSnapshot.exists)
    {
        const {email} = userAuth;
        const ownerId = userAuth.uid;
        const firstAccessedAt = new Date();
        const internalLink = false;
        const linkAddress = 'https://www.parangelmata.com/plans-pricing';
        const linkProperties = {};
        const deviceInfo = additionalData;

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
    }

    return userRef;

}