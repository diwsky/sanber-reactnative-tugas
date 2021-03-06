import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Data} from './data';
export default function Home({route, navigation}) {
  const {username} = route.params;
  const [totalPrice, setTotalPrice] = useState(0);

  const currencyFormat = (num) => {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  const updateHarga = (price) => {
    // console.log("UpdatPrice : " + price);
    const temp = Number(price) + totalPrice;
    // console.log(temp)
    setTotalPrice(temp);

    //? #Bonus (10 poin) -- HomeScreen.js --
    //? agar harga dapat update misal di tambah lebih dari 1 item atau lebih -->
  };

  const barang = ({item}) => {
    return (
      <View style={styles.boxItem}>
        <Text>{item.type}</Text>
        <View
          style={{
            width: 100,
            height: 100,
          }}>
          <Image style={styles.image} source={item.image}></Image>
        </View>
        <Text>{currencyFormat(parseInt(item.harga))}</Text>
        <Text>{item.title}</Text>
        <TouchableOpacity
          style={styles.buttonBuy}
          onPress={() => {
            updateHarga(item.harga);
          }}>
          <Text style={{color: 'white'}}>BELI</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
        }}>
        <View>
          <Text>Selamat Datang,</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{username}</Text>
        </View>
        <View>
          <Text>Total Harga:</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {' '}
            {currencyFormat(totalPrice)}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 20,
          paddingBottom: 10,
          flex: 1,
        }}>
        {/* //? #Soal No 2 (15 poin) -- Home.js -- Function Home
            //? Buatlah 1 komponen FlatList dengan input berasal dari data.js   
            //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal) -->

            //? #Soal No 3 (15 poin) -- HomeScreen.js --
             //? Buatlah styling komponen Flatlist, agar dapat tampil dengan baik di device untuk layouting bebas  --> */}

        <FlatList
          horizontal={false}
          numColumns={2}
          data={Data}
          renderItem={barang}
          keyExtractor={(item) => item.id}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    width: 150,
    height: 220,
    margin: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'grey',
  },
  boxItem: {
    width: 150,
    height: 230,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  buttonBuy: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#2167ff',
    height: 20,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
