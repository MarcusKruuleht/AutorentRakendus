import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import HomeHeader from '../../components/home_header';
import brands from '../../data/brands'; // Adjust the import path as needed
import CarItem from '../../components/CarItem';
import { cars } from '../../data/cars';

import { styles } from './styles'; // Import styles from styles.js

const Home = () => {
  // Rendering function for each brand
  const renderBrandItem = (brand, index) => {
    let customStyle = {};
  
    return (
      <View style={styles.brandContainer} key={brand.id}>
        <View style={[styles.brandItem, customStyle]}>
          <View style={styles.logoContainer}>
            <Image source={brand.logo} style={styles.brandLogo} resizeMode="contain" />
          </View>
        </View>
        <Text style={styles.brandName}>{brand.name}</Text>
      </View>
    );
  };

  // Rendering function for each car
  const renderCarItem = (car) => {
    return (
      <View style={styles.carItemContainer} key={car.id}>
        <CarItem
          model={car.model}
          brand={car.brand}
          image={car.image}
          price={car.price}
          onPress={() => console.log('Car pressed:', car.model)}
        />
      </View>
    );
  };

  const handleSeeAllPress = () => {
    // Add your logic here
    console.log('Vaata kõiki clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* HomeHeader Component */}
        <HomeHeader />

        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.brandHeaderContainer}>
            <Text style={styles.brandHeaderText}>Brändid</Text>
            <TouchableOpacity onPress={handleSeeAllPress}>
              <Text style={styles.seeAllText}>Vaata kõiki</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.scrollViewContentContainer}
          >
            {brands.map((brand, index) => renderBrandItem(brand, index))}
          </ScrollView>

          {/* Car Items */}
          <View style={styles.carItemsContainer}>
            {cars.map((car) => renderCarItem(car))}
          </View>
        </View>
      </ScrollView>

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
