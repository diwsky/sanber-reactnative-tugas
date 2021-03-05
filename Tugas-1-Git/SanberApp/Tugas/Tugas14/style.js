import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
  },
  inputBox: {
    margin: 20,
    backgroundColor: '#F8F290',
    width: '80%',
    height: '40%',
    borderRadius: 25,
    justifyContent: 'space-around',
    padding: 30,
  },
  inputText: {
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
  },
  submitButton: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 8,
  },
  boxResult: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 7,
    margin: 5,
    width: '80%',
    flexDirection: 'row',
  },
  containerResult: {
    justifyContent: 'space-around',
    padding: 5,
    height: '50%',
    width: '80%',
  },
  delete: {
    alignItems: 'flex-start',
  },
});

export {styles};