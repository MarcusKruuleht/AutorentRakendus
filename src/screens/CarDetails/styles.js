import { StyleSheet, Dimensions } from 'react-native'
import { colors } from "../../utils/colors"
const {height} = Dimensions.get('window')

export const styles= StyleSheet.create({
    image: {
        width: 275,
        height: 354,
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        marginTop: 1,
        paddingHorizontal: 1
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8
    },
    description: {
        color: colors.textGrey,
        fontWeight: '300',
        marginVertical: 8
    },
    container: {
        flex: 1,
        backgroundColor: colors.grey,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        marginBottom: 29, // Add margin to separate rows
        backgroundColor: colors.white,
        marginLeft: 11,
        marginRight: 20,
        padding: 8, // Add padding to ensure the white background is visible
        borderRadius: 5, // Add borderRadius for rounded corners
        alignSelf: 'flex-start',
        alignItems: 'center',
        fontFamily: 'JotiOne-Regular',
    },
    centerBoxes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    infoText: {
        color:colors.white,
        fontFamily: 'JotiOne-Regular',
        fontSize: 25,
        marginLeft: 11,
    },
    fontText: {
        color: colors.textGrey,
        fontFamily: 'JotiOne-Regular',
        fontSize: 15,
    },
    carName: {
        color:colors.black,
        fontFamily: 'JotiOne-Regular',
        fontSize: 25,
        marginLeft: 27,
        marginBottom: 40
    },
    textLight: {
        color:colors.textGrey,
        fontFamily: 'JotiOne-Regular',
        fontSize: 15,
        marginBottom: 4
    },
    textDark: {
        color:colors.black,
        fontFamily: 'JotiOne-Regular',
        fontSize: 18
    },
    rentBox: {
        borderRadius: 20,
        marginRight: 19,
        marginBottom: 10,
        alignItems: 'flex-end',
        padding: 15,
        color: colors.white,
        fontFamily: 'JotiOne-Regular',
        fontSize: 25,
        backgroundColor: colors.black,
    }
})