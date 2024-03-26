import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
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
  brandContainer: {
    marginBottom: 25,
  },
  brandItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8, // Adjust padding to make the box shorter
    marginRight: 21,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  logoContainer: {
    alignItems: 'center',
  },
  brandLogo: {
    width: 45,
    height: 40,
  },
  brandName: {
    fontFamily: 'JotiOne-Regular',
    color: 'black',
    fontSize: 12,
    textAlign: 'center', // Center text horizontally
    marginTop: 5, // Adjust the spacing between the logo and the name
    maxWidth: 60, // Limit the width to prevent overflowing
  },
  
  brandHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10
  },
  brandHeaderText: {
    color: 'black',
    fontFamily: 'JotiOne-Regular',
    fontSize: 18,
  },
  seeAllText: {
    color: '#464444',
    fontFamily: 'JotiOne-Regular',
    fontSize: 12,
    marginRight: 10
  },

  carItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Wrap items to next row when they don't fit in the current row
    justifyContent: 'space-between', // Space between items
    paddingHorizontal: 10, // Add padding horizontally
  },
  carItemContainer: {
    width: '48%', // Set width to half of the container width (2 cars in a row)
    marginBottom: 10, // Add margin to separate rows
  },
});
