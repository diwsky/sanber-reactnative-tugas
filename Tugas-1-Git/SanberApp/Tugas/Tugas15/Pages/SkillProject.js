import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function SkillProject({navigation, route}) {
  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);
  return (
    <View style={styles.container}>
      <Text>SkillProject</Text>
      <Button
        onPress={() =>
          navigation.navigate('HomeScreen', {
            contohParam: 'Dari belakang 1',
            yangLain: 'Dari belakang 2',
          })
        }
        title="Ke settings!"></Button>

      <Text>Hasil dari depan nih:</Text>
      <Text>Post: {route.params?.post}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
