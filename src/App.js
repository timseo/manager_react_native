import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
      const config = {
        apiKey: 'AIzaSyANgjinDH1sEMlzGIT1FmPa834Ed_zbnWE',
        authDomain: 'manager-ede60.firebaseapp.com',
        databaseURL: 'https://manager-ede60.firebaseio.com',
        projectId: 'manager-ede60',
        storageBucket: '',
        messagingSenderId: '804294815215'
      };
      firebase.initializeApp(config);
        }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}


export default App;
