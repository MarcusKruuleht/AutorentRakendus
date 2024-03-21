import React from "react";
import { View, Text, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import { styles } from "./styles";

const Splash = () => {
    const navigation = useNavigation(); // Access the navigation object

    // Function to handle navigation to the Home screen
    const navigateToHome = () => {
        navigation.navigate('Home'); // Navigate to the Home screen
    };

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#c9c9c9', '#383838']}>
             <View style={styles.container}>
                 <View style={styles.titleContainer}>
                     <Text style={styles.title}>Romuauto</Text>
                     <Text style={styles.title}>rentimine</Text>
                     <Text style={styles.customText}>Haara rooli ja seikle teel - rendi endale</Text>
                     <Text style={styles.customText}>autentne romuauto!</Text>
                 </View>

                <Image resizeMode="contain" style={styles.image} source={require('../../pictures/vw_golf.png')}/>

                {/* OnPress event to navigate to the Home screen */}
                <Button title="Alusta!" onPress={navigateToHome} />

            </View>
        </LinearGradient>
    );
}

export default Splash;
