import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    backgroundColor: 'white',
  },
  searchBarContainerStyle: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%',
  },
});
