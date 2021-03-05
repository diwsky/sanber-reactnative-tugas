import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {styles} from './style';

const restapi = () => {
  const [id, setId] = useState('');
  const [key, setKey] = useState('');
  const [val, setVal] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setbutton] = useState('Submit');
  const [selectedNews, setselectedNews] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://achmadhilmy-sanbercode.my.id/api/v1/news')
      .then((res) => {
        console.log('Data didapat:', res.data.data);
        setUsers(res.data.data);
      })
      .catch((e) => {
        console.log('Error: ', e);
      });
  };

  const deleteUser = (item) => {
    axios
      .delete(`https://achmadhilmy-sanbercode.my.id/api/v1/news/${item.id}`)
      .then((res) => {
        getData();
        console.log(`after delete!`);
      });
  };
  const submit = () => {
    const data = {
      title: key,
      value: val,
    };
    if (button === 'Update') {
      axios
        .put('https://achmadhilmy-sanbercode.my.id/api/v1/news', data)
        .then((res) => {
          console.log(`setelah update: ${res}`);
          setId('');
          setKey('');
          setVal('');
          getData();
          setbutton('Submit');
        })
        .catch((e) => {
          console.log(`Error update: ${e}`);
        });
    } else {
      axios
        .post(
          `https://achmadhilmy-sanbercode.my.id/api/v1/news/${selectedNews.id}`,
          data,
        )
        .then((res) => {
          setKey('');
          setVal('');
          console.log('Resp data: ', res);
        })
        .catch((e) => {
          console.log(`Errrorr r: ${e}`);
        });
    }
  };

  const edit = (item) => {
    setId(item.id);
    setKey(item.title);
    setVal(item.value);
    setbutton('Update');
    setselectedNews(item);
  };

  const renderItem = ({user}) => {
    console.log('User render item: ' + {user});
    return (
      <View key={user.id} style={styles.boxResult}>
        <TouchableOpacity
          onPress={() => {
            edit(user);
          }}
          style={{marginLeft: 5, padding: 5, backgroundColor: 'white'}}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <View>
          <Text style={{color: 'white'}}> {user.title} </Text>
          <Text style={{color: 'white'}}> {user.value} </Text>
        </View>
        <View style={styles.delete}>
          <TouchableOpacity onPress={() => deleteUser(user)}>
            <Text style={{color: 'yellow'}}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> RestApi</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputText}
          value={key}
          onChangeText={(value) => setKey(value)}></TextInput>
        <TextInput
          style={styles.inputText}
          value={val}
          onChangeText={(value) => setVal(value)}></TextInput>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={{alignSelf: 'center'}} onPress={() => submit()}>
            {button}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerResult}>
        <ScrollView>{users.map((user) => renderItem({user}))}</ScrollView>
      </View>
    </View>
  );
};

export default restapi;
