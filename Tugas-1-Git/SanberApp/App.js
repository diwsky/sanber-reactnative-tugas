/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './Tugas/Tugas13/Login/Login';
import Profile from './Tugas/Tugas13/Profile/Profile';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Login></Login> */}
      <Login></Login>
    </>
  );
};

export default App;
