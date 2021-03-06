import React from 'react';
import {View, Text} from 'react-native';

// 0. import all libraries!
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// 1. import all possible routes/pages!
import HomeScreen from '../Pages/Home';
import AboutScreen from '../Pages/AboutScreen';
import AddScreen from '../Pages/AddScreen';
import LoginScreen from '../Pages/Login';
import ProjectScreen from '../Pages/ProjectScreen';
import Setting from '../Pages/Setting';
import SkillProject from '../Pages/SkillProject';

// 2. declare all the libraries for the routings
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="MainApp" component={MainApp}></Stack.Screen>
        <Stack.Screen name="MyDrawer" component={MyDrawer}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SkillProject" component={SkillProject} />
      <Tab.Screen name="AddScreen" component={AddScreen} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="ProjectScreen" component={ProjectScreen} />
    </Tab.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainApp" component={MainApp} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
    </Drawer.Navigator>
  );
};
