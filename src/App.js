import './App.css';
import MainPage from './pages/main-page/main-page.component'
import SignInPage from './pages/sign-in-page/sign-in-page.component'
import {HashRouter, Route, Switch} from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument, addDeviceToUser } from './firebase/firebase.functions'
import React from 'react'
import LinkPage from './pages/link-page/link-page.component';
import InfoPage from './pages/info-page/info-page.component';


class App extends React.Component {

  unsubscribeFromAuth = null;

  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        console.log("userAuth: ", userAuth);
        const userRef = await createUserProfileDocument(userAuth);
        const deviceRef = await addDeviceToUser();
        userRef.onSnapshot(snapShot => {

          this.setState({currentUser: 
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
          ,()=>(console.log("currentUser: ",this.state.currentUser)));
        });
      }
      this.setState({currentUser: userAuth});
    });
  }
  
  componentWillUnmount(){
    this.setState({currentUser: null})
    this.unsubscribeFromAuth();
    auth.signOut();
  }


  render(){
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/signin' component={SignInPage} />
          <Route path='/info' component={InfoPage} />
          <Route path='/link' component={LinkPage}/>
          <Route path='/' component={MainPage} />
        </Switch>
      </HashRouter>
    </div>
  );}
}

export default App;
