import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Tugas/Tugas13/Login/Login';
import Profile from './Tugas/Tugas13/Profile/Profile';

const AppStack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: true}}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Profile" component={Profile} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
