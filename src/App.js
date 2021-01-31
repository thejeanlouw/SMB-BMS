import './App.css';
import MainPage from './pages/main-page/main-page.component'
import SignInPage from './pages/sign-in-page/sign-in-page.component'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {deviceDetect} from 'react-device-detect'
import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.functions'
import React from 'react'
import LinkPage from './pages/link-page/link-page.component';


class App extends React.Component {

  unsubscribeFromAuth = null;

  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount(){
    const deviceInfo = deviceDetect();
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth, deviceInfo);
        console.log("userAuth: ", userAuth);
        userRef.onSnapshot(snapShot => {

          this.setState({currentUser: 
            {
              id: snapShot.id,
              ...snapShot.data
            },
            device: deviceInfo
          }
          ,()=>(console.log("currentUser: ",this.state.currentUser)));
        });
      }
      this.setState({currentUser: userAuth});
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
  return (
    <div className="App">
      <Switch>
          <Route path='/sign-in' component={SignInPage} />
          <Route path='/info-page' component={MainPage} />
          <Route path='/link-page' component={LinkPage}/>
          <Route path='/' component={MainPage} />
        </Switch>
    </div>
  );}
}

export default App;
