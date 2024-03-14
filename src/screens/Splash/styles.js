import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        height: '100%',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '47.2%',
        marginBottom: 53
    },
    titleContainer: {
        marginVertical: 54,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: 'JotiOne-Regular',
        color: '#ffffff',
        fontSize: 45,
        textAlign: 'left',
    },
    innerTitle: {
        color: '#FCA43D',
        textDecorationLine: 'underline',
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'left',
    },
    footerText: {
        color: '#4F63AC',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 30
    },
    customText: {
        fontFamily: 'JotiOne-Regular',
        fontSize: 17,
        color: '#ffffff'
    }
})