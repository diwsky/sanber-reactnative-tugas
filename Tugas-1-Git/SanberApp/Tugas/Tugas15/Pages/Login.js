import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default function Login({navigation}) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Text style={{fontSize: 18}}>Welcome, please Login</Text>
      <Button
        title={`Click here to login!`}
        fontSize={30}
        onPress={() =>
          navigation.navigate('MyDrawer', {
            screen: 'MainApp',
            params: {
              screen: 'AboutScreen',
            },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
