import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles';
import {Data} from '../dummy';

export default function Telegram() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subheader}>
          <View style={styles.subcontentHeader}>
            <Image
              style={styles.avatarDrawer}
              source={require('../asset/drawwer.png')}
            />
            <Text style={styles.TitleName}>Telegram</Text>
          </View>
          <View>
            <Image
              style={styles.avatarDrawer}
              source={require('../asset/search.png')}
            />
          </View>
        </View>
      </View>

      <View style={{height: '100%'}}>
        <SafeAreaView>
          <FlatList
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <>
                  <TouchableOpacity style={styles.MessageContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{height: 50, width: 50, borderRadius: 25}}
                        source={item.image}></Image>
                      <View style={styles.NameMessages}>
                        <Text>{item.name}</Text>
                        <Text>{item.message}</Text>
                      </View>
                    </View>
                    <View
                      style={{backgroundColor: 'green', alignItems: 'center'}}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={require('../asset/check.png')}
                          style={{height: 8, width: 12, marginRight: 5}}
                        />
                        <Text>{item.time}</Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: '#4ECC5E',
                          height: 24,
                          width: 24,
                          borderRadius: 12,
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'white', marginTop: 5}}>
                          {item.totalMessage}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#A8AAAB',
                    }}></View>
                </>
              );
            }}
          />
        </SafeAreaView>

        <TouchableOpacity style={{paddingRight: 24, marginTop: 20}}>
          <View style={styles.AddChat}>
            <Image
              source={require('../asset/pencil.png')}
              style={styles.AvatarPen}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
