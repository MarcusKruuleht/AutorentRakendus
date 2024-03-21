import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import HomeHeader from '../../components/home_header';
import { styles } from './styles'; // Import styles from styles.js
import { colors } from '../../utils/colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Search Container */}
      <HomeHeader />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Add your main content here */}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Image 1 - Home */}
        <Image
          source={require('../../pictures/home_black.png')}
          style={styles.home}
        />
        {/* Image 2 - Location */}
        <Image
          source={require('../../pictures/location_white.png')}
          style={styles.location}
        />
        {/* Image 3 - Profile */}
        <Image
          source={require('../../pictures/profile_white.png')}
          style={styles.profile}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
