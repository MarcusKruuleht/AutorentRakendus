import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 40
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 7
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontFamily: 'JotiOne-Regular',
    fontSize: 18
  },
});
