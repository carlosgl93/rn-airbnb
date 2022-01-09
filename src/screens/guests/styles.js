import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  leftBox: {
    marginHorizontal: 15,
  },
  ageGroup: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  ageExplained: {
    justifyContent: 'center',
    fontSize: 12,
    color: 'lightgrey',
  },
  rightBox: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  icons: {
    marginHorizontal: 15,
    color: 'lightgrey',
  },
});
