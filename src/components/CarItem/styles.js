import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginLeft: 17,
        padding: 1, // Add padding to ensure the white background is visible
        borderRadius: 5, // Add borderRadius for rounded corners
        width: 150, // Adjust the width of the container as needed
        
    },
    model: {
        color: colors.grey,
        fontSize: 18,
        fontFamily: 'JotiOne-Regular',
        marginBottom: -8,
        marginLeft: 4
    },
    image: {
        width: 110,
        height: 140,
        marginLeft: 16,
        marginBottom: 7,
        marginTop: -13
    },
    brand: {
        color: colors.black,
        fontSize: 18,
        marginTop: 1,
        fontFamily: 'JotiOne-Regular',
        marginLeft: 4
    },
    price: {
        color: colors.black,
        fontSize: 25,
        fontFamily: 'JotiOne-Regular',
        marginLeft: 4
    },
});
