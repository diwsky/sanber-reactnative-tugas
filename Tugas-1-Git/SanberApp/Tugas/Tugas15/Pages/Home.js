import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function Home({navigation, route}) {
  const {contohParam, yangLain} = route.params;
  const [postText, setPostText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Home it is</Text>
      <Text>{JSON.stringify(contohParam)}</Text>
      <Text>{contohParam}</Text>
      <Text>{JSON.stringify(yangLain)}</Text>

      <TextInput
        style={{backgroundColor: 'pink', padding: 5}}
        placeholder="Hayo isi..."
        value={postText}
        onChangeText={setPostText}></TextInput>

      <Button
        title="go back"
        onPress={() => {
          navigation.navigate('SkillProject', {post: postText});
        }}></Button>
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
