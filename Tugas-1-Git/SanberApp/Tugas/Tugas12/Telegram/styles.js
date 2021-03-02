import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Header: {
    height: 50,
    marginTop: 30,
    backgroundColor: '#517DA2',
    justifyContent: 'center',
  },
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Subheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  SubContentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AvatarDrawer: {
    height: 12,
    width: 18,
  },
  TitleName: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 20,
  },
  MessageContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 27,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: 'space-between',
  },
  NameMessages: {
    paddingLeft: 15,
    backgroundColor:'red'
  },
  AvatarPen: {
    height: 18,
    width: 18,
  },
  AddChat: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#4EA4EA',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

export {styles};
