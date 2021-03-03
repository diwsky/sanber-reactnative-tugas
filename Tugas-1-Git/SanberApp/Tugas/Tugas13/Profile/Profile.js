import React, {Component} from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import MainText from '../Component/MainText';
import {styles} from './Style';
import ItemProfile from './ItemProfile/ItemProfile';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../asset/burger.png')}></Image>
          <Image source={require('../asset/settings.png')}></Image>
        </View>

        <View style={styles.content}>
          <View style={styles.textHeader}>
            <MainText>
              <Text style={styles.headerText}>Your Profile</Text>
            </MainText>
          </View>

          <View style={styles.body}>
            <View style={styles.profPic}>
              <Image
                style={{borderRadius: 75, height: 150, width: 150}}
                source={require('../asset/pp.jpg')}></Image>
            </View>

            <MainText>
              <Text style={styles.fontStyle}>Portofolio</Text>
            </MainText>

            <View style={styles.porto}>
              <ItemProfile
                imageUri={require('../asset/github.png')}
                text={`@diwsky`}
              />
              <ItemProfile
                imageUri={require('../asset/gitlab.png')}
                text={`@diwang270`}
              />

              <ItemProfile
                imageUri={require('../asset/maven.png')}
                text={'Diwang'}></ItemProfile>
            </View>

            <MainText>
              <Text style={styles.fontStyle}>Social Media</Text>
            </MainText>
            <View style={styles.porto}>
              <ItemProfile
                imageUri={require('../asset/facebook.png')}
                text={`Diwangkoro`}></ItemProfile>
              <ItemProfile
                imageUri={require('../asset/twitter.png')}
                text="@wankero"></ItemProfile>
              <ItemProfile
                imageUri={require('../asset/steam.png')}
                text={`Serperone`}></ItemProfile>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
