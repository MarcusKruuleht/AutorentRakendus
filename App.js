import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/Splash'; // Import the Splash screen
import HomeScreen from './src/screens/Home'; // Import the Home screen
import CarDetails from './src/screens/CarDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
