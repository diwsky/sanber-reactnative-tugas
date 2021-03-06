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
import 'react-native-gesture-handler';

import Index from './Tugas/Tugas15/index';
import RestApis from './Tugas/Tugas14/restapi';
import Quiz from './Quiz3/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        {/* <Index></Index> */}
        {/* <RestApis></RestApis> */}
        <Quiz></Quiz>
      </SafeAreaView>
    </>
  );
};

export default App;
