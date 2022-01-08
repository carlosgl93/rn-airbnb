import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.66,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    maxWidth: '50%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 25,
    alignItems: 'center',
    marginTop: 50,
    width: '50%',
    justifyContent: 'center',
    padding: '2.5%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 40,
    height: 50,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: 'black',
    zIndex: 1,
    elevation: 1000,
    top: 75,
    paddingHorizontal: 70,
    marginHorizontal: 20,
  },
  searchButtonText: {},
  searchIcon: {
    color: 'pink',
  },
});

export default styles;
