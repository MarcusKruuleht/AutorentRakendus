import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    height: 98.29,
    backgroundColor: colors.beige,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 55,
  },
  home: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },
  location: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  profile: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'JotiOne-Regular', 
    fontSize: 20,
  },
});
