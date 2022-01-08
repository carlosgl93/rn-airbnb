import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    marginTop: 40,
  },
  titleContainer: {
    padding: '2%',
  },
  imgs: {
    width: '90%',
    aspectRatio: 3 / 2,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  bath: {
    fontSize: 12,
    color: 'grey',
    marginVertical: 5,
  },
  bedrooms: {
    fontSize: 12,
    color: '#5b5b5b',
  },
  discount: {
    fontSize: 16,
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  title: {
    fontSize: 24,
  },
  price: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: '2%',
  },
  perNight: {
    fontSize: 16,
    color: 'black',
  },
  total: { fontSize: 10, color: '#5b5b5b', textDecorationLine: 'underline' },
});
