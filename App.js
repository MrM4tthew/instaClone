import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login'

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBmonvD00Olsi9xG7oix6IBchTMYR5stxM",
  authDomain: "instagram-clone-18724.firebaseapp.com",
  databaseURL: 'https://instagram-clone-18724.firebaseio.com',
  projectId: "instagram-clone-18724",
  storageBucket: "instagram-clone-18724.appspot.com",
  messagingSenderId: "487478663335",
  appId: "1:487478663335:web:6f8b5b8ddeefb5fb08e382"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


const Stack = createNativeStackNavigator();

function handleLogout() {
  firebase.auth().signOut().then(() => {
    console.log("sign out")
  }).catch((error) => {
    console.log(error)
  });
}
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      )
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>User is logged in!!!</Text>
        <Button onPress={() => handleLogout()} title="Sign out" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
