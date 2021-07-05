import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './Navigation';




const Tab = createBottomTabNavigator();


const App = () => {
  return (
   <Navigation {...props}/>
  );
}


export default App;