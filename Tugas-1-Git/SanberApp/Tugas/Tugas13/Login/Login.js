import React from 'react';
import {Text, Image, TextInput, View, TouchableOpacity} from 'react-native';
import {styles} from './Style';
import MainText from '../Component/MainText';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../asset/LOGO.png')}></Image>
      <View style={styles.mainColumn}>
        <View style={{alignItems: 'center'}}>
          <MainText>
            <Text style={styles.loginText}>Login</Text>
          </MainText>
        </View>

        <View style={styles.boxLogin}>
          <View>
            <MainText>
              <Text style={styles.emailText}>E-mail/Username</Text>
            </MainText>
            <TextInput style={styles.input}></TextInput>
          </View>

          <View>
            <MainText>
              <Text style={styles.emailText}>Password</Text>
            </MainText>
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonSignin}
            onPress={() => navigateToProfile()}>
            <MainText>
              <Text style={{fontWeight: 'bold'}}>Sign in</Text>
            </MainText>
          </TouchableOpacity>
        </View>

        <View style={styles.registerArea}>
          <MainText>
            <Text style={styles.emailText}>Have no account yet?</Text>
            <Text style={styles.registerText}> Register</Text>
          </MainText>
        </View>
      </View>
    </View>
  );
};

export default Login;
