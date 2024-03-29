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
    paddingLeft: 10
  },
  brandItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8, // Adjust padding to make the box shorter
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 5,
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
    marginTop: 2, // Adjust the spacing between the logo and the name
    maxWidth: 60, // Limit the width to prevent overflowing
    marginLeft: 5,
  },
  selectedBrandName: {
    textDecorationLine: 'underline',
     // Underline style for selected brand name
  },
  
  brandHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
  },
  brandHeaderText: {
    color: 'black',
    fontFamily: 'JotiOne-Regular',
    fontSize: 18,
    marginTop: 4
  },
  seeAllText: {
    color: '#464444',
    fontFamily: 'JotiOne-Regular',
    fontSize: 12,
    marginRight: 10,
    marginTop: 4
  },

  carItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Wrap items to next row when they don't fit in the current row
    justifyContent: 'space-between', // Space between items
    paddingHorizontal: 10,
  },
  carItemContainer: {
    width: '50%', // Set width to half of the container width (2 cars in a row)
    marginBottom: 29, // Add margin to separate rows
  },
  scrollViewContentContainer: {
    paddingRight: 10, // Adjust this value as needed
  },
});
