import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'center',
  },
  description: { color: 'black', fontSize: 16, marginLeft: 7.5 },
  icon: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    borderRadius: 10,
  },
});
